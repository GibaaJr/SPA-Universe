import  { Router } from './router.js'

const router = new Router()

router.add("/", "./pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/exploration", "./pages/exploration.html")
router.add(404, "./pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () =>  router.route()

const homeMenu = document.querySelector('.home')
const universeMenu = document.querySelector('.universe')
const explorationMenu = document.querySelector('.exploration')
const bodyPage = document.querySelector('body')

homeMenu.addEventListener('click', () => {
    if (homeMenu.classList.contains('active')) {
        universeMenu.classList.remove('active')
        explorationMenu.classList.remove('active')
    } else {
        homeMenu.classList.add('active')
        universeMenu.classList.remove('active')
        explorationMenu.classList.remove('active')
    }
    bodyPage.style.backgroundImage = 'var(--img-01)';
})

universeMenu.addEventListener('click', () => {
    if (universeMenu.classList.contains('active')) {
        homeMenu.classList.remove('active')
        explorationMenu.classList.remove('active')
    } else {
        universeMenu.classList.add('active')
        homeMenu.classList.remove('active')
        explorationMenu.classList.remove('active')
    }
    bodyPage.style.backgroundImage = 'var(--img-02)';
})

explorationMenu.addEventListener('click', () => {
    if (explorationMenu.classList.contains('active')) {
        universeMenu.classList.remove('active')
        homeMenu.classList.remove('active')
    } else {
        explorationMenu.classList.add('active')
        universeMenu.classList.remove('active')
        homeMenu.classList.remove('active')
    }
    bodyPage.style.backgroundImage = 'var(--img-03)';
})
