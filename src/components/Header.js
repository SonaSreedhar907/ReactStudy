import React, { useState } from 'react'
import { Button,Table,Accordion,Card,Navbar,Container,Nav } from 'react-bootstrap';

const Header = () => {
 const [count,setCount] = useState(0);

  const [colour,setColour]=useState("Green");
  const changeColour = () =>{
    setColour("Red");
  }

  const increment = ( ) =>{
    setCount(count+1)
  }
  const decrement = () =>{
    setCount(count-1)
  }
  
  return (
    <>
    <h1 className='bg-warning text-white'>useState Hook in React</h1>
    <h2>my favourite color is {colour}</h2>
    <Button onClick={changeColour}>Change colour</Button>
    <br />
    <br />
    <h1>Counter is {count}</h1>
    <Button onClick={increment} className='m-2 bg-sucssce'>+</Button>
    <Button onClick={decrement} className='m-2 bg-secondary'>-</Button>
    </>
  )
}

export default Header