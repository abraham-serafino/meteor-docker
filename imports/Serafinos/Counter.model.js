import { Mongo } from "meteor/mongo"
import Joi from "joi"
import { ValidatedMethod } from "/imports/util/ValidatedMethod"
import useMeteorSubscription from "/imports/util/useMeteorSubscription"

const COUNTER = {
  FIND: "counter.find",
  INCREMENT_COUNT: "counter.incrementCount"
}

const COLLECTION_NAME = "counter"
const Counter = new Mongo.Collection(COLLECTION_NAME)

let publication = {}
let count = 0

if (Meteor.isServer) {
  Meteor.publish(COUNTER.FIND, function find() {
    this.added(COLLECTION_NAME, "0", { id: "0", count })
    this.ready()

    publication = this

    this.onStop(() => {
      count = 0
    })
  })
}

const incrementCountSchema = Joi.object({
  step: Joi.number().required()
})

function incrementCountMethod({ step }) {
  count += step

  if (Meteor.isServer) {
    publication.changed(COLLECTION_NAME, "0", { count })
  }
}

const CounterModel = {
  subscribe: () =>
    useMeteorSubscription({
      Collection: Counter,
      subscriptionName: COUNTER.FIND,
      findOne: true,
      serverLoader: () => ({
        count
      })
    }),

  incrementCount: ValidatedMethod(
    COUNTER.INCREMENT_COUNT,
    incrementCountMethod,
    incrementCountSchema
  )
}

export default CounterModel
