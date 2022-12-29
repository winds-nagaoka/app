import path from 'path'
import NeDB from 'nedb'

const practiceDB = new NeDB({
  filename: path.join(__dirname, '../../database/practice.db'),
  autoload: true,
})

type Practice = {
  id: string
  time: number
  detail: {
    id: string
    recordStatus: true
    time: { timestamp: number; date: string; time: string }
    place: string[]
    label: string
  }
  _id: string
}

function loadPractice(callback: (docs: Practice[] | null) => void) {
  practiceDB
    .find({})
    .sort({ time: 1 })
    .exec((err, docs) => {
      if (err || !docs) return callback(null)
      return callback(docs)
    })
}

export const practice = {
  loadPractice,
}
