import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
export default function Topbar() {
  const navigate = useNavigate()

  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button variant="outlined" onClick={() => navigate("/portal/addmovie")}>Movie</Button>
          <Button variant="outlined" onClick={() => navigate("/portal/home")}>Home</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
