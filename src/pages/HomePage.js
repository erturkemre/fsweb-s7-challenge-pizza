import React from "react";
import Header from "../layout/Header";
import styled from "styled-components";
import mvpBanner from "../Assets/mvp-banner.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 101%;
      z-index: -1;
      margin-top: 25%;
    }
  `;
  const P = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.5rem;
    margin-top: 4%;
    font-family: "Barlow", sans-serif;
    p {
      color:white;
      margin: 0;
    }
  `;

  const Button = styled.button`
    font-family: "Barlow", sans-serif;
    font-weight: bold;
    width: 10vw;
    height: 6vh;
    border: none;
    border-radius: 22px;
    color: #292929;
    background-color: #fdc913;
    cursor: pointer;
  `;

  return (
   
      <Container>
        <Header />
        <P>
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA DOYURUR</p>
          <Link to="/pizza">
            <Button id="order-pizza">ACIKTIM</Button>
          </Link>
        </P>
        <img src={mvpBanner} />
      </Container>
   
  );
};

export default HomePage;
