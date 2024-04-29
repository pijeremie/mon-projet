import React from 'react';
import PijeremieLogo from '../assets/pijeremie-logo.png'; 
import Fleche from '../assets/fleche.png';

const Intro = () => {
    return (
        <div className='theme'>
            <img id="pijeremie-logo" src={PijeremieLogo} alt="pijeremie-logo" width={'100px'}/>
            <p>Bienvenue sur mon site web!</p>
            <p>Merci pour l'attention que vous me donnez.</p><br></br>
            <span>Vivre dans la paix de l'esprit et l'harmonie des couleurs</span><br></br><br></br>
            <img id="fleche" src={Fleche} alt="↓ ↓ ↓" width={'50px'}/>
        </div>
    );
};

export default Intro;