import React, { useRef, useState } from 'react';

const VideoAsGif = ({ src }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div style={{ display: 'flex',justifyContent:"center" }}>
      <video
        ref={videoRef}
        src={src}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedMetadata={handleVideoLoaded}
        style={{
          width: '100%',
          maxWidth:"50%",
          height: 'auto',
          display: isVideoLoaded ? 'block' : 'none',
        }}
      />
      {!isVideoLoaded && (
        <img
          src={src}
          alt="Video poster"
          style={{ width: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
};

export default VideoAsGif;
