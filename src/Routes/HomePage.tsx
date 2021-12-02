import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/HomeComponents/Header";
import Home from "./HeaderRoutes/Home";
import Explore from "./HeaderRoutes/Explore";
import Meassage from "./HeaderRoutes/Meassage";
export default function HomePage() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomePage/Explore" element={<Explore />} />
          <Route path="/HomePage/Meassage" element={<Meassage />} />
        </Routes>
      </Header>
    </div>
  );
}
