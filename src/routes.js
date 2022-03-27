import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import { AuthContext } from './contexts/auth'

const AppRoutes = () => {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    console.log('login', { email, password })
    setUser({ id: '123', email })
  }

  const logout = () => {
    console.log('logout')
  }

  return (
    <Router>
      <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}
      >
        <Routes>
          <Route path='/login' element={<LoginPage />} />

          <Route path='/' element={<HomePage />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  )
}

export default AppRoutes
