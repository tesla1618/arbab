import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/arbab_video.mp4' autoPlay loop muted />
      <h1>ARBAB PACK LTD.</h1>
      <p>A sister concern of ARBAB GROUP LTD.</p>
      <div className='hero-btns'>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          GET A TOUR<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
