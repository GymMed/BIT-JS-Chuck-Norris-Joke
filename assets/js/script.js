const textContainerDom = document.getElementById("text-container");
const jokeButtonDom = document.getElementById("joke-button");
const url = "https://api.chucknorris.io/jokes/random";

jokeButtonDom.addEventListener("click", async () => {
    const result = await fetch(url);
    const jokeJson = await result.json();

    textContainerDom.innerHTML = jokeJson.value;
});
