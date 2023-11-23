import React from 'react'
import { useNavigate } from 'react-router-dom';
import {  getDatabase, ref, set, get } from 'firebase/database';
import { push } from './Configuration.js';


const db = getDatabase(push);

const Admin = () => {
 
    set(ref(db, 'user/hasnain') , {
        email: 'admin@example.com',
        isAdmin: true,
     
    })
  
  return (
    <div>
      
    </div>
  )
}

export default Admin
