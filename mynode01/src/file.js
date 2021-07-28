const fs = require('fs')
// const json = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// const createStr = (value) => {
//   const type = typeof value
//   switch (type) {
//     case 'object':
//       return JSON.stringify(value)
//     case 'string':
//       return value
//     case 'boolean': case 'number':
//       return value.toString()
//     default:
//       break;
//   }
// }
const readData = (value = '') => {
  const err1 = 'JSON at position'
  try {
    const v = JSON.parse(value)
    return v
  } catch (error) {
    if (error.toString().search(err1) >= 0) {
      return value.toString()
    }
    console.log(`error`, error)
    return 'nodata'
  }
}
// fs.writeFile('message.txt', createStr(false), (err) => {
//   const err1 = new Error(err)
//   try {
//     if (err) throw err1

//   } catch (error) {
//     if (error === err1) return console.warn(`error`, error)

//   }
// });
fs.readFile('../modeData/modeDataList.json', (err, data) => {
  const err1 = new Error(err)
  console.log(`data.toString()`, readData(data))
  try {
    if (err) throw err1
  } catch (error) {
    if (error === err1) return console.warn(`error`, error)

  }
})