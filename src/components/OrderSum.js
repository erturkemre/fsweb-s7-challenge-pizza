import React from "react";
import { CardBody, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";
import product from "../dummyData"

const OrderSum = (props) => {
  const {submitHandler,formdata, adet, isValid} = props;

  const handleSubmit=(()=>{
    submitHandler();
  })

  const Card = styled.div`
    background-color: #faf7f2;
    border: none;
    border-radius: 5%;
  `;
  const Button = styled.button`
    width: 100%;
    background-color: #fdc913;
    border: none;
    height: 2.5rem;
    border-radius: 5%;
    cursor: pointer;
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
          <CardText>Seçimler: {`${formdata.ekMalzemeler.length*5}₺`}</CardText>
          <CardText>Toplam: {`${adet*(formdata.ekMalzemeler.length*5 + product[0].price)}₺`}</CardText>
        </Content>
        
          <Button id="order-button" type="submit" onClick={handleSubmit} disabled={!isValid}>
            SİPARİŞ VER
          </Button >
        
      </CardBody>
    </Card>
  );
};

export default OrderSum;
