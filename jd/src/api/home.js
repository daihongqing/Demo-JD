import http from './http'

export function getSlide() {
    return http.get('/home/slide')
}