import React from 'react'
import './Home.css'
import Footer from './Footer'
import Navigation from './Navigation'
import LogoList from './LogoList'
import Image from './Image'

function Home() {
  return (
    <div className = 'App'>
    <Navigation/>
    <Image/>
    <LogoList/>
    <Footer/>
    </div>
  );
}

export default Home;


