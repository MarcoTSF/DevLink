import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'

import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/",
    element: <Admin/>
  },
  {
    path: "*",
    element: <Error/>
  }
])

export { router };