import http from './http'
export function getList(){
   http.get('/classify/list')
}