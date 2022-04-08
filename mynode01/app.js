const express = require('express')
// const mongodb = require("mongodb");

const dotenv = require('dotenv');
const router=require('./router')
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/', (req, res) => {
  res.send('123123')
})
app.get('/test', (req, res) => {
  res.send({
    name: "asd",
    age: 123,
    arr: [{
      a: 1,
      b: null,
      c: undefined
    }, 1, null, undefined, ['b', 2, {
      b: 3
    }]]
  })
})
app.get('/to', (req, res) => {
  console.log('11', 11);
  res.send('http://192.168.1.9:10000')
})

router.forEach(r=>{
  app.use(r)
})
// console.log(`__dirname`, __dirname+'/tmp/uploads')
app.use('/public',express.static('./tmp'))
app.listen(process.env.NODE_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.NODE_PORT}`)
  // const client = mongodb.MongoClient;
  // const url = `mongodb://wkf888:123qwe@${process.env.MONGODB_PATH}/`;
  // let BLOBAL_DB = null
  // const getDb = (db) => {
  //   return BLOBAL_DB.db(db);
  // }
  // const getCollectionFind = ({
  //   db = '',
  //   tableName = '',
  //   query = {}
  // }) => {
  //   return db.collection(tableName).find(query);
  // }
  // client.connect(url, {
  //   useUnifiedTopology: true
  // }, function (err, client) {
  //   if (err) throw err;
  //   BLOBAL_DB = client
  //   const db = getDb('test');
  //   const query = {
  //     db,
  //     tableName: 'user',
  //     query: {}
  //   };
  //   const cursor = getCollectionFind(query);

  //   function iterateFunc(doc) {
  //     console.log(doc);
  //   }

  //   function errorFunc(error) {
  //     console.log(error);
  //   }
  //   cursor.forEach(iterateFunc, errorFunc);
  //   console.log("数据库已创建!");
  //   // client.close();
  // });
})