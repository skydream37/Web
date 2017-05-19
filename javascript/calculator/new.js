function doFirst(){
	//先跟HTML畫面的物件產生關聯，再建事件聆聽的功能
	document.getElementById('theForm').onsubmit = calculate;
}
function calculate(e){
	
//	alert(e.target.nodeName +' : '+ e.type);
	alert(this.nodeName +' : '+ e.type);
	
	var quantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;
	
	var total = quantity * price;
	
	tax = tax / 100;	/* tax /= 100; */
	tax++;
	total = total * tax;	/* total *= tax; */
	
	total = total - discount;	/* total -= discount; */
	
	total = total.toFixed(2);	/* 格式化 */
	
	document.getElementById('total').value = total;
	return false;
}
window.addEventListener('load',doFirst,false);