const page = {
    curr: 1,
    next: 2,
    prev: 3,
}

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')

const leftBtns = document.querySelectorAll('.left-btn')
const rightBtns = document.querySelectorAll('.right-btn')

leftBtns.forEach((btn) => {
    btn.addEventListener('click', () => switchPage('l'), false)
})

rightBtns.forEach((btn) => {
    btn.addEventListener('click', () => switchPage('r'))
})

function switchPage(way) {
    if (way === 'r') {
        page.curr = page.curr + 1 === 4 ? (page.curr = 1) : page.curr + 1
        page.prev = page.prev + 1 === 4 ? (page.prev = 1) : page.prev + 1
        page.next = page.next + 1 === 4 ? (page.next = 1) : page.next + 1
    } else {
        page.curr = page.curr - 1 === 0 ? (page.curr = 3) : page.curr - 1
        page.prev = page.prev - 1 === 0 ? (page.prev = 3) : page.prev - 1
        page.next = page.next - 1 === 0 ? (page.next = 3) : page.next - 1
    }

    one.classList.add('hidden')
    two.classList.add('hidden')
    three.classList.add('hidden')

    switch (page.curr) {
        case 1:
            one.classList.remove('hidden')
            break
        case 2:
            two.classList.remove('hidden')
            break
        case 3:
            three.classList.remove('hidden')
            break
        default:
            break
    }

    console.log(page)
}

function toggleMenu() {
    document.getElementById('menu').classList.toggle('hidden')
}
