import { useEffect, useState } from 'react';
import './Home.css';
import Navbar from './components/Navbar.jsx'; // No curly braces for default exports
import Footer from './components/Footer.jsx';
import Headshot from './assets/Headshot.jpg';

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Ensure that content is fully loaded
  }, []);

  return (
    <>
      <main className={loaded ? 'fadeIn' : ''}>
        <div className="aboutMe">
          <p>
          I'm a JMU student studying Computer Science with a strong background in front-end and back-end development. My skills include HTML, CSS, JavaScript, React, and styled-components for front-end work, as well as Python, SQL, APIs, and database management on the back end. I’m passionate about building intuitive, user-friendly applications and continuously expanding my expertise in software development.
          </p>
        </div>
        <div className="picture">
          <img src={Headshot} alt="Michael Gerber" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
