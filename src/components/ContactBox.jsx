import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactBox = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind? Contact me here.</span>
      </div>
      <div className="row">
        {/* ข้อมูลติดต่อ */}
        <div className="col">
          <div className="contact-info">
            <h2>
              Find me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i> Email:
              <a href="mailto:Kritsanalalu5@gmail.com">Kritsanalalu5@gmail.com</a>
            </p>
            <p>
              <i className="uil uil-phone"></i> Tel: +66 95 904 2353
            </p>
          </div>
        </div>

        {/* ฟอร์มส่งเมล */}
        <div className="col">
          <form ref={formRef} onSubmit={handleSubmit} className="form-control">
            <div className="form-inputs">
              <input
                type="text"
                name="from_name"
                className="input-field"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="reply_to"
                className="input-field"
                placeholder="Your email"
                required
              />
            </div>
            <div className="text-area">
              <textarea
                name="message"
                placeholder="Your message"
                required
              />
              <div className="form-button">
                <button
                  type="submit"
                  className="btn"
                  disabled={status === "loading"}
                >
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                      ? "Sent!"
                      : status === "error"
                        ? "Try again"
                        : "Send"}{" "}
                  <i className="uil uil-message"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
