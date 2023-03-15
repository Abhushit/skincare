import React from "react";
import { CameraFill } from "react-bootstrap-icons";
import Webcam from "react-webcam";
import './App.css';

const videoConstraints = {
  width: 700,
  height: 800,
  facingMode: "user",
};

const svgIcon = () => (
  <svg
    width="100%"
    height="100%"
    className="svg"
    // viewBox="0 0 175 200"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <mask id="overlay-mask" x="0" y="0" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
        <circle cx="50%" cy="50%" r="185" />
      </mask>
    </defs>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      mask="url(#overlay-mask)"
      fillOpacity="0.4"
    />
  </svg>
);

function App() {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <>
      <div className="webcam-container">
        <Webcam
          audio={false}
          // height={800}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          // width={700}
          // videoConstraints={videoConstraints}
        />
        <div className="overlay-container">{svgIcon()}</div>
        <div className="text-white">
          <h2>Please stay in the mask</h2>
          <p>Press camera to click photo</p>
        </div>
        <button onClick={capture} className="btn_click">
          <CameraFill color="white" size={30} />
        </button>
      </div>
    </>
  );
}

export default App;
