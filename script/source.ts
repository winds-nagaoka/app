////////////////////////////////////

// Created: 2019-03-18
// Updated: 2019-03-18

// source/ 配下の source.js を読み込んで
// source.dbに出力する感じ

////////////////////////////////////

import fs from 'fs'
import path from 'path'
import NeDB from 'nedb'

import { sourceList } from '../asset/source/source'

const sourceDB = new NeDB({
  filename: path.join(__dirname, '../database/source.db'),
  autoload: true,
})

sourceDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < sourceList.length; i++) {
    var data = sourceList[i]
    var concert = { id: data.id, time: data.time.timestamp, detail: data }
    if (data.sourceStatus) {
      sourceDB.insert(concert, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', main OK')
      })
    }
  }
})
