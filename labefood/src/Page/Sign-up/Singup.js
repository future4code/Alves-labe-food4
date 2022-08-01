import React, { useContext } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../Router/Coordinator'

function Singup() {
  const navigate = useNavigate()
  const { } = useContext(GlobalContext)

  return (
    <div>
      Singup
      <button onClick={() => goToLogin(navigate)}>Login</button>
    </div>
  )
}

export default Singup