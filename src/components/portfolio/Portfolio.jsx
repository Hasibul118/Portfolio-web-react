import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Threads is an online social media and social networking service",
    github: "https://github.com/Hasibul118/threads",
    demo: "https://threads-sage.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "The Next Generation Payment Method",
    github: "https://github.com/Hasibul118/HooBank",
    demo: "https://hoo-bank.web.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Speed up your growth with our web solutions",
    demo: "https://greelab.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "A personal portfolio website for everyone",
    github: "https://github.com/Hasibul118/Portfolio-App",
    demo: "https://portfolio-xi-amber.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "A personal portfolio website for everyone",
    github: "https://habitoftheday.web.app/",
    demo: "https://github.com/Hasibul118/habit-of-the-day",
  }
];

const Portfolio = () => {

  console.log(data)

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github !== undefined && (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
