import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { auth } from '../firebase'

const NavBar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="logo">Pappus Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default NavBar