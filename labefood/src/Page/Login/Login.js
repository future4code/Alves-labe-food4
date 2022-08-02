import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToSingUp, goToFeed } from '../../Router/Coordinator'
import useForm from '../../Hooks/UseForm';
import { BASE_URL } from '../../Components/BASE_URL';
import axios from 'axios';
import 
{ ContainerLogin, 
  ContainerForm, 
  ButtonSignUp, 
  LoginButton, 
  PasswordInput, 
  EmailInput 
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
        console.log(res.data.token)
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
  <div>
    <ContainerLogin>
      <h3>Entrar</h3>
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
        <LoginButton onClick={()=> postLogin()}>Login</LoginButton>
        </ContainerForm>
        <ButtonSignUp
          onClick={() => goToSingUp(navigate)} variant={"text"}>
          Não Possui Cadastro? Clique aqui.
        </ButtonSignUp>
      
    </ContainerLogin>
  </div>
)
}

export default Login;