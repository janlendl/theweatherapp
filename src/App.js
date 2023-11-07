//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <SearchBar/> 
    <WeatherInfo />   
    </>
  )
}

export default App;
