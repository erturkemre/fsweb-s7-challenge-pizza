import React from "react";
import styled from "styled-components";
import loc from "../Assets/adv-aseets/icons/icon-1.png";
import mail from "../Assets/adv-aseets/icons/icon-2.png";
import phone from "../Assets/adv-aseets/icons/icon-3.png";
import insta0 from "../Assets/adv-aseets/insta/li-0.png";
import insta1 from "../Assets/adv-aseets/insta/li-1.png";
import insta2 from "../Assets/adv-aseets/insta/li-2.png";
import insta3 from "../Assets/adv-aseets/insta/li-3.png";
import insta4 from "../Assets/adv-aseets/insta/li-4.png";
import insta5 from "../Assets/adv-aseets/insta/li-5.png";

const Footer = () => {
  const FooterConatiner = styled.footer`
    background: #292929;
    display: flex;
    color: #ffffff;
    text-align: center;
    width: 100%;
    height: 4%;
    justify-content: space-between;
  `;

  const AddressRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Londrina Solid", cursive;
    margin-left: 10%;
    justify-content: center;
  `;
  const Contact = styled.div`
    display: flex;
    font-family: Roboto;
    align-items: center;
  `;

  const MenuRow = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width:20%;
    justify-content:center;
  `;

  const InstagramRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    width:30%;
    margin-top: 3%;
  `;
  const Copyright = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #292929;
    color: white;
  `;
  const SocialIcon = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;

    margin: 10px;
  `;
  const Hr= styled.div`
    background-color:#5F5F5F ;
    width:100%;
    height: 0.1rem;
  `;
  const P = styled.div`
    font-size: 1rem;
    padding: 2% 0%
  `;
  const H = styled.p`
    font-size:2.5rem;
    margin: 0;
  `;

  return (
    <div>
      <FooterConatiner>
        <AddressRow>
          <H>Teknolojik</H>
          <H> Yemekler</H>
          <Contact>
            <img src={loc} />
            <p>İstanbu,Turkey</p>
          </Contact>
          <Contact>
            <img src={mail} />
            <p>aciktim@teknolojikyemekler.com</p>
          </Contact>
          <Contact>
            <img src={phone} />
            <p>+90 216 123 45 87</p>
          </Contact>
        </AddressRow>

        <MenuRow>
          <h3>Hot Menu</h3>

          <P>Terminal Pizza </P>
          <P>5 kişilik Hecakthlon Pizza</P>
          <P>useEffect Tavuklu Pizza</P>
          <P>Beyaz Console Frosty</P>
          <P>Testler Geçti Mutlu Burger</P>
          <P>Position Absolute Acı Burger</P>
        </MenuRow>

        <InstagramRow>
          <h3>Instagram</h3>
          <SocialIcon>
            <SocialIcon>
              <img src={insta0} />
            </SocialIcon>
            <SocialIcon>
              <img src={insta1} />
            </SocialIcon>
            <SocialIcon>
              <img src={insta2} />
            </SocialIcon>
            <SocialIcon>
              <img src={insta3} />
            </SocialIcon>
            <SocialIcon>
              <img src={insta4} />
            </SocialIcon>
            <SocialIcon>
              <img src={insta5} />
            </SocialIcon>
          </SocialIcon>
        </InstagramRow>
      </FooterConatiner>
      <Hr></Hr>
      <Copyright>
        <p>@ 2023 Teknolojik Yemekler</p>
        <div>
            
        </div>
      </Copyright>
    </div>
  );
};

export default Footer;
