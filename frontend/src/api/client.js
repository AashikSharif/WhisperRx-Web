import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:80',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})

export default client
