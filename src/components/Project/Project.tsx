import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/karthikacharya26/Sugar-Cosmetics"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://sugar-cosmetics-opal.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>SUGAR Cosmetics</h3>
              <p>
                {" "}
                Developed a full-stack e-commerce website replicating the SUGAR
                Cosmetics experience using the MERN stack. The application
                features a UI with React and Chakra UI, secure authentication
                via JWT and bcrypt, and efficient state management with Redux.
                Integrated Razorpay for seamless payments and MongoDB for
                scalable data storage, ensuring a user-friendly and interactive
                shopping experience.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React</li> <li>Redux</li> <li>Node.js</li> <li>MongoDB</li>{" "}
                <li>JWT</li>
                <li>Razorpay</li>
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/karthikacharya26/tatacliq-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://tatacliq-clone-sage.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Tata CLiQ</h3>
              <p>
                Developed a full-stack e-commerce website replicating the Tata
                CLiQ experience using the MERN stack. The application features a
                responsive and modern UI built with React and Chakra UI, secure
                authentication using JWT and bcrypt, and efficient state
                management with Redux. Integrated MongoDB for scalable data
                handling, enabling users to browse, filter, and purchase
                products seamlessly.
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React</li> <li>Redux</li> <li>Node.js</li> <li>MongoDB</li>{" "}
                <li>JWT</li>
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/karthikacharya26/Wayfair"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://wayfair-clone.vercel.app/"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Wayfair</h3>
              <p>
                Developed a Wayfair-inspired e-commerce web application using
                React, Vite, and Chakra UI, offering a seamless shopping
                experience. Features include user authentication, product
                sorting, cart management, and intuitive navigation with Redux
                for efficient state management. The project showcases a modern,
                responsive UI, ensuring smooth interactions and an enhanced user
                experience.
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React</li> <li>Redux</li>
                <li>react-router</li>
                <li>Chakra UI</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
