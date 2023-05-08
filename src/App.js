
import { useState } from 'react';
import './App.css';
import Alert from './componants/Alert';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform'
// import About from './componants/About';
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("DarkMode enabled", "success")
      document.title = "TextUtils - DarkMode"
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode enabled", "success")
      document.title = "TextUtils - Light Mode"

    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter Text here to analyze" mode={mode} showAlert={showAlert} />
        {/* <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element= */}
        {/* <Textform heading="Enter Text here to analyze" mode={mode} showAlert={showAlert} /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
