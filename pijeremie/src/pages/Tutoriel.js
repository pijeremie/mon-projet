import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'; 
import Nav from '../components/Nav';  
import TutoElephant from '../assets/tuto-elephant.PNG';
import TutoBatman from '../assets/tuto-batman.PNG';

const Tutoriel = () => {
        useEffect(() => {
            Aos.init({duration: 1250})
        }, []); 
    return (
        <div className="tutoriel">
            <Nav />   
            <div className="tutos">   
                <h1>¡Tutoriel!</h1>              
                <div className='tuto'>
                    <img data-aos="fade-up" id="tuto-elephant" src={TutoElephant} alt="tuto-elephant" width={'450px'}/>&emsp;  
                    <img data-aos="fade-up" id="tuto-batman" src={TutoBatman} alt="tuto-batman" width={'450px'}/>  
                </div>
            </div>
        </div>  
    );
};

export default Tutoriel;