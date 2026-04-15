import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, AlertCircle } from 'lucide-react';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Animated Icon Section */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center animate-pulse opacity-20">
            <div className="w-32 h-32 bg-[#2d5a5a] rounded-full blur-3xl"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <AlertCircle size={64} className="text-[#2d5a5a]" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-8xl font-black text-[#2d5a5a] tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-800">
            Oops! Page not found
          </h2>
          <p className="text-slate-500 font-medium">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          {/* Previous Page Button */}
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#2d5a5a] border-2 border-[#2d5a5a] rounded-xl font-semibold hover:bg-[#2d5a5a] hover:text-white transition-all duration-300 shadow-sm"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

          {/* Home Page Button */}
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[#2d5a5a] text-white rounded-xl font-semibold hover:bg-[#234646] transition-all duration-300 shadow-md shadow-green-900/10"
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>

        {/* Brand Footer */}
        <div className="pt-12">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            KeenKeeper
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;