import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledLayout from "./components/StyledLayout";
import Home from "./components/Home";
import CategoryFilter from "./components/CategoryFilter"
import MenuFilter from "./components/MenuDisplay"
import ShoppingFilter from "./components/ShoppingListDisplay"
import Item from "./components/Item";
import NoPage from "./components/NoPage";
import AboutUs from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import {items, people } from "./data/data";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StyledLayout/>}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs people={people} />}>
          </Route>
            <Route path="recipes" element={<CategoryFilter details={items} type={"recipe"}/>} > 
            <Route path=":itemId" element={<Item items={items} />} />
          </Route> 
          <Route path="/menus" element={<MenuFilter details={items}/>}>
          </Route>
          <Route path="/shopping" element={<ShoppingFilter details={items}/>}>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
   }
