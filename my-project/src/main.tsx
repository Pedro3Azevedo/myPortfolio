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
import NavBar from "./components/NavBar.tsx";
import MoreAbout from "./routes/MoreAbout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/projects/:category", // New route with a parameter
        element: <Projects />,
    },
    {
        path: "/projects/:category/:name", // New route with a parameter
        element: <MoreAbout />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NavBar/>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
