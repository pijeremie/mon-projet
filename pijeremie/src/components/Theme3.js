import React from 'react';
import Perroquet from '../assets/perroquet.jpg'; 
import Tigre from '../assets/tigre.jpg'; 
import Singe from '../assets/singe.jpg';   

const Theme3 = () => {
    return (
        <div className="themes"> 
            <h1 data-aos="fade-up">¡Thème n°3 : La protection des animaux!</h1>
            <div className='theme3'>
                <img data-aos="fade-up" id="perroquet-img" src={Perroquet} alt="perroquet" width={'350px'} />
                <img data-aos="fade-up" id="tigre-img" src={Tigre} alt="tigre" width={'300px'} />
                <img data-aos="fade-up" id="singe-img" src={Singe} alt="singe" width={'325px'} />
                <p data-aos="fade-up">La place des animaux n'est pas dans un zoo. Ils ont besoin d'être attaché à leur environnement naturel pour pouvoir se développer.</p> 
            </div>  
        </div>
    );
};

export default Theme3;