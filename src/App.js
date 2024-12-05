import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './index.css'; // or wherever your CSS file is located

import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomePage from "./pages/RecordingButton";
import RoomPage from "./pages/RoomPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // Set the user when logged in
      } else {
        setUser(null);  // Reset the user when logged out
      }
    });

    return () => unsubscribe();  // Clean up the listener
  }, []);

  return (
    <Routes>
      {/* If user is authenticated, show HomePage, else show LoginPage */}
      <Route path="/" element={user ? <RoomPage /> : <LoginPage />} />

      {/* RoomPage is only accessible if the user is authenticated */}
      <Route path="/room/:roomId" component={RoomPage} />

    </Routes>
  );
}

export default App;
