
import './index.css'
import "@radix-ui/themes/styles.css";


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthenticateContextProvider } from './contexts/authenticate.tsx'

import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <AuthenticateContextProvider>
        <RouterProvider router={router} />
      </AuthenticateContextProvider>
    </Theme>

  </StrictMode>,
)
