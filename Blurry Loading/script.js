const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let interval = setInterval(blurring, 30)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(interval)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load / 100;
    bg.style.filter = `blur(${10 - load / 10}px)`;
    let computedMove = Math.ceil(30 - load / 100 * 30) + `px`
    document.documentElement.style.setProperty('--top-move-image', computedMove);
    document.documentElement.style.setProperty('--left-move-image', computedMove);
}