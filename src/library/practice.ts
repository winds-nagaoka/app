import path from "path"
import NeDB from "nedb"

const practiceDB = new NeDB({
  filename: path.join(__dirname, '../database/practice.db'),
  autoload: true
})

function loadPractice (callback) {
  practiceDB.find({}).sort({time: 1}).exec((err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

module.exports = {
  loadPractice
}