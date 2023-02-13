import path from 'path'
import NeDB from 'nedb'

const photoDB = new NeDB({
  filename: path.join(__dirname, '../../database/photo.db'),
  autoload: true,
})

type Photo = {
  id: string
  status: boolean
  baseSrcThumbnail?: string
  baseSrcOriginal?: string
  list?: string[]
  _id: string
}

type PhotoStatus = Omit<Photo, 'list' | 'baseSrcOriginal' | 'baseSrcThumbnail'>

function photoStatus(callback: (docs: PhotoStatus[] | null) => void) {
  photoDB.find({}, (err: Error, docs: Photo[] | null) => {
    if (err || !docs) return callback(null)
    return callback(
      docs.map((e, i) => {
        return del(e)
      })
    )
  })
  function del(e: Photo) {
    delete e.list
    delete e.baseSrcOriginal
    delete e.baseSrcThumbnail
    return e
  }
}

function loadPhoto(id: string, callback: (docs: Photo | null) => void) {
  photoDB.findOne({ id }, (err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

export const photo = {
  photoStatus,
  loadPhoto,
}
