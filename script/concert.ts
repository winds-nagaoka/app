////////////////////////////////////

// Updated: 2018-06-15

// concert/ 配下の main.js, mini.js, other.js を読み込んで
// concert.dbに出力する感じ

////////////////////////////////////

import fs from 'fs'
import path from 'path'
import NeDB from 'nedb'

const concertDB = new NeDB({
  filename: path.join(__dirname, '../database/concert.db'),
  autoload: true,
})

import { mainConcert } from '../asset/concert/main'
import { miniConcert } from '../asset/concert/mini'
import { otherConcert } from '../asset/concert/other'

concertDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < mainConcert.length; i++) {
    var data = mainConcert[i]
    var concert = { id: data.id, time: data.time.timestamp, type: data.type, detail: data }
    concertDB.insert(concert, (err, newdoc) => {
      if (err) return console.log('error: ' + err)
      // console.log(data.id + ', main OK')
    })
  }
  for (var i = 0; i < miniConcert.length; i++) {
    var data = miniConcert[i]
    var concert = { id: data.id, time: data.time.timestamp, type: data.type, detail: data }
    concertDB.insert(concert, (err, newdoc) => {
      if (err) return console.log('error: ' + err)
      // console.log(data.id + ', main OK')
    })
  }
  for (var i = 0; i < otherConcert.length; i++) {
    var data = otherConcert[i]
    var concert = { id: data.id, time: data.time.timestamp, type: data.type, detail: data }
    concertDB.insert(concert, (err, newdoc) => {
      if (err) return console.log('error: ' + err)
      // console.log(data.id + ', main OK')
    })
  }
})
