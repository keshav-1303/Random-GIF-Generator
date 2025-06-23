import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('car');
  const {gif, loading, fetchData} = useGif(tag);

  const popularTags = ['cat', 'dog', 'funny', 'dance', 'food', 'space', 'nature', 'anime'];

  const handleTagClick = (selectedTag) => {
    setTag(selectedTag);
    fetchData(selectedTag);
  };

  return (
    <div className='w-full max-w-md mx-auto relative group'>
      {/* Animated border gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-75"></div>
      
      {/* Main container */}
      <div className='relative bg-white/95 backdrop-blur-sm rounded-xl border border-white/30 shadow-2xl overflow-hidden'>
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-4">
          <h1 className='text-2xl font-black text-white text-center tracking-wider drop-shadow-lg'>
            🏷️ RANDOM <span className="bg-white/20 px-2 py-1 rounded-lg uppercase font-mono text-lg">{tag}</span> GIF
          </h1>
          <div className="h-1 bg-white/30 rounded-full mt-2 mx-auto w-20"></div>
        </div>

        {/* Content area */}
        <div className="p-6 flex flex-col items-center gap-6">
          {/* GIF display area */}
          <div className="relative w-full aspect-square max-w-sm bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-inner border border-gray-300/50">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                <Spinner/>
              </div>
            ) : (
              <div className="relative group/image h-full">
                <img 
                  src={gif} 
                  alt={`Random ${tag} GIF`} 
                  className="w-full h-full object-cover transition-transform duration-500" 
                />
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"></div>
                
                {/* Tag badge on image */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  #{tag}
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
              </div>
            )}
            
            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400 rounded-tl-lg opacity-60"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400 rounded-tr-lg opacity-60"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400 rounded-bl-lg opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-pink-400 rounded-br-lg opacity-60"></div>
          </div>

          {/* Search input with enhanced styling */}
          <div className="w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-20"></div>
            <div className="relative">
              <label htmlFor="tag-input" className="sr-only">Enter GIF tag</label>
              <input 
                id="tag-input"
                className='w-full text-lg py-4 px-6 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 text-center font-medium bg-white/90 backdrop-blur-sm transition-all duration-300 placeholder-gray-400 focus:outline-none'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
                placeholder="Enter a tag (e.g., cats, funny, dance)"
                type="text"
                autoComplete="off"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true">
                🔍
              </div>
            </div>
          </div>

          {/* Popular tags */}
          <div className="w-full">
            <p className="text-sm font-medium text-gray-600 mb-3 text-center">Popular tags:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {popularTags.map((popularTag) => (
                <button
                  key={popularTag}
                  onClick={() => handleTagClick(popularTag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    tag === popularTag 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  #{popularTag}
                </button>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <button 
            onClick={() => fetchData(tag)}
            disabled={loading}
            className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 :from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
            
            <span className="relative flex items-center justify-center gap-2 text-lg tracking-wide">
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  SEARCHING...
                </>
              ) : (
                <>
                  <span className="text-xl">🎯</span>
                  GENERATE {tag.toUpperCase()} GIF
                </>
              )}
            </span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>

          {/* Fun fact or tip */}
          <div className="text-center text-gray-600 text-sm bg-gray-50 rounded-lg p-3 border border-gray-200">
            <span className="font-medium">💡 Pro Tip:</span> Try specific terms like "happy dog" or "dancing cat" for better results!
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-2 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}

export default Tag