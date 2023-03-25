import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faBed, faBath} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';

// just a reminder to adjust this later and use a json file to feed information in here just like the team profiles.

function Projects(){
    return(
        <div className='project'>
            <main>
              <Header />
            </main>
            <Card
            style={{ 
                width: '22rem', 
                background: '#8074ad',
                margin: '20px' }} className='projectCard' >
           
                <Carousel className="carousel-inner projectCarousel"
                  style={{
                    width:'320px',
                    height: '350px',
                    left: 15,
                    
                    
                  }}>
                    <Carousel.Item class="carousel-item active">
                        <img className="w-100" src="https://api.lorem.space/image/burger?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item">
                        <img class="w-100" src="https://api.lorem.space/image/drink?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item">
                        <img class="w-100" src="https://api.lorem.space/image/pizza?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                </Carousel>
                <Card.Body className='projectBody'>
                    <Card.Title>Amichi Estate</Card.Title>
                    <Card.Subtitle >
                        <div className='bedBath' >
                            <p> <FontAwesomeIcon icon={faLocationDot} /> Lekki, Lagos</p>
                            <p> <FontAwesomeIcon icon={faBed} /> 4 Beds</p>
                            <p> <FontAwesomeIcon icon={faBath} /> 2 Baths</p>
                        </div>                     
                    </Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Just filling up space to test the card. This will also allow for more responsive build.
                        I am going to add more cards soon to fill up the page.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ 
                width: '22rem', 
                background: '#8074ad',
                margin: '20px' }} className='projectCard' >
           
                <Carousel className="carousel-inner projectCarousel"
                  style={{
                    width:'320px',
                    height: '350px',
                    left: 15,
                    
                    
                  }}>
                    <Carousel.Item class="carousel-item active">
                        <img class="w-100" src="https://api.lorem.space/image/burger?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item">
                        <img class="w-100" src="https://api.lorem.space/image/drink?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item">
                        <img class="w-100" src="https://api.lorem.space/image/pizza?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                </Carousel>
                <Card.Body className='projectBody'>
                    <Card.Title>Onitsha Estate</Card.Title>
                    <Card.Subtitle >
                        <div className='bedBath' >
                            <p> <FontAwesomeIcon icon={faLocationDot} /> Lekki, Lagos</p>
                            <p> <FontAwesomeIcon icon={faBed} /> 4 Beds</p>
                            <p> <FontAwesomeIcon icon={faBath} /> 2 Baths</p>
                        </div>                     
                    </Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Just filling up space to test the card. This will also allow for more responsive build.
                        I am going to add more cards soon to fill up the page.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ 
                width: '22rem', 
                background: '#8074ad',
                margin: '20px' }} className='projectCard' >
           
                <Carousel className="carousel-inner projectCarousel"
                  style={{
                    width:'320px',
                    height: '350px',
                    left: 15,
                    
                    
                  }}>
                    <Carousel.Item class="carousel-item active">
                        <img class="w-100" src="https://api.lorem.space/image/burger?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item">
                        <img class="w-100" src="https://api.lorem.space/image/drink?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item">
                        <img class="w-100" src="https://api.lorem.space/image/pizza?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                </Carousel>
                <Card.Body className='projectBody'>
                    <Card.Title>Enugu Estate</Card.Title>
                    <Card.Subtitle >
                        <div className='bedBath' >
                            <p> <FontAwesomeIcon icon={faLocationDot} /> Lekki, Lagos</p>
                            <p> <FontAwesomeIcon icon={faBed} /> 4 Beds</p>
                            <p> <FontAwesomeIcon icon={faBath} /> 2 Baths</p>
                        </div>                     
                    </Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Just filling up space to test the card. This will also allow for more responsive build.
                        I am going to add more cards soon to fill up the page.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ 
                width: '22rem', 
                background: '#8074ad',
                margin: '20px'
                 }} className='projectCard' >
           
                <Carousel className="carousel-inner projectCarousel"
                  style={{
                    width:'320px',
                    height: '350px',
                    left: 15,
                    
                    
                  }}>
                    <Carousel.Item class="carousel-item active">
                        <img class="w-100" src="https://api.lorem.space/image/burger?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item">
                        <img class="w-100" src="https://api.lorem.space/image/drink?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item">
                        <img class="w-100" src="https://api.lorem.space/image/pizza?w=150&h=150" alt="imagerand"/>
                    </Carousel.Item>
                </Carousel>
                <Card.Body className='projectBody'>
                    <Card.Title>London Estate</Card.Title>
                    <Card.Subtitle >
                        <div className='bedBath' >
                            <p> <FontAwesomeIcon icon={faLocationDot} /> Lekki, Lagos</p>
                            <p> <FontAwesomeIcon icon={faBed} /> 4 Beds</p>
                            <p> <FontAwesomeIcon icon={faBath} /> 2 Baths</p>
                        </div>                     
                    </Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Just filling up space to test the card. This will also allow for more responsive build.
                        I am going to add more cards soon to fill up the page.
                    </Card.Text>
                </Card.Body>
            </Card>
           
        </div>
    )
}
export default Projects;