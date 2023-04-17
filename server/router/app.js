const express = require('express')
const router = express.Router()

router.post('/test', function (req, res) {
  console.log('front call test')
  console.log(req.body)

  return res.status(200).json({
    myMessage: 'you got data',
  })
})

module.exports = router
