import path from "path"
import NeDB from "nedb"

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

export const reference = {
  loadReference
}