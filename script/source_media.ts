////////////////////////////////////

// Created: 2019-03-18
// Updated: 2019-03-18

// history/ 配下の history.js を読み込んで
// history.dbに出力する感じ

////////////////////////////////////

import fs from 'fs'
import path from 'path'
import NeDB from 'nedb'

const referenceDB = new NeDB({
  filename: path.join(__dirname, '../database/reference.db'),
  autoload: true,
})

import { sourceList } from '../asset/source/source'
import { sourceAudio } from '../asset/source/sourceAudio'

function referenceStatus(id: string) {
  for (var i = 0; i < sourceList.length; i++) {
    if (sourceList[i].id === id) {
      // console.log(sourceLog.sourceList[i], id)
      return sourceList[i].sourceStatus
    }
  }
}

function sourceTime(id: string) {
  for (var i = 0; i < sourceList.length; i++) {
    if (sourceList[i].id === id) {
      return sourceList[i].time.timestamp
    }
  }
}

referenceDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < sourceAudio.length; i++) {
    var data = sourceAudio[i]
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
