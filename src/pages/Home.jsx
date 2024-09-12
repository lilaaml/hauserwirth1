import Hero from '../components/Hero'
import { FaArrowRight } from "react-icons/fa6";
import { GoChevronLeft, GoChevronRight  } from "react-icons/go";
import './Pages.css'

const Home = () => {
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
            <i href="/" className="chev-btn"><GoChevronLeft /></i> 1 / 6 <i className="chev-btn"><GoChevronRight /></i></span>
        </div>
        <div className="grid-list my-3 d-flex flex-wrap justify-content-center">
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
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
        <div className="grid-list my-3 d-flex flex-wrap justify-content-center">
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
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
        <div className="grid-list my-3 d-flex flex-wrap justify-content-center">
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
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
        <div className="grid-list my-3 d-flex flex-wrap justify-content-center">
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
          <div className="grid-item mx-4 my-2">
            <img src="https://media.hauserwirth.com/transform/990831e8-d6c1-4997-8fec-0052fefaeab8/METZG108901-cover-frame" alt="item-1.png" className="" />
            <div className="span d-flex flex-column">
              <span className="item-name">name</span>
              <span className="item-headline">headline</span>
              <span className="item-date">date</span>
              <span className="item-place">place</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home