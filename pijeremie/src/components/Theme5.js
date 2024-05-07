import React from 'react';
import JackSparrow from '../assets/jacksparrow.png'
import Amerindienne from '../assets/ameridienne.png'
import Leo from '../assets/leo.jpg'

const Theme5 = () => {
    return (
        <div className="themes">
            <h1 data-aos="fade-up">¡Thème n°5 : Le racisme!</h1>
            <div className='theme5'>
                <img data-aos="fade-up" id="amerindienne-img" src={Amerindienne} alt="amerindienne" width={'400px'} />  
                <img data-aos="fade-up" id="leo-img" src={Leo} alt="leo" width={'375px'} />  
                <img data-aos="fade-up" id="jacksparrow-img" src={JackSparrow} alt="jack-sparrow" width={'400px'} />  
                <p data-aos="fade-up">Le racisme vient de la méconnaissance de l'autre, de sa culture, de ses origines, de son identité. Si l'on apprend à connaitre et que l'on ouvre notre esprit, on découvre que nous sommes égaux.</p>
            </div>
        </div>
    );
};

export default Theme5;