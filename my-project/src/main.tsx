import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import 'bootstrap/dist/css/bootstrap.css'

import './style/index.scss'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Projects from "./routes/Projects.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
