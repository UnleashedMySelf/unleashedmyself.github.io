/* Toggle input text header search */
const searchToggle = document.querySelector('.header__search-toggle')
const inputSearchData = document.querySelector('.header__search-input')

searchToggle.addEventListener('click', () => {
    inputSearchData.classList.toggle('header__search-input__show')
})
/* Toggle menu button for adaptive */
const toggleMenu = document.querySelector('.toggle-menu-btn')
const menuShow = document.querySelector('.menu__inner')

const menu = document.querySelector('.menu')

toggleMenu.addEventListener('click', () => {
    menuShow.classList.toggle('menu--small');
    menu.classList.toggle('hide-menu');
    const hideMenu = document.querySelector('.hide-menu')
    hideMenu.addEventListener('click', () => {
        menuShow.classList.remove('menu--small');
        menu.classList.remove('hide-menu');
    })
})
