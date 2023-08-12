import axios from 'axios'
import { type AxiosRequestConfig, AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
export const httpInstance = axios.create()

export type BkResponse = {
  data: any
  code: number
  message: string
  success: true
}

// 设置请求根路径
httpInstance.defaults.baseURL = import.meta.env.VITE_BASEURL

// 配置响应拦截器
export const $http = async (config: AxiosRequestConfig) => {
  try {
    const axiosResponse = await httpInstance<BkResponse>(config)
    const bkResponse = axiosResponse.data

    if (!bkResponse?.success) {
      let errTitle: string = 'Error'
      if (bkResponse.code === 401) {
        errTitle = 'Unauthorized'
        ElMessage.error('未授权')
      } else if (bkResponse.code === 403) {
        errTitle = 'Forbidden'
      } else if (bkResponse.code === 500) {
        errTitle = 'ServerError'
      } else {
        errTitle = 'Unknown'
      }
      const err = new Error(bkResponse?.message || 'Unknown')
      err.name = errTitle
      throw err
    }

    return bkResponse
  } catch (err) {
    if (err instanceof AxiosError) {
      ElMessage.error('网络错误')
    }
    throw err
  }
}
