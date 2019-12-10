import {getSlide}from '../api/home'
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