import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './header.css';

export default function Header() {
  return (
    <div className="header__container">
      <AppBar position="static">
        <Typography variant="h4">
            WEATHER APP
          </Typography>
      </AppBar>
    </div>
  );
}