import React from "react"
import { Routes, Route } from "react-router"
import AppPage from "/imports/App/App.page"
import SerafinosPage from "/imports/Serafinos/Serafinos.page"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppPage />} />
      <Route path="/serafinos" element={<SerafinosPage />} />
    </Routes>
  )
}

export default AppRoutes
