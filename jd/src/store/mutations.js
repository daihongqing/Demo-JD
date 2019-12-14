export function changeSdList(state, option) {
	state.homeSlideList = option.data;
}
export function getClassifyList(state, option) {
	state.classifyList = option.data
}
export function changeState(state, option) {
	state.loginSate = (option.phone).toString()
	localStorage.setItem('token','wwww')
}