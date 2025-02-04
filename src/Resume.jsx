import React from 'react';
import './Resume.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Resume = () => {
  return (
    <>
      <div className="resume-container">
        <header>
          <h1>Michael Gerber</h1>
          <h3>Computer Scientist</h3>
        </header>
        <div className="resume-content">
          <section className="left-section">
            <section className="part">
              <h1>CONTACT</h1>
              <p>michaelgerber2004@gmail.com</p>
              <p><a href="https://www.linkedin.com/in/michael-k-gerber/" target="_blank">LinkedIn.com/in/michael-k-gerber</a></p>
              <p><a href="https://github.com/mkGerber" target="_blank">github.com/mkGerber</a></p>
              <p>Vienna, Virginia</p>
            </section>
            <section className="part">
              <h1>SKILLS</h1>
              <p>Python</p>
              <p>Java & JavaScript</p>
              <p>HTML & CSS</p>
              <p>C & C++</p>
              <p>React</p>
              <p>Node.js</p>
              <p>Agile Methods</p>
              <p>Git</p>
              <p>API Integration</p>
              <p>Google Firebase</p>
              <p>Web Development</p>
              <p>Database Management</p>
            </section>
            <section className="part">
              <h1>EDUCATION</h1>
              <h3>James Madison University</h3>
              <h4>Computer Science - BS</h4>
              <h4>Computer Information Systems - Minor</h4>
              <h4>Data Analytics - Minor</h4>
              <p>August 2022 - May 2026</p>
              <p>GPA: 3.20</p>
              <p><i>Secretary of Madison Motorsports 2024-Present</i></p>
              <p><i>Treasurer of Photography Club 2023-2024</i></p>
            </section>
            <section className="part">
              <h1>PROJECTS</h1>
              <h3>Lead Front-End Developer</h3>
              <h4>Get Out</h4>
              <ul>
                <li>
                  Social mobile application featuring an interactive map that showcases events that groups and individuals post to attract attention or customers
                </li>
                <li>
                  Utilized react native and google firebase to build a fully integrated, full-stack application catering to a diverse range of users
                </li>
              </ul>
            </section>
          </section>
          <section className="right-section">
            <section className="part right-part">
                <h1>PROFILE</h1>
                <p>Motivated and determined Computer Science student with a strong passion for full stack development, proficient in both front-end and back-end technologies including JavaScript, React, Node.js, Python and Google Firebase. Demonstrated ability to build dynamic, user-centric applications and solve complex problems through innovative solutions. Looking for an opportunity to leverage my skills to contribute to cutting-edge projects and advance my career.</p>
            </section>
            <section className="part">
              <h1>WORK EXPERIENCE</h1>

              <div className="right-part">
              <h3>Desktop Support Campus Projects Summer Associate</h3>
              <h4>Navy Federal Credit Union</h4>
              <ul>
                <li>Created scripts using Command Line Interface and Python by pulling data via API calls from a large executive database in order to find and swap vulnerable devices.</li>
                <li>Utilized Axonius to collect and analyze data from on-network devices, creating comprehensive excel reports.</li>
                <li>Developed and executed project plans by ordering end user hardware, testing equipment, deploying equipment, directing resources and informing stakeholders of progress.</li>
                <li>Led a significant asset management initiative for Overseas Military Banking Program (OMBP) devices, creating an automated dashboard to track valuable and high risk assets to provide live data on usage and location.</li>
              </ul>
              </div>
              <div className="right-part">
              <h3>Desktop Support Incidents Summer Intern</h3>
              <h4>Navy Federal Credit Union</h4>
              <ul>
                <li>Delivered exceptional customer service to members across multiple campus locations by troubleshooting, repairing, and replacing malfunctioning equipment to maintain seamless operations.</li>
                <li>Heavily contributed to the Navy Federal Headquarters Modernization Project by actively participating in a team effort to successfully relocate and reconfigure workstations for over 500 employee cubicles.</li>
                <li>Configured, decommissioned and deployed end user hardware following PC life cycle process.</li>
              </ul>
              </div>
              <div className="right-part">
              <h3>Photographer and Videographer Intern</h3>
              <h4>James Madison University Marketing & Branding</h4>
              <ul>
                <li>Professionally photographed current JMU campus events.</li>
                <li>Captured B-Roll footage and used Adobe Premiere Pro to produce compelling reels for JMU social media platforms.</li>
                <li>Proficiently enhanced photos in Adobe Lightroom, ensuring to match the distinguished JMU brand identity.</li>
                <li>Collaborated with colleagues on group media projects.</li>
              </ul>
              </div>
            </section>
            <section className="part right-part">
              <h1>REFERENCES</h1>
              <div className="references">
                <div className="reference">
                  <h3>Brenton Nickens</h3>
                  <h4>Navy Federal Credit Union</h4>
                  <p>Phone: 703-615-3869</p>
                  <p>Email: brenton_nickens@navyfederal.org</p>
                </div>
                <div className="reference">
                  <h3>Tariqul Islam</h3>
                  <h4>Navy Federal Credit Union</h4>
                  <p>Phone: 571-332-8617</p>
                  <p>Email: tariqul_islam@navyfederal.org</p>
                </div>
                <div className="reference">
                  <h3>Robert Wehrenberg</h3>
                  <h4>Navy Federal Credit Union</h4>
                  <p>Phone: 703-615-3869</p>
                  <p>Email: robert_wehrenberg@navyfederal.org</p>
                </div>
              </div>
              
            </section>
          </section>
        </div>
      </div>
      <a className="download" href="/MichaelGerber_Resume.pdf" target="_blank">Download Resume</a>
      <Footer />
    </>
  );
}

export default Resume;
