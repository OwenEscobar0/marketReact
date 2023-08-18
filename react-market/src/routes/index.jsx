import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import NavBar from "../components/NavBar";
import LoginPage from "../pages/loginPage";
import DetailPage from "../pages/detailsPage";
import AddProduct from "../pages/AddProduct";
import AboutUs from "../pages/AboutUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="HomePage" element={<HomePage />} />

        <Route path="AddProduct" element={<AddProduct />} />
        <Route path="AboutUs" element={<AboutUs/>}/>
      </Route>
      <Route path="detailsPage/:id" element={<DetailPage />} />
      <Route path="LoginPage" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
