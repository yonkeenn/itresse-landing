import React from 'react';
import itresselab from './itresselab.mp4';
import './Video.css';


const Video = ({ onRouteChange }) => {
return (
  <div className="flex flex-column items-center video-position" key='1'>

    <div className=" close pointer mr5 mt4"
      onClick={()=> onRouteChange('home')}>
      <span></span>
      <span></span>
    </div>
    <video className=" vh-100 w-75  center " controls>
      <source src={itresselab} type="video/mp4" ></source>
    </video>

  </div>
);

}

export default Video;
