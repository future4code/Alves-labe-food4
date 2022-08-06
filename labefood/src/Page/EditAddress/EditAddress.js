import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToProfile } from '../../Router/Coordinator'
import useForm from '../../Hooks/UseForm';
import { goToLogin } from '../../Router/Coordinator'
import Logo from "../../Img/Logologin.png"; 
import TextField from '@material-ui/core/TextField'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { GlobalContext } from '../../Global/GlobalContext'
import {
  ConteinerInput,
  ButtonLogin,
  SignUpAddressPage,
 TextConteinerAddressPage,
 ButtonStyle
} from './EditStyle'

export default function EditAddress() {

  const navigate = useNavigate()
  const { } = useContext(GlobalContext)

  const {form, pegaDados, limpaCampos} = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
  const body = {
    "street": form.street,
    "number": form.number,
    "neighbourhood": form.neighbourhood,
    "city": form.city,
    "state": form.state,
    "complement": form.complement,
  }


const onSubmitForm = (e) => {
    e.preventDefault()
    limpaCampos()
  }

    return (
      <div>
      <ButtonLogin onClick={() => goToLogin(navigate)} ><ArrowBackIosIcon /></ButtonLogin>
      <SignUpAddressPage src={Logo} alt={"Logo Ifuture"} />

      <TextConteinerAddressPage>Meu Endereço</TextConteinerAddressPage>

    
    <form onSubmit={onSubmitForm}>


      <ConteinerInput>

        <TextField
          name={"street"}
          value={form.street}
          onChange={pegaDados}
          label={"logradouro"}
          variant={"outlined"}
          fullWidth
          required
          placeholder={"Rua/Av"}

        />
      </ConteinerInput>

      <ConteinerInput>

        <TextField
          name={"number"}
          value={form.number}
          onChange={pegaDados}
          label={"numero"}
          variant={"outlined"}
          fullWidth
          required
          type={"number"}
          placeholder={"Número"}

        />
      </ConteinerInput>

      <ConteinerInput>

        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={pegaDados}
          label={"Bairro"}
          variant={"outlined"}
          fullWidth
          required
          type={"text"}
          placeholder={"Centro"}

        />
      </ConteinerInput>


      <ConteinerInput>

        <TextField
          name={"city"}
          value={form.city}
          onChange={pegaDados}
          label={"Cidade"}
          variant={"outlined"}
          fullWidth
          required
          type={"text"}
          placeholder={"Teresina"}

        />
      </ConteinerInput>


      <ConteinerInput>

        <TextField
          name={"state"}
          value={form.state}
          onChange={pegaDados}
          label={"Estado"}
          variant={"outlined"}
          fullWidth
          required
          type={"text"}
          placeholder={"Piauí"}

        />
      </ConteinerInput>

      <ConteinerInput>

        <TextField
          name={"complement"}
          value={form.complement}
          onChange={pegaDados}
          label={"Complemento"}
          variant={"outlined"}
          fullWidth
          required
          type={"text"}
          placeholder={"Complemento"}

        />
      </ConteinerInput>

      <ConteinerInput>

        <ButtonStyle onClick={() => goToProfile(navigate)}
          variant="contained"
          color="primary"
          type={"submit"}
        >
          Salvar
        </ButtonStyle>

      </ConteinerInput>

        </form>
      </div>
    )
  }

