import React from 'react';
import Title from './Title'

require("dotenv").config({
    path: `../../.env.${process.env.NODE_ENV}`,
})

const Contact = () => {
    return (
        <section className="contact-page" id="contact-section">
            <Title title={"Contact"} />
            <article className="contact-form">
                <h3>get in touch</h3>
                <form action={`https://formspree.io/${process.env.FORMSPREE_TOKEN}`} method="POST">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="form-control"
                        />
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            className="form-control"
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="message"
                            className="form-control"
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

export default Contact;