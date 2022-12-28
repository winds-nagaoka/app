import path from "path"
import NeDB from "nedb"

const audioDB = new NeDB({
  filename: path.join(__dirname, '../database/audio.db'),
  autoload: true
})

function loadAudio (callback) {
  audioDB.find({}).sort({time: 1}).exec((err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

export const audio = {
  loadAudio
}