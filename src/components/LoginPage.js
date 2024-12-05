// // src/components/LoginPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginPage() {
//   const [userID, setUserID] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (userID) {
//       navigate('/video-call');
//     }
//   };

//   return (
//     <div>
//       <h1>Login to Video Call</h1>
//       <input 
//         type="text" 
//         placeholder="Enter your user ID"
//         value={userID}
//         onChange={(e) => setUserID(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginPage;
