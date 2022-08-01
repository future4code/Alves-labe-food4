import React, { useContext } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToSingUp } from '../../Router/Coordinator'

function Login() {
  const navigate = useNavigate()
  const { } = useContext(GlobalContext)

  return (
    <div>
      Login
      <button onClick={() => goToSingUp(navigate)}>Inscrever-se</button>
    </div>
  )
}

export default Login