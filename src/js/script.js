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

const mailStatus = () => {
	const msgStatus = document.querySelector('.contact__msg-status')

	if (document.location.search === '?mail_status=sent') {
		msgStatus.classList.add('contact__msg-status--succes')
		msgStatus.textContent = 'Wiadomość została wysłana'

		setTimeout(() => {
			msgStatus.classList.remove('contact__msg-status--succes')
			msgStatus.textContent = ''
		}, 3000)
	}

	if (document.location.search === '?mail_status=error') {
		msgStatus.classList.add('contact__msg-status--error')
		msgStatus.textContent = 'Wystąpił błąd'

		setTimeout(() => {
			msgStatus.classList.remove('contact__msg-status--error')
			msgStatus.textContent = ''
		}, 3000)
	}
}

const footerData = () => {
	const spanData = document.querySelector('.footer__data')
	const date = new Date()
	const year = date.getFullYear()

	spanData.textContent = year
}

footerData()
mailStatus()
bars.addEventListener('click', showMenu)
