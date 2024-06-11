import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NewsPage from "./Pages/NewsPage/NewsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<NewsPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
