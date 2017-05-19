function doFirst(){
	//先跟HTML畫面的物件產生關聯，再建事件聆聽的功能
	document.getElementById('theForm').onsubmit = process;
}
function process(){
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	
	var feedback = '';
	var interval = '';
	
	var day = 24 * 60 * 60 * 1000;	//一天有多少毫秒
	var startDate = new Date(start);
	var endDate = new Date(end);
	
	if(startDate.getTime() && endDate.getTime()){
		if(startDate < endDate){		//開始日期小於結束日期
			var diff = endDate - startDate;
			
			if(diff <= day){
				interval = '1 day';
			}else{
				interval = Math.round(diff / day) + ' days';
			}
			
			
		}else{		//開始日期大於結束日期
			feedback += 'The start date must come before the end date.';
		}
	}else{
		feedback += 'Please enter valid dates in the format MM/DD/YYYY.';
	}
	
	document.getElementById('feedback').innerHTML = feedback;
	
	
	
	/* document.getElementById('feedback').innerHTML = feedback; */
	
	return false;
}
window.addEventListener('load',doFirst,false);