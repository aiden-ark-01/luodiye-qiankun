const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'tmp/uploads')
  },
  filename: (req, file, cb) => {
    console.log(`file`, file)
    // cb(null,file.)
  }
})



const upload = multer({storage})
module.exports=upload