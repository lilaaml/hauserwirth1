import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Exhibitions from './pages/Exhibitions'
import Fairs from './pages/Fairs'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="artists" element={<Artists />} />
          <Route path="exhibitions" element={<Exhibitions />} />
          <Route path="fairs" element={<Fairs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
