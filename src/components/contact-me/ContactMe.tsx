import "./ContactMe.scss";
import React from "react";

import Footer from "../footer/Footer";

function ContactMe() {
  return (
    <section>
      <div className="contact">
        <h3 className="contact__title">If you want to contact me:</h3>

        <div className="contact__form">
          <p className="contact__form-text">
            If you have any questions or would like me to tell you more about my
            experience, please fill in this form and I will be happy to answer
            you.
          </p>

          <form
            action="https://formsubmit.co/mireia.suefra@gmail.com"
            className="contact__form-form"
            method="POST"
          >
            <fieldset className="contact__form-fieldset">
              <label className="contact__form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="contact__form-input"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </fieldset>

            <fieldset className="contact__form-fieldset">
              <label className="contact__form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="contact__form-input"
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
              />
            </fieldset>

            <fieldset className="contact__form-fieldset">
              <label className="contact__form-label" htmlFor="message">
                What do you need?
              </label>
              <textarea
                className="contact__form-textarea"
                name="message"
                id="mensaje"
                placeholder="message"
              ></textarea>
            </fieldset>

            <fieldset className="contact__form-fieldset">
              <button
                className="contact__form-btn"
                type="submit"
                name="submit_form"
                id="submit"
              >
                send
              </button>
            </fieldset>
            <input
              className="contact__form-input"
              type="hidden"
              name="_next"
              value="http://localhost:3000/#/contact-me"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ContactMe;
