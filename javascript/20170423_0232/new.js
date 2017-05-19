function doFirst() {
	//先跟HTML畫面的物件產生關聯，再建事件聆聽的功能
	document.getElementById('theForm').onsubmit = addTask;
}
var tasks = [];

function addTask() {
	var task = document.getElementById('task').value;
	var feedback = '';

	if (task) {
		//	tasks[tasks.length] = task;
		tasks.push(task);

		feedback += 'You have ' + tasks.length + ' task(s) in your To-Do List.';
		feedback += '<h3>To-Do List</h3>';
		feedback += '<ol><li>';

		//每新增一筆資料，就多一對<li>			
		feedback += tasks.join('</li><li>');

		feedback += '</li></ol>';
	}

	document.getElementById('feedback').innerHTML = feedback;
	return false;
}
window.addEventListener('load', doFirst, false);