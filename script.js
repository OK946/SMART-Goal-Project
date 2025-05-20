const calculate = document.getElementById(`calculateButton`);
const input = document.getElementById(`calculatorInput`);
const output = document.getElementById(`equation`);
const history = document.getElementById(`history`);
let historyList = ``;

calculate.addEventListener(`click`,() =>{
    if(input.value.length !== 0){
        if(output.innerHtml !== `<p>Type to Begin</p>`){
            historyList += `<div class="answer"><p>${input.value}</p><p>5</p></div>`
            history.innerHTML = historyList;
        }
        output.innerHTML = `<div class="answer"><p>${input.value}</p><p>${5 + 4}</p></div>`
    }
});