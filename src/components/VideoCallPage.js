// // src/components/VideoCallPage.js
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { initializeZegoCloud } from '../zegocloud/zegocloud';

// function VideoCallPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userID = 'user-1';  // This can be dynamic based on the user logged in
//     const roomID = 'test-room';
//     initializeZegoCloud(userID, roomID);
//   }, []);

//   return (
//     <div>
//       <h1>Video Call Room</h1>
//       <div id="video-call-container" style={{ width: '100%', height: '400px', backgroundColor: 'lightgray' }}></div>
//       <button onClick={() => navigate('/')}>Log Out</button>
//     </div>
//   );
// }

// export default VideoCallPage;
