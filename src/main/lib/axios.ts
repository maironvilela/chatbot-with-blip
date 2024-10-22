import axios from 'axios'
import { env } from '../../../env'

const URL = env.VITE_BLIP_API_URL

export const axiosHttpClient = axios.create({
  baseURL: URL,
})
