const Counter = new Mongo.Collection("counter")

let publication = {}
let count = 0

if (Meteor.isServer) {
  Meteor.publish("counter", function () {
    this.added("counter", "0", { id: "0", count })
    this.ready()

    publication = this

    this.onStop(() => {
      count = 0
    })
  })
}

if (Meteor.isClient) {
  Meteor.subscribe("counter")
}

Meteor.methods({
  incrementCount() {
    count++

    if (Meteor.isServer) {
      publication.changed("counter", "0", { count })
    }
  }
})

function getCount() {
  return Counter.findOne({ id: "0" }) || { count: 0 }
}

export { getCount }
