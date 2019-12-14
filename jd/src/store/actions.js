import {
	getSlide
} from '../api/home'
import {
	getList
} from '../api/classify'
import {
	login
} from '@/api/login'
import router from '@/router'
export function changeSdList({
	commit
}) {
	getSlide().then(data => {
		if (data.code == 0) {
			commit('changeSdList', {
				data: data.data
			})
		}
	})
}
export function getClassifyList({
	commit
}) {
	getList().then(data => {
		if (data.code == 0) {
			commit('getClassifyList', {
				data: data.data
			})
		}
	})
}
export function changeState({
	commit
}, option) {
	login(option).then(data => {
		if (data.code == 0) {
			router.push('/')
			commit('changeState', option)
		}
		return data
	})
}