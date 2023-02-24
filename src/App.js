import React,{useState} from 'react'
import './App.css';
// import About from './components/About';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  const [Mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    typ:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

  const remClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode=(cls)=>{
    remClass();
    document.body.classList.add('bg-'+cls)
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been enabled','success')
      document.title='TextUI-Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
     
      
        document.title='TextUI-Light Mode'
      
    }
   
  }
  return (
    <>

  {/* <Router> */}
        <Navbar title="TextUI" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter your text" mode={Mode} />
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> </Route> */}
            {/* <Link className="nav-link" to={'/about'}>About</Link> */}
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text" mode={Mode} />}></Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
</>
  );
}
 
export default App;
