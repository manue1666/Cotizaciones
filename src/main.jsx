import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
//import de pagina
import Home from './pages/Home.jsx';
import Barra from './components/Barra.jsx';


//Ruteo de paginas principales
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Barra/>
    <RouterProvider router={router} />
    </>
  </StrictMode>,
)
