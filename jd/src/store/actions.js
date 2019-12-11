<<<<<<< HEAD
import {getSlide}from '../api/home'
export function changeSdList({  commit  }) {
=======
import {getSlide,getList}from '../api/home'
export function changeSdList({ 
	commit 
}) {
>>>>>>> c5c08d897bc6e8f9be71e11029246428b27cdffa
	getSlide().then(data => {
		if (data.code == 0) {
			commit('changeSdList',{
				data:data.data
			})
		}
	})
}
export function getClassifyList({commit}){
	getList().then(data=>{
		if (data.code==0) {
			commit('getClassifyList',{
				data:data.data
			})
		}
	})
}