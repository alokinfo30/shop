import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          ></Route>
    
          <Route
            path="/filteredProducts/T-Shirts/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
