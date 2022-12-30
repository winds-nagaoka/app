////////////////////////////////////

// Created: 2019-03-18
// Updated: 2019-03-18

// history/ 配下の history.js を読み込んで
// history.dbに出力する感じ

////////////////////////////////////

import fs from 'fs'
import path from 'path'
import NeDB from 'nedb'

import { practiceList } from '../asset/practice/practice'
import { practiceAudio } from '../asset/practice/practiceAudio'

const recordDB = new NeDB({
  filename: path.join(__dirname, '../database/record.db'),
  autoload: true,
})

function recordStatus(id: string) {
  for (var i = 0; i < practiceList.length; i++) {
    if (practiceList[i].id === id) {
      return practiceList[i].recordStatus
    }
  }
}

function practiceTime(id: string) {
  for (var i = 0; i < practiceList.length; i++) {
    if (practiceList[i].id === id) {
      return practiceList[i].time.timestamp
    }
  }
}

recordDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < practiceAudio.length; i++) {
    var data = practiceAudio[i]
    if (recordStatus(data.id)) {
      var musiclist = { id: data.id, time: practiceTime(data.id), detail: data }
      recordDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
})
