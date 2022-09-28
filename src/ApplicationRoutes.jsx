import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Comentarios from './pages/Comentarios/Comentarios'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Sobre from './pages/Sobre/Sobre'
import Menu from './components/Menu/Menu'
import Contato from './pages/Contato/Contato'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/comentarios" element={<Comentarios />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default ApplicationRoutes