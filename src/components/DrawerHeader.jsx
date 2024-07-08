import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";

import * as React from "react";
import { Menu } from "./Header/Menu";
import UserProfile from "./Header/UserProfile";

export default function DrawerHeader({ open, setDrawerOpen }) {
    const closeDrawer= () =>{ setDrawerOpen(false)}
  const DrawerList = (
    <Box
      sx={{ width: 250 , p:4 }}
      role="presentation"
    >
        <UserProfile/>  
        <div className='my-14' style={{margin:'130px 0 30px 0 '}}>
        <Divider/>
        </div>
      <Menu close={closeDrawer}/>
    </Box>
  );

  return (
    <div>
      <IconButton
        className="p-6"
        disableRipple
        onClick={() => setDrawerOpen(!open)}
      >
        {open ? <CloseRounded /> : <MenuRounded />}
      </IconButton>
      <Drawer sx={{'& .MuiPaper-root':{backgroundColor:'#8000ff5d ' , backdropFilter:'blur(8px)'}}} open={open} onClose={() => setDrawerOpen(false)}>
        
        {DrawerList}
      </Drawer>
    </div>
  );
}
