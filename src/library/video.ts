import path from 'path'
import NeDB from 'nedb'

const videoDB = new NeDB({
  filename: path.join(__dirname, '../database/video.db'),
  autoload: true,
})

type Video = {
  id: string
  status: boolean
  baseSrc?: string
  poster?: string
  list?: { available: boolean; data: number; path: string; addtitle: string }[]
  _id: string
}

type VideoStatus = Omit<Video, 'list' | 'poster' | 'baseSrc'>

function videoStatus(callback: (docs: VideoStatus[] | null) => void) {
  videoDB.find({}, (err: Error, docs: Video[] | null) => {
    if (err || !docs) return callback(null)
    return callback(
      docs.map((e, i) => {
        return del(e)
      })
    )
  })
  function del(e: Video) {
    delete e.list
    delete e.poster
    delete e.baseSrc
    return e
  }
}

function loadVideo(id: string, callback: (docs: Video | null) => void) {
  videoDB.findOne({ id }, (err, docs) => {
    if (err || !docs) return callback(null)
    return callback(docs)
  })
}

export const video = {
  videoStatus,
  loadVideo,
}
