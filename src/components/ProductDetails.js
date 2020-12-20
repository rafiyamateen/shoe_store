import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../shoes.json';
import { NotFound } from './NotFound';

export const ProductDetails = () => {
    const { item } = useParams();
    const shoe = Shoes[item];
    document.title = shoe.name;
    if (!shoe) {
        return (
            <NotFound />
        )
    }
    return (
        <div className='details-div'>
            <div className='details-img'>
                <img src={require(`${shoe.img}`)} alt={shoe.name} />
            </div>
            <div className='details'>
                <h1>{shoe.name}</h1>
                <h2>{shoe.price}</h2>
                <p>Brand: {shoe.brand}</p>
                <p>Size: {shoe.size}</p>
                <p>Color: {shoe.color}</p>
            </div>
        </div>
    )
}