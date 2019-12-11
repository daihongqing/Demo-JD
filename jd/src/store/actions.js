import {getSlide}from '../api/home'
import {getList} from '../api/classify'
export function changeSdList({ 
	commit 
}) {
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