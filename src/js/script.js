const menu = document.querySelector('.nav__menu')
const logo = document.querySelector('.nav__logo')
const bars = document.querySelector('.nav__bars')
const allNavItem = document.querySelectorAll('.nav__menu-item')

const showMenu = () => {
	menu.classList.toggle('nav__menu--active')
	bars.classList.toggle('nav__bars--active')

	allNavItem.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('nav__menu--active')
			bars.classList.remove('nav__bars--active')
		})
	})
}

bars.addEventListener('click', showMenu)
