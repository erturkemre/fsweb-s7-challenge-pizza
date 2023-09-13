import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import PageContent from "./PageContent";
import styled from "styled-components";
import OrderForm from "../components/OrderForm";

const Main = (product) => {
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
        <OrderForm />
      </div>
      <Footer />
    </Container>
  );
};

export default Main;
