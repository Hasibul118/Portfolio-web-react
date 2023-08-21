import React from "react";
import "./about.css";
import ME from "../../assets/profile-about.jpg";
import { FaAward } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>About Me</h5>
      <h2>Get To Know</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <AiFillSafetyCertificate className="about__icon" />
              <h5>Skills</h5>
              <small>10+ Certification</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            I am inquisitive. I like to keep it relaxed. Inhabitant tool
            analyst. Highly challenge-driven, focused on problem-solving.
            Motivated to commit the task and push it to work. Always learning
            new methods. It's a new day, it's a new life.
          </p>

          <div className="about_btn">
            <a className="btn btn-primary" href="#contact">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
