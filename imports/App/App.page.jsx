import React from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router"
import SerafinosPage from "../Serafinos/Serafinos.page"

function AppPage() {
  return (
    <div>
      <h1>Meteor Docker</h1>

      <Link to="/serafinos" className="underline">
        All the Serafinos
      </Link>

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/serafinos" element={<SerafinosPage />} />
      </Routes>
    </div>
  )
}

export default AppPage
