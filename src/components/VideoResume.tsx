import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Download, Share2 } from 'lucide-react';
import { useTheme } from './ThemeContext';

const VideoResume: React.FC = () => {
  const { darkMode } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="video-resume" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-600/20' : 'bg-purple-300/50'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-pink-600/20' : 'bg-pink-300/50'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Video Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          >
            <div className={`w-3 h-3 ${darkMode ? 'bg-blue-400/30' : 'bg-blue-600/40'} rounded-full blur-sm`}></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full mb-6 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Play className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Video Resume
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Watch my story, skills, and journey in this interactive video resume
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            {/* Video Container */}
            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                poster="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              >
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayPause}
                    className="p-6 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30"
                  >
                    <Play className="w-12 h-12 text-white fill-white" />
                  </button>
                </div>
              )}

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={handlePlayPause}
                    className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white fill-white" />
                    )}
                  </button>

                  {/* Progress Bar */}
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #8b5cf6 0%, #ec4899 ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) ${(currentTime / duration) * 100}%)`
                      }}
                    />
                  </div>

                  {/* Time Display */}
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-white'}`}>
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  {/* Volume Control */}
                  <button
                    onClick={handleMute}
                    className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>

                  {/* Fullscreen Button */}
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Mahakpreet Kour - Video Resume
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Full-Stack Developer & AI Enthusiast
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium transition-all duration-300 hover:bg-white/20 border border-white/20">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>

              {/* Video Description */}
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100/50 border border-gray-200'}`}>
                <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  What's in this video:
                </h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Introduction and background
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    Technical skills demonstration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Project showcase and achievements
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Future goals and aspirations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoResume; 