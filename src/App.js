import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import  React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';


function App() {
  const [mode, setMode]=React.useState(false)
  const darkTheme = createTheme({
    palette: {
      mode: mode? 'dark' : 'light',
    },
  });

  const onChangeMode=()=>{
    setMode(!mode)
  }
  return (
    <Router>
    
    <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
        
    
    </Router>
    
  );
}

export default App;
