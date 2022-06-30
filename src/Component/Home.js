import React from 'react'
import Sidebar from './Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Home = () => {
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
  )
}

export default Home
