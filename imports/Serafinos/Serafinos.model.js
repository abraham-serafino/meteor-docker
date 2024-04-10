import { Mongo } from "meteor/mongo"

const Serafinos = new Mongo.Collection("serafinos")

if (Meteor.isServer) {
	Meteor.startup(() => {
		const serafinos = SerafinoModel.getAll()

		if (serafinos.length < 1) {
			Serafinos.insert({ name: "Abraham" })
			Serafinos.insert({ name: "Theodore" })
			Serafinos.insert({ name: "Jackson" })
		}
	})

	Meteor.publish("serafinos", () => {
		return Serafinos.find({})
	})
}

if (Meteor.isClient) {
	Meteor.subscribe("serafinos")
}

const SerafinoModel = {
	getAll() {
		return Serafinos.find({}).fetch()
	}
}

export default SerafinoModel
