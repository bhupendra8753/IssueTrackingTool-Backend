const moment = require('moment')
const momenttz = require('moment-timeZone')
const timeZone = 'Asia/Calcutta'
let now = () => {
    return moment.utc().format()
}

let getLocalTime = () => {
    return moment().tz(timeZone).format()
}

let convertToLocalTime = (Time) => {
    return momenttz.tz(time, timeZone),format('LLLL')
}

module.exports = {
    now: now,
    getLocalTime: getLocalTime,
    convertToLocalTime: convertToLocalTime
}