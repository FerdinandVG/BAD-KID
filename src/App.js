import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Paginasp from './componentes/Paginasp'
import Paginahm from './componentes/Paginahme'
import Paginaqs from './componentes/Paginaqs'
import Payuda from './componentes/Payuda'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginasp />} />
        <Route path="/home" element={<Paginahm />} />
        <Route path="/home/historia" element={<Paginaqs />} />
        <Route path="/home/directorio" element={<Payuda />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App