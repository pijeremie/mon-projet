import React from 'react';
import Femme from '../assets/femme.png'; 
import Goku from '../assets/goku.jpg';   

const Theme2 = () => {
    return (
        <div className="themes"> 
            <h1 data-aos="fade-up">¡Thème n°2 : Egalité homme-femme!</h1>
            <div className='theme2'>
                <img data-aos="fade-up" id="femme-img" src={Femme} alt="femme" width={'400px'} />
                <img data-aos="fade-up" id="goku-img" src={Goku} alt="goku" width={'400px'} />
                <p data-aos="fade-up">L'homme et la femme sont complémentaires. Ils ont besoin l'un de l'autre pour exister.</p>
                <p data-aos="fade-up">Ils peuvent s'apporter mutuellement des valeurs que l'autre ne possède pas : affection, solidité, stabilité, sécurité, équilibre, etc.</p>
            </div> 
        </div>  
    );
};

export default Theme2;