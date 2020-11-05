import React from 'react'
import { Link } from 'react-router-dom';
import Shoes from '../shoes.json';

export const ProductItems = () => {
    return (
        <div className='main-div'>
            {Object.keys(Shoes).map((key) => {
                const shoe = Shoes[key];
                return (
                    <div className='products-div' key={key} >
                        <Link className='links' to={`/products/${key}`}>
                            <img src={require(`${shoe.img}`)} alt={shoe.name} />
                        </Link>
                        <h3>{shoe.name}</h3>
                        <h2>{shoe.price}</h2>
                    </div>
                )
            })}
        </div>
    )
}