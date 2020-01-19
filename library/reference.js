const path = require('path')
const NeDB = require('nedb')

const referenceDB = new NeDB({
  filename: path.join(__dirname, '../database/reference.db'),
  autoload: true
})

function loadReference (callback) {
  referenceDB.find({}).sort({time: 1}).exec((err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

module.exports = {
  loadReference
}