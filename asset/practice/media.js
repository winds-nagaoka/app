////////////////////////////////////

// Created: 2019-03-18
// Updated: 2019-03-18

// history/ 配下の history.js を読み込んで
// history.dbに出力する感じ

////////////////////////////////////

const fs = require('fs')
const path = require('path')
const NeDB = require('nedb')

const recordDB = new NeDB({
  filename: path.join(__dirname, '../database/record.db'),
  autoload: true
})

const practiceLog = require('./practice/practice')
const practiceAudio = require('./practice/practiceAudio')

function recordStatus (id) {
  for (var i=0;i<practiceLog.practiceList.length;i++) {
    if (practiceLog.practiceList[i].id === id) {
      return practiceLog.practiceList[i].recordStatus
    }
  }
}

function practiceTime (id) {
  for (var i=0;i<practiceLog.practiceList.length;i++) {
    if (practiceLog.practiceList[i].id === id) {
      return practiceLog.practiceList[i].time.timestamp
    }
  }
}

recordDB.remove({}, {multi: true}, (err, numRemoved) => {
  for (var i=0;i<practiceAudio.practiceAudio.length;i++) {
    var data = practiceAudio.practiceAudio[i]
    if (recordStatus(data.id)) {
      var musiclist = {id: data.id, time: practiceTime(data.id), status: data.status, detail: data}
      recordDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
})