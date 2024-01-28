import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFOUND from "./pages/PageNotFOUND.JSX";
import { Category, Product, ProductLayout, Products } from "./products";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import PrivateRoute from "./PrivateRoute";

function SiteRoutes({handleLogin,user}) {
  return (
    <Routes>
      <Route path="/" element={<Home user = {user} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<ProductLayout/>}>
        <Route index={true} element={<Products user= {user}/>}/>
        <Route path="category/:categoryName" element={<Category user={user} />} />
        <Route path="product/:productId" element={<Product user = {user}/>} />

      </Route>
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/fav"element={<PrivateRoute user={user}><Fav user={user}/></PrivateRoute>}/>
      <Route path="*" element={<PageNotFOUND />} />
      <Route path="/favs" element={<Fav />} />
    </Routes>
  );
}

export default SiteRoutes;