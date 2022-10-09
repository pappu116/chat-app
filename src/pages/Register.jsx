
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase";
import Add from "../img/addAvatar.png";

const Register = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
    


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
   
  (error) => {
    setErr(true)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
      })
      await setDoc(doc(db,"users",res.user.uid),{
        uid:res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      })
      await setDoc(doc(db,"userChats",res.user.uid),{})
      navigate("/")
    });
  }
);
      
   } catch (error) {
    setErr(true)
   }
   



  }
  return (
    <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Pappu Chat</span>
          <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
              <input type="text" name=""  placeholder='Display Name'/>
              <input type="email" name=""   placeholder='Email'/>
              <input type="password" name=""   placeholder='Password'/>
              <input style={{display:"none"}} type="file" id="file"/>
              <label htmlFor="file"> 
              <img src={Add} alt="" />
              <span>Add an Avatar</span>
              </label>
              <button>Sign Up</button> 
              {err && <span>Opp's Something Went Wrong!</span>}
            </form>
            <p>You Do have An Account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register