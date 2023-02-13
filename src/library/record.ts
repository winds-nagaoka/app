import path from 'path'
import NeDB from 'nedb'

const recordDB = new NeDB({
  filename: path.join(__dirname, '../../database/record.db'),
  autoload: true,
})

type Record = {
  id: string
  time: number
  detail: {
    id: string
    directory: string
    file: { label: string; path: string }[]
    contents: {
      file: number
      list: { time: string; label: string }[]
    }[]
  }
  _id: string
}

function loadRecord(callback: (docs: Record[] | null) => void) {
  recordDB
    .find({})
    .sort({ time: 1 })
    .exec((err, docs) => {
      if (err || !docs) return callback(null)
      return callback(docs)
    })
}

export const record = {
  loadRecord,
}
