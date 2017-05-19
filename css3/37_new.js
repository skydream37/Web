function doFirst(){
	//先跟HTML畫面的物件產生關聯
	image = document.getElementById('image');
	playButton = document.getElementById('playButton').onclick = imagePlay;
	pauseButton = document.getElementById('pauseButton');	
	
	//再建事件聆聽的功能
	playButton.addEventListener('click',imagePlay,false);
	pauseButton.addEventListener('click',imagePause,false);
}
function imagePlay(){
	image.style.animationPlayState = 'running';
}
function imagePause(){
	image.style.animationPlayState = 'paused';
}
window.addEventListener('load',doFirst,false);