import React from 'react';

import AISuggestions from './AISuggestions';
import CommunityImpact from './CommunityImpact';
import LogImpact from './LogImpact';
import WeatherStats from './WeatherStats';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

function LiveMappingPage() {
    return ( 
        <>
            <Navbar/>
            <AISuggestions />
            <CommunityImpact />
            <LogImpact/>
            <WeatherStats/>
            <Footer/>
        </>
     );
}

export default LiveMappingPage;