import React from 'react'
import Chats from './Chats.jsx'
import NavBar from './NavBar.jsx'
import Search from './Search.jsx'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <NavBar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default SideBar