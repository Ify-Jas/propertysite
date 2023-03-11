import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import Accordion from 'react-bootstrap/Accordion';

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
                src="https://api.lorem.space/image/furniture?w=150&h=150"
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
                src="https://api.lorem.space/image/furniture?w=150&h=150"
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
                src="https://api.lorem.space/image/furniture?w=150&h=150"
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
                <Accordion.Header className='accordionHeader'><h3>Buying & Selling</h3></Accordion.Header>
                <Accordion.Body className='accordionBody'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. 
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </div>
          <div className='eachCard'>
            
            <Accordion>
              <Accordion.Item className='accordion' eventKey="0">
                <Accordion.Header className='accordionHeader'><h3>Rental Services</h3></Accordion.Header>
                <Accordion.Body className='accordionBody'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. 
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </div>
          <div className='eachCard'>
            
            <Accordion>
              <Accordion.Item className='accordion' eventKey="0">
                <Accordion.Header className='accordionHeader'><h3>Development</h3></Accordion.Header>
                <Accordion.Body className='accordionBody'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. 
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </div>
        </section>


      </div>
      
    );
  }
export default Home;