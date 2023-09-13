import React from "react";
import styled from "styled-components";


const Header = () =>{
    const H1 = styled.h1`
    background: #CE2829;
    font-family: 'Londrina Solid', cursive;
    color: #FFFFFF;
    text-align: center;
    width: 100%;
    padding: 1% 0;
    margin: 0;
    `;
    return(
        <header>
            <H1>Teknolojik Yemekler</H1>
        </header>
        )
}

export default Header;