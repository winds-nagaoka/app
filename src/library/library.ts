import request from 'superagent'

type Session = {
  userid: string
  clientid: string
  clientToken: string
  useragent: string
  version: string
}

function authAPI(send: { session: Session }, callback: (result: boolean) => void) {
  request
    .post('https://auth.winds-n.com/auth')
    .type('form')
    .send(send)
    .end((error, response) => {
      if (error) return callback(false)
      if (response.body.status) {
        return callback(true)
      }
    })
}

function showTime() {
  const time = new Date()
  const z = (v: number) => {
    const s = '00' + v
    return s.substr(s.length - 2, 2)
  }
  // const time = (new Date()).getTime()
  return (
    time.getFullYear() +
    '/' +
    (time.getMonth() + 1) +
    '/' +
    time.getDate() +
    ' ' +
    z(time.getHours()) +
    ':' +
    z(time.getMinutes()) +
    ':' +
    z(time.getSeconds())
  )
}

export const lib = {
  authAPI,
  showTime,
}
