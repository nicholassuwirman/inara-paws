import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


import './home.css'; 
import inaraLogo from '../assets/inara-logo.png'; 
import heroDog from '../assets/hero-dog.png'; 
import heroDog2 from '../assets/nobackgroundherodog.png'; 
import heroGrid from '../assets/grid-cropped.png'; 
import descriptionImage from '../assets/description-image.jpeg'; 
import featuresIdentification from '../assets/identification.png'; 
import featuresNfc from '../assets/nfc.png';
import featuresTime from '../assets/time.png'; 
import featuresMoney from '../assets/money_.png'; 

import arrowLeft from '../assets/arrow-left.png'; 
import arrowRight from '../assets/arrow-right.png'; 
import inaraDevice from '../assets/inara-device.png'; 

import testi1 from '../assets/testi1.jpg'; 
import testi2 from '../assets/testi2.jpg'; 
import testi3 from '../assets/testi3.jpg'; 

import instagramLogo from '../assets/instagram_.png'; 
import tiktokLogo from '../assets/tiktok_.png'; 
import shopeeLogo from '../assets/shopee_.png'; 

const Home = () => {
  return (
    <div className='home-container'>
        <div className='navbar-container'>
            <img className='navbar-logo' src={inaraLogo}></img>
            <div className='navbar-links'>
              <a href="#tentang-kami" className='navbar-links-text'>Tentang Kami</a>
              <a href="#fitur" className='navbar-links-text'>Fitur</a>
              <a href="#produk" className='navbar-links-text'>Produk</a>
              <a href="#testimonial" className='navbar-links-text'>Testimonial</a>
              <a 
                href="s.shopee.co.id/6fTyWsSqE4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='navbar-links-text'
              >
                Beli Produk
              </a>

            </div>
        </div>
        <div class="navbar-black-line "></div>

        <div className='hero-container'>
            <div className='hero-text-container'>
                <p className='hero-text-description'>Kalung peliharaan NFC</p>
                <p className='hero-text-inara-text'>Inara Paws</p>
                <p className='hero-text-description'>Teknologi canggih untuk hewan peliharaan yang menyimpan informasi penting dan kenangan berharga</p>
                <div>
                    <button className="hero-button">Beli Inara Paws</button>
                    <button className="hero-button-ghost">Pelajari Lebih Lanjut</button>
                </div>
            </div>
            <div className='hero-image-container'>
                <img className='hero-dog' src={heroDog2} />
                <img className='hero-grid' src={heroGrid} />
            </div>

        </div>

        <div id="tentang-kami" className='description-container'>
            <img className='description-image' src={descriptionImage}></img>
            <div className='description-text-container'>
                <p className='description-title'>
                    Teknologi untuk Kenangan dan Keamanan
                </p>
                <p className='description-subtext'>
                Inara Paws menghadirkan aksesori pintar yang memadukan teknologi dengan sentuhan emosional. Dirancang untuk menjaga keamanan dan menyimpan momen berharga, kalung ini menjadi simbol ikatan yang tak tergantikan antara hewan peliharaan dan pemiliknya.                 </p>
            </div>
        </div>

        <div id="fitur" className='features-container'>
            <p className='features-title'>Fitur Inara Paws</p>
            <div className='features-logos-container'>
                <div className='features-div'>
                    <p className='features-text'>Identifikasi</p>
                    <img className='features-image-ident' src={featuresIdentification}></img>
                    <p className='features-description'>Mudah untuk mengetahui identitas hewan peliharaan kapan saja</p>
                </div>
                <div className='features-div'>
                    <p className='features-text'>NFC</p>
                    <img className='features-image-nfc' src={featuresNfc}></img>
                    <p className='features-description'>Teknologi NFC untuk akses cepat informasi hewan peliharaan</p>
                </div>
                <div className='features-div'>
                    <p className='features-text'>Kapsul Waktu</p>
                    <img className='features-image' src={featuresTime}></img>
                    <p className='features-description'>Simpan kenangan berharga dalam bentuk digital</p>
                </div>
                <div className='features-div'>
                    <p className='features-text'>Harga</p>
                    <img className='features-image' src={featuresMoney}></img>
                    <p className='features-description'>Harga yang terjangkau untuk fitur canggih dan modern</p>
                </div>
            </div>
        </div>

        <div id="produk" className="nfc-device-viewer">
            <img className="nfc-device" src={inaraDevice} alt="NFC Device" />

            <img className='arrow-left' src={arrowLeft} alt="Previous" />
            <p className='text-arrow-left'>Nama hewan dan NFC</p>

            <img className='arrow-right' src={arrowRight} alt="Next" />
            <p className='text-arrow-right'>Collar dari kulit hewan</p>

            
        </div>

      <div id="testimonial" className='testimonial-container'>
        <h2 className='testimonial-title'>Apa yang Klien Kami Katakan</h2>
        <div className='testimonial-grid'>
        {/* Testimonial 1 */}
        <div className='testimonial-card'>
          <div className='testimonial-content'>
            <img src={testi1} alt="Client" className='testimonial-image' />
            <p className='testimonial-text'>"Lucuuu konsepnya unik banget, cocok banget juga modelnya buat si Yuki"</p>
            <div className='testimonial-author'>
            <h4 className='testimonial-name'>Michelle Gunawan</h4>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className='testimonial-card'>
          <div className='testimonial-content'>
            <img src={testi2} alt="Client" className='testimonial-image' />
            <p className='testimonial-text'>"Memudahkan saya dan juga keluarga untuk bisa upload di 1 akun yang sama, jadi punya banyak foto Hiro"</p>
            <div className='testimonial-author'>
              <h4 className='testimonial-name'>Jason Wijaya</h4>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className='testimonial-card'>
          <div className='testimonial-content'>
            <img src={testi3} alt="Client" className='testimonial-image' />
            <p className='testimonial-text'>"Bahannya bagus dan harga juga terjangkau sekali"</p>
            <div className='testimonial-author'>
            <h4 className='testimonial-name'>Benny Ong</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='footer-container'>
      <div className='footer-div-1'>
        <img className='logo-footer' src={inaraLogo}></img>
        <p className='footer-logo-description-title'>Inara Paws</p>
        <p className='footer-logo-description'>Kalung NFC untuk hewan kesayangan anda</p>
      </div>
      <div className='footer-links-container'>
        <p className='footer-links-text-header'>Links</p>
        <a href="#tentang-kami" className='footer-links-text'>Tentang Kami</a>
        <a href="#fitur" className='footer-links-text'>Fitur</a>
        <a href="#produk" className='footer-links-text'>Produk</a>
        
      </div>
      <div className='footer-links-container-2'>
        
        <a href="#testimonial" className='footer-links-text'>Testimonial</a>
        <a 
          href="s.shopee.co.id/6fTyWsSqE4" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='navbar-links-text-beli'
        >
          Beli Produk
        </a>
      </div>
        
      <div className='footer-shops-container'>
        <p className='footer-links-text-header'>Social Media</p>
        <a href="https://www.tiktok.com/@inarapaws?_t=ZS-8vkOQT0UbId&_r=1" target="_blank" rel="noopener noreferrer">
          <img className='footer-shops-image' src={tiktokLogo} alt="TikTok" />
        </a>
        <a href="https://www.instagram.com/inarapaws.id?igsh=N2lsNDlteWRycXZk" target="_blank" rel="noopener noreferrer">
          <img className='footer-shops-image' src={instagramLogo} alt="Instagram" />
        </a>
        <a href="s.shopee.co.id/6fTyWsSqE4" target="_blank" rel="noopener noreferrer">
          <img className='footer-shops-image' src={shopeeLogo} alt="Shopee" />
        </a>
      </div>
    </div>
    </div>
    
  );
};

export default Home;
