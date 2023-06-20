import React, { useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import SearchBar from "./components/SearchBar";
import OrderSumary from "./components/OrderSumary";
import OrderData from "./components/OrderData";
import PaymentMethod from "./components/PaymentMethod";
import NavBarAbout from "../about/components/NavBarAbout";
import Footer from "../../components/footer/Footer";

import imageProduct from "../../assets/18.png";
const Cart = () => {
  const [values, setValues] = useState([
    {
      state: true,
      img: imageProduct,
      name: "Porem ipsum Porem ipsum ",
      size: "s",
      amount: 1,
      price: 8,
      color: "black",
    },
    {
      state: true,
      img: imageProduct,
      name: "Porem ipsum Porem ipsum ",
      size: "s",
      amount: 1,
      price: 12,
      color: "black",
    },
    {
      state: true,
      img: imageProduct,
      name: "Porem ipsum Porem ipsum ",
      size: "s",
      amount: 1,
      price: 5,
      color: "black",
    },
  ]);
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12}>
        <NavBarAbout />
      </Grid>
      <Grid item xs={11} md={10}>
        <Grid container columnSpacing={4} justifyContent={"space-around"}>
          <Grid item xs={12} md={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={12}md={4}>
            <OrderSumary data={values} />
          </Grid>
        </Grid>
        <Grid container columnSpacing={4} justifyContent={"space-around"}>
          <Grid item xs={12} md={6}>
            <OrderData data={values} setData={setValues} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PaymentMethod />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};
export default Cart;
