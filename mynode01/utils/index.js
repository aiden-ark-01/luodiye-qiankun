

class ContentOperate {
  static createStr = (value) => {
    const type = typeof value
    switch (type) {
      case 'object':
        return JSON.stringify(value)
      case 'string':
        return value
      case 'boolean': case 'number':
        return value.toString()
      default:
        break;
    }
  }
  static readData = (value = '') => {
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
}
module.exports = ContentOperate