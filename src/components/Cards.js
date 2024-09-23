import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Sister Concerns</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/arbab_group.jpeg'
              text='ARBAB GROUP LTD.'
              path='/services'
            />
            <CardItem
              src='images/zk_foils.jpeg'
              text='ZK FOILS LTD.'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/zk_health_care.jpeg'
              text='ZK HEALTH CARE'
              path='/services'
            />
            <CardItem
              src='images/zk_plastic_ltd.jpg'
              text='ZK PLASTICS LTD.'
              path='/products'
            />
            <CardItem
              src='images/zkicl.jpeg'
              text='ZK INK & CHEMICALS LTD.'
              path='/sign-up'
            />
            <CardItem
              src='images/aant_cosmetics.jpeg'
              text='AANT COSMETICS LTD.'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
