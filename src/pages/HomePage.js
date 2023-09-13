import React from "react";
import Header from "../layout/Header";
import styled from "styled-components";
import mvpBanner from "../Assets/mvp-banner.png"
import {Link} from 'react-router-dom'

const HomePage = () => {
  

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    background-color: #ce2829;
    color: white;
    width: 100%;
    height: 100vh;
  `;
  const P = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 4rem;
    font-family: "Barlow", sans-serif;
  `;

  const Button = styled.button`
      width: 10%;
      height: 20vh;
      border-radius: 20%;
      background-color:#FDC913;
  `;
  return (
    <Container>
      <Header />
      <P>
        <p>KOD ACIKTIRIR</p>
        PİZZA DOYURUR
      </P>
      <Button onClick>ACIKTIM</Button> //todo 
      <img src={mvpBanner} />
    </Container>
  );
};

export default HomePage;
