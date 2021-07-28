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
      const r=await res.json()
      if (r.code<0) {
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