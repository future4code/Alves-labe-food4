import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goTocart, logout, search, goToRestaurantDetail } from '../../Router/Coordinator'
import useProtectedPage from '../../Hooks/UseProtectPage'
import { CampoDados, Icone, Pesquisa, CampoBotao, Image, CaptureOrder, ContainerImage, ContainerInfoTime, ContainerRenderMain, ContainerMin, ContainerFrete, ContainerNameRest, MainContainer, MainContainerMap } from "./FeedStyled"
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Components/BASE_URL'
import IconeLupa from '../../Img/Icone_Lupa.png'

function Feed() {
  const navigate = useNavigate()
  const { setRestaurenteSele, setFrete, restauranteSele, setID } = useContext(GlobalContext)
  const [valorInput, setValorInput] = useState('')

  const restaurants = useRequestData([], `${BASE_URL}rappi4B/restaurants`)
  console.log(restaurants)
  const renderizarRestaurantes = restaurants.restaurants && restaurants.restaurants.filter(res => {
    return res.category.toLowerCase().includes(valorInput.toLocaleLowerCase())
  })
    .map((res) => {
      return <MainContainerMap key={res.id}>
        <CaptureOrder onClick={() => onChangeRest(res.id, res.shipping)}>
          <ContainerImage>
            <Image src={res.logoUrl} width={20}/>
          </ContainerImage>
          <ContainerNameRest>
            {res.name}
          </ContainerNameRest>
          <ContainerInfoTime>
            <ContainerMin>
              {res.deliveryTime} - {res.deliveryTime + 10} min
            </ContainerMin>
            <ContainerFrete>
              Frete:R${res.shipping},00
            </ContainerFrete>
          </ContainerInfoTime>
        </CaptureOrder>
      </MainContainerMap>
    })

  const onChangeRest = (id, shipping) => {
    setRestaurenteSele(id)
    localStorage.setItem('id', id)
    setFrete(shipping)
    localStorage.setItem('frete', shipping)
    goToRestaurantDetail(navigate)
  }
  const getData = (tipo) => {
    setValorInput(tipo)
  }
  return (
    <MainContainer>
      Rappi - 4B
      <ContainerRenderMain>
        <CampoDados>
          <Icone src={IconeLupa} />
          <Pesquisa onClick={() => { search(navigate) }} placeholder='Restaurante' />
        </CampoDados>
        <CampoBotao>
          <button onClick={() => getData('')}>Todas Categorias</button>
          <button onClick={() => getData('Árabe')}>Árabe</button>
          <button onClick={() => getData('Sorvete')}>Sorvete</button>
          <button onClick={() => getData('Carnes')}>Carnes</button>
          <button onClick={() => getData('Petiscos')}>Petiscos</button>
          <button onClick={() => getData('Asiática')}>Asiática</button>
          <button onClick={() => getData('Hamburgue')}>Hamburgue</button>
          <button onClick={() => getData('Italiana')}>Italiana</button>
          <button onClick={() => getData('Baiana')}>Baiana</button>
          <button onClick={() => getData('Mexicana')}>Mexicana</button>
        </CampoBotao>
        {renderizarRestaurantes}
      </ContainerRenderMain>
      <button onClick={() => logout(navigate)}>Logout</button>
      <button onClick={() => goTocart(navigate)}>IR PARA CARRINHO</button>
    </MainContainer>
  )
}

export default Feed