////////////////////////////////////

// Updated: 2018-06-15

// concert/ 配下の main.js, mini.js, other.js 以外を読み込んで
// audio.db, photo.db, video.db に出力します

////////////////////////////////////

import fs from 'fs'
import path from 'path'
import NeDB from 'nedb'

const audioDB = new NeDB({
  filename: path.join(__dirname, '../database/audio.db'),
  autoload: true,
  // timestampData: true
})

const photoDB = new NeDB({
  filename: path.join(__dirname, '../database/photo.db'),
  autoload: true,
  // timestampData: true
})

const videoDB = new NeDB({
  filename: path.join(__dirname, '../database/video.db'),
  autoload: true,
  // timestampData: true
})

import { mainConcert } from '../asset/concert/main'
import { miniConcert } from '../asset/concert/mini'
import { otherConcert } from '../asset/concert/other'

import { mainAudio } from '../asset/concert/mainAudio'
import { miniAudio } from '../asset/concert/miniAudio'
import { otherAudio } from '../asset/concert/otherAudio'

import { mainPhoto } from '../asset/concert/mainPhoto'
import { miniPhoto } from '../asset/concert/miniPhoto'

import { mainVideo } from '../asset/concert/mainVideo'
import { miniVideo } from '../asset/concert/miniVideo'
import { otherVideo } from '../asset/concert/otherVideo'

function concertTime(id) {
  for (var i = 0; i < mainConcert.length; i++) {
    if (mainConcert[i].id === id) {
      return mainConcert[i].time.timestamp
    }
  }
  for (var i = 0; i < miniConcert.length; i++) {
    if (miniConcert[i].id === id) {
      return miniConcert[i].time.timestamp
    }
  }
  for (var i = 0; i < otherConcert.length; i++) {
    if (otherConcert[i].id === id) {
      return otherConcert[i].time.timestamp
    }
  }
}

function concertType(id) {
  for (var i = 0; i < mainConcert.length; i++) {
    if (mainConcert[i].id === id) {
      return mainConcert[i].type
    }
  }
  for (var i = 0; i < miniConcert.length; i++) {
    if (miniConcert[i].id === id) {
      return miniConcert[i].type
    }
  }
  for (var i = 0; i < otherConcert.length; i++) {
    if (otherConcert[i].id === id) {
      return otherConcert[i].type
    }
  }
}

////////////////////////////////////
// Audio ///////////////////////////
////////////////////////////////////
audioDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < mainAudio.length; i++) {
    var data = mainAudio[i]
    if (data.status) {
      var musiclist = {
        id: data.id,
        type: concertType(data.id),
        time: concertTime(data.id),
        status: data.status,
        baseSrc: data.baseSrc,
        list: data.data,
      }
      audioDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', audio OK')
      })
    }
  }
  for (var i = 0; i < miniAudio.length; i++) {
    var data = miniAudio[i]
    if (data.status) {
      var musiclist = {
        id: data.id,
        type: concertType(data.id),
        time: concertTime(data.id),
        status: data.status,
        baseSrc: data.baseSrc,
        list: data.data,
      }
      audioDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', audio OK')
      })
    }
  }
  for (var i = 0; i < otherAudio.length; i++) {
    var data = otherAudio[i]
    if (data.status) {
      var musiclist = {
        id: data.id,
        type: concertType(data.id),
        time: concertTime(data.id),
        status: data.status,
        baseSrc: data.baseSrc,
        list: data.data,
      }
      audioDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', audio OK')
      })
    }
  }
})

////////////////////////////////////
// Photo ///////////////////////////
////////////////////////////////////
photoDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < mainPhoto.length; i++) {
    var data = mainPhoto[i]
    if (data.status) {
      // console.log(data, i)
      var list = []
      const z = (num) => {
        const s = '000' + String(num)
        return s.substr(s.length - 3, 3)
      }
      for (var j = 0; j < data.count; j++) {
        var add = z(j + 1) + '.jpg'
        list = list.concat(add)
      }
      // console.log(data, i, list)
      var data = {
        id: data.id,
        status: data.status,
        baseSrcThumbnail: data.baseSrcThumbnail,
        baseSrcOriginal: data.baseSrcOriginal,
        list: list,
      }
      photoDB.insert(data, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', photo OK')
      })
    }
  }
  for (var i = 0; i < miniPhoto.length; i++) {
    var data = miniPhoto[i]
    if (data.status) {
      // console.log(data, i)
      var list = []
      const z = (num) => {
        const s = '000' + String(num)
        return s.substr(s.length - 3, 3)
      }
      for (var j = 0; j < data.count; j++) {
        var add = z(j + 1) + '.jpg'
        list = list.concat(add)
      }
      // console.log(data, i, list)
      var data = {
        id: data.id,
        status: data.status,
        baseSrcThumbnail: data.baseSrcThumbnail,
        baseSrcOriginal: data.baseSrcOriginal,
        list: list,
      }
      photoDB.insert(data, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', photo OK')
      })
    }
  }
})

////////////////////////////////////
// Video ///////////////////////////
////////////////////////////////////
videoDB.remove({}, { multi: true }, (err, numRemoved) => {
  for (var i = 0; i < mainVideo.length; i++) {
    var data = mainVideo[i]
    if (data.status) {
      var musiclist = { id: data.id, status: data.status, baseSrc: data.baseSrc, poster: data.poster, list: data.data }
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
  for (var i = 0; i < miniVideo.length; i++) {
    var data = miniVideo[i]
    if (data.status) {
      var musiclist = { id: data.id, status: data.status, baseSrc: data.baseSrc, list: data.data }
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
  for (var i = 0; i < otherVideo.length; i++) {
    var data = otherVideo[i]
    if (data.status) {
      var musiclist = { id: data.id, status: data.status, baseSrc: data.baseSrc, list: data.data }
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
})
