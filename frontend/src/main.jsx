import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx';
import router from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <UserContext>
        {/* <BrowserRouter> */} 
          <RouterProvider router={router}/>
         {/* </BrowserRouter> */}
      </UserContext>
  </StrictMode>,
)
