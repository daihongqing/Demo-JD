import http from "./http"
export function login(option) {
    return http.post('/user/login',option)
}
export function getUser(){
    return http.get('/user/login').then(data=>{
        if(data.code==0){
            return data.data
        }
    })
}
export function judgeLogin(){
    return http.get('/user/login')
}