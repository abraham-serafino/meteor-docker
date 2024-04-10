import React from "react"
import { Routes, Route } from "react-router";
import AppPage from "/imports/App/App.page"
import SerafinosPage from "/imports/Serafinos/Serafinos.page"

function AppRoutes({ data }) {
    return (
        <Routes>
            <Route path="/" element={<AppPage data={data} />} />
            <Route path="/serafinos" element={<SerafinosPage data={data} />} />
        </Routes>
    )
}

export default AppRoutes
