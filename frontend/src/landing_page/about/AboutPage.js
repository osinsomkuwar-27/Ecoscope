import React from 'react';
import Hero from './Hero';
import Team from './Team';

import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

function AboutPage() {
    return ( 
        <>
           <Navbar/>
           <Hero/>
           <Team/>
           <Footer/>
        </>
     );
}

export default AboutPage;