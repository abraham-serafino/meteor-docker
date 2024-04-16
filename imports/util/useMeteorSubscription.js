import { Meteor } from "meteor/meteor"
import { useTracker } from "meteor/react-meteor-data"

const useMeteorSubscription = ({
  Collection,
  subscriptionName,
  query = {},
  findOne = false,
  serverLoader = null
}) => {
  const data = [true, null]

  if (Meteor.isClient) {
    useTracker(() => {
      const { ready } = Meteor.subscribe(subscriptionName, query, {
        onStop(error) {
          if (error) {
            throw error
          }
        }
      })

      if (ready()) {
        data[0] = false
        const result = Collection.find(query || {}).fetch()

        if (findOne && result.length === 1) {
          data[1] = result[0]
        } else {
          data[1] = result
        }
      }
    })
  } else {
    data[0] = false

    if (typeof serverLoader === "function") {
      data[1] = serverLoader()
    } else {
      data[1] = []
    }
  }

  return data
}

export default useMeteorSubscription
