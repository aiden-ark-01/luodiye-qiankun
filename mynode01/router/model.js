const express = require('express')
const { getModelData, saveData,uploadImages } = require('../apiFun')
const multipart = require('connect-multiparty');
// const upload=require('../configs/multer.config')
const router = express.Router()
router.post('/getModelData', getModelData)
router.post('/saveData', saveData)
const multipartMiddleware = multipart({ uploadDir: './tmp/uploads' });
router.post('/uploadImages',multipartMiddleware, uploadImages)
module.exports = router