import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import './styles.css'

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function loginHandler (e) {
    e.preventDefault()

    console.log('submit', { email, password })
    login(email, password)
  }

  return (
    <div className='login'>
      <h1> BodyBook</h1>
      <p> {String(authenticated)}</p>
      <form className='form'>
        <label> Email </label>
        <input
          type='text'
          className='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label> Password </label>
        <input
          type='password'
          className='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <div className='actions'>
          <button type='submit' onClick={loginHandler}>
            {' '}
            Entrar{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
