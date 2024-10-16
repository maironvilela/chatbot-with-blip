
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AuthenticateContextProvider } from './contexts/authenticate.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthenticateContextProvider>
      <App />
    </AuthenticateContextProvider>
  </StrictMode>,
)
