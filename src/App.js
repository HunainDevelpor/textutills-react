import React,{ useState } from 'react';
import Navbar from './Navbar';
import Textutills from './Textutills';
import Alert from './Alert';

function App() {
  const [alert,setAlert]=useState(null);
  const [text,setText]=useState("Enable Dark ");
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if (mode==='light') {
      setText('Enable Dark');
      setMode('dark');
      document.body.style.backgroundColor="gray";
      showAlert("Dark Mode has been enabled ","success");
    }else{
      setMode('light');
      setText('Enable Light');
      
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled ","success");
    }
  }
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);
  },1500)
}





  
  return (
    <>
     <Navbar mode={mode} text={text} togglemode={toggleMode}/>
    <Alert alert={alert}/>
    <Textutills showAlert={showAlert} mode={mode}/>
    
 
    </>
  );
}

export default App;
