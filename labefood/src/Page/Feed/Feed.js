import React, { useContext } from 'react'
import { GlobalContext } from '../../Global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../Router/Coordinator'
import useProtectedPage from '../../Hooks/UseProtectPage'

function Feed() {
  useProtectedPage()
  const navigate = useNavigate()
  const { } = useContext(GlobalContext)

  return (
    <div>
      Feed
      <button onClick={() => logout(navigate)}>Logout</button>
    </div>
  )
}

export default Feed