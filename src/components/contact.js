import React from "react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { useRef } from "react";

const Result = () => {
  return (
    <p>Your message has been sent successfully. I will contact you soon</p>
  );
};

function Contact() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sspirm4",
        "template_i69xodp",
        form.current,
        "YYc9BmHx0VVKy-Ck3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <div className="contact" id="contact-section">
      <h3>Contact Me</h3>
      <section className="mb-6">
        <p className="text-center w-responsive mx-auto mb-4 contact-text">
          Do you have any questions? Please do not hesitate to contact me
          directly and I will get back to you within 24 hours.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action=""
              method="POST"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="fullName"
                      className="form-control"
                    />
                    <label for="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                    />
                    <label for="phone" className="">
                      Phone number
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label for="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label for="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <br />{" "}
              <div className="text-center text-md-left">
                <button
                  type="submit"
                  className="btn btn-read"
                  style={{ backgroundColor: "#43b5f7", borderColor: "none" }}
                >
                  Send
                </button>
              </div>
            </form>
            <br />
            <div className="status">{result ? <Result /> : null}</div>
          </div>
          <div className="col-md-3 text-center contact-icons">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-3x"></i>
                <p>Lagos, Nigeria</p>
              </li>

              <li>
                <i className="fas fa-phone mt-3 fa-3x"></i>
                <p>+ 234 905 551 1340</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-3 fa-3x"></i>
                <p>akinfolarin.ajayi1@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
