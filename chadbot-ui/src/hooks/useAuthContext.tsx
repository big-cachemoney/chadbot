import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    user: { id: string; name: string; email: string } | null;
    token: string | null;
    login: (userData: { id: string; name: string; email: string }, token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ id: string; name: string; email: string } | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login = (userData: { id: string; name: string; email: string }, token: string) => {
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
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
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