const path = require('path')
const NeDB = require('nedb')

const concertDB = new NeDB({
  filename: path.join(__dirname, '../database/concert.db'),
  autoload: true
})

function loadMain (callback) {
  concertDB.find({}).sort({time: 1}).exec((err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

module.exports = {
  loadMain
}