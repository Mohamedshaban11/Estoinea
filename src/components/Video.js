import React from 'react';
import {Link} from 'react-router-dom';
import './VideoStyle.css';
import spaceVideo from '../assets/space.mp4';

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4'/>
        </video>
        <div className='content'>
            <h1>Galaxy. Travel.</h1>
            <p>World's first civilian space travel</p>
        
        <div>
            <Link to='/tranining' className='btn'>Tranining</Link>
            <Link to='/contact' className=' btn btn-light'>Launch</Link>
        </div>
    </div>
    </div>
  )
}

export default Video