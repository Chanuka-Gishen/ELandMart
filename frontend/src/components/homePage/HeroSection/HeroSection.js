import React from 'react';
import '../../../App.css';
import {Button} from '../Button/Button.js';
import '../../../assets/homePageAssets/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Welcome to E-Land Mart</h1>
      <p>Buy the best  Land worth Your Money</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          route='/signInPage'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          route='/Search'
        >
         DISCOVER LAND <i className='far fa-play-circle' />

        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
