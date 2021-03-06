import React, {  }  from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import { getHomeCategories } from "./components/services/categories";
import BonusConditions from "./pages/BonusConditions";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Services from "./pages/Services";
import StockId from "./pages/StockId";
import Stocks from "./pages/Stocks";
import './styles/App.css'
import Catalog from "./pages/Catalog";
import { CatContext } from "./context";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Bonus from "./pages/Bonus";
import Search from "./pages/Search";
import NotFound404 from "./pages/NotFound404";
import Contacts from "./pages/Contacts";
import PausePrompBlock from "./components/PausePrompBlock";
import SearchForm from "./pages/SearchForm";

function App() {

  const [homeCategories, setHomeCategories] = useState([])

  async function fetchHomeCategories() {
    const result = await getHomeCategories()
    setHomeCategories(result)
  }

  useEffect(() => {
    fetchHomeCategories()
  }, [])

  return (
      <CatContext.Provider value={{homeCategories}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='info' element={<Info />} />
            <Route path='info/stocks' element={<Stocks />} />
            <Route path='info/stocks/:title' element={<StockId />} />
            <Route path='info/services' element={<Services />} />
            <Route path='info/delivery' element={<Delivery />} />
            <Route path='info/bonus/:phone' element={<Bonus />} />
            <Route path='info/bonus_conditions' element={<BonusConditions />} />
            <Route path='info/contacts' element={<Contacts />} />
            <Route path='categories' element={<Categories />} />
            <Route path='category/:id' element={<Category />} />
            <Route path='catalog/:id' element={<Catalog />} />
            <Route path='catalog/:cat_id/product/:id' element={<Product />} />
            <Route path='product/:id' element={<Product />} />
            <Route path='search' element={<SearchForm />} />
            <Route path='search/:query' element={<Search />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>

        <PausePrompBlock />

      </CatContext.Provider>
  );
}

export default App;
