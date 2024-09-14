import Hero from '../components/Hero'
import { fcExhibitions } from '../data/data'
import { FaArrowRight } from "react-icons/fa6";
import { GoChevronLeft, GoChevronRight  } from "react-icons/go";
import './Pages.css'

const Home = () => {
  const fcExList = fcExhibitions.map(item => (
    <div key={item.id} className="grid-item col mx-4 my-2">
      <img src={item.img} alt={item.name} />
      <div className="span d-flex flex-column">
        <span className="h3 py-1 item-name">{item.name}</span>
        <span className="item-headline">{item.headline}</span>
        <span className="item-date">{item.date}</span>
        <span className="item-place">{item.place}</span>
      </div>
    </div>
  ))

  return (
    <div id="home">
      <Hero />
      <div className="grid container-sm my-3">
        <div className="grid-header d-flex">
          <div className="grid-subheader">
            <span className="h3 text-uppercase">forthcoming exhibitions</span>
            <div className="vr mx-2"></div>
            <span>View all <FaArrowRight /></span>
          </div>
          <span className="h4">
            <button href="/" className="chev-btn"><GoChevronLeft /></button> 1 / 6 <button className="chev-btn right"><GoChevronRight /></button></span>
        </div>
        <div className="grid-list my-3 row flex-nowrap justify-content-center">
          {fcExList}
        </div>
      </div>

      <div className="news container-sm d-flex flex-column py-3">
      <img src="" alt="news.png" />
        <span className="text-uppercase">welcoming michaela yearwood-dan</span>
        <span>We are pleased to announce representation of artist Michaela Yearwood⁠-⁠Dan, in collaboration with Marianne Boesky Gallery.</span>
        <span>Learn more <FaArrowRight /></span>
      </div>

      <div className="grid container-sm my-3">
        <div className="grid-header d-flex">
          <div className="grid-subheader">
            <span className="h3 text-uppercase">forthcoming events</span>
            <div className="vr mx-2"></div>
            <span>View all <FaArrowRight /></span>
          </div>
          <span className="h4">
            <i href="/" className="chev-btn"><GoChevronLeft /></i> 1 / 8 <i className="chev-btn"><GoChevronRight /></i></span>
        </div>
        <div className="grid-list my-3 row flex-nowrap justify-content-center">
          {fcExList}
        </div>
      </div>

      <div className="news container-sm d-flex flex-column py-3">
        <img src="" alt="WATCH THE FILM" />
        <span className="text-uppercase">firelei baez: in the studio</span>
        <span>Ahead of Firelei Báez’s first exhibition with Hauser & Wirth, step inside the artist’s New York studio to learn more about her paintings, drawings and immersive installations that explore the influences of the Afro-Caribbean diaspora against the backdrop of colonial histories and narratives.</span>
      </div>

      <div className="grid container-sm my-3">
        <div className="grid-header d-flex">
          <div className="grid-subheader">
            <span className="h3 text-uppercase">ursula</span>
            <div className="vr mx-2"></div>
            <span>View all <FaArrowRight /></span>
          </div>
          <span className="h4">
            <i href="/" className="chev-btn"><GoChevronLeft /></i> 1 / 8 <i className="chev-btn"><GoChevronRight /></i></span>
        </div>
        <div className="grid-list my-3 row flex-nowrap justify-content-center">
          {fcExList}
        </div>
      </div>

      <div className="news container-sm d-flex flex-column py-3">
        <img src="" alt="news.png" />
        <span className="text-uppercase">&apos;digital art &apos; in london</span>
        <span>Taking over our London North Gallery, &apos;Digital Art School&apos; marks our third year of collaboration with arts and mental health charity Hospital Rooms. </span>
        <span>Explore now <FaArrowRight /></span>
      </div>

      <div className="grid container-sm my-3">
        <div className="grid-header d-flex">
          <div className="grid-subheader">
            <span className="h3 text-uppercase">locations</span>
            <div className="vr mx-2"></div>
            <span>View all <FaArrowRight /></span>
          </div>
          <span className="h4">
            <i href="/" className="chev-btn"><GoChevronLeft /></i> 1 / 18 <i className="chev-btn"><GoChevronRight /></i></span>
        </div>
        <div className="grid-list my-3 row flex-nowrap justify-content-center">
          {fcExList}
        </div>
      </div>
    </div>
  )
}

export default Home