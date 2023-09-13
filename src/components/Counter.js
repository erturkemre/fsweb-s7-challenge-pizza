import React from "react";
import{ useState } from "react";
import CounterDisplay from "./CounterDisplay";


const Counter = (props) => {
  // useState Hook = function - Component Datası ve setter methodu oluşturur
  const [sayac, setSayac] = useState(1);

  const arttirAction = (e) => {
    setSayac(sayac + 1);
  };

  const azaltAction = (e) => {
    setSayac(sayac - 1);
  };

  

  return (
    
    <CounterDisplay
      sayac={sayac}
      arttirAction={arttirAction}
      azaltAction={azaltAction}
      
    />
  );
};

export default Counter;
