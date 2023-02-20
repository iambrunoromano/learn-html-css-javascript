const joke = document.getElementById('jokeEl')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', getJoke)
getJoke()
function getJoke() {
    const callConfig = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', callConfig)
        .then(response => response.json())
        .then((body) => {
            joke.innerHTML = body.joke
        })
}