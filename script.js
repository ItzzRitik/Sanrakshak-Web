var menuLink=document.querySelector('.menu-link');
var menu=document.querySelector('.menu');
var menuOverlay=document.querySelector('.menu-overlay');
var profile_info=document.querySelector('.more_info');
var profile_card=document.querySelectorAll('.profile_card');

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
profile_info.addEventListener('click',function(e){
	profile_info
	profile_card.classList.toggle('profile_card_flip');
});