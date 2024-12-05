import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { getAuth } from 'firebase/auth';  // Import Firebase Auth
import { FaVideo, FaCopy, FaPhoneSlash } from 'react-icons/fa';  // Importing icons

const RoomPage = () => {
  const { roomId } = useParams();  // Get the roomId from the URL
  const meetingContainer = useRef(null);  // Create a ref to hold the meeting container element
  const [sharedLink, setSharedLink] = useState("");  // State to store the shared link

  useEffect(() => {
    const getUrlParams = (url) => {
      let urlStr = url.split('?')[1];
      const urlSearchParams = new URLSearchParams(urlStr);
      const result = Object.fromEntries(urlSearchParams.entries());
      return result;
    };

    const myMeeting = async () => {
      const auth = getAuth();  // Get Firebase authentication instance
      const user = auth.currentUser;  // Get the current authenticated user
      if (!user) {
        console.log("No user logged in!");  // Handle case if no user is logged in
        return;
      }

      const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + "");
      const userID = Math.floor(Math.random() * 10000) + "";
      const userName = "userName" + userID;
      const appID = 1752188605;
      const serverSecret = "d6e9c4fe3032b1590a56fd63640abbd7";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: document.querySelector("#root"),
        sharedLinks: [{
          name: 'Personal link',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
        }],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        showTextChat: true,
        showUserList: true,
        maxUsers: 10,
        layout: "Auto",
        showLayoutButton: false,
      });

      // Set the shared link in the state
      setSharedLink(window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID);
    };

    if (meetingContainer.current) {
      myMeeting();  // Call the meeting function once the container is ready
    }
  }, [roomId]);

  // Function to copy the shared link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(sharedLink).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div>
      <div ref={meetingContainer} style={{ width: '100%', height: '100%' }} />
      
      {/* Display the shareable link */}
      {sharedLink && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p className="text-lg font-semibold mb-2">Share this link to join the room:</p>
          <input 
            type="text" 
            value={sharedLink} 
            readOnly
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button 
            onClick={copyLink} 
            className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaCopy size={20} className="mr-2" /> Copy Link
          </button>
        </div>
      )}

      {/* Button to end the call */}
      <div className="endCallSection mt-4">
        <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
          <FaPhoneSlash size={20} className="mr-2" /> End Call
        </button>
      </div>
    </div>
  );
};

export default RoomPage;
