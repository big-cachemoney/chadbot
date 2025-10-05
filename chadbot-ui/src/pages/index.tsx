import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LandingPage: NextPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="px-6 py-16 my-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Your AI Personal
            <br />
            Fitness Trainer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Meet ChadBot - Your intelligent workout companion that creates personalized fitness plans, 
            tracks your progress, and motivates you to achieve your goals.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleRegister}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </button>
            <button
              onClick={handleLogin}
              className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-xl text-lg font-semibold transition-all hover:bg-white/10"
            >
              Sign In
            </button>
          </div>

          {/* Hero Image/Icon with Animation */}
          <div className="flex justify-center mb-16 relative">
            <div className="relative">
              {/* Floating particles */}
              <div className="absolute -top-4 -left-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -top-2 -right-6 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-700"></div>
              
              {/* Main icon with pulse animation */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse hover:animate-spin transition-all duration-1000 hover:scale-110 cursor-pointer">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose ChadBot?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors">AI-Powered Workouts</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Get personalized workout plans tailored to your fitness level, goals, and preferences using advanced AI algorithms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">Progress Tracking</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Monitor your fitness journey with detailed analytics, workout history, and achievement tracking.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-green-300 transition-colors">24/7 Support</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Get instant answers to your fitness questions and motivation whenever you need it, day or night.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            How ChadBot Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:animate-pulse shadow-lg">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors">Sign Up</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Create your account and tell us about your fitness goals</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:animate-pulse shadow-lg">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">Get Your Plan</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Receive a personalized workout plan created by AI</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:animate-pulse shadow-lg">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-green-300 transition-colors">Start Training</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Follow your workouts and track your progress</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:animate-pulse shadow-lg">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-300 transition-colors">Achieve Goals</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Reach your fitness goals with AI-powered guidance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="px-6 py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have already started their fitness journey with ChadBot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRegister}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </button>
            <button
              onClick={handleLogin}
              className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-xl text-lg font-semibold transition-all hover:bg-white/10"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-lg font-semibold">ChadBot</span>
          </div>
          <p className="text-gray-400">
            © 2025 ChadBot. Your AI Personal Fitness Trainer.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;