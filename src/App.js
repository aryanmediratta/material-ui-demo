import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import TemporyDrawer from './TemporyDrawer'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

class App extends Component {
  render() {
    return (
     <div>
        <NavBar />
        <Button variant="contained" color="primary">
        Hello World
        </Button>
        <TemporyDrawer />
     </div>
    )
  }
}

export default App;
