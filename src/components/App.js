import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import Home from './Home';
import Tracker from './Tracker'
import Cards from './Card'
import Register from './Register'
import Login from './Login'
import PrivateRoute from './PrivateRoute'



function App() {
  return (
    <Container
      className="d-flex"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-200" style={{ maxWidth: "600px"}}>
        <Router>
          <AuthProvider>
         
            <Switch>
            <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/" component={Register} />
              <Route path="/login" component={Login} />
              <Route exact path="/Cards" component={Cards} />
              <Route path="/Home" component={Home} />
              <Route  path='/Tracker' component={Tracker} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App