// src/components/LoginPage.js
import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig'; // Firebase auth
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Google Auth
import { useNavigate } from 'react-router-dom'; // Navigation after login

function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Logged in as:', user);
      navigate('/chat');  // Redirect to chat page
    } catch (error) {
      setError(error.message); // Handle error
      console.log('Error during login:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 flex justify-center items-center">
      <div className="bg-white p-20 rounded-3xl shadow-xl w-150 transform transition-all hover:scale-105">
        {/* VChat Logo */}
        <div className="text-center mb-6">Hey!..Welcome to 
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            V
            <span className="text-yellow-400">Chat</span>
          </h1> created by:-<br/>
          <strong>
           
            Jeet Thakurela &
            Vaishnavy Manglik
          </strong>
        </div>

        <p className="text-center text-gray-600 mb-8 text-lg">Sign in to start chatting and make connections</p>

        {/* Google Sign-In Button */}
        <button 
          onClick={handleLogin} 
          className="w-full flex justify-center items-center bg-white hover:bg-gray-100 border border-gray-300 py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png" 
            alt="Google Logo" 
            className="w-15 h-5 mr-2"
          />
          <span className="text-gray-800 text-lg font-semibold">Sign in with Google</span>
        </button>

        {error && <p className="text-center text-red-500 mt-4">{error}</p>} {/* Error message */}
      </div>
    </div>
  );
}

export default LoginPage;
