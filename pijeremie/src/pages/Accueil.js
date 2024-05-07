import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'; 
import ScrollButton from '../components/ScrollButton'; 
import Nav from '../components/Nav';  
import Espace from '../components/Espace'; 
import Intro from '../components/Intro';
import Theme1 from '../components/Theme1';
import Theme2 from '../components/Theme2';
import Theme3 from '../components/Theme3';
import Theme4 from '../components/Theme4';
import Theme5 from '../components/Theme5';
import Theme6 from '../components/Theme6'; 
import Footer from '../components/Footer';  

const Accueil = () => {
    useEffect(() => {
        Aos.init({duration: 1250})
    }, []);
    return (
        <div className="accueil">
            <Nav />  
            <div className="accueil-txt">
                <Intro /> 
                <Theme1 />
                <Espace />
                <Theme2 />
                <Espace />
                <Theme3 />
                <Espace />
                <Theme4 />
                <Espace />
                <Theme5 /> 
                <Espace /> 
                <Theme6 /> 
                <Espace /> 
            </div>
            <ScrollButton />
            <Footer />
        </div>
    );
};

export default Accueil;