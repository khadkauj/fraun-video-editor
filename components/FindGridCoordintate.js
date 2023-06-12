import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function FindGridCoordintate() {
    const videoRef = useRef(null)
    const canvasRef = useRef(null)
    const [coordinate, setCoordinate] = useState({ x: 0, y: 0 })

    const updateCoordinate = (e) => {
        const rect = canvasRef.current.getBoundingClientRect()
        console.log(e.clientX - rect.left, e.clientY - rect.top);
        setCoordinate({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    useEffect(() => {
        const video = videoRef.current
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const animate = () => {
            requestAnimationFrame(animate)
        }

        video.addEventListener('play', animate)

        return () => {
            video.removeEventListener('play', animate)
        }
    }, [])


    return (
        <div style={{ marginBottom: '80px' }} >
            <div style={{ width: '100%', position: 'relative' }} >
                <video className='video' ref={videoRef} src='/test.avi' style={{ width: '100%', height: '100%' }} autoPlay muted />
                < canvas onClick={updateCoordinate} ref={canvasRef} style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', cursor: 'crosshair' }} />
            </div>
            <p style={{ textAlign: 'center' }} >Click on video to view (x,y) co-ordinates.</p>
            <p style={{ textAlign: 'center' }} >X: {coordinate.x}, Y: {coordinate.y}</p>
        </div>
    )
}

export default FindGridCoordintate