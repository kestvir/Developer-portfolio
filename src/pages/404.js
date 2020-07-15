import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {

    return (
        <div className="error-page">
            <div>
                <h1>Page Not Found</h1>
                <Link to="/" className="btn btn-to-home">
                    back home
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage
