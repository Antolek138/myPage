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

const footerData = () => {
	const spanData = document.querySelector('.footer__data')
	const date = new Date()
	const year = date.getFullYear()

	spanData.textContent = year
}

const animationHeader = () => {
	const animationHeader = document.querySelectorAll('[data-animation="header"]')

	animationHeader.forEach(item => {
		setTimeout(() => {
			item.style.opacity = 1
		}, 300)
	})
}

const test1 = document.querySelector('.advantages__card:nth-child(2)')
console.log(test1.offsetTop)

const test = () => {
	const animationsCard = document.querySelectorAll('.advantages__card')
	const indexCard = [0, 1, 2]

	animationsCard.forEach((item, index) => {
		if (index === indexCard[0] && scrollY >= 250) {
			item.style.translate = 0
		}
		if (index === indexCard[1] && scrollY >= 500) {
			item.style.translate = 0
		}
		if (index === indexCard[2] && scrollY >= 1000) {
			item.style.translate = 0
		}
	})
}

document.addEventListener('scroll', test)
animationHeader()
footerData()
bars.addEventListener('click', showMenu)
