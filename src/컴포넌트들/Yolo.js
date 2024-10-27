import React, { useRef, useEffect, useState } from 'react';
import classNames from './guide/classes.json'; // 클래스 이름 매핑 파일

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const startVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    };
    
    startVideo();
  }, []);

  const capture = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // 캔버스 크기를 640x480으로 설정
    canvas.width = 640;
    canvas.height = 480;

    // 비디오에서 캔버스로 이미지를 그립니다.
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL('image/jpeg'); // 이미지를 base64 형식으로 변환
    setImageSrc(image);
    sendImageToModel(image);
  };

  const sendImageToModel = async (image) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: JSON.stringify({ image }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      setPredictions(result);
      
      // 예측 결과 콘솔에 출력
      result.forEach((pred) => {
        console.log(`Class: ${classNames[pred.class]}, Confidence: ${pred.confidence.toFixed(2)}`);
      });
    } catch (error) {
      console.error('Error sending image to model:', error);
    }
  };

  return (
    <div>
      <h1>Camera Capture with YOLOv8 Prediction</h1>
      <video ref={videoRef} autoPlay style={{ width: '400px', height: 'auto' }} />
      <button onClick={capture}>Capture</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {imageSrc && (
        <div style={{ position: 'relative' }}>
          <h2>Captured Image:</h2>
          <img src={imageSrc} alt="Captured" style={{ width: '400px', height: 'auto' }} />
          {predictions.length > 0 && predictions.map((pred, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                border: '2px solid red',
                left: `${pred.coordinates[0][0] * (400 / canvasRef.current.width)}px`,
                top: `${pred.coordinates[0][1] * (400 / canvasRef.current.height)}px`,
                width: `${(pred.coordinates[0][2] - pred.coordinates[0][0]) * (400 / canvasRef.current.width)}px`,
                height: `${(pred.coordinates[0][3] - pred.coordinates[0][1]) * (400 / canvasRef.current.height)}px`,
              }}
            >
              <p>Class: {classNames[pred.class]}</p>
              <p>Accuracy: {pred.confidence.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
