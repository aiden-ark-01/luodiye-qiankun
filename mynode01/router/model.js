const express = require('express')
const { getModelData, saveData,uploadImages } = require('../apiFun')
const multipart = require('connect-multiparty');
const res = require('express/lib/response');
// const upload=require('../configs/multer.config')
const router = express.Router()
router.post('/getModelData', getModelData)
router.post('/saveData', saveData)
router.post('/test', ()=>{
  res.send({
    code: 1,
    data: 'asd',
    msg: '成功'
  })
})
const multipartMiddleware = multipart({ uploadDir: './tmp/uploads' });
router.post('/uploadImages',multipartMiddleware, uploadImages)
module.exports = router