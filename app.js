const express = require('express')
const app = express()

const version = require('project-version')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// const compression = require('compression')
// app.use(compression({
//   threshold: 0,
//   level: 9,
//   memLevel: 9
// }))

// CORSを許可する
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://192.168.1.22:3001')
  // res.header('Access-Control-Allow-Origin', 'https://member.winds-n.com')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const urlPracticeBase = 'https://misakikato.xyz/winds/practice/'
const urlSourceBase = 'https://winds-n.com/member/contents/audio/'
const urlAudioBase = 'https://misakikato.xyz/winds/archive/audio/'
// const urlVideoBase = 'https://video.winds-n.com/'
const urlVideoBase = 'https://misakikato.xyz/winds/archive/video/'
const urlPhotoBase = 'https://misakikato.xyz/winds/archive/photo/'

const lib = require('./library/library')
const concert = require('./library/concert')
const audio = require('./library/audio')
const photo = require('./library/photo')
const video = require('./library/video')
const practice = require('./library/practice')
const record = require('./library/record')
const source = require('./library/source')
const reference = require('./library/reference')

// ルートアクセス
app.get('/', (req, res) => {
  console.log('[' + lib.showTime() + '] root access')
  // res.send('')
  res.redirect(301, 'https://winds-n.com')
})

// API 設定
app.post('/api/concert', (req, res) => {
  const userid = req.body.userid
  const token = req.body.token
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/concert: ' + userid + ', (token), version: ' + version)
  lib.authAPI({userid, token}, (authResult) => {
    if (authResult) {
      concert.loadMain((docs) => {
        if (!docs) return res.json({status: true, list: []})
        return res.json({status: true, list: docs})
      })
    }
  })
})

app.post('/web/concert', (req, res) => {
  console.log('[' + lib.showTime() + '] web/concert')
  concert.loadMain((docs) => {
    if (!docs) return res.json({status: true, list: []})
    return res.json({status: true, list: docs})
  })
})

app.post('/api/audio', (req, res) => {
  const userid = req.body.userid
  const token = req.body.token
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/audio: ' + userid + ', (token), version: ' + version)
  lib.authAPI({userid, token}, (authResult) => {
    if (authResult) {
      audio.loadAudio((docs) => {
        if (!docs) return res.json({status: true, list: []})
        return res.json({status: true, list: docs, url: urlAudioBase})
      })
    }
  })
})

app.post('/api/photo', (req, res) => {
  const userid = req.body.userid
  const token = req.body.token
  const id = req.body.id
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/photo: ' + userid + ', (token), version: ' + version)
  lib.authAPI({userid, token}, (authResult) => {
    if (authResult) {
      photo.loadPhoto(id, (docs) => {
        if (!docs) return res.json({status: true, photo: false, list: []})
        return res.json({status: true, photo: true, baseSrcThumbnail: docs.baseSrcThumbnail, baseSrcOriginal: docs.baseSrcOriginal, list: docs.list, url: urlPhotoBase})
      })
    }
  })
})

app.post('/api/video', (req, res) => {
  const userid = req.body.userid
  const token = req.body.token
  const id = req.body.id
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/video: ' + userid + ', (token), version: ' + version)
  lib.authAPI({userid, token}, (authResult) => {
    if (authResult) {
      video.loadVideo(id, (docs) => {
        if (!docs) return res.json({status: true, video: false, list: []})
        const poster = docs.poster ? docs.poster : ''
        return res.json({status: true, video: true, baseSrc: docs.baseSrc, poster, list: docs.list, url: urlVideoBase})
      })
    }
  })
})

app.post('/api/practice', (req, res) => {
  const userid = req.body.userid
  const token = req.body.token
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/practice: ' + userid + ', (token), version: ' + version)
  lib.authAPI({userid, token}, (authResult) => {
    if (authResult) {
      practice.loadPractice((docs) => {
        if (!docs) return res.json({status: true, list: []})
        return res.json({status: true, list: docs})
      })
    }
  })
})

app.post('/api/record', (req, res) => {
  const userid = req.body.userid
  const token = req.body.token
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/record: ' + userid + ', (token), version: ' + version)
  lib.authAPI({userid, token}, (authResult) => {
    if (authResult) {
      record.loadRecord((docs) => {
        if (!docs) return res.json({status: true, list: []})
        return res.json({status: true, list: docs, url: urlPracticeBase})
      })
    }
  })
})

app.post('/api/source', (req, res) => {
  const userid = req.body.userid
  const token = req.body.token
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/source: ' + userid + ', (token), version: ' + version)
  lib.authAPI({userid, token}, (authResult) => {
    if (authResult) {
      source.loadSource((docs) => {
        if (!docs) return res.json({status: true, list: []})
        return res.json({status: true, list: docs})
      })
    }
  })
})

app.post('/api/reference', (req, res) => {
  const userid = req.body.userid
  const token = req.body.token
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/reference: ' + userid + ', (token), version: ' + version)
  lib.authAPI({userid, token}, (authResult) => {
    if (authResult) {
      reference.loadReference((docs) => {
        if (!docs) return res.json({status: true, list: []})
        return res.json({status: true, list: docs, url: urlSourceBase})
      })
    }
  })
})

app.post('/api/count', (req, res) => {
  const userid = req.body.userid
  const play = req.body.play
  const version = req.body.version
  console.log('[' + lib.showTime() + '] api/count: ' + userid + ', version: ' + version + ', ' + play)
  return res.json({})
})

app.listen(3007)