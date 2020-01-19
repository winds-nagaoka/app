const path = require('path')
const NeDB = require('nedb')

const photoDB = new NeDB({
  filename: path.join(__dirname, '../database/photo.db'),
  autoload: true
})

function photoStatus (callback) {
  photoDB.find({}, (err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs.map((e, i) => {return del(e)}))
  })
  function del (e) {
    delete e.list
    delete e.baseSrcOriginal
    delete e.baseSrcThumbnail
    return e
  }
}


function loadPhoto (id, callback) {
  photoDB.findOne({id}, (err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

module.exports = {
  photoStatus, loadPhoto
}