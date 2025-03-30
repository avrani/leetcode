

let reTimeOut;

function debounce(userValue,time) {
    clearTimeout(reTimeOut);
    reTimeOut = setTimeout(() => {
        console.log(userValue);
    }, time)
}

const inputText = document.querySelector("#input");

inputText.addEventListener('keyup', (event => {
    debounce(event.target.value,1000);
}))