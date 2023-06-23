// components/VideoPlayerComponent.js
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';

// Include this import to add HLS support to video.js
import 'videojs-contrib-hls';

function VideoPlayerComponent() {
  const videoRef = useRef();
  console.log('hiii');

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videojs(videoRef.current, { 
          controls: true, 
          autoplay: true, 
          preload: 'auto', 
          html5: {
            hls: {
              overrideNative: true, // add this line
            },
            nativeAudioTracks: false,
            nativeVideoTracks: false
          },
          sources: [{ src: 'http://localhost:3333/inedx.m3u8', type: 'application/x-mpegURL' }]
        }, function() {
          console.log('video player ready');
        });
      }
    }, 0);

    return () => {
      if (window.videojs) {
        const player = window.videojs(videoRef.current);
        if (player) {
          player.dispose();
        }
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" playsInline />
    </div>
  );
}

export default VideoPlayerComponent;
