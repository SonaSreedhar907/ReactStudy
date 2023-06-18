import React,{useContext} from 'react'
import { AppContext } from '../AppContext'

const Two = () => {
    const {data}=useContext(AppContext)
  return (
    <div style={{backgroundColor:"red",width:'200px'}}>
        <h1>Layer two {data}</h1>
    </div>
  )
}

export default Two