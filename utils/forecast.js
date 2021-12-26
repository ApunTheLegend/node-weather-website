const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a7478ae40b40e6ad8772a10b0dff8b9c&query=' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude)
    request({url, json: true}, (error, { body }) => {
        if (error)
            callback('Unable to connect to the weather service!', undefined)
        else if (body.error)
            callback('Unable to find location!', undefined)
        else {
            callback(undefined, data = {
                current: body.current.temperature, 
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast