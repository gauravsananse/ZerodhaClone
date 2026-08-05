import React from 'react'
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Eduction from './Education';
import OpenAccount from '../OpenAccount';



function HomePage() {
    return ( 
        <>
            
            <Hero/>
            <Awards/>
            <Stats />
            <Pricing />
            <Eduction/>
            <OpenAccount />
            
           

        </>
    );
}

export default HomePage;