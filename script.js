var menuLink=document.querySelector('.menu-link');
var menu=document.querySelector('.menu');
var menuOverlay=document.querySelector('.menu-overlay');
var myFullpage = new fullpage('#fullpage', {
	anchors: ['Home', 'Education', 'Expertise', 'Achievement', 'Endeavor', 'Organisation', 'Connect'],
	sectionsColor: ['#FFF', '#FFF','#FFF', '#FFF'],
	direction: 'vertical',
	scrollingSpeed: 500,
});

menuLink.addEventListener('click',function(e){
	e.preventDefault();
	menu.classList.toggle('open');
	menuOverlay.classList.toggle('open');
});