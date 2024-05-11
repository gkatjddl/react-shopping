import {Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Cart from "./pages/cart";
import Home from "./pages/home";
import './App.css';



function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
