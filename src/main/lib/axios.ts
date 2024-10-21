import axios from 'axios'

export const axiosHttpClient = axios.create({
  baseURL: import.meta.env.VITE_BLIP_API_URL,
})
