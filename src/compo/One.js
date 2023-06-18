import React from 'react'
import Two from './Two'

const one = (props) => {
  return (
    <div style={{backgroundColor:"yellow",width:'500px'}}>
        <h1>Layer one</h1>
        <Two data={props.data}></Two>
    </div>
  )
}

export default one