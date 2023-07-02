import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './components/Router/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className=' mx-auto bg-slate-800'>
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
