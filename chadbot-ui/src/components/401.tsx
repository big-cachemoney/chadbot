import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-yellow-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
            </svg>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-bold text-yellow-400 mb-4">401</h1>
        
        {/* Error Title */}
        <h2 className="text-2xl font-semibold mb-4">Unauthorized</h2>
        
        {/* Error Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          The page you're looking for requires user authentication. Please login to continue.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoLogin}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Go to Login
          </button>
          
          <button
            onClick={handleGoBack}
            className="block w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            If you think this is an error, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;