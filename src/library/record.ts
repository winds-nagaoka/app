const path = require('path')
const NeDB = require('nedb')

const recordDB = new NeDB({
  filename: path.join(__dirname, '../database/record.db'),
  autoload: true
})

function loadRecord (callback) {
  recordDB.find({}).sort({time: 1}).exec((err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

module.exports = {
  loadRecord
}