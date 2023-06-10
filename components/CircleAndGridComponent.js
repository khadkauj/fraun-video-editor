import React, { useEffect, useRef } from 'react';

function CircleAndGrid() {

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const intervalRef = useRef(null);
  
    const showCircle = () => {
      console.log("start circle");
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      if (video.readyState >= 1) { // If video metadata is loaded
        // Ensure the canvas is the same size as the video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const ctx = canvas.getContext('2d');
        
        // Function to draw a random circle
        function drawRandomCircle() {
          // Generate random coordinates
          let x = Math.random() * canvas.width;
          let y = Math.random() * canvas.height;
    
          // Generate a random radius
          let radius = Math.random() * 20; // adjust as needed
    
          // Draw the circle
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = 'white'; // adjust as needed
          ctx.fill();
        }
    
        // Draw a random circle every second
        intervalRef.current = setInterval(drawRandomCircle, 1000);
        console.log("start new circle");
      }
    }
  
    function drawGrid(ctx, cellSize) {
      const width = ctx.canvas.width;
      const height = ctx.canvas.height;
    
      // Set line color
      ctx.strokeStyle = 'white'; // adjust as needed
    
      // Draw vertical lines
      for (let x = 0; x <= width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    
      // Draw horizontal lines
      for (let y = 0; y <= height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }
  
    const showGrid = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
    
      if (video.readyState >= 1) { // If video metadata is loaded
        // Ensure the canvas is the same size as the video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    
        drawGrid(ctx, 50); // Call the drawGrid function with cell size 50
      }
    }
    
    useEffect(() => {
      return () => {
        // Cleanup on unmount
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, []);
  
  return (
    <div style={{ position: 'relative' }}>
    <video ref={videoRef} src="/test.avi" style={{ position: 'absolute' }} autoPlay muted />
    <canvas ref={canvasRef} style={{ position: 'absolute' }} />
    <button  style={{position:'fixed', top:"640px", left:"320px", padding:"14px"}} onClick={showCircle}> Show Circle</button>
    <button style={{position:'fixed', top:"640px", left:"128px", padding:"14px"}} onClick={showGrid}> Show Grid</button>

  </div>
  )
}

export default CircleAndGrid