import React from 'react'
import './home.scss';
import { SearchBar } from '../../components/searchBar/SearchBar';

const Home = () => {
    return (
        <div className="home">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p className='description'>
                        Real Estates with state of the art architecture, design and very affordable with 
                        serene and clean environment, stable electricity, and frequent water supply.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>

                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>

                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Properties Ready</h2>
                        </div>
                    </div>
                </div>

            </div>
            <div className="imgContainer">
                <img src='/bg.png' alt='' />
            </div>
        </div>
    )
}

export default Home