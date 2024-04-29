import React from 'react';
import Papillon from '../assets/papillon.png';  
import Colombe from '../assets/colombe.png';   

const Theme5 = () => {
    return (
        <div className="themes">
            <h1 data-aos="fade-up">¡Thème n°5 : La liberté!</h1>
            <div className='theme5'>
                <img data-aos="fade-up" id="papillon-img" src={Papillon} alt="papillon" width={'300px'} />
                <img data-aos="fade-up" id="colombe-img" src={Colombe} alt="colombe" width={'400px'} />  
                <p data-aos="fade-up">Penser, s'exprimer et agir selon ses valeurs, ses croyances, ses besoins et ses désirs.</p>
            </div>
        </div>
    );
};

export default Theme5;