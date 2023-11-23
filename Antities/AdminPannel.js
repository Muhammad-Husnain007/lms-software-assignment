// import React, { useRef, useState } from 'react';
// import Dashboard from './Dashboard';
// import QuizDuration from './QuizDuration';
// import SecretKeyAndDescription from './SecretKeyAndDescription';
// import { getDatabase, ref, set, get, child } from 'firebase/database';
// import Question from './Question';
// import './Style.css';

// const dbRef = ref(getDatabase());
// const db = getDatabase();


// const AdminPannel = () => {
//   const [quiz, setQuiz] = useState();
//   const [duration, setDuration] = useState();
//   const [key, setKey] = useState();
//   const [description, setDescription] = useState();

//   const quizRef = useRef(null);
//   const durationRef = useRef(null);
//   const keyRef = useRef(null);
//   const descriptionRef = useRef(null);

//   const lockQuiz = () => {
//     quizRef.current.disabled = true;
//     durationRef.current.disabled = true;
//     keyRef.current.disabled = true;
//     descriptionRef.current.disabled = true;

//     set(ref(db, 'quiz/req'), {
//       setQuiz: quiz,
//       setDuration: duration,
//       setkey: key,
//       setDescription: description,
//     }).then((res) => {
//       alert('done')
//       console.log(res)
//     }).catch((err) => {
//       alert('not done')
//       console.log(err)
//     })

//   };


//   return (
//     <>
//       <Dashboard saveQuiz={onClick} />
//       <div className='admin'>
//         <br />
//         <h2>Admin Panel</h2> <br /> <br />
//         <button id='save' onClick={saveQuiz}>Save</button>   <br /> <br />

//         <input type="text" ref={quizRef} value={quiz} onChange={(e) => setQuiz(e.target.value)} placeholder='Quiz Name' name="" id="" />
//         <input type="text" ref={durationRef} value={duration} onChange={(e) => setDuration(e.target.value)} placeholder='Quiz Duration' name="" id="" />
//         <input type="text" ref={keyRef} value={key} onChange={(e) => setKey(e.target.value)} placeholder='Secret Key' name="" id="" />
//         <input type="text" ref={descriptionRef} value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' name="" id="" />


//         <button id='lock' onClick={lockQuiz}>Lock Quizz</button>
//         <br />
//         <br />
//         <br />
//         <Question />
//       </div>
//     </>
//   );
// }

// export default AdminPannel;
