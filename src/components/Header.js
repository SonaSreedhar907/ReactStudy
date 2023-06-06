import React from 'react'
import headerCss from "./Header.module.css"

const Header = () => {
  return (
    <div className={headerCss.header}>
        <h1>Component 1</h1>
        <p className='para'>This is a paragraph</p>
    </div>
  )
}

export default Header