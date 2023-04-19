const express = require('express')
const router = express.Router()
const path = require('path')

const clientApp = path.join(__dirname, '../../client/build')

router.use(express.static(clientApp)) // 모든 요청을 프론트엔드 정적 파일이 처리
router.get('/*', function (req, res) {
  // build 파일의 index.html을 바라보게 처리
  res.sendFile(path.resolve(clientApp, 'index.html'))
})

module.exports = router