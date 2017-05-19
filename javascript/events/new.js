function doFirst() {
	//先跟HTML畫面的物件產生關聯，再建事件聆聽的功能
	var test = document.getElementById("theForm");
	test.addEventListener('submit',setEvent(),false);
	document.getElementById('theForm').onsubmit = setEvent;

// form.addEventListener("submit", function(){
}

function setEvent() {

	/* 
	if(typeof window.print == 'function'){
		window.print();
	} 
	*/

	var events = ['click', 'contextmenu', 'select', 'change', 'keyup'];

	for (var i = 0; i < events.length; i++) {
		var yourCheck = document.getElementById(events[i]);

		if (yourCheck.checked) {
			document.addEventListener(events[i], report, false);
		} else {
			document.removeEventListener(events[i], report, false);
		}
	}

	result = document.getElementById('result');
	//	result.value = '';
	result.innerHTML = '';

	return false;
}

function report(e) {
	var message = e.target.nodeName + ' : ' + e.type + '\n'; //P:click

	//	result.value += message;
	result.innerHTML += message;
}
window.addEventListener('load', doFirst, false);