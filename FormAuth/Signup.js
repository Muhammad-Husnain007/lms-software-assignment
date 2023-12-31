import { getDatabase, ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { push } from './Configuration.js';
import './Style.css';
import { useDispatch } from 'react-redux';
import { add } from '../Config/redux/reducer/User.js';

const auth = getAuth(push); 
const db = getDatabase(push);

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const dispatch = useDispatch()

  const createuser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

     
        // Redirect to the desired page.
        // navigate("/student");


        const reference = ref(db, `users/${user.uid}`);
        set(reference, {
          name: name,
          email: email,
        })
          .then(() => {
            alert('Success');
            console.log(user)
            dispatch(add({ name, email }));
    
            if(email == 'hasnainilyas007@gmail.com'){
              navigate('/adminpanel')
             } else{
              navigate('/student')
        
             }
          })
          .catch(error => {
            console.log("Error setting user data: " + error.message);
          });
      })
      .catch(error => {
        console.log("Error signing up: " + error.message);
      });
  };

  return (
    <div className='signup'>
      <form onSubmit={createuser}>
        <h1>Signup Form</h1>
        
        <input type="text" required placeholder='Enter Your Name' name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="email" required placeholder='Enter Your Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <input type="password" required placeholder='Enter Your password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup;

