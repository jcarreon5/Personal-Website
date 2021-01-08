import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img9 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'
import img8 from '../images/img-8.jpg'
import cat from '../images/cat-bop.jpg'
import img4 from '../images/img-4.jpg'


function Cards() {
    return (
        <div className='cards'>
            <h1>Check This Out!</h1>
            <div className="cards__container">
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src={img9}
                        text='WaterFall Filler'
                        label='Adventure'
                        path='/organizations'
                        />
                        <CardItem 
                        src={img2}
                        text='Island Filler '
                        label='Luxury'
                        path='/organizations'
                        />
                        <CardItem 
                        src={img8}
                        text='Sand Filler'
                        label='Sand'
                        path='/organizations'
                        />
                        <CardItem 
                        src={cat}
                        text='BOP BOP BOP BOP BOP BOP BOP BOP'
                        label='BOP'
                        path='/organizations'
                        />
                        <CardItem 
                        src={img4}
                        text='Soccer Filler Pic'
                        label='soccer'
                        path='/organizations'
                        />
                    </ul> 
                </div>
            </div>
        </div>
    );
}

export default Cards;
