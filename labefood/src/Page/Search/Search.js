import React, {useContext} from 'react'
import useProtectedPage from '../../Hooks/UseProtectPage'
import { GlobalContext } from '../../Global/GlobalContext'

function Search() {
  const {} = useContext(GlobalContext)
  useProtectedPage()
  return (
    <div>Search</div>
  )
}

export default Search