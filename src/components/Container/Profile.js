import React from 'react'
import One from '../../compo/One'

const Profile = (props) => {
  return (
    <div style={{backgroundColor:"blue"}}>
        <h1>Profile</h1>
        <One data={props.data}></One>
    </div>
  )
}

export default Profile