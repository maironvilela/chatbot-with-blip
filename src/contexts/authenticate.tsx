import { createContext } from 'react'
import { makeAuthenticateService } from '@/main/factories/authenticate-service'

type AuthenticateContextProviderProps = {
  children: React.ReactNode
}


type AuthenticateContextTypes = {
  auth: (apiKey: string) => Promise<boolean>
  isUserAuthenticated: () => boolean
  logout: () => void
}

export const AuthenticateContext = createContext({} as AuthenticateContextTypes)

export function AuthenticateContextProvider({
  children,
}: AuthenticateContextProviderProps) {

  const auth = async (apiKey: string) => {

    const authenticateService = makeAuthenticateService();
    const isKayValid = await authenticateService.execute(apiKey)

    if (isKayValid) {
      localStorage.setItem("apiKey", apiKey)
    }
    return isKayValid
  }

  const isUserAuthenticated = () => {
    const apiKey = localStorage.getItem("apiKey")
    return apiKey !== null
  }

  const logout = () => {
    localStorage.removeItem("apiKey")

  }

  return (
    <AuthenticateContext.Provider value={{ auth, isUserAuthenticated, logout }}>
      {children}
    </AuthenticateContext.Provider>
  )
}
