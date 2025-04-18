import React from 'react';
import './home.css'; // make sure the path matches your folder structure
import inaraLogo from '../assets/inara-logo.png'; // adjust the path as needed
import heroDog from '../assets/hero-dog.png'; // adjust the path as needed
import heroGrid from '../assets/grid-cropped.png'; // adjust the path as needed
import descriptionImage from '../assets/description-image.jpeg'; // adjust the path as needed
import featuresIdentification from '../assets/identification.png'; // adjust the path as needed
import featuresNfc from '../assets/nfc.png'; // adjust the path as needed
import featuresTime from '../assets/time.png'; // adjust the path as needed

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

        <div className='description-container'>
            <img className='description-image' src={descriptionImage}></img>
            <div className='description-text-container'>
                <p className='description-title'>
                    Teknologi untuk Kenangan dan Keamanan
                </p>
                <p className='description-subtext'>
                Inara Paws menghadirkan aksesori pintar yang memadukan teknologi dengan sentuhan emosional. Dirancang untuk menjaga keamanan dan menyimpan momen berharga, kalung ini menjadi simbol ikatan yang tak tergantikan antara hewan peliharaan dan pemiliknya.                 </p>
            </div>
        </div>

        <div className='features-container'>
            <p className='features-title'>Fitur Inara Paws</p>
            <div className='features-logos-container'>
                <div className='features-div'>
                    <p className='features-text'>Identifikasi</p>
                    <img className='features-image' src={featuresIdentification}></img>
                    <p className='features-description'>Mudah diakses kapan saja dengan website kami</p>
                </div>
                <div className='features-div'>
                    <p className='features-text'>NFC</p>
                    <img className='features-image' src={featuresNfc}></img>
                    <p className='features-description'>Mudah diakses kapan saja dengan website kami</p>
                </div>
                <div className='features-div'>
                    <p className='features-text'>Kapsul Waktu</p>
                    <img className='features-image' src={featuresTime}></img>
                    <p className='features-description'>Mudah diakses kapan saja dengan website kami</p>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Home;
