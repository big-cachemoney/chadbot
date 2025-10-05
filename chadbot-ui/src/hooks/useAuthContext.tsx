import { User } from "@/models/user";
import { useRouter } from "next/router";
import React, { createContext, useContext, useState, ReactNode, ComponentType, JSX, useEffect } from "react";
import UnauthorizedPage from "@/components/401";
import { client } from "@/utils/axiosInstance";
interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const initializeAuth = async () => {
        setIsLoading(true);
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("authToken");
      // TODO: implement API

        // const res = await client.get('/user', {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // });
        const res = {
            data: {
                username: "test",
                password: "test"
            }
        }
        setUser(res.data);
        setToken("dummy");
        setIsLoading(false);
    };

    useEffect(() => {
        initializeAuth();
    }, []);

    const login = (userData: User, token: string) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        router.push("/")
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};

export const withAuthGuard = <T,>(Component: ComponentType<T>): React.FC<T> => {
    return ({ ...props }) => {
        const { user, isLoading } = useAuthContext()

        // Show loading state while checking authentication
        if (isLoading) {
            return (
                <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-300">Loading...</p>
                    </div>
                </div>
            );
        }

        // Show protected component if authenticated
        if (!!user) {
            return <Component {...(props as T & JSX.IntrinsicAttributes)} />
        } else {
            // Show unauthorized page if not authenticated
            return <UnauthorizedPage />
        }
    }
}