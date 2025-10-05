import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";

const Header: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, logout, isAuthenticated } = useAuthContext();
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-lg font-bold">ChadBot</h1>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                        <a href="/" className="text-sm font-medium hover:text-gray-200">
                            Home
                        </a>
                        {!isAuthenticated ? (
                            <>
                                <a href="/login" className="text-sm font-medium hover:text-gray-200">
                                    Login
                                </a>
                                <a href="/register" className="text-sm font-medium hover:text-gray-200">
                                    Register
                                </a>
                            </>
                        ) : (
                            <>
                                <span className="text-sm font-medium">
                                    Welcome, {user?.username || "User"}
                                </span>
                                <button
                                    onClick={logout}
                                    className="text-sm font-medium hover:text-gray-200"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </nav>
                    <div className="md:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleSidebar}
            ></div>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-4">
                    <button
                        className="text-gray-600 focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="space-y-4 p-4">
                    <a href="/" className="block text-gray-800 font-medium hover:text-blue-600">
                        Home
                    </a>
                    {!isAuthenticated ? (
                        <>
                            <a href="/login" className="block text-gray-800 font-medium hover:text-blue-600">
                                Login
                            </a>
                            <a href="/register" className="block text-gray-800 font-medium hover:text-blue-600">
                                Register
                            </a>
                        </>
                    ) : (
                        <>
                            <span className="block text-gray-800 font-medium">
                                Welcome, {user?.username || "User"}
                            </span>
                            <button
                                onClick={logout}
                                className="block text-gray-800 font-medium hover:text-blue-600"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;