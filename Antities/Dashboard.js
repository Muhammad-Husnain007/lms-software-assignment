// import { useNavigate } from 'react-router-dom';
// import Avatar from './Avatar';
// import React, { useState } from 'react';

// function Dashboard({saveQuiz}) {
//   const [quizname, setQuizname] = useState()
//   const navigate = useNavigate();
//   const logout = () => {
//     navigate(`/signin`)
    
//   }

//   const saveQuiz = () => {
//     get(child(dbRef, 'quiz/req'))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         const quiz = snapshot.val();
//         setQuizname(quiz);
//       } else {
//       alert('success name')
//         console.log('No data available');
//       }
//     })
//     .catch((error) => {
//       alert('error get name')
//       console.error(error);
//     })
//   }


//   return (
//     <>
//       <div className='main-div'>
//         <Avatar  />
//         <button>{quizname}</button>
//       <button onClick={logout}>Logout</button>
//       </div>
//     </>
//   );
// }

// export default Dashboard;

