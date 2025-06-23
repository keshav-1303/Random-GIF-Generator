import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-full max-w-md mx-auto relative group'>
      {/* Animated border gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 bg-[length:200%_200%] animate-[gradient-x_3s_ease_infinite]"></div>
      
      {/* Main container */}
      <div className='relative bg-white/95 backdrop-blur-sm rounded-xl border border-white/30 shadow-2xl overflow-hidden'>
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-6 py-4">
          <h1 className='text-2xl font-black text-white text-center tracking-wider drop-shadow-lg'>
            🎲 RANDOM GIF
          </h1>
          <div className="h-1 bg-white/30 rounded-full mt-2 mx-auto w-16"></div>
        </div>

        {/* Content area */}
        <div className="p-6 flex flex-col items-center gap-6">
          {/* GIF display area */}
          <div className="relative w-full aspect-square max-w-sm bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-inner border border-gray-300/50">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
                <Spinner/>
              </div>
            ) : (
              <div className="relative group/image h-full">
                <img 
                  src={gif} 
                  alt="Random GIF" 
                  className="w-full h-full object-cover transition-transform duration-500" 
                />
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
              </div>
            )}
            
            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-emerald-400 rounded-tl-lg opacity-60"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-emerald-400 rounded-tr-lg opacity-60"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-emerald-400 rounded-bl-lg opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-emerald-400 rounded-br-lg opacity-60"></div>
          </div>

          {/* Generate button */}
          <button 
            onClick={() => fetchData()}
            disabled={loading}
            className="relative w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed group/btn overflow-hidden"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
            
            <span className="relative flex items-center justify-center gap-2 text-lg tracking-wide">
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  GENERATING...
                </>
              ) : (
                <>
                  <span className="text-xl">🎯</span>
                  GENERATE NEW GIF
                </>
              )}
            </span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/50 via-teal-400/50 to-cyan-400/50 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>

          {/* Fun fact or tip */}
          <div className="text-center text-gray-600 text-sm bg-gray-50 rounded-lg p-3 border border-gray-200">
            <span className="font-medium">💡 Pro Tip:</span> Each click brings you a completely random GIF from GIPHY's vast collection!
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
      </div>

      {/* Custom animations using Tailwind's arbitrary value support */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

export default Random