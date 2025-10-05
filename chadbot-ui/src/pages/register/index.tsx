import React from "react";
import Wrapper from "../../components/Wrapper";
import { useFormUpload } from "../../hooks/useFormUpload";
import { UserProfile } from "../../models/user";
import Input from "@/components/Input";

const initialUser: UserProfile = {
    username: "",
    password: "",
    weight: 0,
    age: 0,
    height: 0,
    gender: "",
    goal: "",
    personality: "",
    activityLevel: "",
};

const RegisterPage = () => {
    const { formData, handleChange, handleSubmit, resetForm, loading, error } = useFormUpload(
        initialUser,
        (data) => {
            console.log("Registration successful:", data);
            alert("Registration successful!");
        }
    );

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <div className="min-h-screen bg-dark-blue flex items-center justify-center">
            <Wrapper>
                <div className="bg-white shadow-md rounded-lg p-8 sm:p-12 max-w-md mx-auto">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h1>
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
                        <div>
                            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                                Weight (kg)
                            </label>
                            <Input
                                type="number"
                                id="weight"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                className="sm:text-sm"
                                placeholder="Enter your weight"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                Age
                            </label>
                            <Input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="sm:text-sm"
                                placeholder="Enter your age"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                                Height (cm)
                            </label>
                            <Input
                                type="number"
                                id="height"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                className="sm:text-sm"
                                placeholder="Enter your height"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-blue-300 text-blue-600"
                                required
                            >
                                <option value="">Select your gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Nonbinary">Nonbinary</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
                                Goal
                            </label>
                            <Input
                                type="text"
                                id="goal"
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                className="placeholder-blue-300 sm:text-sm w-full h-20 align-text-top"
                                placeholder="Enter your goal (max 100 characters)"
                                maxLength={100}
                            />
                        </div>
                        <div>
                            <label htmlFor="personality" className="block text-sm font-medium text-gray-700">
                                Trainer personality
                            </label>
                            <Input
                                type="text"
                                id="personality"
                                name="personality"
                                value={formData.personality}
                                onChange={handleChange}
                                className="mt-1 block w-full h-20 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-blue-300 text-blue-600 align-text-top"
                                placeholder="Enter your personality (max 50 characters)"
                                maxLength={50}
                            />
                        </div>
                        <div>
                            <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700">
                                Activity Level
                            </label>
                            <select
                                id="activityLevel"
                                name="activityLevel"
                                value={formData.activityLevel}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-blue-300 text-blue-600"
                                required
                            >
                                <option value="">Select your activity level</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-2 px-4 text-white font-medium rounded-md ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                            >
                                {loading ? "Registering..." : "Register"}
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={resetForm}
                            className="w-full mt-2 py-2 px-4 text-gray-700 font-medium rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            Reset
                        </button>
                    </form>
                </div>
            </Wrapper>
        </div>
    );
};

export default RegisterPage;