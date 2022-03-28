import React, { createContext, useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { api, createSession } from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
      api.defaults.headers.authorization = `Bearer${token} `

    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    console.log('login', { email, password })

    const response = await createSession(email, password)
    console.log('login', response.data)

    const loggedUser = response.data.user
    const token = response.data.token

    api.defaults.headers.authorization = `Bearer${token} `

    localStorage.setitem('user', JSON.stringify(loggedUser))
    localStorage.setitem('user', JSON.stringify(token))

    if (password !== '') {
      setUser(loggedUser)
      navigate('/')
    }
  }

  const logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    api.defaults.headers.authorization = null
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
