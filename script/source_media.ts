////////////////////////////////////

// Created: 2019-03-18
// Updated: 2019-03-18

// history/ 配下の history.js を読み込んで
// history.dbに出力する感じ

////////////////////////////////////

const fs = require('fs')
const path = require('path')
const NeDB = require('nedb')

const referenceDB = new NeDB({
  filename: path.join(__dirname, '../database/reference.db'),
  autoload: true,
})

const sourceLog = require('../asset/source/source')
const sourceAudio = require('../asset/source/sourceAudio')

function referenceStatus(id) {
  for (var i = 0; i < sourceLog.sourceList.length; i++) {
    if (sourceLog.sourceList[i].id === id) {
      // console.log(sourceLog.sourceList[i], id)
      return sourceLog.sourceList[i].sourceStatus
    }
  }
}

function sourceTime(id) {
  for (var i = 0; i < sourceLog.sourceList.length; i++) {
    if (sourceLog.sourceList[i].id === id) {
      return sourceLog.sourceList[i].time.timestamp
    }
  }
}

referenceDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < sourceAudio.sourceAudio.length; i++) {
    var data = sourceAudio.sourceAudio[i]
    if (referenceStatus(data.id)) {
      if (data.status) {
        var musiclist = {
          id: data.id,
          type: data.type,
          time: sourceTime(data.id),
          status: data.status,
          baseSrc: data.directory,
          list: data.data,
        }
        referenceDB.insert(musiclist, (err, newdoc) => {
          if (err) return console.log('error: ' + err)
        })
      }
    }
  }
})
