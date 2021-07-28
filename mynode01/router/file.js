const express = require('express')
const fs = require('fs')
// const querystring = require('querystring');
const ContentOperate = require('../utils')
const router = express.Router()
router.post('/getFile', (req, res) => {
  const {
    path
  }=req.body
  fs.readFile(path, (err, data) => {
    const err1 = new Error(err)
    const content = ContentOperate.readData(data)
    try {
      if (err) throw err1
      res.send({
        content: content
      })
    } catch (error) {
      if (error === err1) return console.warn(`error`, error)
      console.log(`error`, error)
    }
  })
})
router.post('/setFile', (req, res) => {
  console.log(`req`, req)
})
module.exports = router

// fs.writeFile('message.txt', ContentOperate.createStr({a:1,b:2,c:3}), (err) => {
//   const err1 = new Error(err)
//   try {
//     if (err) throw err1

//   } catch (error) {
//     if (error === err1) return console.warn(`error`, error)

//   }
// });