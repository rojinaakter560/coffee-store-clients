import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import AddCoffee from './Components/AddCoffee.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App></App>
},
{
  path: '/updateCoffee',
  element: <UpdateCoffee></UpdateCoffee>
},
{
  path: '/addCoffee',
  element: <AddCoffee></AddCoffee>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
