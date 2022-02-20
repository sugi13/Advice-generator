let Url = "https://api.adviceslip.com/advice";

let AdviceID = document.querySelector('.ad-num');
let AdviceField = document.querySelector('.ad-field');
const GenerateButton = document.querySelector("#btn");



function GenerateAdvice(){
    fetch(Url).
    then((response) => {
        return response.json(); 
    })
    .then(data => {
        AdviceID.textContent = `Advice #${data.slip.id}`;
        AdviceField.textContent = `${data.slip.advice}`;
    })
}

GenerateButton.addEventListener('click', GenerateAdvice)