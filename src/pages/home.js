import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';



function Home() {
    return (
      <div>
        <main>
          <Header />
        </main>
        <div>
          <Carousel className='carousel'>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/237/200/300"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://picsum.photos/seed/picsum/200/300"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://picsum.photos/200/300?grayscale"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='services'><h1>SERVICES</h1></div>
        <section className='cardContainer'>
          <div className='eachCard'>
            <Accordion >
              <Accordion.Item className='accordion' eventKey="0">
                <Accordion.Header className='accordionHeader'><h4>Buying & Selling</h4></Accordion.Header>
                <Accordion.Body className='accordionBody'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam. 
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </div>
          <div className='eachCard'>
            
            <Accordion>
              <Accordion.Item className='accordion' eventKey="0">
                <Accordion.Header className='accordionHeader'><h4>Rental Services</h4></Accordion.Header>
                <Accordion.Body className='accordionBody'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam.
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </div>
          <div className='eachCard'>
            
            <Accordion>
              <Accordion.Item className='accordion' eventKey="0">
                <Accordion.Header className='accordionHeader'><h4>Development</h4></Accordion.Header>
                <Accordion.Body className='accordionBody'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam.
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </div>
        </section>
        <div className='homeBtnContainer'>
          <button className='homeBtn' ><Link to='/contact' >Contact Us</Link></button>

        </div>



      </div>
      
    );
  }
export default Home;