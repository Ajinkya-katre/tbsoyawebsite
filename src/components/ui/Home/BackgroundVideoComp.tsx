import React from 'react';
import BackgroundVideo from '/Users/aditya/tbsoyawebsite/src/assets/about_videos/Video-27.MP4';

const BackgroundVideoComp = () => { return (<div>
    <video autoPlay loop muted
    style={{
      position: "absolute",
      width: "100%",
      left: "50%",
      top:"50%",
      height:"100%",
      objectFit:"cover",
      transform:"translate(-50%, -50%)",
      zIndex:"-1"
    }}>
    <source src={BackgroundVideo} type="video/mp4"/> 
    </video>
  </div>);};
  export default BackgroundVideoComp;

    