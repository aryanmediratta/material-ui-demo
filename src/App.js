import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
     <div>
        <NavBar />
        <Button variant="contained" color="primary">
        Hello World
        </Button>
     </div>
    )
  }
}

export default App;
