import React from "react"
import Title from "./Title"

const Contact = () => {
  return (
    <section className="section contact" id="contact-section">
      <Title title={"Contact"} />
      <article className="contact-form">
        <h3>get in touch</h3>
        <form action={`https://formspree.io/mknqvbve`} method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              required
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              className="form-control"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            submit here
          </button>
        </form>
      </article>
    </section>
  )
}

export default Contact
