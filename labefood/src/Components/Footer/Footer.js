import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Global/GlobalContext';
import { ContainerMenu, Pedido } from './FooterStyle';
import Home from '../../Img/homepage.png'
import Cart from '../../Img/shopping-cart.png'
import Avatar from '../../Img/avatar.png'
import { goToProfile, goToFeed, goTocart } from '../../Router/Coordinator'
import relogio from '../../Img/clock.png'

function Footer() {
  const navigate = useNavigate()
  const { pedido } = useContext(GlobalContext)

  const onClickMenu = (tela) => {
    navigate.push(tela)
  }

  const pedidoAndamento = pedido ? (<Pedido>
    <div>
      <img src={relogio} />
    </div>
    <div>
      <p>Pedido em andamento</p>
      <h4>{pedido && pedido.restaurantName}</h4>
      <div>
        <h4>SUBTOTAL {pedido && pedido.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
      </div>
    </div>
  </Pedido>) : (<></>)

  return (
    <div>
      {pedidoAndamento}
      <ContainerMenu>
        <div onClick={() => goToFeed(navigate)}>
          <img src={Home} alt="Home" />
        </div>
        <div onClick={() => goTocart(navigate)}>
          <img src={Cart} alt="Carrinho" />
        </div>
        <div onClick={() => goToProfile(navigate)}>
          <img src={Avatar} alt="Usuario" />
        </div>
      </ContainerMenu>
    </div>
  )
}

export default Footer;