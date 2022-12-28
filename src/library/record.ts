import path from "path"
import NeDB from "nedb"

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

export const record = {
  loadRecord
}