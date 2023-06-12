import React, { useEffect, useRef, useState } from 'react';

const VideoMouseTracker = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const updateCoordinates = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    console.log(event.clientX - rect.left, event.clientY - rect.top);
    setCoordinates({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const animate = () => {
      //   if(video.paused || video.ended) return false;

      requestAnimationFrame(animate);
    };

    video.addEventListener('play', animate);

    return () => {
      video.removeEventListener('play', animate);
    };
  }, []);

  return (
    <div style={{marginBottom:'80px'}} >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <video
        className='video'
          ref={videoRef}
          src="/test.avi"
          style={{ width: '100%', height: '100%' }}
          autoPlay muted
        />
        <canvas
          ref={canvasRef}
          onMouseMove={updateCoordinates}
          style={{ position: 'absolute', top: 0, left: 0, cursor: 'crosshair', width: '100%', height: '100%' }}
        />
      </div>
      <p style={{textAlign:'center'}}>X: {coordinates.x}, Y: {coordinates.y}</p>
    </div>
  );
};

export default VideoMouseTracker;
