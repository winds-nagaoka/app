import path from 'path'
import NeDB from 'nedb'

const audioDB = new NeDB({
  filename: path.join(__dirname, '../../database/audio.db'),
  autoload: true,
})

type Audio = {
  id: string
  type: 'main' | 'mini' | 'other'
  time: number
  status: boolean
  baseSrc: `${string}/`
  list: { available: boolean; data: number; path: `${string}.mp3` }[]
  _id: string
}

function loadAudio(callback: (docs: Audio[] | null) => void) {
  audioDB
    .find({})
    .sort({ time: 1 })
    .exec((err, docs) => {
      if (err || !docs) return callback(null)
      return callback(docs)
    })
}

export const audio = {
  loadAudio,
}
