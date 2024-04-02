import React from 'react';
import './slider.scss';

const Slider = ({ images }) => {
    return (
        <div className='slider'>
            <div className="fullSlider">
                <div className="arrow">
                    <img src="/arrow.png" alt="" />
                </div>
                <div className="imgContainer">
                    {/* {images.map((image, index) => ( */}
                        <img src={images[0]} alt='' />
                    {/* ))} */}
                </div>
                <div className="arrow">
                    <img src="/arrow.png" alt="" className='right' />
                </div>
                <div className="close">X</div>
            </div>

            <div className="bigImage">
                <img src={images[0]} alt="" />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img key={index} src={image} alt='' />
                ))}
            </div>
        </div>
    )
}

export default Slider