import path from "path"
import NeDB from "nedb"

const sourceDB = new NeDB({
  filename: path.join(__dirname, '../database/source.db'),
  autoload: true
})

function loadSource (callback) {
  sourceDB.find({}).sort({time: 1}).exec((err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

export const source = {
  loadSource
}