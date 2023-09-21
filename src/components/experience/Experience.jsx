import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">html</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">react</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

          <article className="experience__details">
              <div>
                <h4 className="text-uppercase">Next.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">mysql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">php</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <h4 className="text-uppercase">python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
