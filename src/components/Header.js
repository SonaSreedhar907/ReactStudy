import React from 'react'
import { Button,Table,Accordion,Card,Navbar,Container,Nav } from 'react-bootstrap';

const Header = () => {
  const clickHandle = () =>{
    console.log("You clicked me")
  }
  const dbClickHandle = (name) =>{
    alert("hello "  + name)
  }
  const onChangeHandle=()=>{
    alert("you typed in the text field")
  }
  const mouseover = () =>{
    alert("you mouse over on the element")
  }
  const onkeyHandle = ()=>{
    alert("you pressed a key")
  }
  return (
    <>
     <h1 className="bg-success text-white">Learn React Events</h1>
     <Button onClick={clickHandle}>Click Me</Button>
     <h2 onDoubleClick={()=>dbClickHandle("sona")}>Double Click</h2>
     <input onChange={onChangeHandle} type="text" />
     <br />
     <br />
     <h1 onMouseOver={mouseover}>Mouse Over</h1>
     <br />
     <input onkeyDown={onkeyHandle} type="text" />

    </>
  )
}

export default Header