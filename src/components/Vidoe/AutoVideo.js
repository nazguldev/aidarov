import React, { useState } from 'react';
import video from "./video.mp4"
import Aidarov from "./Aidarov.png"
import '../index.scss'



function AutoVideo(props) {
    return (<div className={"auto_video mt-3"} >
        {/* <video preload="auto" poster={Aidarov} playsinline="" autoplay="" muted="" loop={true}> <source src={video} type="video/mp4" /> </video> */}
    </div>
    );
}

export default AutoVideo;