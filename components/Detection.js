import { useEffect, useRef, useState } from "react";

function Detection() {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [detectionData, setDetectionData] = useState([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    fetch('api/load-detection-data').then(response => response.json())
      .then(data => {
        console.log(data)
        setDetectionData(data)
      })
      .catch(error => console.log('Error in fetching API.', error))
  }, [])

  // draw rectangles for each frame
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');



    // ctx.beginPath();
    // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // ctx.stroke();

    if (video && canvas && detectionData.length > 0) {
      // console.log('hihi');
      const frameData = detectionData[currentFrameIndex];
      // console.log(frameData);
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas

      // draw rectangles for current frame
      for (let i = 0; i < frameData.length; i++) {
        const rect = frameData[i];
        // console.log(frameData[i]);
        ctx.beginPath();
        ctx.rect(rect[0], rect[1], rect[2] - rect[0], rect[3] - rect[1]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();
      }
    }
  }, [detectionData, currentFrameIndex]);


  // handle frame rendering
  useEffect(() => {
    const handleFrame = () => {
      setCurrentFrameIndex(prevFrameIndex => (prevFrameIndex + 1) % detectionData.length);
      requestAnimationFrame(handleFrame);
    };

    if (detectionData.length > 0) {
      handleFrame();
    }
  }, [detectionData]);


  // useEffect(() => {
  //   const video = videoRef.current
  //   const canvas = canvasRef.current

  //   if (!video || !canvas) {
  //     return
  //   }

  //   const timeUpdate = (event) => {
  //     console.log('time', event.timeStamp)
  //     const ctx = canvas.getContext('2d')
  //     ctx.clearRect(0,0, canvas.width, canvas.height)
  //   }

  //   video.addEventListener('timeupdate', timeUpdate)

  //   return () => {

  //   }
  // }, [])



  return (
    <div style={{ marginBottom: '80px' }} >
      <div style={{ width: '50%', position: 'relative', margin: 'auto' }} >
        <video
          style={{ width: '100%' }}
          className='video'
          ref={videoRef}
          src="/detect.mp4"
          autoPlay muted
        />
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}

export default Detection