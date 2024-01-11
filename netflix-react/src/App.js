import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiaNavbar from './components/MiaNavbar'
import SecondoComponente from './components/SecondoComponente'
import MioFooter from './components/MioFooter'
import Galleria from './components/Galleria'
import { Container } from 'react-bootstrap';
import { urlApi , saghe } from './dati/api';
import MettiGallerie from './components/MettiGallerie'

function App() {
  return (
    <div className="container">
      <MiaNavbar />
      <SecondoComponente />
      <Container>
        <Galleria />
      </Container>
      <MettiGallerie/>
      <MioFooter />
    </div>
  );
}

function prova(){
  fetch(urlApi/*  + saghe[Math.floor(Math.random()*saghe.length)] */,
  {
      method: 'GET',
      headers: {
      
      }
  }
  )
  .then(response => response.json())
  .then(json => {console.log(json)
                 return "ciao"})
  .catch(err => console.error(err))
}
console.log(prova());




export default App;
