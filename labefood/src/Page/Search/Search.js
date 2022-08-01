import React, { useContext, useState } from 'react'
import useProtectedPage from '../../Hooks/UseProtectPage'
import { GlobalContext } from '../../Global/GlobalContext'
import useRequestData from '../../Hooks/useRequestData'
import { Texto, CampoDados, Icone, Pesquisa, Image, CaptureOrder, ContainerImage, ContainerInfoTime, ContainerRenderMain, ContainerMin, ContainerFrete, ContainerNameRest, MainContainer, MainContainerMap } from "../Feed/FeedStyled"
import { BASE_URL } from '../../Components/BASE_URL';
import IconeLupa from '../../Img/Icone_Lupa.png'

function Search() {
  const { } = useContext(GlobalContext)
  const [valorInput, setValorInput] = useState('')

  const restaurants = useRequestData([], `${BASE_URL}rappi4B/restaurants`)

  const renderizarRestaurantes = restaurants.restaurants && restaurants.restaurants.filter(res => {
    return res.name.toLowerCase().includes(valorInput.toLocaleLowerCase())
  }).map((res) => {
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

  const getData = (e) => {
    setValorInput(e.target.value)
  }

  const tela = () => {
    if (valorInput === '') {
      return <Texto>Busque por nome de restaurante</Texto>
    } else {
      return <>{renderizarRestaurantes}</>
    }
  }

  return (
    <div>
      <CampoDados>
        <Icone src={IconeLupa} />
        <Pesquisa value={valorInput} onChange={getData} placeholder='Restaurante' />
      </CampoDados>
      {tela()}
    </div>
  )
}

export default Search