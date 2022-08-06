import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerMenu } from './FooterStyle';
import Home from '../../Img/homepage.png'
import Cart from '../../Img/shopping-cart.png'
import Avatar from '../../Img/avatar.png'
import { goToProfile, goToFeed, goTocart } from '../../Router/Coordinator'

function Footer() {
  const navigate = useNavigate()

  const onClickMenu = (tela) => {
    navigate.push(tela)
  }

  return (
    <ContainerMenu>
      <div onClick={()=> goToFeed(navigate)}>
        <img src={Home} alt="Home" />
      </div>
      <div onClick={() => goTocart(navigate)}>
        <img src={Cart} alt="Carrinho" />
      </div>
      <div onClick={() => goToProfile(navigate)}>
        <img src={Avatar} alt="Usuario" />
      </div>
    </ContainerMenu>
  )
}

export default Footer;