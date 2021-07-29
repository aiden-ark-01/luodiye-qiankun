
const fs = require('fs')
const ContentOperate = require('../utils')
const getModelData = (req, res) => {
  fs.readFile('./modeData/modeDataList.json', (err, fileData) => {
    const err1 = new Error(err)
    try {
      const {
        modelId: id
      } = req.body
      if (!id) {
        err1.message = 'modelId不能为空'
        err1.code = -1
        throw err1
      }
      const modelId = +id
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
          code: error.code,
          data: {},
          msg: error.message
        })
      }
    }

  })
}
const saveData = (req, res) => {
  try {
    const {
      modelId,
      data,
      filePath
    } = req.body
    fs.readFile('./modeData/modeDataList.json', (err, fileData) => {
      const err1 = new Error(err)
      try {
        if (!modelId) {
          err1.message = 'modelId不能为空'
          err1.code = -1
          throw err1
        }
        let find = false
        const modeDataList = ContentOperate.readData(fileData)
        const userData = modeDataList.map(e => {
          if (e.modelId === modelId) {
            find = true
            return data
          }
          return e
        })
        if (!find) {
          userData.push(data)
          // err1.message = '未找到相关数据'
          // err1.code = -404
          // throw err1
        }
        fs.writeFile('./modeData/modeDataList.json', ContentOperate.createStr(userData), (err) => {
          const err1 = new Error(err)
          try {
            if (err) throw err1
            console.log(`7`, 7)
            fs.writeFile(filePath, ContentOperate.createStr(data), (err) => {
              const err1 = new Error(err)
              try {
                if (err) throw err1
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
            console.log(`err107`, error)
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

        console.log(`err124`, error)
        if (err1 === error) {
          res.send({
            code: -1,
            data: data,
            msg: error.message
          })
        }
      }

    })

  } catch (error) {
    console.log(`err137`, error)
  }
}
const uploadImages = (req, res) => {
  const fileType = req.files.pic.originalFilename.split('.')[1]
  const onlinePath=req.body.name +Date.now()+ '.' + fileType
  const dstPath = 'tmp/uploads/' + onlinePath
  fs.rename(req.files.pic.path, dstPath, function (err) {
    if (err) {
      // res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
      res.send({ code: -1, msg: '上传失败！' + err });
    } else {
      // res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
      res.send({
        code: 1,
        data: {
          path:onlinePath
        },
        msg: '上传成功'
      });
    }
  })
}
module.exports = {
  getModelData,
  saveData,
  uploadImages
}