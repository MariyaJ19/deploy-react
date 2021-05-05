import React, { useContext, useState, useEffect } from "react"
import { auth } from "../components/firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [wait, setWait] = useState(true)

  function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function signout(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }
 

  useEffect(() => {
    const x = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setWait(false)
    })

    return x
  }, [])

  const value = {
    currentUser,
    register,
    signout,
    logout
   

    
    

   
  }

  return (
    <AuthContext.Provider value={value}>
      {!wait && children}
    </AuthContext.Provider>
  )
}