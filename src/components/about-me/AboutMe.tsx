import "./AboutMe.scss";
import React from "react";

import logo from "../../images/mireia.jpeg";
import Footer from "../footer/Footer";

function AboutMe() {
  return (
    <section>
      <div className="me">
        <div className="me__container-image">
          <img className="me__image" src={logo} alt="mireia-logo"></img>
        </div>
        <h3 className="me__title">About me:</h3>
        <p className="me__text">
          My name is Mireia and I am a junior frontend developper. I have the
          following skills: React, Javascript, HTML, CSS y SASS. I'm used to
          work with agile methodologies and I try to apply best practices when
          coding. I came from a social background where I worked as educator.
        </p>
        <p className="me__text">
          I've always been sorrounded by the development world since some people
          from my close circle work in the web development sector. My first
          contact with development or coding was during an internship with young
          people in Madrid. We run courses about digital literacy to eldery
          people and we played with HTML and CSS in our free time.
        </p>
        <p className="me__text">
          In the summer of 2021, I wanted to explore more of this world and I
          attended to some more courses about web development, HTML, CSS and
          JavaScript. I really liked it and I was not willing to let that
          motivation let go, so I decided to do a a 180 degrees change to my
          professional career and going full for it. Then I signed in to Adalab
          Bootcamp' (Adalab is digital trainning school for women that I had
          very good references). The content of the course fit in what I was
          looking for.
        </p>
        <p className="me__text">
          And I fall in love with coding there in Adalab. We started over with
          HTML y CSS, but we went deeper. Finally being able to give life to
          static webpages is a true landmark for a begginer! You feel like a
          "senior" web developper :). I must confess that the layout work is one
          of my favorites ones. I like giving shape to others designs or even
          let my creativity take control of it.
        </p>
        <p className="me__text">
          After that, we continued with JavaScript and React: the "senior" was
          not so clear at this point :). But once you start understand it and
          you see the pages getting more dynamic, you feel like (even knowing
          that you have still a lot to learn) you can eat the world. That
          feeling when everything end up working: glorius.
        </p>
        <p className="me__text">
          Even though I have a lot of years of experience on others sectors and
          I have learned what teamwork means, I haven't had the chance to work
          with agile methodologies. We also learned at the Bootcamp how to
          manage using Scrum. In each module we had a different team and we must
          to finish the project. So we divided the work using sprints, we had
          the daily meeting, a project demo was also held, and so on. One of the
          things I loved most about this was the pair programming: when you are
          stuck it is known that four eyes can see more than two.
        </p>
        <p className="me__text">
          Once the Bootcamp was over, I have kept the path of self-learning and
          completed some more projects, trying to overcome myself a step at a
          time. I have learned about other libraries such as Material UI, Prime,
          Bootstrap. I have also done a Vue.js project (I wanted to know how
          other framework worked).
        </p>
        <p className="me__text">
          At this very moment I am learning about Typescript at OpenBootcamp and
          once I compelted this one I would like to start the testing course
          they also have there.
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default AboutMe;
