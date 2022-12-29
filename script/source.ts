////////////////////////////////////

// Created: 2019-03-18
// Updated: 2019-03-18

// source/ 配下の source.js を読み込んで
// source.dbに出力する感じ

////////////////////////////////////

const fs = require('fs')
const path = require('path')
const NeDB = require('nedb')

const sourceDB = new NeDB({
  filename: path.join(__dirname, '../database/source.db'),
  autoload: true,
})

const sourceLog = require('../asset/source/source')

sourceDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < sourceLog.sourceList.length; i++) {
    var data = sourceLog.sourceList[i]
    var concert = { id: data.id, time: data.time.timestamp, detail: data }
    if (data.sourceStatus) {
      sourceDB.insert(concert, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', main OK')
      })
    }
  }
})
