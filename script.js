var navMenu=document.querySelector('.navbar-toggler');
var menuOverlay=document.querySelector('.menuOverlay');
var myFullpage = new fullpage('#fullpage', {
	anchors: ['Home', 'Education', 'Expertise', 'Achievement', 'Endeavor', 'Organisation', 'Connect'],
	sectionsColor: ['#FFF', '#FFF','#FFF', '#FFF'],
	direction: 'vertical',
	scrollingSpeed: 500,
});

navMenu.addEventListener('click',function(){
	navMenu.classList.toggle('open');
	menuOverlay.classList.toggle('menuOverlay-open');
});

