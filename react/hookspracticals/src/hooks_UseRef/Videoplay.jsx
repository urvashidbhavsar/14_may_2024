import React, { useRef } from 'react'
import Video from './videosong.mp4'

const Videoplay = () => {
    const videoref = useRef(null)

    const playvideo = () => {
        videoref.current.play()
    }
    const pausevideo = () => {
        videoref.current.pause()
    }

    return (
        <>
            <hr />
            <button onClick={playvideo}>Play</button>
            <button onClick={pausevideo}>Pause</button>
            <hr />
            <video width={300} ref={videoref}>
                <source src={Video} type='video/mp4' />
            </video>
        </>
    )
}

export default Videoplay
