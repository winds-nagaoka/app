////////////////////////////////////

// Created: 2019-03-18
// Updated: 2019-03-18

// practice/ 配下の practice.js を読み込んで
// practice.dbに出力する感じ

////////////////////////////////////

import fs from 'fs'
import path from 'path'
import NeDB from 'nedb'

import { practiceList } from '../asset/practice/practice'

const practiceDB = new NeDB({
  filename: path.join(__dirname, '../database/practice.db'),
  autoload: true,
})

practiceDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < practiceList.length; i++) {
    var data = practiceList[i]
    var concert = { id: data.id, time: data.time.timestamp, detail: data }
    practiceDB.insert(concert, (err, newdoc) => {
      if (err) return console.log('error: ' + err)
      // console.log(data.id + ', main OK')
    })
  }
})
