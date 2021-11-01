import * as React from 'react';
import { MouseEvent, useState } from 'react';

// Internal Imports
import Enso from '../../Images/Enso.png';

// MUI Core Imports
import { Menu, MenuItem, Avatar, Divider } from '@mui/material';

// MUI Icons
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  profileImage: string | null;
  logout: () => void;
}

const MenuCostum = ({ profileImage, logout }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const handleClickHistory = (event: MouseEvent<HTMLAnchorElement>) => {
  //     const directory = event.target.id;
  //     console.log(directory);
  //     history.push(directory);
  //   };

  const handleClickLogout = () => {
    logout();
  };

  return (
    <React.Fragment>
      <IconButton href={''} onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem href={'/getStarted'}>
          <Avatar src={profileImage ? profileImage : Enso} /> Profile
        </MenuItem>
        <MenuItem href={'/createSummon'}>
          <Avatar src={Enso} /> Create Summon
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClickLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MenuCostum;
