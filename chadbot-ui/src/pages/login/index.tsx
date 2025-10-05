import React from "react";
import Wrapper from "../../components/Wrapper";
import { useFormUpload } from "../../hooks/useFormUpload";
import Input from "@/components/Input";

const initialLoginData = {
    username: "",
    password: "",
};

const LoginPage = () => {
    const { formData, handleChange, handleSubmit, resetForm, loading, error } = useFormUpload<typeof initialLoginData>(
        initialLoginData,
        (data) => {
            console.log("Login successful:", data);
            alert("Login successful!");
        }
    );

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <Wrapper>
            <div className="bg-white shadow-md rounded-lg p-8 sm:p-12 max-w-md mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="sm:text-sm"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="sm:text-sm"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 text-white font-medium rounded-md ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default LoginPage;