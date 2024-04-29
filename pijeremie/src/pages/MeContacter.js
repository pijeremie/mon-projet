import React from 'react';
import Nav from '../components/Nav';  

const MeContacter = () => {
    return (
        <div className="me-contacter">
            <Nav />   
            <div className="form">   
                <h1>¡Me contacter!</h1>           
                <form action="https://formsubmit.co/pi.jeremie@outlook.fr" method="POST">                    
                <div className="champ">
                    <label for="nom">Votre nom :&emsp;</label>
                    <input type="text" id="nom" name="nom" placeholder="nom" required></input>
                </div>
                <div className="champ">
                    <label for="email">Votre e-mail :&emsp;</label>
                    <input type="email" id="email" name="email" placeholder="adresse@mail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></input>
                </div>
                <div className="champ">
                    <label for="sujet">Quel est le sujet de votre message ?&emsp;</label> 
                    <select id="sujet" name="sujet" required>
                        <option value="" disabled selected hidden>Sujet de votre message</option>
                        <option value="probleme-compte">Thème à aborder en dessin ou peinture</option>
                        <option value="question-produit">Sujet à aborder (TSA, bipolarité, etc.)</option>
                        <option value="suivi-commande">Demande</option> 
                        <option value="suivi-commande">Collaboration</option> 
                        <option value="autre">Autre</option>
                    </select>
                </div>
                <div className="champ">
                    <label for="message">Votre message</label><br></br>
                    <textarea id="message" name="message" placeholder="" rows="5" cols="30" required></textarea>
                </div>
                <div className="bouton">
                    <button id='envoyer' type="submit">Envoyer</button>
                </div>
            </form>
        </div> 
    </div> 
    );
};

export default MeContacter;