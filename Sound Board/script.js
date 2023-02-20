const sounds = ['piano', 'noise']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopAudio()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopAudio() {
    sounds.forEach(sound => {
        document.getElementById(sound).pause()
    })
}