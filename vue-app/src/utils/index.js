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