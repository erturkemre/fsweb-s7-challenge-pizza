import React from "react";
import Header from "../layout/Header";
import Banner from "../components/Banner";
import Footer from "../layout/Footer";
import styled from "styled-components";
import OrderForm from "../components/OrderForm";

const OrderPage = (product) => {
    const Container = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-between;

    `;

  return (
    <Container>
      <Header />
      <div>
        <Banner product={product}/>
        <OrderForm product={product} />
      </div>
      <Footer />
    </Container>
  );
};

export default OrderPage;

