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
            JMU student studying computer science. I have skills in front-end development which includes HTML, CSS, JavaScript, React, and styled-components. I also have experience with back-end development using python, SQL, APIs and databases. I am currently seeking an internship for the summer of 2025 to gain more experience in my relevant fields of study.
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
