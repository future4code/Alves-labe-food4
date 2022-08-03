import React, { useContext } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Components/BASE_URL';
import axios from 'axios';
import { goToFeed } from '../../Router/Coordinator'
import useForm from '../../Hooks/UseForm';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import { goToLogin } from '../../Router/Coordinator'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import logo from "../../img/Logologin.png";
import {
  ContainerLogin,
  ContainerForm,
  ButtonSignUp,


  // LogoSingUpPage,

} from './SingupStyled'

function Singup() {
  const navigate = useNavigate()
  const { } = useContext(GlobalContext)

  const { form, pegaDados, limpaCampos } = useForm({ name: "", email: "", cpf: "", password: "", confirmPassword: "" })


  const body = {
    "name": form.name,
    "email": form.email,
    "cpf": form.cpf,
    "password": form.password,
    "confirmPassword": form.confirmPassword
  }

  axios.post(`${BASE_URL}rappi4B/singup`, body)
    .then((res) => {
      console.log(res.data.token)
      localStorage.setItem('token', res.data.token)
      goToFeed(navigate)
    }).catch((err) => {
      console.log(err)
    })


  const onSubmitForm = (e) => {
    e.preventDefault()
    limpaCampos()
  }
  const [values, setValues] = useState({
    showPassword: false,
  });

  const [valueSenha, setValueSenha] = useState({
    showConfirmePassword: false,
  })

  const handleClickShowConfirme = () => {
    setValueSenha({ ...valueSenha, showConfirmePassword: !valueSenha.showConfirmePassword })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handlePassword = (e) => {
    e.preventDefault()
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>

      <ContainerLogin>
        <h3>Cadastrar</h3>

        <ContainerForm onSubmit={onSubmitForm} >
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





          <FormControl variant="outlined">

            <InputLabel required htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={valueSenha.showConfirmePassword ? 'text' : 'password'}
              value={form.password}
              name={"password"}
              onChange={pegaDados}
              placeholder={"minimo 6 caracteres"}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton

                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirme}
                    onMouseDown={handlePassword}
                    edge="end"

                  >
                    {valueSenha.showConfirmePassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />


          </FormControl>




          <FormControl variant="outlined">
            <InputLabel required htmlFor="outlined-adornment-password">Confirmar</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              required
              type={values.showPassword ? 'text' : 'password'}
              value={form.confirmPassword}
              onChange={pegaDados}
              name={"confirmPassword"}
              placeholder={"Confime a senha anterior"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <Button type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}>Criar</Button>
          <ButtonSignUp
            onClick={() => goToLogin(navigate)} variant={"text"}>
            Voltar para login? Clique aqui.
          </ButtonSignUp>
        </ContainerForm>
      </ContainerLogin>


    </div>
  )
}

export default Singup