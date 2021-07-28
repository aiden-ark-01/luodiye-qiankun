const express = require('express')
const fs = require('fs')
const ContentOperate = require('../utils')
const router = express.Router()
router.post('/getModelData', (req, res) => {
  fs.readFile('./modeData/modeDataList.json', (err, fileData) => {
    const err1 = new Error(err)
    try {
      const {
        modelId
      } = req.body
      if (!modelId) {
        err1.message = 'modelId不能为空'
        err1.code = -1
        throw err1
      }
      const modeDataList = ContentOperate.readData(fileData)
      const data = modeDataList.find(e => e.modelId === modelId)
      if (!data) {
        err1.message = '未找到相关数据'
        err1.code = -404
        throw err1
      }
      res.send({
        code: 1,
        data: {
          modelName: data.modelName,
          options: data.data
        },
        msg: '成功'
      })
    } catch (error) {
      if (err1 === error) {
        res.send({
          code: -1,
          data: {},
          msg: error.message
        })
      }
    }

  })
})
router.post('/saveData', (req, res) => {
  try {
    const {
      modelId,
      data
    } = req.body
    console.log(`data`, data)
    console.log(`1`, 11111)
    fs.readFile('./modeData/modeDataList.json', (err, fileData) => {
      const err1 = new Error(err)
      try {
        console.log(`2`, 2)
        if (!modelId) {
          err1.message = 'modelId不能为空'
          err1.code = -1
          throw err1
        }
        console.log(`3`, 3)
        let find = false
        const modeDataList = ContentOperate.readData(fileData)
        console.log(`2`, modeDataList)
        const userData = modeDataList.map(e => {
          if (e.modelId === modelId) {
            find = true
            return {
              ...e,
              data:{
                ...data
              }
            }
          }
          return e
        })
        console.log(`4`, 4)
        if (!find) {
          err1.message = '未找到相关数据'
          err1.code = -404
          throw err1
        }
        fs.writeFile('./modeData/modeDataList.json', ContentOperate.createStr(userData), (err) => {
          console.log(`5`, 5)
          const err1 = new Error(err)
          try {
            if (err) throw err1
            console.log(`6`, 6)
            fs.writeFile(data.path, ContentOperate.createStr(data), (err) => {
              console.log(`5`, 5)
              const err1 = new Error(err)
              try {
                if (err) throw err1
                console.log(`6`, 6)
                res.send({
                  code: 1,
                  data: data,
                  msg: '成功'
                })
              } catch (error) {
                if (error === err1) return console.warn(`error`, error)
    
              }
            });
          } catch (error) {
            if (error === err1) return console.warn(`error`, error)

          }
        });
        return data

        // res.send({
        //   code: 1,
        //   data: {
        //     modelName: data.modelName,
        //     options: data.data
        //   },
        //   msg: '成功'
        // })
      } catch (error) {
        if (err1 === error) {
          res.send({
            code: -1,
            data: data,
            msg: error.message
          })
        }
      }

    })

    console.log(`3`, modeDataList)
  } catch (error) {

  }
})
module.exports = router