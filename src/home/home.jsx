import React from 'react';
import './home.css'; // make sure the path matches your folder structure
import inaraLogo from '../assets/inara-logo.png'; // adjust the path as needed
import heroDog from '../assets/hero-dog.png'; // adjust the path as needed
import heroGrid from '../assets/grid-cropped.png'; // adjust the path as needed

const Home = () => {
  return (
    <div className='home-container'>
        <div className='navbar-container'>
            <img className='navbar-logo' src={inaraLogo}></img>
            <div className='navbar-links'>
                <p className='navbar-links-text'>Tentang Kami</p>
                <p className='navbar-links-text'>Produk</p>
                <p className='navbar-links-text'>Testimonial</p>
                <p className='navbar-links-text'>Testimonial</p>
            </div>
        </div>
        <div class="navbar-black-line "></div>

        <div className='hero-container'>
            <div className='hero-text-container'>
                <p className='hero-text-inara-text'>Inara Paws</p>
                <p className='hero-text-description'>Kalung NFC untuk hewan peliharaan yang menyimpan informasi penting dan kenangan berharga</p>
                <div>
                    <button className="hero-button">Beli Inara Paws</button>
                    <button className="hero-button-ghost">Pelajari Lebih Lanjut</button>

                </div>
            </div>
            <img className='hero-dog' src={heroDog}></img>
            <img className='hero-grid' src={heroGrid}></img>

        </div>
    </div>
    
  );
};

export default Home;
