import path from 'path'
import NeDB from 'nedb'

const concertDB = new NeDB({
  filename: path.join(__dirname, '../database/concert.db'),
  autoload: true,
})

type Concert = {
  id: string
  time: number
  type: 'main' | 'mini' | 'other'
  detail: {
    id: string
    type: 'main' | 'mini' | 'other'
    title: string
    time: { timestamp: number; date: string; time: string; label: string }
    place: string[]
    conductor: { name: string }[]
    poster?: string
    guide?: string
    contents: { label: string; music: number[] }[]
    data: { title: string; composer?: string; arranger?: string; movement?: string[] }[]
  }
  _id: string
}

function loadMain(callback: (docs: Concert[] | null) => void) {
  concertDB
    .find({})
    .sort({ time: 1 })
    .exec((err, docs: Concert[] | null) => {
      if (err || !docs) return callback(null)
      return callback(docs)
    })
}

export const concert = {
  loadMain,
}
