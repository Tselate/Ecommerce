import React from "react"
import Products from "./Products"
import Header from "./components/Header"
import Cart from "./Cart"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      

      <Header/>
      <Routes>
        <Route exact path="/" element={<Products/>} />        
        <Route path="/cart" element={<Cart/>}/>
     </Routes>
  
    </>
  )
}
export default App;
