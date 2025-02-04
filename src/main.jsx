
import { createRoot } from 'react-dom/client'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthConProvider } from './Contextapis'
createRoot(document.getElementById('root')).render(
  <>
<AuthConProvider>
<BrowserRouter>
    <App />
    
    </BrowserRouter>


</AuthConProvider>
</>
)
