import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToSingUp, goToFeed, } from '../../Router/Coordinator'
import useForm from '../../Hooks/UseForm';
import { BASE_URL } from '../../Components/BASE_URL';
import axios from 'axios';
import Logo from "../../Img/Logologin.png";
import 
{ ContainerLogin, 
  ContainerForm, 
  ButtonSignUp, 
  LoginButton, 
  PasswordInput, 
  EmailInput,
  LogoLoginPage ,
  Title,
  FormStyle
} from './LoginStyled'


function Login() {
  const navigate = useNavigate()
  const {} = useContext(GlobalContext)

  const { form, pegaDados, limpaCampos } = useForm({ email: "", password: "" })

  const postLogin = () => {
    const body = {
      "email": form.email,
      "password": form.password
    }

    axios.post(`${BASE_URL}rappi4B/login`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
      }).catch((err) => {
        console.log(err)
      })
 }

 const onSubmitForm = (e) => {
  e.preventDefault()
  limpaCampos()
}


return (
  <ContainerLogin>
    <LogoLoginPage src={Logo} alt={"Logo Ifuture"} />
      <Title>Entrar</Title>
      <ContainerForm onSubmit={onSubmitForm} >
        <EmailInput
          name='email'
          type='email'
          onChange={pegaDados}
          placeholder='E-mail'
          value={form.email}
        />
        <PasswordInput
          name='password'
          type='password'
          onChange={pegaDados}
          placeholder='Senha'
          value={form.password}
        />
        <LoginButton onClick={()=> postLogin()}>Entrar</LoginButton>
        </ContainerForm>
        <Title>
        <ButtonSignUp onClick={() => goToSingUp(navigate)} variant={"text"}>
        Não possui cadastro? Clique aqui. </ButtonSignUp>
        </Title>
      
    </ContainerLogin>
)
}
export default Login;