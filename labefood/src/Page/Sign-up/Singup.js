import React, { useContext } from 'react'

import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Components/BASE_URL';
import axios from 'axios';
import { goToAddress } from '../../Router/Coordinator'
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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from "../../Img/Logologin.png";
import {
  ConteinerInput, ConteinerInputSenha, LogoSingUpPage, ButtonLogin, TextConteinerSingUpPage

} from './SingupStyled'

function Singup() {
  const { control, setControl } = useContext(GlobalContext)
  const { form, pegaDados, clear } = useForm({ name: '', email: '', cpf: '', password: '' })
  const navigate = useNavigate()
 

  const singup = (body, clear, navigate, value, setValue) => {
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        goToAddress(navigate)
        setValue(value + 1)
      })
      .catch((err) => {
        // alert(err.response.data.message)
      })
  }

  //Enviar form
  const onSubmitForm = (event) => {
    event.preventDefault()
    if(confirmeSenha()) {
        singup(form,clear, navigate)
    }
    
}


const confirmeSenha = () => {
    if(form.password !== form.confirmPassword ) {
        alert("Senhas diferentes")
        return false
    }
    else {
        return true
    }
}

  //Alterar campo

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
  const [values, setValues] = useState({
    showPassword: false,
  });

  const [valueSenha, setValueSenha] = useState({
    showConfirmePassword: false,
  })


  return (
    <div>
      <ButtonLogin onClick={() => goToLogin(navigate)} ><ArrowBackIosIcon /></ButtonLogin>
      <LogoSingUpPage src={Logo} alt={"Logo Ifuture"} />
      <TextConteinerSingUpPage>Cadastrar</TextConteinerSingUpPage>
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

        <ConteinerInputSenha>

          <FormControl variant="outlined">

            <InputLabel required htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={valueSenha.showConfirmePassword ? 'text' : 'password'}
              value={form.password}
              name={"password"}
              onChange={pegaDados}

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

        </ConteinerInputSenha>

        <ConteinerInput>

          <FormControl variant="outlined">
            <InputLabel required htmlFor="outlined-adornment-password">Confirmar</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              required
              type={values.showPassword ? 'text' : 'password'}
              value={form.confirmPassword}
              onChange={pegaDados}
              name={"confirmPassword"}
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


        </ConteinerInput>

        <ConteinerInput>

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}

          >
            Criar

          </Button>

        </ConteinerInput>
      </form>
    </div>
  )
}

export default Singup