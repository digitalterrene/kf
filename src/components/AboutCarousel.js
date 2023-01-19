import Carousel from 'react-bootstrap/Carousel';
import integrity from '../assets/integrity.jpg'
import exellency from '../assets/exellency.jpg'
import collaboration from '../assets/collaboration.jpg'

function AboutCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exellency}
          alt="Exellency"
        />
        <Carousel.Caption>
          <h3>Exellency</h3>
          <p>We thrive to deliver exellent conduct with and expect the same from your side</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={collaboration}
          alt="Collaboration"
        />

        <Carousel.Caption>
          <h3>Collaboration</h3>
          <p>We do ot work in solitude, we work in an environment that promotes collaboration. For that way promises more collective success.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={integrity}
          alt="Integrity"
        />

        <Carousel.Caption>
          <h3>Integrity</h3>
          <p>
            We are actively trying to be integrous with you for we belive together we are harmonious. Wont you do the same to us.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;