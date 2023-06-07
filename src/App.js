import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products/Products"
import { Container } from 'react-bootstrap';
import Effects from "./components/Effects/Effects"

function App() {
  return (
   <div className="App">
    <Container>
      <Effects />
    </Container>  
   </div>
  );
    
   


}

export default App;
