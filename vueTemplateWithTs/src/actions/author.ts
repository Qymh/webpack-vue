import http from '../lib/httpFn'

export default {
  /**
   * 获取作者
   * @param api api接口
   */
  getAuthor(api: string) {
    return new Promise((resolve, reject) => {
      http.get(api, {})
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
