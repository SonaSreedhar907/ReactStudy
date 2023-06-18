import React from 'react'

const Two = (props) => {
  return (
    <div style={{backgroundColor:"red",width:'200px'}}>
        <h1>Layer two {props.data}</h1>
    </div>
  )
}

export default Two