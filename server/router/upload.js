const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

// 업로드된 파일을 저장할 디렉토리 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'))
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const filename = path.basename(file.originalname, ext)
    cb(null, filename + '_' + Date.now() + ext)
  },
})

// 업로드를 처리하는 미들웨어 생성
const upload = multer({ storage: storage })

router.post('/upload', upload.single('file'), function (req, res) {
  console.log(req.file)
})

module.exports = router
