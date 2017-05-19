function doFirst(){
	//先跟HTML畫面的物件產生關聯，再建事件聆聽的功能
	document.querySelector('p').onclick = talk;
}
function talk(){
	alert('hi~');
}
window.addEventListener('load',doFirst,false);
//window.onload = doFirst;