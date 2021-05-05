import React, { useRef, useState  } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"



export default function Register() {
  const eRef = useRef()
  const pRef = useRef()
  const pConfRef = useRef()
  const { register } = useAuth()
  const [error, setError] = useState("")
  const [wait, setWait] = useState(false)
  const history = useHistory()

  async function Submit(e) {
    e.preventDefault()

    if (pRef.current.value !== pConfRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setWait(true)
      history.push("/Home")
      await register(eRef.current.value, pRef.current.value)
      
    } catch {
      setError("Failed to create an account, please try again")
    }

    setWait(false)
  }

 
return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={Submit} >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={eRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pRef} required />
            </Form.Group>
            <Form.Group id="passwordconf">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={pConfRef} required />
            </Form.Group>
            <Button disabled={wait} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/Login">Sign in</Link>
      </div>
    </>
  )
}