////////////////////////////////////

// Updated: 2018-06-15

// concert/ 配下の main.js, mini.js, other.js 以外を読み込んで
// audio.db, photo.db, video.db に出力します

////////////////////////////////////

const fs = require('fs')
const path = require('path')
const NeDB = require('nedb')

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

const mainConcert = require('./concert/main')
const miniConcert = require('./concert/mini')
const otherConcert = require('./concert/other')

const mainAudio = require('./concert/mainAudio')
const miniAudio = require('./concert/miniAudio')
const otherAudio = require('./concert/otherAudio')

const mainPhoto = require('./concert/mainPhoto')
const miniPhoto = require('./concert/miniPhoto')

const mainVideo = require('./concert/mainVideo')
const miniVideo = require('./concert/miniVideo')
const otherVideo = require('./concert/otherVideo')

function concertTime (id) {
  for (var i=0;i<mainConcert.mainConcert.length;i++) {
    if (mainConcert.mainConcert[i].id === id) {
      return mainConcert.mainConcert[i].time.timestamp
    }
  }
  for (var i=0;i<miniConcert.miniConcert.length;i++) {
    if (miniConcert.miniConcert[i].id === id) {
      return miniConcert.miniConcert[i].time.timestamp
    }
  }
  for (var i=0;i<otherConcert.otherConcert.length;i++) {
    if (otherConcert.otherConcert[i].id === id) {
      return otherConcert.otherConcert[i].time.timestamp
    }
  }
}

function concertType (id) {
  for (var i=0;i<mainConcert.mainConcert.length;i++) {
    if (mainConcert.mainConcert[i].id === id) {
      return mainConcert.mainConcert[i].type
    }
  }
  for (var i=0;i<miniConcert.miniConcert.length;i++) {
    if (miniConcert.miniConcert[i].id === id) {
      return miniConcert.miniConcert[i].type
    }
  }
  for (var i=0;i<otherConcert.otherConcert.length;i++) {
    if (otherConcert.otherConcert[i].id === id) {
      return otherConcert.otherConcert[i].type
    }
  }
}

////////////////////////////////////
// Audio ///////////////////////////
////////////////////////////////////
audioDB.remove({}, {multi: true}, (err, numRemoved) => {
  for (var i=0;i<mainAudio.mainConcert.length;i++) {
    var data = mainAudio.mainConcert[i]
    if (data.status) {
      var musiclist = {id: data.id, type: concertType(data.id), time: concertTime(data.id), status: data.status, baseSrc: data.baseSrc, list: data.data}
      audioDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', audio OK')
      })
    }
  }
  for (var i=0;i<miniAudio.miniConcert.length;i++) {
    var data = miniAudio.miniConcert[i]
    if (data.status) {
      var musiclist = {id: data.id, type: concertType(data.id), time: concertTime(data.id), status: data.status, baseSrc: data.baseSrc, list: data.data}
      audioDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', audio OK')
      })
    }
  }
  for (var i=0;i<otherAudio.otherConcert.length;i++) {
    var data = otherAudio.otherConcert[i]
    if (data.status) {
      var musiclist = {id: data.id, type: concertType(data.id), time: concertTime(data.id), status: data.status, baseSrc: data.baseSrc, list: data.data}
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
photoDB.remove({}, {multi: true}, (err, numRemoved) => {
  for (var i=0;i<mainPhoto.mainConcert.length;i++) {
    var data = mainPhoto.mainConcert[i]
    if (data.status) {
      // console.log(data, i)
      var list = []
      const z = (num) => {
        const s = '000' + String(num)
        return s.substr(s.length - 3, 3)
      }
      for (var j=0;j<data.count;j++) {
        var add = z(j+1) + '.jpg'
        list = list.concat(add)
      }
      // console.log(data, i, list)
      var data = {
        id: data.id,
        status: data.status,
        baseSrcThumbnail: data.baseSrcThumbnail,
        baseSrcOriginal: data.baseSrcOriginal,
        list: list
      }
      photoDB.insert(data, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
        // console.log(data.id + ', photo OK')
      })
    }
  }
  for (var i=0;i<miniPhoto.miniConcert.length;i++) {
    var data = miniPhoto.miniConcert[i]
    if (data.status) {
      // console.log(data, i)
      var list = []
      const z = (num) => {
        const s = '000' + String(num)
        return s.substr(s.length - 3, 3)
      }
      for (var j=0;j<data.count;j++) {
        var add = z(j+1) + '.jpg'
        list = list.concat(add)
      }
      // console.log(data, i, list)
      var data = {
        id: data.id,
        status: data.status,
        baseSrcThumbnail: data.baseSrcThumbnail,
        baseSrcOriginal: data.baseSrcOriginal,
        list: list
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
videoDB.remove({}, {multi: true}, (err, numRemoved) => {
  for (var i=0;i<mainVideo.mainConcert.length;i++) {
    var data = mainVideo.mainConcert[i]
    if (data.status) {
      var musiclist = {id: data.id, status: data.status, baseSrc: data.baseSrc, poster: data.poster, list: data.data}
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
  for (var i=0;i<miniVideo.miniConcert.length;i++) {
    var data = miniVideo.miniConcert[i]
    if (data.status) {
      var musiclist = {id: data.id, status: data.status, baseSrc: data.baseSrc, list: data.data}
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
  for (var i=0;i<otherVideo.otherConcert.length;i++) {
    var data = otherVideo.otherConcert[i]
    if (data.status) {
      var musiclist = {id: data.id, status: data.status, baseSrc: data.baseSrc, list: data.data}
      videoDB.insert(musiclist, (err, newdoc) => {
        if (err) return console.log('error: ' + err)
      })
    }
  }
})