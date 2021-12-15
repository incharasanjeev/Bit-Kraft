import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import navbar from "./components/navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/Api";
import CustomizedDialogs from './components/dialog';


function App() {
  return (
    <div className="App">
      <CustomizedDialogs title=""> 
      <MyCard />
      </CustomizedDialogs>
      <navbar />
      <h1 > welcome to cricket league</h1>
      
        
    </div>
  );
}

export default App;
