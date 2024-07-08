import { DashboardCustomize, LogoutRounded } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import MainContext from '../../context'
const UserProfile = ({setShowProfile}) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user} = React.useContext(MainContext)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings" placement="left-start" arrow>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src={user.srcProfile}
          >
            up
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px"  }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        disableScrollLock={true}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">
          <DashboardCustomize className="mr-2" /> Dashboard 
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseUserMenu();
            localStorage.removeItem("userId");
            setShowProfile((draft)=> !draft)
          }}
        >
          <Typography textAlign="center">
          <LogoutRounded className="mr-2" /> Logout 
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default UserProfile;
