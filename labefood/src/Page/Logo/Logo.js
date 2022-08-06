import React from 'react'
import { ContainerLogo } from './logoStyle'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Img/Logologin.png'

const token = window.localStorage.getItem('token')

function Logo() {

  const navigate = useNavigate()

  if(token === null){
    setTimeout(() => {
      navigate.push("/login")
    }, 2000)
  } else {
    setTimeout(() => {
      navigate.push("/feed")
    }, 2000)
  }

  return (
    <ContainerLogo>
      <img src={Logo} alt="Logo da Rappi4"/>
    </ContainerLogo>
  )
}

export default Logo;