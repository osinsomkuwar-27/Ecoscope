import React from 'react';

import Hero from './Hero';
import Stats from './Stats';
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero />
            <Stats />
            <Footer />
        </>
     );
}

export default HomePage;