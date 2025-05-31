import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
//import de paginas y componentes
import Home from './pages/Home.jsx';
import Barra from './components/Barra.jsx';
import Formulario from './pages/Formulario.jsx';


//Ruteo de paginas principales
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <Formulario />,
  },
]);

//la Barra de navegacion se muestra en todas las paginas
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Barra />
      <RouterProvider router={router} />
    </>
  </StrictMode>,
)
