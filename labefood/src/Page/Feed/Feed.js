import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../Router/Coordinator'
import useProtectedPage from '../../Hooks/UseProtectPage'
import axios from "axios"
import { Image, CaptureOrder, ContainerImage, ContainerInfoTime, ContainerRenderMain, ContainerMin, ContainerFrete, ContainerNameRest, MainContainer, MainContainerMap } from "./FeedStyled"


function Feed() {
  const navigate = useNavigate()
  const { } = useContext(GlobalContext)
  const [restaurants, setRestaurants] = useState([])
  const getRestaurant = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants`, {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFTWEIxTlVBTFJzRkk5NG80TGMxIiwibmFtZSI6IlBldHJpY2siLCJlbWFpbCI6IlBldHJpY2tAZnV0dXJlNC5jb20iLCJjcGYiOiIxMjEuMTIxLjEyMS0xMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTkzNzAwNTV9.as2e97GsHIID2dGqmzfnwKW-wGPYOqSKnq_JfXtr7rI"
      }
    }).then((resposta) => {
      console.log(resposta.data.restaurants)
      setRestaurants(resposta.data.restaurants)
    }).catch((erro) => {
      console.log(erro.response.data)
    })
  }
  useEffect(() => {
    getRestaurant()
  }, [])
  console.log(restaurants)
  const renderizarRestaurantes = restaurants && restaurants.map((res) => {
    return <MainContainerMap key={res.id}>
      <CaptureOrder>
        <ContainerImage>
          <Image src={res.logoUrl} width={20} />
        </ContainerImage>
        <ContainerNameRest>
          {res.name}
        </ContainerNameRest>
        <ContainerInfoTime>
          <ContainerMin>
            {res.deliveryTime}min
          </ContainerMin>
          <ContainerFrete>
            Frete:R${res.shipping},00
          </ContainerFrete>
        </ContainerInfoTime>
      </CaptureOrder>
    </MainContainerMap>
  })


  return (
    <MainContainer>
      Rappi - 4B
      <ContainerRenderMain>
        {renderizarRestaurantes}
      </ContainerRenderMain>
      <button onClick={() => logout(navigate)}>Logout</button>
    </MainContainer>
  )
}

export default Feed