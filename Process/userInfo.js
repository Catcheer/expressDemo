var Url = require('url')

module.exports = {
  /**
   * 用户名 age
   * 
   * @param {any} url 
   * @returns 
   */
  getUserInfo(url) {
    console.log(url)
    const queryStr = Url.parse(url).query
    let queryArr = []
    let obj = {}
    if (queryStr.indexOf('&') > -1) {
      queryArr = queryStr.split('&')
      console.log(queryArr)
      queryArr.forEach((value) => {
        let tempArr = value.split('=')
        if (tempArr[0] == 'uname') {
          obj.name = tempArr[1]
        }
        if (tempArr[0] == 'age') {
          obj.age = tempArr[1]
        }
      })
    }
    return obj
  }
}