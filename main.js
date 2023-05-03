const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "ZAekOJ4c1ZPEairIJnXxGQ==HNymT6zPoW8tBnoJ";
const options = {
  method: "GET",
  headers: {
    "x-api-key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  
    jokeEl.innerText = "Finding a new joke...";
    btnEl.disabled = true;
    btnEl.innerText = "Searching...";

    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
;
  }

  btnEl.addEventListener("click", getJoke);

