import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { UserProfile } from '@/models/user';
import { client } from '@/utils/axiosInstance';
import { useAuthContext, withAuthGuard } from '@/hooks/useAuthContext';
const dummyUser = {
    username: "john_doe",
    password: "secure_password_123", // Hidden in UI for security
    height: 175.5, // cm
    weight: 70.2, // kg  
    age: 28, // years
    gender: "male",
    goal: "Build muscle and increase strength",
    personality: "Motivated and disciplined", 
    activityLevel: "moderately active"
  }
const ProfilePage: NextPage = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {token} = useAuthContext()
  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // TODO: implement API
    // const response = await client.get('/user', {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   });
      const response  = {
        data: {
            username: "john_doe",
            password: "secure_password_123", // Hidden in UI for security
            height: 175.5, // cm
            weight: 70.2, // kg  
            age: 28, // years
            gender: "male",
            goal: "Build muscle and increase strength",
            personality: "Motivated and disciplined", 
            activityLevel: "moderately active"
          }
      }
      setUserProfile(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setError('Failed to load user profile');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 mx-auto bg-red-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-4">Error Loading Profile</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={fetchUserProfile}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-300">No profile data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold">Chadbot</h1>
        <div className="border-t border-gray-600 mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="px-6 max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">User Profile</h2>
          <p className="text-gray-300">Your personal information and fitness goals</p>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Basic Information</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
                  <div className="bg-gray-700 px-3 py-2 rounded-lg">
                    {userProfile.username}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Age</label>
                  <div className="bg-gray-700 px-3 py-2 rounded-lg">
                    {userProfile.age} years old
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Gender</label>
                  <div className="bg-gray-700 px-3 py-2 rounded-lg capitalize">
                    {userProfile.gender}
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Physical Information</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Height</label>
                  <div className="bg-gray-700 px-3 py-2 rounded-lg">
                    {userProfile.height} cm
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Weight</label>
                  <div className="bg-gray-700 px-3 py-2 rounded-lg">
                    {userProfile.weight} kg
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Activity Level</label>
                  <div className="bg-gray-700 px-3 py-2 rounded-lg capitalize">
                    {userProfile.activityLevel}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals and Personality */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Fitness Goals</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Goal</label>
                  <div className="bg-gray-700 px-3 py-2 rounded-lg">
                    {userProfile.goal || 'Not specified'}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Personality</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Personality Type</label>
                  <div className="bg-gray-700 px-3 py-2 rounded-lg">
                    {userProfile.personality || 'Not specified'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={fetchUserProfile}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Refresh Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuthGuard(ProfilePage);
