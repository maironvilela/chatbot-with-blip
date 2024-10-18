
import './index.css'
import "@radix-ui/themes/styles.css";


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthenticateContextProvider } from './contexts/authenticate.tsx'

import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import { ContactContextProvider } from './contexts/contact.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <AuthenticateContextProvider>
        <ContactContextProvider>
          <RouterProvider router={router} />
        </ContactContextProvider>
      </AuthenticateContextProvider>
    </Theme>

  </StrictMode>,
)
