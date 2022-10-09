import React from 'react'
import Chat from '../Component/Chat'
import SideBar from '../Component/SideBar'


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home