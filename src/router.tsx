import { createBrowserRouter } from 'react-router-dom'

import { App } from './App'


import { Login } from './pages/login'
import { Contact } from './pages/contact';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

