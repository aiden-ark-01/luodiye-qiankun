import Vue from 'vue'
//封装fetch请求 
export const request = {
  POST: async (url, params) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(params)
      })
      const r = await res.json()
      if (r.code != -404 && r.code < 0) {
        throw r
      }
      return await Promise.resolve(r)
    } catch (err) {
      return await Promise.reject(err)
    }
  }
}
export const copyAndFilterObject = (target) => {
  try {
    if (typeof target === 'object' && target !== null) {
      const isArr = Array.isArray(target)
      const result = isArr ? [] : {}
      // map.set(target, result)
      if (isArr) {
        target.forEach(e => {
          if (e || e === 0 || typeof e === 'boolean') {
            result.push(copyAndFilterObject(e))
          }
        })
      } else {
        Object.keys(target).forEach(key => {
          if (target[key] || target[key] === 0 || typeof target[key] === 'boolean') {
            const test = copyAndFilterObject(target[key])
            result[key] = test

          }
        })

      }
      return result
    } else {
      return target
    }
  } catch (error) {
    console.error(error)
  }
}

export class StrToFunc {
  str = "";
  newFunc = null;
  constructor(str) {
    this.newFunc = new Function(this.myReturn(str))()
  }
  myReturn(str) {
    return "return " + str
  }
}
export const copyAndFilterObjectAndStrToFunc = (target) => {
  try {
    if (typeof target === 'object' && target !== null) {
      const isArr = Array.isArray(target)
      const result = isArr ? [] : {}
      // map.set(target, result)
      if (isArr) {
        target.forEach(e => {
          if (e || e === 0 || typeof e === 'boolean') {
            result.push(copyAndFilterObjectAndStrToFunc(e))
          }
        })
      } else {
        Object.keys(target).forEach(key => {
          if (target[key] || target[key] === 0 || typeof target[key] === 'boolean') {
            const test = copyAndFilterObjectAndStrToFunc(target[key])
            result[key] = test
            if (typeof result[key] === 'string') {
              const index = result[key].search(/(function[\s]*\()|(\)[\s]*=>[\s]*{)/)
              if (index >= 0) {
                const strToFunc = new StrToFunc(result[key])
                result[key] = strToFunc.newFunc
              }
            }
          }
        })
      }
      return result
    } else {
      return target
    }
  } catch (error) {
    console.error(error)
  }
}
export class ComponentsOptions {
  options = {}
  components = {}
  isLoading = true
  constructor(options) {
    this.options = options
    if (options) {
      this.setOptions()
    }
  }
  static getComponentOptions(options) {
    const keys = Object.keys(options)
    const newOptions = {}
    keys.forEach(e => {
      if (e.search(/^cmp_/) >= 0) {
        const key = e.replace('cmp_', '')
        newOptions[key] = options[e]
      }
    })
    return newOptions
  }
  static diff(myOptions, options) {
    let isChange = false
    const keys = Object.keys(myOptions)
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      if (!options[key]) {
        isChange = true
        break
      }
      if (myOptions[key] !== options[key]) {
        isChange = true
        break
      }
    }
    return isChange
  }
  async initComponent(key, value) {
    try {
      const component = await import(`@/components/testComponents/${key}/${value}`)
      await Vue.component(value, component.default);
      return {
        component: component.default,
        name: key
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async setOptions(options) {
    try {
      this.isLoading = true
      const data = options || this.options, keys = Object.keys(data)
      const componentsList = []
      keys.forEach(e => {
        const key = e, value = data[key]
        if (value !== 'none') {
          componentsList.push(this.initComponent(key, value))
        }else{
          this.components[key]=null
        }
      })
      const dataList = await Promise.all(componentsList)
      if (dataList) {
        dataList.forEach(e => {
          this.components[e.name] = e.component
          this.options[e.name] = e.component
        })
        this.isLoading = false
      }
    } catch (error) {
      if (error.message) {
        console.log(`error.message`, error.message)
        return
      }
      console.log(`error`, error)
    }
  }
}
// export const