import React from 'react';
import { useNavigate } from "react-router-dom"
import { goToEditProfile, goToEditAddress } from '../../Router/Coordinator'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Components/BASE_URL'
import editar from '../../Img/editar.png'
import {
  Container,
  UserStyle,
  Paragraph,
  Address,
  AddressParagraph,
  HistoryStyle,
  HistoryParagraph,
  CartParagraph
} from './ProfileStyle'

const Profile = () => {

  const navigate = useNavigate();

  const requestProfile = useRequestData({}, `${BASE_URL}rappi4B/profile`)
  console.log(requestProfile)
  const userProfile = requestProfile.user


  // const orders = useRequestData([], `${BASE_URL}rappi4B/history`)
  // const history = orders.orders

  return (
    <Container>
      <title>Meu perfil</title>

      <UserStyle>
        <Paragraph>{userProfile && userProfile.name} </Paragraph>
        <Paragraph>{userProfile && userProfile.email}</Paragraph>
        <Paragraph>{userProfile && userProfile.cpf}</Paragraph>

        <div>
          <img onClick={() => goToEditProfile(navigate, userProfile.id)} src={editar} alt="Edite seus dados pessoais" />
        </div>
      </UserStyle>
      <Address>
        <AddressParagraph>Endereço cadastrado</AddressParagraph>
        <Paragraph>{userProfile && userProfile.address}</Paragraph>
        <div>
          <img onClick={() => goToEditAddress(navigate, userProfile.id)} src={editar} alt="Edite seu endereço" />
        </div>
      </Address>
      <HistoryStyle>
        <HistoryParagraph>Histórico de pedidos</HistoryParagraph>

        <CartParagraph>Você não possui nenhum item</CartParagraph>
      </HistoryStyle>
    </Container>
  )
}

export default Profile;