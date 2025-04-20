import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner';
import AppContextProvider from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <App />
      <Toaster />
    </AppContextProvider>
  </StrictMode>,
)
