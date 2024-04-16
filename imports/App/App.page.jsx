import React from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router"
import { useTracker } from "meteor/react-meteor-data"
import SerafinosPage from "/imports/Serafinos/Serafinos.page"
import CounterModel from "../Serafinos/Counter.model"

function AppPage() {
  const [isLoading, data] = CounterModel.subscribe()

  return (
    <div>
      <h1>Meteor Docker</h1>

      <p>
        <button
          onClick={() => CounterModel.incrementCount({ step: 5 })}
        >
          {isLoading ? "..." : data.count}
        </button>
      </p>

      <p>
        <Link to="/serafinos" className="underline">
          All the Serafinos
        </Link>
      </p>

      <div>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/serafinos" element={<SerafinosPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppPage
