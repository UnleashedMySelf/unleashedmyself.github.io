/* Toggle input text header search */
const searchToggle = document.querySelector('.header__search-toggle')
const inputSearchData = document.querySelector('.header__search-input')

searchToggle.addEventListener('click', () => {
    inputSearchData.classList.toggle('header__search-input__show')
})

/* Toggle menu button for adaptive */
const toggleMenu = document.querySelector('.toggle-menu-btn')
const menuShow = document.querySelector('.menu')
const profileShow = document.querySelector('.profile')

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('checked'),
    menuShow.classList.toggle('menu--small'),
    profileShow.classList.toggle('profile--small')
})