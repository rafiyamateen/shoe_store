import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const Home = () => {
    const images = ['https://tse4.mm.bing.net/th?id=OIP.LsvRS1f4cHlog3wrYKKqCAHaEK&pid=Api&P=0&w=301&h=170',
        'https://tse4.mm.bing.net/th?id=OIP.iucK9ShrKiBBDK-fO17xJQHaEK&pid=Api&P=0&w=272&h=154',
        'https://tse1.mm.bing.net/th?id=OIP.5Mr1BOl3I8pjSVIHOnk8SwHaE8&pid=Api&P=0&w=234&h=157',
        'https://tse4.mm.bing.net/th?id=OIP.YQ6WgNm7K5jdqhBchqmImgHaEl&pid=Api&P=0&w=260&h=161',
        'https://tse4.mm.bing.net/th?id=OIP.bQ4pYbif0HCO7tIzwRTHiAHaEK&pid=Api&P=0&w=308&h=174',
        'https://tse3.mm.bing.net/th?id=OIP.8JzOSTxATBgCb7krpiGz0gHaE8&pid=Api&P=0&w=250&h=167'];

    const zoomInProperties = {
        indicators: true,
        scale: 1.4
    }
    return (
        <div className='home'>
            <h1>
                WELCOME TO MY SHOE STORE
            </h1>
            <div className='slider'>
                <Zoom {...zoomInProperties} className='slides'>
                    {images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} alt='shoes image' />)}
                </Zoom>
            </div>
        </div>
    )
}
