import axios from 'axios'
import { isObject, isFile } from './types'
import requestAddress from './requestAddress'
import { getCookie } from './request-help'

const { HOST_CATALOG, HOST_USER } = requestAddress

// 添加拦截器
function addInterceptors(client, type, actionAndErrorFuncs = []) {
  const typeList = ['request', 'response']
  if (!typeList.includes(type)) {
    throw new Error('类型必须为 request 或 response')
  }

  if (!Array.isArray(actionAndErrorFuncs) || actionAndErrorFuncs.length !== 2) {
    throw new Error('actionAndErrorFuncs参数数组需2个长度')
  }

  return client.interceptors[type].use(...actionAndErrorFuncs)
}

// 是否断网
function checkIfOnline(config) {
  if (navigator && navigator.onLine === false) {
    const tip = '网络走丢了，请稍后再试'
    console.error(tip)
    return Promise.reject(tip)
  } else {
    return config
  }
}
// 添加头, 以表单形式提交
function addAuthorizationHeads(config) {
  // const code = getCookie('code', { domain: 'minecraft.education.jdcloud.com' })

  // if (code === null) {
  //   console.error('凭据不存在')
  // } else {
  const { headers } = config
  headers.common['Authorization'] = code
  // }

  return config
}

// 改变参数
function changeParams(config) {
  const { method, data } = config

  if (method === 'get') {
    config.params = {
      params: config.params || { params: {} },
    }
  } else {
    if (data !== null && typeof data === 'object') {
      const formData = new FormData()
      for (let key in data) {
        if (isFile(data[key])) {
          formData.append(key, data[key])
        } else {
          formData.append(key, JSON.stringify(data[key]))
        }
      }
      config.data = formData
    }
  }

  return config
}

// 添加loading模态框
function addLoadingModal() { }
// 取消loading模态框
function cancelLoadingModal() { }

// 构造响应头
function resolveResponse(response) {
  const { status, data, headers, config } = response
  if (status === 200) {
    const { code, msg } = data

    // 成功的判断条件
    if (data.code === 0) {
      return data.data
    } else { // 出错的情况下
      handleError(data.code)
      console.error(msg)
      return Promise.reject(msg)
    }
  }
}

// 解决错误
function handleError(code) {
  switch (code) {
    case 500:
    // location.href = ''
  }
}

// 处理请求错误
function handleRequestError(error) {
  if (error instanceof Error) {
    throw error
  }
  if (typeof error === 'string') {
    throw new Error(error)
  }
}
// 处理响应错误
function handleResponseError(error) {
  if (error instanceof Error) {
    throw error
  }
  if (typeof error === 'string') {
    throw new Error(error)
  }
}

// 创建实例
function createAxios(config) {
  const client = axios.create(config)
  client.defaults.withCredentials = true

  // 请求过滤器执行顺序从下到上
  addInterceptors(client, 'request', [addAuthorizationHeads, handleRequestError])
  addInterceptors(client, 'request', [changeParams, handleRequestError])
  addInterceptors(client, 'request', [checkIfOnline, handleRequestError])
  addInterceptors(client, 'response', [resolveResponse, handleResponseError])
  return client
}

export function getAxiosClient(userConfig = {}) {
  if (!isObject(userConfig)) {
    throw new Error('配置必须是对象格式')
  }
  const config = {
    publicPath: 'http://api-m-new-dev.tlwok.com/m/',
    timeout: 6000, // 超时：毫秒
    withCredentials: true, // 跨域时， 允许cookie传输
  }

  return createAxios(Object.assign(config, userConfig))
}

export const axiosForUser = getAxiosClient({ publicPath: HOST_USER })
