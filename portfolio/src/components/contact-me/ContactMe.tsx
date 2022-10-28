import "./ContactMe.scss";
import React from "react";

function ContactMe() {
  return (
    <>
      <section className="contact">
        <h3 className="contact__title">If you want to contact me:</h3>
        <p className="contact__text">
          You can do it by phone at:
          <span className="contact__text-number">665 249 013</span>
        </p>
        <div className="contact__container">
          <p className="contact__text">
            If you prefer, you can email me at:
            <span className="contact__text-email">mireia.suefra@gmail.com</span>
          </p>
          <a
            className="contact__web"
            href="mailto:mireia.suefra@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon fa fa-envelope"></i>
          </a>
        </div>
        <div className="contact__container">
          <p className="contact__text">
            If you want to know a bit more about me, I leave you the link to my
            Github and my Linkedin:
          </p>

          <a
            className="contact__web"
            href="https://github.com/mireiasuefra"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon fab fa-github-square"></i>
          </a>
          <a
            className="contact__web"
            href="https://www.linkedin.com/in/mireia-suefra/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon fab fa-linkedin"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
