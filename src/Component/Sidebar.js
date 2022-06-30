import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Paper, TextareaAutosize, TextField } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Content from './Content';

const drawerWidth = 280;



export default function Sidebar(props) {
    console.log(props, 'ssssss');
  const { window, mode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
    
      <Box  sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
          mt: -5,
          bgcolor: 'background.paper',
          borderRadius: 1,
          marginLeft:2
        }}>
        <img src={require("../asset/Image/Avatar.png")} alt="Avatar" align="left" />
        <Typography style={{marginTop:20, fontSize:20}} gutterBottom={'true'}>Eze Josehp Ajalli</Typography>
      <Typography  gutterBottom={'true'}> eze.ajalli.joseph@gmail.com  <ArrowDropDownIcon /></Typography>
      </Box>
      <Divider />
      {/* <List>
        {['Home', 'Profile', 'AAER Meets', 'AAER Notes', "Bookmarks"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
        <List sx={{
          marginLeft:2
        }}>

        <ListItem>
  <ListItemText primary="App" style={{color: "rgba(0, 0, 0, 0.38)"}} />
</ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="AAER Meets" />
            </ListItemButton>
          </ListItem>



          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Book.png")} alt="Avatar" />
              </ListItemIcon>
              <ListItemText primary=" AAER Notes" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <BookmarkIcon/>
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
          </ListItem>


        </List>
      <Divider />


      <List  sx={{
          marginLeft:2
        }}>
      <ListItem>
  <ListItemText   style={{color: "rgba(0, 0, 0, 0.38)"}} primary="Legal research tools" />
  </ListItem>
  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/circle.png")} alt="Avatar" style={{backgroundColor:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Latest Judgements" />
              <ArrowRightIcon/>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/circle.png")} alt="Avatar" style={{backgroundColor:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Law Reports" />
              <ArrowRightIcon/>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Federal.png")} alt="Avatar" style={{backgroundColor:"white"}}  />
              </ListItemIcon>
              <ListItemText primary="Law of the Feration" />
            </ListItemButton>
          </ListItem>



          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Reg.png")} alt="Avatar"  style={{backgroundColor:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Regulations of MDAs" />
            </ListItemButton>
          </ListItem>


      </List>






      <Divider />
      <List  sx={{
          marginLeft:2
        }}>
      <ListItem>
  <ListItemText  style={{color: "rgba(0, 0, 0, 0.38)"}} primary="Courts & Agreements" />
  </ListItem>
  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Court.png")} alt="Avatar"  style={{backgroundColor:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Court Forms" />
              <ArrowRightIcon/>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/House.png")} alt="Avatar"   style={{backgroundColor:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Rules of Courts" />
              <ArrowRightIcon/>
            </ListItemButton>
          </ListItem>


         

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/message.png")} alt="Avatar" style={{backgroundColor:"white"}}  />
              </ListItemIcon>
              <ListItemText primary="Forms & Agreements" />
            </ListItemButton>
          </ListItem>
          



          <Divider />
          <ListItem>
  <ListItemText style={{color: "rgba(0, 0, 0, 0.38)"}} primary="Continous Education" />
  </ListItem>

  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Buy.png")} alt="Avatar" style={{backgroundColor:"white"}}   />
              </ListItemIcon>
              <ListItemText primary="Buy TextBook" />
            </ListItemButton>
          </ListItem>



  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Buy.png")} alt="Avatar" style={{backgroundColor:"white"}}  />
              </ListItemIcon>
              <ListItemText primary="Sell TextBook" />
            </ListItemButton>
          </ListItem>
          


          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Art.png")} alt="Avatar"  style={{backgroundColor:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Articles & Journals" />
            </ListItemButton>
          </ListItem>



          <Divider />
          <ListItem>
  <ListItemText primary="Extra"    style={{color: "rgba(0, 0, 0, 0.38)"}}/>
  </ListItem>

  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Star.png")} alt="Avatar"  style={{backgroundColor:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Nuggets" />
            </ListItemButton>
          </ListItem>
          

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../asset/Image/Blog.png")} alt="Avatar" style={{backgroundColor:"white"}}  />
              </ListItemIcon>
              <ListItemText primary="AAER Blog" />
            </ListItemButton>
          </ListItem>
          

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      elevation={0}

        position="absolute"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white" ,
          height:10
        
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon style={{color:mode?'white':'black'}}/>
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
          <b>Notes:</b>The textarea in this page should be a rich text.
          </Typography> */}

<Box
        sx={{ display: 'flex', p: 1,  borderRadius: 1  ,      justifyContent: 'space-evenly',marginTop:33}}
      >
        <div md={{ flexGrow: 1 }} >
        <Typography   	sx={{ display: { xs: 'none', sm: 'none', md: 'block' }}} style={{color:'black' ,marginLeft:"100px",fontSize:20}}><b >Notes</b>: The textarea in this page should be a rich text.</Typography></div>
        <Box   sx={{ flexDirection: 'row' ,display: 'flex', p: 1,  borderRadius: 1  ,      justifyContent: 'space-evenly', marginLeft: { xs: '0px', sm: '0px', md: '420px' }  }} 
        //  style={{color:'black' ,marginLeft:"400px"}}
         >

            
            <Box style={{backgroundColor:'grey', borderRadius:4,height:28}} 
             sx={{ 
                width: { sm:"90px",md:"90%"} ,
            }}
            >
             <img src={require("../asset/Image/G.png")} alt="Avatar" align="left" />

            </Box>
            <Box style={{backgroundColor:'black' ,height:28}}>
            </Box>

            {/* style={{color:'red' ,marginLeft:"40px" ,border:"1px solid black",padding:10}}  */}

            <Typography  
             sx={{ 
                width: { sm:"80px",md:"80%"} ,
                marginBottom:{ xs: 31,sm:29,md: 30 },
            // height: { sm:"100px",md:"20%"},
            padding:1,
            border:"2px solid black",
            color:'red',
            marginLeft:13}}>
          <img src={require("../asset/Image/AARE.png")} alt="Avatar" style={{width:50}} align="left" />
        </Typography>
        
        </Box>


       
      </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      

      {/* Content */}
      <Content mode={mode}/>



     
    </Box>
  );
}
