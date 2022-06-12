import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";

import Topbar from "./components/header/Topbar";
import Header from "./components/navbar/Header";
import Total from "./components/total/Total";

import './App.css'

const App =()=> {
  return (
    <div className="App">
      <div className="app">

      <Topbar/>
      <Header/>
      <Card/><br/>
      <Total/><br/>
      <Footer/>

      </div>
      
    </div>
  );
}

export default App;
