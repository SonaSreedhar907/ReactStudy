import './App.css';
import React from 'react';
import States from "./components/States"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
    const states = [
      {name:"kerala",language:"malayalam",population:1000},
      {name:"tamilnadu",language:"tamil",population:2000},
      {name:"karnataka",language:"kannada",population:3000}
    ];
  return (
   <div className='App'>
    <Container>
        <States states={states} />
    </Container>
   </div>
  );
    
   


}

export default App;
