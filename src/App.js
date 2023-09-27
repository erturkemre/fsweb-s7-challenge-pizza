import React, { useState } from "react";

import { useEffect } from "react";

import axios from "axios";
import PageContent from "./layout/PageContent";
import Main from "./layout/Main";

const App = () => {

const[product, setProduct] = useState([]);

// useEffect(()=>{
//   axios.get(dummyData.json).then(res=> setProduct(res.product))
  
// },[])

  return (
    <>
      <Main product={product} />
    </>
  );
};
export default App;
