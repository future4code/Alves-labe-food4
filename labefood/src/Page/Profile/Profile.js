import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { goToEditProfile, goToEditAddress } from '../../Router/Coordinator'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Components/BASE_URL'
import editar from '../../Img/editar.png'
import axios from 'axios'
import {
  Container,
  UserStyle,
  Paragraph,
  Address,
  AddressParagraph,
  HistoryStyle,
  HistoryParagraph,
  CartParagraph,
  OrdemStyle,
  Total
} from './ProfileStyle'
import Footer from '../../Components/Footer/Footer'

const Profile = () => {

  const navigate = useNavigate();
  const requestHistory = useRequestData({}, `${BASE_URL}rappi4B/orders/history`)
  const [ordem, setOrdem] = useState()

  const requestProfile = useRequestData({}, `${BASE_URL}rappi4B/profile`)
  console.log(requestProfile)
  const userProfile = requestProfile.user

  const historico = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/rappi4B/orders/history`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((resposta) => {
      setOrdem(resposta.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    historico()
  }, [])
  console.log(ordem)
  const testeOrderMap = ordem && ordem.orders.map((teste) => {
    return <OrdemStyle>
      {teste.restaurantName}
      <Total>
      SUBTOTAL:{teste.totalPrice}
      </Total>
    </OrdemStyle>
  })
  return (
    <Container>
      <title>Meu perfil</title>

      <UserStyle>
        <Paragraph>
          <p>{userProfile && userProfile.name}</p>
          <p>{userProfile && userProfile.email}</p>
          <p>{userProfile && userProfile.cpf}</p>
        </Paragraph>
        <div>
          <img onClick={() => goToEditProfile(navigate, userProfile.id)} src={editar} alt="Edite seus dados pessoais" />
        </div>
      </UserStyle>
      <Address>
        <AddressParagraph>
          <p>Endereço cadastrado</p>
        </AddressParagraph>
        <Paragraph>
          <p>{userProfile && userProfile.address}</p>
        </Paragraph>
        <div>
          <img onClick={() => goToEditAddress(navigate, userProfile.id)} src={editar} alt="Edite seu endereço" />
        </div>
      </Address>
      <HistoryStyle>
        <HistoryParagraph>Histórico de pedidos</HistoryParagraph>
         <div>
          { testeOrderMap }
        </div>
      </HistoryStyle>
      <Footer />
    </Container>
  )
}

export default Profile;
