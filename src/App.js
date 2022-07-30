// import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import axios from "axios";
import AppContext from "./context";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import LogIn from "./components/LogIn/LogIn";


function App() {

//   useEffect(() => {
//     async function fetchData() {
//       const cartResponse = await axios.get(
//         "https://629f94fc461f8173e4ececc6.mockapi.io/cart"
//       );
//       const favoriteResponse = await axios.get(
//         "https://629f94fc461f8173e4ececc6.mockapi.io/favorites"
//       );
//       const itemsResponse = await axios.get(
//         "https://629f94fc461f8173e4ececc6.mockapi.io/decks"
//       );

// 	  setCartItems(cartResponse.data);
//       setFavoriteItems(favoriteResponse.data);
//       setItems(itemsResponse.data);
//     }

//     fetchData();
//   }, []);

  return (
    <AppContext.Provider
      value={{ }}>
      <div className="wrapper">
       
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home />
            }
          />
          <Route
            path="/favorites"
            exact
            element={
              <LogIn
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
