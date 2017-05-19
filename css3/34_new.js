function doFirst(){
	//先跟HTML畫面的物件產生關聯，再建事件聆聽的功能
	var list = document.querySelectorAll('p');	//list是陣列
	
	for(var i=0; i<list.length; i++){
		list[i].onclick = talk;
	}
	
}
function talk(){
	alert('hi~');
}
window.addEventListener('load',doFirst,false);
//window.onload = doFirst;