import React from "react";
import HomePage from "../pages/HomePage";
import { Switch, Route } from "react-router-dom";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage"

const PageContent = (product) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pizza" exact>
          <OrderPage product={product} />
        </Route>
        <Route path="/success" exact>
          <SuccessPage />
        </Route>
        <Route path="*" exact>
          <p>Sayfa Bulunamadı</p>
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
