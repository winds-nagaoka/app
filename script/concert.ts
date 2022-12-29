////////////////////////////////////

// Updated: 2018-06-15

// concert/ 配下の main.js, mini.js, other.js を読み込んで
// concert.dbに出力する感じ

////////////////////////////////////

const fs = require('fs')
const path = require('path')
const NeDB = require('nedb')

const concertDB = new NeDB({
  filename: path.join(__dirname, '../database/concert.db'),
  autoload: true,
})

const mainConcert = require('../asset/concert/main')
const miniConcert = require('../asset/concert/mini')
const otherConcert = require('../asset/concert/other')

concertDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < mainConcert.mainConcert.length; i++) {
    var data = mainConcert.mainConcert[i]
    var concert = { id: data.id, time: data.time.timestamp, type: data.type, detail: data }
    concertDB.insert(concert, (err, newdoc) => {
      if (err) return console.log('error: ' + err)
      // console.log(data.id + ', main OK')
    })
  }
  for (var i = 0; i < miniConcert.miniConcert.length; i++) {
    var data = miniConcert.miniConcert[i]
    var concert = { id: data.id, time: data.time.timestamp, type: data.type, detail: data }
    concertDB.insert(concert, (err, newdoc) => {
      if (err) return console.log('error: ' + err)
      // console.log(data.id + ', main OK')
    })
  }
  for (var i = 0; i < otherConcert.otherConcert.length; i++) {
    var data = otherConcert.otherConcert[i]
    var concert = { id: data.id, time: data.time.timestamp, type: data.type, detail: data }
    concertDB.insert(concert, (err, newdoc) => {
      if (err) return console.log('error: ' + err)
      // console.log(data.id + ', main OK')
    })
  }
})
