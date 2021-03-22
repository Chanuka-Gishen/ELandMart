import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Lands For Sale</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/img-2.jpg'
              text='Land  for sale In Homagama'
              label='LKR.700000 per Perch'
              path='/services'
            />
            <CardItem
              src='Images/img-1.jpg'
              text='Land For sale in Thabuththegamuwa'
              label='LKR.180000 per Perch'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/img-3.jpg'
              text='Land for sale in Thalawathugoda with Utilitiy Facilities'
              label='LKR.500000 per Perch'
              path='/services'
            />
            <CardItem
              src='Images/img-4.jpg'
              text='Cocount Tree Land for sale in Galle'
              label='LKR.200000 per Perch'
              path='/products'
            />
            <CardItem
              src='Images/img-5.jpg'
              text='Paddy Field for Sale in Kurudughahettakma '
              label='LKR.180000 per Perch'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;