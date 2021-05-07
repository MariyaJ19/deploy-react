import React, { useState, useRef } from "react"
import { Form, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import {Icon} from 'semantic-ui-react'



export default function Dashboard() {
  const [error,setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()
  const {currentUser} = useAuth()
  const username = useRef()
  const email = useRef()
 

  async function Logout() {
    setError("")

    try {
      await logout()
      history.push("/Login")
    } catch {
      setError("sorry, there seems to be an error, please try again")
    }
  }

  return (
    <>
    <>
    <Navbar />
        <>
          <h2 className="profile">Profile</h2>
          
    <Icon.Group size='huge'>
    <Icon name='user' />
    </Icon.Group>
)

         
         
         

          <Form id="ProfileForm">
          
          
            <br></br>
            </Form>
            <Form.Group id="email">
              <Form.Label> Email:<br></br> <bold> {currentUser.email}</bold></Form.Label> <br></br>
          
            </Form.Group>
            

        </>
      </>
  
     
      <div className="logoutLink">
        <Button className=" btn-positive w-100" onClick={Logout}> 
          Log Out
        </Button>
      </div>
    </>
  )
}