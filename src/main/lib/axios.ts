import axios from 'axios'
export const axiosHttpClient = axios.create({
  baseURL: import.meta.env.VITE_BLIP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: import.meta.env.VITE_BLIP_API_KEY,
  },
})
