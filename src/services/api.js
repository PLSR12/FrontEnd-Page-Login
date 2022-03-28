import axios from 'axios'

export const api = axios.create({
  baseUrl: 'http://localhost/3001'
})

export const createSession = async (email, password) => {
  return api.post('http://localhost:3001/sessions', { email, password })
}

export const getUsers = async () => {
    return api.get('http://localhost:3001/users')
}