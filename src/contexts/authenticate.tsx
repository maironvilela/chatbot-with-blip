import { createContext } from 'react'
import { AuthenticateAxiosAdapter } from '../infra/gateways/authenticateAxiosAdapter'

type AuthenticateContextProviderProps = {
  children: React.ReactNode
}

type AuthResponse = {
  isAccessAllowed: boolean
}

type AuthenticateContextTypes = {
  auth: (apiKey: string) => Promise<AuthResponse>
}

export const AuthenticateContext = createContext({} as AuthenticateContextTypes)

export function AuthenticateContextProvider({
  children,
}: AuthenticateContextProviderProps) {

  const auth = async (apiKey: string) => {
    const url = import.meta.env.VITE_BLIP_API_URL

    const axios = new AuthenticateAxiosAdapter();
    const isAccessAllowed = await axios.authenticate({ apiKey, url });
    return {
      isAccessAllowed
    }
  }
  return (
    <AuthenticateContext.Provider value={{ auth }}>
      {children}
    </AuthenticateContext.Provider>
  )
}
