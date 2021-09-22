import Vue from "vue";
type C = {
  component: object,
  name: string
}
export class ComponentsOptions<T>  {
  private myOptions: T;
  public components: {
    any?: object
  } = {}
  public isLoading: boolean = true
  constructor(options: T) {
    this.myOptions = options
    if (options) {
      this.setOptions(null)
    }
  }
  static getComponentOptions(options: { any?: string }): {
    any?: string
  } {
    const keys: string[] = Object.keys(options)
    const newOptions: object = {}
    keys.forEach(e => {
      if (e.search(/^cmp_/) >= 0) {
        const key = e.replace('cmp_', '')
        newOptions[key] = options[e]
      }
    })
    return newOptions
  }
  static diff(myOptions: object, options: object): boolean {
    let isChange: boolean = false
    const keys: string[] = Object.keys(myOptions)
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
  private async initComponent(key: string, value: string): Promise<C> {
    const err = new Error()
    try {
      const component: {
        any?: any
        default: object
      } = await import(`@/components/testComponents/${key}/${value}`)
      if (!component) {
        err.message = '没有找到组件'
        throw err
      }
      Vue.component<string, object, null>(value, component.default);
      return {
        component: component.default,
        name: key
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
  public async setOptions(options: T | null): Promise<void> {
    try {
      const data: T = options || this.myOptions, keys: string[] = Object.keys(data)
      const componentsList: Promise<C>[] = []
      keys.forEach((e: string): void => {
        const key = e, value = data[key]
        componentsList.push(this.initComponent(key, value))
      })
      const dataList: C[] = await Promise.all<C>(componentsList)
      if (dataList) {
        dataList.forEach((e: C) => {
          this.components[e.name] = e.component
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
interface AC {
  forEach?: any
  push?: any
}

export class StrToFunc<S> {
  public newFunc: any = () => (null);
  constructor(str: S) {
    this.newFunc = new Function(this.myReturn(str))()
  }
  private myReturn(str: S): string {
    return "return " + str
  }
}
export const copyAndFilterObjectAndStrToFunc = <A extends AC>(target: A) => {
  try {
    if (typeof target === 'object' && target !== null) {
      const isArr: boolean = Array.isArray(target)
      const result: AC = isArr ? [] : {}
      // map.set(target, result)
      if (isArr) {
        target.forEach((e: any) => {
          if (e || e === 0 || typeof e === 'boolean') {
            result.push(copyAndFilterObjectAndStrToFunc(e))
          }
        })
      } else {
        Object.keys(target).forEach((key: string) => {
          if (target[key] || target[key] === 0 || typeof target[key] === 'boolean') {
            const test = copyAndFilterObjectAndStrToFunc(target[key])
            result[key] = test
            if (typeof result[key] === 'string') {
              const index: number = result[key].search(/(function[\s]*\()|(\)[\s]*=>[\s]*{)/)
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