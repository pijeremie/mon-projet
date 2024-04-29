import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Accueil from './pages/Accueil';
import MeContacter from './pages/MeContacter'; 

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Accueil />} />
        <Route path='/me-contacter' element={<MeContacter />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
