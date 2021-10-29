
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});


//<Swiper>============================================================================
// Инициализация Swiper
new Swiper('.image-slider', {
	//Автовысота
	autoHeight: true,

	//Бесконечная прокрутка
	loop: false,

	//стрелки
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 1,

	spaceBetween: 30,

});
//</Swiper>===========================================================================


let burger = document.querySelector('.icon-menu');
burger.addEventListener("click", function (e) {
	let burger_icon = document.querySelector('.icon-menu');
	let menu = document.querySelector('.header__menu');
	let lock = document.querySelector('body');

	burger_icon.classList.toggle('_active');
	menu.classList.toggle('_active');
	lock.classList.toggle('_lock');
});


//<Якоря>===========================================================================

function forPeople(top)
{
	const about = document.querySelector(".want");
	about.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function programmCourse(top)
{
	const about = document.querySelector(".education");
	about.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function reviews(top)
{
	const about = document.querySelector(".reviews");
	about.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function Cost(top)
{
	const about = document.querySelector(".price");
	about.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function Form(top)
{
	const about = document.querySelector(".learn");
	about.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
//</Якоря>===========================================================================
