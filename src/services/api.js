import axios from 'axios'

const apiCodeBurger = axios.create({
  baseUrl: 'http://localhost:3002'
})

export default apiCodeBurger
