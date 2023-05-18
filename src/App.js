import {Button,Navbar,Container,Nav} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import bg from './img/bg1.png';
import shoes01 from './img/shoes01.png'
import shoes02 from './img/shoes02.png'
import shoes03 from './img/shoes03.png'
// import {b,c} from './Data.js'
import data from './Data.js'
import { useState } from 'react';

function App() {
  let [shoes] = useState(data)
  return (
    <div className="App">
        {/* {b}{c} */}
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
      <div className='container'>
        <div className='row'>
          {/* <div className='col-md-4'>
            <img src={shoes01}/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>  
          </div>
          <div className='col-md-4'>
            <img src={shoes02}/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p> 
          </div>
          <div className='col-md-4'>
            <img src={shoes03}/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p> 
          </div> */}
          <Card shoes={shoes[0]}></Card>
          <Card shoes={shoes[1]}></Card>
          <Card shoes={shoes[2]}></Card>
        </div>
      </div>
    </div>
  );
}

export default App;

function Card(props){
  return (
    <div className='col-md-4'>
            <img src={shoes01}/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>  
          </div>
  )
}
