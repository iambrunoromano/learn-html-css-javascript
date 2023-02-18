const notContainers = document.querySelectorAll('.not-container')
notContainers.forEach((notContainer) => {
    notContainer.addEventListener('click', () => {
        addActiveClasses()
    })
}
)

const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

function addActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.add('active')
    })
}