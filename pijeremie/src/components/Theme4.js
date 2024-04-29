import React from 'react';
import Bob from '../assets/bob.jpg'; 
import Jimi from '../assets/jimi.jpg';   

const Theme4 = () => {
    return (
        <div className="themes">
            <h1 data-aos="fade-up">¡Thème n°4 : La mélancolie!</h1>
            <div className='theme4'>
                <img data-aos="fade-up" id="bob-img" src={Bob} alt="bob" width={'350px'} />
                <img data-aos="fade-up" id="jimi-img" src={Jimi} alt="jimi" width={'425px'} />
                <p data-aos="fade-up">La mélancolie / bile noire / dépression est un problème existentiel que beaucoup de personnes traversent dans leur vie.<br></br> 
                Un des moyens de la combattre est de prendre du temps pour soi et faire des activités qui nous passionnent.</p>
            </div>
        </div>
    );
};

export default Theme4;