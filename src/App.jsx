import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-blue-900 to-indigo-900 relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-1000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-8">
        {/* Header with enhanced styling */}
        <div className="w-full max-w-2xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-75"></div>
            <h1 className="relative bg-white/95 backdrop-blur-sm rounded-xl text-center px-8 py-6 text-5xl md:text-6xl font-black bg-gradient-to-r from-white-600 via-pink-600 to-blue-600 bg-clip-text text-transparent shadow-2xl border border-white/20">
              <span className="block text-sm font-medium text-gray-600 mb-2 tracking-widest uppercase">
                Discover Amazing
              </span>
              RANDOM GIFS
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-blue-400/10 rounded-xl animate-pulse"></div>
            </h1>
          </div>
        </div>

        {/* Content section with improved spacing and container */}
        <div className="flex flex-col w-full max-w-6xl items-center gap-y-12 mt-12">
          {/* Component containers with glass morphism effect */}
          <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full max-w-2xl relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <Random />
              </div>
            </div>
            
            <div className="w-full max-w-2xl relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <Tag />
              </div>
            </div>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="mt-16 flex items-center justify-center space-x-2 opacity-50">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse animation-delay-300"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse animation-delay-600"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}