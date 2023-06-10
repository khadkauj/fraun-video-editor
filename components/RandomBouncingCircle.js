import React, { useEffect, useRef } from 'react';

function RandomBouncingCircle() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    let animationFrameId = null
    const numCirlce = 1000
    const speed = 200

    const startAnimation = () => {
        const video = videoRef.current
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        // Define cirlces
        let cirlces = []
        for (let index = 0; index < numCirlce; index++) {
            let cirlce = {
                radius: Math.random() * 20,
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                dx: Math.random() * speed - 1, // -1 to 1 range
                dy: Math.random() * speed - 1,
                color: 'red'
            }
            cirlces.push(cirlce)
        }

        // update circles position: mimic movement
        const updateCircles = () => {
            for (let circle of cirlces) {
                ctx.beginPath()
                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false)
                ctx.strokStyle = circle.color
                ctx.fill();

                if (circle.x + circle.radius > canvas.width || circle.x - circle.radius  < 0) {
                    circle.dx *= -1;
                }

                if (circle.y + circle.radius  > canvas.height || circle.y - circle.radius < 0) {
                    circle.dy *= -1;
                }

                circle.x += circle.dx;
                circle.y += circle.dy;

            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height) // clear previous cirlces
            updateCircles()
            animationFrameId = requestAnimationFrame(animate)
        }
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        animate()
    }

    return (
        <div style={{ position: 'relative' }}>
            <video ref={videoRef} src="/test.avi" style={{ position: 'absolute' }} autoPlay muted />
            <canvas ref={canvasRef} style={{ position: 'absolute' }} />
            <button style={{ position: 'fixed', bottom: '80px' }} onClick={startAnimation}>Start Animation</button>
        </div>
    );
}

export default RandomBouncingCircle;
