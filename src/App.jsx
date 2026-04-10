import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './views/Home'
import Exhibitions from './views/Exhibitions'
import About from './views/About'
import Review from './views/Review'
import Details from './views/Details'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/exhibitions",
        element: <Exhibitions />
      },
      {
        path: "/review",
        element: <Review />
      },
      {
        path: "/details/:id",
        element: <Details />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
