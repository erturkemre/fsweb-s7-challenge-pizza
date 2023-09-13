import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import styled from "styled-components";



const OrderSum = () => {

  const Card = styled.div`
  background-color:#faf7f2;
  border:none;
  border-radius: 5%;
  
  `;  
  const Button = styled.button`
    width:100%;
    background-color: #FDC913;
    border : none ;
    height: 2.5rem;
    border-radius: 5%;
  `;

  const Content = styled.div`
    padding: 0% 10%;
  `;


  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <CardBody>
        <Content>
        <CardTitle tag="h4">Sipariş Toplamı</CardTitle>
        <CardText>Seçimler {}</CardText>
        <CardText >Toplam  {}</CardText>
        </Content>
        <Button onClick={()=>{}}>SİPARİŞ VER</Button> //todo Link ekle
      </CardBody>
    </Card>
  );
};

export default OrderSum;
