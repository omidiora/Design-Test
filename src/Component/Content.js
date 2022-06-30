import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Paper, TextareaAutosize, TextField } from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';


const drawerWidth = 280;
const Content = ({mode}) => {
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3,marginLeft: { xs: -2, sm: -2,md:10}, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
    <Paper elevation={5} 

sx={{ 
 width: { sm:"900px",md:"90%"} ,
 height: { sm:"200px",md:"20%"},
marginTop:4,

display: "flex",
flexDirection: "column",
justifyContent:'flex-start',}}

    

> 
        <Typography align='left' gutterBottom={true} style={{padding:40, fontSize:20}}><b>Make Note</b></Typography>
        <TextField
        size="small"
         placeholder='Subject'
        id="demo-helper-text-aligned-no-helper"
         sx={{
            width: { xs: 250, sm: 100,md:690 },
            marginLeft: { xs: 2, sm: 2,md:5 },            
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        
        InputProps={{
           
          startAdornment: (
            <InputAdornment position="start">
               <img src={require("../asset/Image/A.png")} alt="Avatar" 
               style={{backgroundColor:"white"}} />
            </InputAdornment>
          ),
        }}
    
      /> 



<TextField
elevation={3}
   multiline
         placeholder='Enter Note'
         fullWidth
         sx={{
          width: { xs: 250, sm: 100,md:690 },
          marginLeft: { xs: 2, sm: 2,md:5 }, 
          marginTop:3,   
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          inputProps={{
            inputComponent: TextareaAutosize,
            rows: 5,
            style: {
              height:100,
              padding: '0 14px',
              marginTop:12
            },
        }}
        
       
  /> 

<Button variant="contained" size='small' style={{width:160,paddingBottom:15,marginBottom:220, left:28,top:30}}>SAVE NEW NOTE</Button>

    </Paper>



    <Paper elevation={5} sx={{ 
    width: { sm:"900px",md:"90%"} ,
height: { sm:"100px",md:"20%"},
marginTop:10,

display: "flex",
flexDirection: "column",
justifyContent:'flex-start',}}> 
<div style={{marginTop:30,marginLeft:40}}>
<Typography align='left'  gutterBottom={true} style={{padding:10, fontSize:18, color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>Your Note</Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:25,marginBottom:18}}>How could people together can help bringing peace to the world</Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:18, marginTop:10 ,color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>14th June 2022 </Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:20, marginTop:-10,color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
 labore et dolore magna aliqua. Animi distinctio ea eligendi laborum 
 nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!
 </Typography>

</div>

{/* */}
    </Paper>
      


    <Paper elevation={5}  sx={{ 
    width: { sm:"900px",md:"90%"} ,
height: { sm:"100px",md:"20%"},
marginTop:10,

display: "flex",
flexDirection: "column",
justifyContent:'flex-start',}}> 
<div style={{marginTop:30,marginLeft:40}}>
<Typography align='left'  gutterBottom={true} style={{padding:10, fontSize:18, color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>Your Note</Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:25,marginBottom:18}}>How could people together can help bringing peace to the world</Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:18, marginTop:10 ,color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>14th June 2022 </Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:20, marginTop:-10,color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
 labore et dolore magna aliqua. Animi distinctio ea eligendi laborum 
 nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!
 </Typography>

</div>

{/* */}
    </Paper>



    <Paper elevation={5}  sx={{ 
    width: { sm:"900px",md:"90%"} ,
height: { sm:"200px",md:"20%"},
marginTop:10,

display: "flex",
flexDirection: "column",
justifyContent:'flex-start',}}> 
<div style={{marginTop:30,marginLeft:40}}>
<Typography align='left'  gutterBottom={true} style={{padding:10, fontSize:18, color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>Your Note</Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:25,marginBottom:18}}>How could people together can help bringing peace to the world</Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:18, marginTop:10 ,color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>14th June 2022 </Typography>
 <Typography align='left' gutterBottom={true} style={{padding:10, fontSize:20, marginTop:-10,color:mode=='dark'&& "rgba(0, 0, 0, 0.6)"}}>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
 labore et dolore magna aliqua. Animi distinctio ea eligendi laborum 
 nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!
 </Typography>

</div>

{/* */}
    </Paper>


    <Typography align="center" style={{paddinBottom:120,marginTop:70,marginBottom:60}}>
     <img src={require("../asset/Image/c.png")} alt="Avatar"  style={{marginTop:5}} />

    {" "} 2022. AARE. All Rights Reserved.
     </Typography>
      
      </Box>
    </>
  )
}

export default Content