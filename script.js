var navMenu=document.querySelector('.navbar-toggler');
var myFullpage = new fullpage('#fullpage', {
	anchors: ['Home', 'Education', 'Expertise', 'Achievement', 'Endeavor', 'Organisation', 'Connect'],
	sectionsColor: ['#FFF', '#FFF','#FFF', '#FFF'],
	menu: '#navmenu',

	direction: 'vertical',
	scrollingSpeed: 450,

	navigation: {
		'position': 'right',
		'textColor': '#111',
		'bulletsColor': '#111',
		'position': 'right',
		'tooltips': ['Home', 'Education', 'Expertise', 'Achievement', 'Endeavor', 'Organisation', 'Connect']
	}
});

navMenu.addEventListener('click',function(){
	navMenu.classList.toggle('open');
});