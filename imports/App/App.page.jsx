import React from "react"
import { Link } from "react-router-dom"

function AppPage() {
  return (
    <div>
      <h1>Meteor Docker</h1>
      <Link to="/serafinos" className="underline">
        All the Serafinos
      </Link>
    </div>
  )
}

export default AppPage
