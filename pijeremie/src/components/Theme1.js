import React from 'react';
import Elephant from '../assets/elephant.png'; 
import Araignee from '../assets/araignee.png'; 
import Paysage from '../assets/paysage.png'; 

const Theme1 = () => {
    return (
        <div className="themes"> 
            <h1 data-aos="fade-up">¡Thème n°1 : Conflit israélo-palestinien!</h1> 
            <div className='theme1'>
                <img data-aos="fade-up" id="elephant-img" src={Elephant} alt="elephant" width={'400px'}/>
                <img data-aos="fade-up" id="araignee-img" src={Araignee} alt="araignee" width={'400px'} />
                <img data-aos="fade-up" id="paysage-img" src={Paysage} alt="paysage" width={'400px'} />
                <p data-aos="fade-up">Des civils innocents sont tués, massacrés, emprisonnés sans raison alors qu'ils pourraient simplement vivre ensemble et cohabiter.</p>
                <p data-aos="fade-up">La terre appartient à tout le monde.</p>
            </div> 
        </div>
    );
};

export default Theme1;