import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiaNavbar from './components/MiaNavbar'
import SecondoComponente from './components/SecondoComponente'
import MioFooter from './components/MioFooter'
import { Container } from 'react-bootstrap';
import Profilo from './components/Profilo';
import Impostazioni from './components/Impostazioni';

import MettiGallerie from './components/MettiGallerie'


function App() {
  return (

    <Router>
      <div className="container">
        <MiaNavbar />
        <Routes>
          <Route path="/" element={<><SecondoComponente />
            <MettiGallerie /></>} />
          <Route path="/Profilo" element={<Profilo />} />
          <Route path="/Impostazioni" element={<Impostazioni/>} />

        </Routes>
        <MioFooter />
      </div>
    </Router>
  );
}

export default App;
