import http from './http'
export function getList(){
  return http.get('/classify/list')
}