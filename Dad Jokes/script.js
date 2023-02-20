const joke = document.getElementById('jokeEl')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', getJoke)

getJoke()

async function getJoke() {
    const callConfig = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const response = await fetch('https://icanhazdadjoke.com', callConfig)
    const data = await response.json()
    joke.innerHTML = data.joke
}