import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/img-2.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path='/services'
            />
            <CardItem
              src='Images/img-1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path='/services'
            />
            <CardItem
              src='Images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              path='/products'
            />
            <CardItem
              src='Images/img-5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;