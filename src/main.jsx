import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes'
import FriendsListProvider from './context/FriendsListProvider'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
     <FriendsListProvider>
       <RouterProvider router={router} />
       <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        theme="dark"
       />
    
       </FriendsListProvider>
   
  </StrictMode>,
)
