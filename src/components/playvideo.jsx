import React, { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from "react-icons/fa"; // Importing icons

function VideoComponent() {
  const [isMuted, setIsMuted] = useState(true); // Initially muted
  const [isPaused, setIsPaused] = useState(false); // Initially playing
  const [buttonOpacity, setButtonOpacity] = useState(1); // Opacity for play/pause button
  const videoRef = useRef(null); // Reference to the video element

  // Handle click to toggle mute
  const handleMuteClick = () => {
    setIsMuted(!isMuted);
  };

  // Handle video click to toggle pause/play
  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play(); // Play the video
      setIsPaused(false); // Update the paused state
      setButtonOpacity(1); // Reset opacity when playing
    } else {
      videoRef.current.pause(); // Pause the video
      setIsPaused(true); // Update the paused state
    }
  };

  // Use effect to set opacity to 0 after 3 seconds of pause
  useEffect(() => {
    let timeout;
    if (isPaused) {
      timeout = setTimeout(() => {
        setButtonOpacity(0); // Set opacity to 0 after 3 seconds
      }, 3000);
    }
    return () => clearTimeout(timeout); // Clean up timeout on component unmount or video resume
  }, [isPaused]);

  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <video
        ref={videoRef} // Attach the ref to the video element
        className="project-preview"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onClick={handleVideoClick} // Pause/play video on click
        style={{ width: "100%", height: "auto" }}
      >
        <source
          src={`${process.env.PUBLIC_URL}/afterfeedback.mov`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Mute/Unmute button */}
      <button
        onClick={handleMuteClick}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      {/* Play/Pause button */}
      {isPaused && (
        <button
          onClick={handleVideoClick}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "48px",
            cursor: "pointer",
            opacity: buttonOpacity, // Apply dynamic opacity
            transition: "opacity 0.5s", // Smooth transition
          }}
        >
          <FaPlay />
        </button>
      )}

      {!isPaused && (
        <button
          onClick={handleVideoClick}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "48px",
            cursor: "pointer",
            opacity: buttonOpacity, // Apply dynamic opacity
            transition: "opacity 0.5s", // Smooth transition
          }}
        >
        </button>
      )}
    </div>
  );
}

export default VideoComponent;
