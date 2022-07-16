
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from 'react';
import Alert from "./components/Alert";
//this is router import statements
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  // this is state for theme of our app
  const [mode, setmode] = useState('light');
  // this state is for set alert on various events
  const [alert, setAlert] = useState(null);
  //this state is for set our custom backgound 
  const [customBg, setCustomBg] = useState('#ffffff')
  const showAlert =(message , type)=>{
    setAlert({
      msg: message ,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  // function is for custom background
  const customColorPicker = (newColor)=>{
    setCustomBg(newColor);
    document.body.style.backgroundColor = customBg;
    showAlert('custom background has been activated','success')

  }
  const toggleMode = ()=>{
    
    if(mode === 'light')
    {
      setmode('dark');
      setCustomBg('#042743')
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("dark mode has been enabled" , "success")
    }else
    {
      setmode('light');
      setCustomBg('#ffffff')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("light mode has been enabled" , "success")

    }
  }
  return (
    <>
    {/* <Router> */}
    {/* <Navbar/> */}
    <Navbar title='TextUtils'  aboutText= 'About us' mode={mode} toggleMode={toggleMode} customColorPicker={customColorPicker} customBg={customBg}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Routes>
          <Route exact path="/" element={<TextForm heading="Welcome" mode={mode} showAlert={showAlert} />}/>
         
          <Route exact path="/about" element={<About />}/>
    

        </Routes> */}
        <TextForm heading="Welcome" mode={mode} showAlert={showAlert} />
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;