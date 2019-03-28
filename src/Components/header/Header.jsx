import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <AppBar position="static" style={{ background : '#f26d39'}}>
        <Toolbar>
          <IconButton  aria-label="Menu" style={{color : '#EEE'}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{color : '#EEE'}}>
            Invoice Download
          </Typography>
        </Toolbar>
      </AppBar>
    );
};

export default Header;