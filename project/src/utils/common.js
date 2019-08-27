import { isObject } from './types'

// 打印
export function print (querySelector) {
  let newWindow = window.open('_blank')
  let codestr = document.querySelector(querySelector).innerHTML
  // 添加打印样式
  let styleList = document.querySelectorAll('style')
  for (let i = 0; i < styleList.length; i++) {
    codestr += '<style>' + styleList[i].innerHTML + '</style>'
  }

  newWindow.document.write(codestr)
  newWindow.print()
  newWindow.document.close()
  return true
}

// 存入storage
function saveToLocal (key, data, isSession = false) {
  let storage = localStorage
  if (isSession === true) {
    storage = sessionStorage
  }

  if (storage) {
    storage.setItem(key, JSON.stringify(data))
    return true
  }

  return false
}

function getFromLocal (key, isSession) {
  let storage = localStorage
  if (isSession === true) {
    storage = sessionStorage
  }

  if (storage) {
    return JSON.parse(storage.getItem(key))
  }
}
