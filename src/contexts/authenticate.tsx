import { createContext } from 'react'
import { AuthenticateAxiosAdapter } from '../infra/gateways/authenticate-axios-adapter'

type AuthenticateContextProviderProps = {
  children: React.ReactNode
}

type AuthResponse = {
  status: number
}

type AuthenticateContextTypes = {
  auth: () => Promise<AuthResponse>
}

export const AuthenticateContext = createContext({} as AuthenticateContextTypes)

export function AuthenticateContextProvider({
  children,
}: AuthenticateContextProviderProps) {

  const auth = async () => {
    const apiKey = import.meta.env.VITE_BLIP_API_KEY
    const url = import.meta.env.VITE_BLIP_API_URL

    const axios = new AuthenticateAxiosAdapter();
    const status = await axios.authenticate({ apiKey, url });
    return status
  }




  return (
    <AuthenticateContext.Provider value={{ auth }}>
      {children}
    </AuthenticateContext.Provider>
  )
}
