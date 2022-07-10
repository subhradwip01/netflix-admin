
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext/AuthContext'

const ProtecedComponents = ({Component}) => {
  const {user}= useContext(AuthContext)
  if(!user){
    return <Navigate to="login" replace/>
  }

  return Component
}

export default ProtecedComponents