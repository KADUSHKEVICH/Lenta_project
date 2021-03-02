
$(function () {
	$('.main__content__slider').slick({
		arrows: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700
	});
});

$(function () {
	$('.team__slider').slick({
		arrows: true,
		slidesToShow: 3,
        slidesToScroll: 3,
        speed: 700,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
	});
});

+function () {

    document.querySelector('.tab').classList.add('active')
    document.querySelector('.directions__tabs-panel').classList.add('active')

    function selectPanel (e) {
        var target = e.target.dataset.target

        document.querySelectorAll('.tab, .directions__tabs-panel').forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')
        console.log(document.querySelector('.' + target))
        document.querySelector('.' + target).classList.add('active')
    }

    document.querySelectorAll('.tab').forEach(el => {
        el.addEventListener('click', selectPanel)
    })
    
}();

const menuBurger = document.querySelector('.main__header-burger')
const navBar = document.querySelector('.mobile__menu')

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('mobile__menu-active')
    navBar.classList.toggle('mobile__menu-active-list')
})