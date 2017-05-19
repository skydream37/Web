function doFirst(){
	//先跟HTML畫面的物件產生關聯，再建事件聆聽的功能
	document.getElementById('theForm').onsubmit = process;
}
function process(){
	var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var feedback = document.getElementById('feedback');
    
    var message = '';
    var interval = '';
    var day = 24 * 60 * 60 * 1000;
   
    var startDate = new Date(start);
    var endDate = new Date(end);
	
    if ( startDate.getTime() && endDate.getTime() ) {
     
        if (startDate <= endDate) {
          
            var diff = endDate - startDate;

            if (diff <= day) {
                interval = '1 day';
            } else {
                interval = Math.round(diff/day) + ' days';
            }
       
            message = 'The room has been scheduled starting on '+startDate.toDateString();
			message += ' and ending on '+endDate.toDateString();
			message += ', which is a period of '+interval+'!';
            
        } else {
            message = 'The start date must come before the end date!';
        }
    
    } else {
        message = 'Please enter valid dates in the format MM/DD/YYYY.';
    }
    
	feedback.innerText = message;

        
    return false;
}
window.addEventListener('load',doFirst,false);