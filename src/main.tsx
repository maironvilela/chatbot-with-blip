
import './index.css'
import "@radix-ui/themes/styles.css";


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { Theme } from '@radix-ui/themes'
import { App } from './App.tsx';
import { AuthenticateContextProvider } from './contexts/authenticate.tsx';
import { ContactContextProvider } from './contexts/contact.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <AuthenticateContextProvider>
        <ContactContextProvider>
          <App />
        </ContactContextProvider>
      </AuthenticateContextProvider>
    </Theme>

  </StrictMode>,
)
