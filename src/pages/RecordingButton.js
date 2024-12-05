import React, { useState, useRef } from 'react';

const RecordingButton = () => {
  const [isRecording, setIsRecording] = useState(false); // State to track recording status
  const mediaRecorderRef = useRef(null); // Ref to store the MediaRecorder instance
  const [recordedChunks, setRecordedChunks] = useState([]); // Store the recorded data

  // Start recording function
  const startRecording = () => {
    const videoElement = document.querySelector('video'); // Get the video element
    if (!videoElement || !videoElement.srcObject) {
      alert("No video stream found!");
      return;
    }

    const stream = videoElement.srcObject; // Get the video stream from the video element

    // Create a MediaRecorder instance to record the stream
    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: 'video/webm',
    });

    // When data is available, push it into the recordedChunks array
    mediaRecorderRef.current.ondataavailable = (event) => {
      setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
    };

    // Start recording
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  // Stop recording function
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      // Create a Blob from the recorded data
      const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(recordedBlob); // Create a URL for the Blob

      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = 'meeting-recording.webm'; // Set the download filename
      link.click(); // Trigger the download
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`p-4 rounded-full ${isRecording ? 'bg-red-500' : 'bg-green-500'} text-white`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};

export default RecordingButton;
