import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'chota';
import { BrowserRouter as AppRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter>
    <App />
    </AppRouter>
  </React.StrictMode>
)
