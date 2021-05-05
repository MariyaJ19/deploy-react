import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const eRef = useRef()
  const pRef = useRef()
  const { signout } = useAuth()
  const [error, setError] = useState("")
  const [wait, setWait] = useState(false)
  const history = useHistory()

  async function Submit(e) {
    e.preventDefault()

    try {
      setError("")
      setWait(true)
      history.push("/Home")
      await signout(eRef.current.value, pRef.current.value)
    } catch {
      setError("Could not sign in, please try again later")
    }

    setWait(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={Submit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={eRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pRef} required />
            </Form.Group>
            <Button disabled={wait} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/">Sign Up</Link>
      </div>
    </>
  )
}