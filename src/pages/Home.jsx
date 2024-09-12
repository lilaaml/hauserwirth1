import Hero from '../components/Hero'
import './Pages.css'

const Home = () => {
  return (
    <div className="container-fluid text-center">
      <div id="hero">
        <Hero />
      </div>
      <h1 className="page-header">Forthcoming Exhibitions</h1>
    </div>
  )
}

export default Home