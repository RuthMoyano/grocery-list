import React from 'react'
import {Link} from "react-router-dom"

function notfound() {
    return (
        <div>
            Sorry what you are trying to reach does not exist, please go back to {" "} <Link to ='/'>Home Page</Link>
        </div>
    )
}

export default notfound