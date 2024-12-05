// src/zegocloud/zegocloud.js
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


// Replace with your actual appID and serverSecret from ZEGOCLOUD
const appID = '1752188605';
const serverSecret = 'd6e9c4fe3032b1590a56fd63640abbd7';

export const initializeZegoCloud = (userID, roomID) => {
  const zego = ZegoUIKitPrebuilt.createRTCClient(appID, serverSecret);
  
  zego.joinRoom(roomID, { userID, userName: 'User ' + userID }).then(() => {
    zego.startVideoCall();
  }).catch(err => {
    console.log('Error starting call:', err);
  });
};
