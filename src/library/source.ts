import path from 'path'
import NeDB from 'nedb'

const sourceDB = new NeDB({
  filename: path.join(__dirname, '../../database/source.db'),
  autoload: true,
})

type Source = {
  id: string
  time: number
  detail: {
    id: string
    title: string
    type: 'source'
    time: { timestamp: number; date: string; time: string }
    sourceStatus: true
    contents: { label: string; music: number[] }[]
    data: { audio: number; title: string; composer: string; arranger: string; movement: string[] }[]
  }
  _id: string
}

function loadSource(callback: (docs: Source[] | null) => void) {
  sourceDB
    .find({})
    .sort({ time: 1 })
    .exec((err, docs: Source[] | null) => {
      if (err || !docs) return callback(null)
      return callback(docs)
    })
}

export const source = {
  loadSource,
}
