import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import  React from 'react';


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
    <ThemeProvider theme={darkTheme} > 
        <Sidebar onChangeMode={onChangeMode} mode={mode}/>
    </ThemeProvider>
    
    
  );
}

export default App;
