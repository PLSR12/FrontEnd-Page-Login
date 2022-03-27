import axios from 'axios'

export const api = axios.create({
  baseUrl: 'http://localhost/3001'
})

export const createSession = async (email, password) => {
  return api.post('/sessions', { email, password })
}

export const getUsers = async () => {
    return api.get('users')
}