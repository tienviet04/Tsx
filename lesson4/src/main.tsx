import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers} />,
)