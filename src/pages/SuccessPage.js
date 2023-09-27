import React from "react";
import Header from "../layout/Header";
import styled from "styled-components";

const SuccessPage = () =>{
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        background-color: #CE2829;
        color: white;
        width:100%;
        height:100vh;

    `;
    const P = styled.p`
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size: 4rem;
        font-family: "Barlow", sans-serif;
    `;


    return(
        <Container>
            <Header />
            <P><p>TEBRİKLER!</p>
            SİPARİŞİNİZ ALINDI!</P>
            <div>
                
            </div>
        </Container>
    )
}
export default SuccessPage;