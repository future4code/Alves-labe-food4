import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToProfile } from '../../Router/Coordinator'
import useForm from '../../Hooks/UseForm';
import TextField from '@material-ui/core/TextField'
import { goToLogin } from '../../Router/Coordinator'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from "../../Img/Logologin.png";
import {
  ConteinerInput, 
  ButtonStyle,
  LogoSingUpPage, 
  ButtonLogin, 
  TextConteinerSingUpPage
} from './EditStyle'

export default function EditProfile() {
  const navigate = useNavigate()
  const { form, pegaDados, limpaCampos } = useForm({ name: "", email: "", cpf: "", password: "", confirmPassword: "" })
  const body = {
    "name": form.name,
    "email": form.email,
    "cpf": form.cpf,
    "password": form.password,
    "confirmPassword": form.confirmPassword
  }

  const mCPF = (cpf) =>{
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    limpaCampos()
  }


  return (
    <div>
      <ButtonLogin onClick={() => goToLogin(navigate)} ><ArrowBackIosIcon /></ButtonLogin>
      <LogoSingUpPage src={Logo} alt={"Logo Ifuture"} />
      <TextConteinerSingUpPage>Editar</TextConteinerSingUpPage>
      <form onSubmit={onSubmitForm} >

        <ConteinerInput>
          <TextField
            name={"name"}
            value={form.name}
            onChange={pegaDados}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            placeholder={"Nome e sobrenome"}
          />
        </ConteinerInput>
        
        <ConteinerInput>
          <TextField
            name={"email"}
            placeholder={"email@email.com"}
            value={form.email}
            onChange={pegaDados}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            required
            type={"email"}
          />
        </ConteinerInput>

        <ConteinerInput>

          <TextField
            name={"cpf"}
            placeholder={"000.000.000-00"}
            value={form.cpf}
            onChange={pegaDados}
            label={"CPF"}
            variant={"outlined"}
            fullWidth
            type={"cpf"}
            required
          />

        </ConteinerInput>

        <ConteinerInput>

          
          <ButtonStyle
           onClick={() => goToProfile(navigate)}
            fullWidth
            variant={"contained"}
          > Salvar

          </ButtonStyle>

        </ConteinerInput>
      </form>
    </div>
  )
}

