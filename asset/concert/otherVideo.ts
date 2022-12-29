import type { Video } from '../types/types'

const otherConcert: Video[] = [
  {
    id: 'other001',
    status: true,
    baseSrc: 'flashmob2016/',
    poster: 'https://video.winds-n.com/poster_854.png',
    data: [{ available: true, data: 0, path: '001.mp4' }],
  },
  {
    id: 'other002',
    status: true,
    baseSrc: 'bandfes2018/',
    poster: 'https://video.winds-n.com/poster_854.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
    ],
  },
  {
    id: 'flashmob2018',
    status: true,
    baseSrc: 'flashmob2018/',
    poster: 'https://video.winds-n.com/poster_854.png',
    data: [{ available: true, data: 0, path: '001.mp4' }],
  },
  {
    id: 'flashmob2019',
    status: true,
    baseSrc: 'flashmob2019/',
    poster: 'https://video.winds-n.com/poster_854.png',
    data: [{ available: true, data: 0, path: '001.mp4' }],
  },
]

module.exports = {
  otherConcert,
}
