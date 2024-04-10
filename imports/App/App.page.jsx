import React from "react"
import { Link } from 'react-router-dom';

function AppPage({ data }) {
    const { title } = data

    return (
        <div>
            <h1>{title}</h1>
            <Link to="/serafinos" className="underline">All the Serafinos</Link>
        </div>
    )
}

export default AppPage
