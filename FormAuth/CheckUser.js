import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { push } from './Configuration.js';
import RoutesComponent from './Routing.js';



 const auth = getAuth(push);

const CheckUser = ({logout}) => {
    const [user, setUser] = useState(null);
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user){
        setUser(user)
    } 
    else{
        setUser(user)
    }
  })
}, [])


  return(
    <RoutesComponent/>
  )

}

export default CheckUser;
