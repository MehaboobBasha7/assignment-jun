import logo from './logo.svg';
import './App.css';
import Nav from "./components/Navbar";
import "./NavStyles.css";
import Content from "./components/ContentWrap"
import { useState } from 'react';
import Cards from "./components/Cards";
import Freewat from "./FreeWatchh/Freewat";
import movies from "./constants/popular-movies"




function App() {

  const [data,setData] = useState([]);


  return (
    <div className="App">

      <Nav/>
      <Content/>
      <Cards/>
      <Freewat/>


    </div>
  );
}

export default App;
