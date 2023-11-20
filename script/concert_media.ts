////////////////////////////////////

// Updated: 2018-06-15

// concert/ 配下の main.js, mini.js, other.js 以外を読み込んで
// audio.db, photo.db, video.db に出力します

////////////////////////////////////

import fs from 'fs'
import path from 'path'
import NeDB from 'nedb'

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

function concertTime(id: string) {
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

function concertType(id: string) {
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
    let data: any = mainPhoto[i]
    let list: any[] = []
    if (data.status) {
      // console.log(data, i)
      list = []
      const z = (num: number) => {
        // 写真が1000枚以上の場合はファイル名を[5桁].jpgにした
        // 1000枚未満の場合は[3桁].jpgになっている
        if (data.count > 999) {
          return String(num).padStart(5, '0')
        } else {
          return String(num).padStart(3, '0')
        }
      }
      for (var j = 0; j < data.count; j++) {
        var add = z(j + 1) + '.jpg'
        list = list.concat(add)
      }
      // console.log(data, i, list)
      data = {
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
    let data: any = miniPhoto[i]
    let list: any[] = []
    if (data.status) {
      // console.log(data, i)
      list = []
      const z = (num: number) => {
        const s = '000' + String(num)
        if (num < 1000) {
          return s.substr(s.length - 3, 3)
        }
        return s.substr(s.length - 4, 4)
      }
      for (var j = 0; j < data.count; j++) {
        var add = z(j + 1) + '.jpg'
        list = list.concat(add)
      }
      // console.log(data, i, list)
      data = {
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
  let musiclist: any
  for (var i = 0; i < mainVideo.length; i++) {
    var data = mainVideo[i]
    if (data.status) {
      musiclist = { id: data.id, status: data.status, baseSrc: data.baseSrc, poster: data.poster, list: data.data }
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
  for (var i = 0; i < miniVideo.length; i++) {
    var data = miniVideo[i]
    if (data.status) {
      musiclist = { id: data.id, status: data.status, baseSrc: data.baseSrc, list: data.data }
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
  for (var i = 0; i < otherVideo.length; i++) {
    var data = otherVideo[i]
    if (data.status) {
      musiclist = { id: data.id, status: data.status, baseSrc: data.baseSrc, list: data.data }
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
})
