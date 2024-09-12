import './Components.css'

const Hero = () => {
  return (
    <div className="container">
      <div id="carousel" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" className="active" data-bs-target="#carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" className="active" data-bs-target="#carousel" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2"></button>
          <button type="button" className="active" data-bs-target="#carousel" data-bs-slide-to="2" aria-current="true" aria-label="Slide 3"></button>
          <button type="button" className="active" data-bs-target="#carousel" data-bs-slide-to="3" aria-current="true" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-1" className="d-block" />
          </div>
          <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1541665234574-8e72eb7cd028?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-2" className="d-block" />
          </div>
          <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1514195385834-0853a6eda41c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-3" className="d-block" />
          </div>
          <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1580195319388-1bea55742a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-4" className="d-block" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev" aria-hidden="true">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" aria-hidden="true">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Hero
