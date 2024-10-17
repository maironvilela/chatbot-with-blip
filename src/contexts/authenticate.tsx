import { createContext } from 'react'
import { makeAuthenticateService } from '../main/factories/authenticate-service'

type AuthenticateContextProviderProps = {
  children: React.ReactNode
}


type AuthenticateContextTypes = {
  auth: (apiKey: string) => Promise<boolean>
}

export const AuthenticateContext = createContext({} as AuthenticateContextTypes)

export function AuthenticateContextProvider({
  children,
}: AuthenticateContextProviderProps) {

  const auth = async (apiKey: string) => {

    const authenticateService = makeAuthenticateService();
    const response = await authenticateService.execute(apiKey)
    return response
  }

  return (
    <AuthenticateContext.Provider value={{ auth }}>
      {children}
    </AuthenticateContext.Provider>
  )
}
