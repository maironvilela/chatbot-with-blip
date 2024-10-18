import { createBrowserRouter } from 'react-router-dom'

import { Contacts } from './pages/contacts/index.ts'


import { Login } from './pages/login'
import { Contact } from './pages/messages';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Contacts />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contato/:id",
    element: <Contact />,
  }
]);

