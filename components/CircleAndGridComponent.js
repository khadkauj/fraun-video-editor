import React, { useEffect, useRef } from 'react';

function CircleAndGrid() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  const drawGrid = (ctx, cellSize) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    ctx.strokeStyle = 'white';
    for (let x = 0; x <= width; x += cellSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  const showCircle = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    const ctx = canvas.getContext('2d');

    const drawRandomCircle = () => {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let radius = Math.random() * 20;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'red';
      ctx.fill();
    };

    intervalRef.current = setInterval(drawRandomCircle, 1000);
  };

  const showGrid = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    const ctx = canvas.getContext('2d');
    drawGrid(ctx, 50);
  };

  useEffect(() => {
    const video = videoRef.current;
    const handleMetadataLoaded = () => {
      const canvas = canvasRef.current;
      canvas.width = video.offsetWidth;
      canvas.height = video.offsetHeight;
    };
    video.addEventListener('loadedmetadata', handleMetadataLoaded);

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadataLoaded);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div style={{ marginBottom: '30px'}}>
      <div style={{ width: '100%', position: 'relative' }}>
        <video className='video' ref={videoRef} src="/test.avi" style={{ width: 'auto' }} autoPlay muted />
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={showCircle} style={{ marginRight: '20px' }}>Show Circle</button>
        <button onClick={showGrid}>Show Grid</button>
      </div>
       </div>
  );
}

export default CircleAndGrid;
