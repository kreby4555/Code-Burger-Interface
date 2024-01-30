import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001' // Somente o host aqui, sem a rota específica
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurger
