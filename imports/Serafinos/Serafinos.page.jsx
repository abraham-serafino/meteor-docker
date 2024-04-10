import React from "react"
import { useTracker } from "meteor/react-meteor-data"
import SerafinoModel from "/imports/Serafinos/Serafinos.model"

function SerafinosPage({ data }) {
    let { serafinos } = data
    serafinos = useTracker(() => SerafinoModel.getAll())

    return (
        <div>
            {serafinos?.map(({ name }) => <div key={name}>{name}</div>)}
        </div>
    )
}

export default SerafinosPage
