import { $http } from '.'

/**
 * 登录
 */

export const loginApi = (data: { password: string; username: string }) => {
  return $http({
    method: 'POST',
    url: '/admin/login', // 根据实际文档修改
    data
  })
}
