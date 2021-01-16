import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import Jairo_pro from '../images/Jairo-Proffesional.jpg';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Jairo Carreon </h1>
            <p> Computer Science and Engineering Major</p>
            
            <div className='welcome-image-container'>
                <img src={Jairo_pro} alt="Jairo-Proffesional"></img>
            </div>
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted/> */}
            
            
            {/* <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Watch Trailer<i className='far fa-play-circle'/>
                </Button>
            </div> */}
        </div>
    )
}

export default HeroSection
