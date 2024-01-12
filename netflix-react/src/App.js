import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiaNavbar from './components/MiaNavbar'
import SecondoComponente from './components/SecondoComponente'
import MioFooter from './components/MioFooter'
import Galleria from './components/Galleria'
import { Container } from 'react-bootstrap';

import MettiGallerie from './components/MettiGallerie'


function App() {
  return (
    <div className="container">
      <MiaNavbar />
      <SecondoComponente />
      <MettiGallerie/>
      <MioFooter />
    </div>
  );
}

export default App;
