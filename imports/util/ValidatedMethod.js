import { Meteor } from "meteor/meteor"

function validateWithJoi(payload, schema) {
  if (schema !== null) {
    const { error } = schema.validate(payload, {
      abortEarly: false
    })

    if (error) {
      throw new Meteor.Error(
        error.name,
        error.message,
        JSON.stringify(error.details)
      )
    }
  }
}

function ValidatedMethod(methodName, cb, schema = null) {
  Meteor.methods({
    [methodName](payload) {
      if (Meteor.isServer) {
        // already validated on the client
        validateWithJoi(payload, schema)
      }

      return cb.call(this, payload)
    }
  })

  return (payload, callback) => {
    validateWithJoi(payload, schema)

    Meteor.call(methodName, payload, (error, result) => {
      if (error) {
        if (error.error === 404) {
          console.error(
            `${error.message} - did you remember to import the model in server.js?`
          )
        } else {
          throw error
        }
      }

      if (typeof callback === "function") {
        return callback(result)
      }
    })
  }
}

export { validateWithJoi, ValidatedMethod }
