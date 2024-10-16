import React from "react";

const ContactBox = () => {
  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here.</span>
      </div>
      <div className="row" id="contact">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelope">Email: Kritsanalalu5@gmail.com</i>
            </p>
            <p>
              <i className="uil uil-phone">Tel: +66 95 904 2353</i>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <div className="form-inputs">
              <input type="text" className="input-field" placeholder="name" />
              <input type="email" className="input-field" placeholder="email" />
            </div>
            <div className="text-area">
              <textarea placeholder="Message"></textarea>
              <div className="form-button">
                <button className="btn">
                  send <i className="uil uil-message"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
