const path = require('path')
const NeDB = require('nedb')

const videoDB = new NeDB({
  filename: path.join(__dirname, '../database/video.db'),
  autoload: true
})

function videoStatus (callback) {
  videoDB.find({}, (err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs.map((e, i) => {return del(e)}))
  })
  function del (e) {
    delete e.list
    delete e.poster
    delete e.baseSrc
    return e
  }
}

function loadVideo (id, callback) {
  videoDB.findOne({id}, (err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

module.exports = {
  videoStatus, loadVideo
}