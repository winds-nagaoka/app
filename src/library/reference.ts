import path from 'path'
import NeDB from 'nedb'

const referenceDB = new NeDB({
  filename: path.join(__dirname, '../database/reference.db'),
  autoload: true,
})

type Reference = {
  id: string
  time: number
  status: boolean
  baseSrc: string
  list: { available: boolean; data: number; path: string }[]
  _id: string
}

function loadReference(callback: (docs: Reference[] | null) => void) {
  referenceDB
    .find({})
    .sort({ time: 1 })
    .exec((err, docs: Reference[] | null) => {
      if (err || !docs) return callback(null)
      return callback(docs)
    })
}

export const reference = {
  loadReference,
}
