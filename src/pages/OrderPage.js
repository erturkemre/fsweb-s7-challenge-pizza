import React from "react";
import Header from "../layout/Header";
import Banner from "../layout/Banner";

const OrderPage = (props) => {
  const { img, productName, price, description, code, point } = props;

  return (
    <div>
      <Header />
      <Banner
        img={img}
        productName={productName}
        price={price}
        description={description}
        code={code}
        point={point}
      />
    </div>
  );
};

export default OrderPage;
