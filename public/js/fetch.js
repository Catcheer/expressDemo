const httpMethod = {
  'get': 'GET',
  'post': 'POST'
}

const httpFetch = {
  get(url) {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText)
      }
    }
    xmlhttp.open(httpMethod.get, url, true)
    xmlhttp.send()
  },
  post(url, obj) {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText)
        document.querySelector('.auto').innerHTML = xmlhttp.responseText
      }
    }
    xmlhttp.open(httpMethod.post, url, true)
    xmlhttp.setRequestHeader("Content-type", "application/json");
    let str = JSON.stringify(obj)
    console.log(str)
    xmlhttp.send(str)
  }
}

function toStr(obj) {
  if ((Object.prototype.toString.call(obj)).slice(8, -1) != 'Object') return
  let str = ''
  for (k in obj) {
    str += (k + '=' + obj[k].toString() + '&')
  }
  console.log(str)
  return str
}


