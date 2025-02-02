import React from "react";
import img from "../Assets/adv-aseets/adv-form-banner.png";
import "../Assets/adv-aseets/food-1.png";
import "../Assets/adv-aseets/food-2.png";
import "../Assets/adv-aseets/food-3.png";
import styled from "styled-components";
import product from "../dummyData";

const Banner = (props) => {
  // const { product } = props;
  const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #faf7f2;

    div {
      
      width: 51%;
    }

    h3 {
      text-align: start;
      font-weight: 700;
    }
  `;
  const Inf = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
     display:flex;
     justify-content: space-evenly;
    }
  `;
  const Price = styled.p`
    font-family: "Barlow", sans-serif;
    font-weight: bold;
    font-size: 2rem;
  `;

  return (
    <Container>
      <div>
        <img src={img} alt="orderBannerImg" />
        <p>Anasayfa-Seçenekler-Sipariş Oluştur</p>
        <h3>{product[0].productName}</h3>
        <Inf>
          <Price>{product[0].price}₺</Price>
          <div className="d-flex">
            <p>{product[0].point}</p>
            <p>{`{${product[0].productCode}}`}</p>
          </div>
        </Inf>
        <p>{product[0].description}</p>
      </div>
    </Container>
  );
};
export default Banner;
