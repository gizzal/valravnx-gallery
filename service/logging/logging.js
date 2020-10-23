const utilities = require("../util/Utilities")
module.exports.info = (log)=>console.log(`${utilities.dateTimeNow()}: ${log}`)