import Vue from 'vue'
//封装fetch请求 
export const request = (url, params) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(params)
  }).then(res => {
    return Promise.resolve(res.json())
  }).catch(err => {
    return Promise.reject(err)
  })
}
export class ComponentsOptions {
  options = {}
  components = {}
  isLoading = true
  constructor(options) {
    this.options = options
  }
  async initComponent(key, value) {
    const err = new Error()
    try {
      const component = await import(`@/components/testComponents/${key}/${value}.vue`)
      if (!component) {
        err.message = '没有找到组件'
        throw err
      }
      await Vue.component(value, component.default);
      return {
        component: component.default,
        name: key
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async setOptions() {
    try {
      this.isLoading = true
      const data = this.options, keys = Object.keys(data)
      const componentsList = []
      keys.forEach(e => {
        const key = e, value = data[key]
        componentsList.push(this.initComponent(key, value))
      })
      const dataList = await Promise.all(componentsList)
      if (dataList) {
        dataList.forEach(e => {
          this.components[e.name] = e.component
        })
        console.log(`this.components`, this.components)
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