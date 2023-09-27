import React from "react";
import styled from "styled-components";
import { Plus, Minus } from "lucide-react";

const CounterDisplay = ({ sayac, arttirAction, azaltAction }) => {
  const Count = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 15%;
    background-color: #faf7f2;
    font-family: "Londrina Solid", cursive;
    width: 10vh;
    padding: 2% 0%;
    margin-bottom: 10%;
  `;
  const Button = styled.button`
    background-color: #faf7f2;
    border: none;
    cursor: pointer;
  `;

  return (
    <Count className="controls">
      <Button color="#faf7f2" onClick={azaltAction}>
        <Minus size={16} color="#393838" strokeWidth={1} />
      </Button>

      <div className="counter">{sayac}</div>
      <Button color="#faf7f2" onClick={arttirAction}>
        <Plus size={16} color="#393838" strokeWidth={1} />
      </Button>
    </Count>
  );
};

export default CounterDisplay;
