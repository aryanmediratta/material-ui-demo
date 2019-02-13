import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import ResponsiveDrawer from './ResponsiveDrawer'
import TemporyDrawer from './TemporyDrawer'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    return (
     <div>
        <NavBar>
        </NavBar>
        <Button variant = "contained" color="primary">
        Hello World
        </Button>
        <ResponsiveDrawer>
        </ResponsiveDrawer>
        <br/>
        </div>
    )
  }
}

export default App;
