import React from 'react'

import './styles.css'

const LoginPage = () => {
  return (
    <div className='login'>
      <h1> BodyBook</h1>
      <form className='form'>

        <label for='email'> Email </label>
        <input type='text' className='email' placeholder='Email' />

        <label for='password'> Password </label>
        <input type='password' className='password' placeholder='Password' />

        <div className='actions'>
          <button type='submit'> Entrar </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
