import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"

const NotFoundPage = () => {

    return (
        <>
            <main className="error-page">
                <div className="error-container">
                    <h1>oops it's a dead end</h1>
                    <Link to="/" className="btn-to-home">
                        back home
                </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NotFoundPage
