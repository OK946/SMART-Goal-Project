const calculate = document.getElementById(`calculateButton`);
const input = document.getElementById(`calculatorInput`);
const output = document.getElementById(`equation`);
const history = document.getElementById(`history`);
let historyList = ``;

calculate.addEventListener(`click`, () => {
    if (input.value.length !== 0) {
        if (output.innerHtml !== `<p>Type to Begin</p>`) {
            historyList += `<div class="answer"><p>${input.value}</p><p>${calculation(input.value)}</p></div>`
            history.innerHTML = historyList;
        }
        output.innerHTML = `<div class="answer"><p>${input.value}</p><p>${calculation(input.value)}</p></div>`
    }
});

function calculation(equation){
    let noSpace = equation.split(` `).join().replace(/,/g,``);
    console.log(noSpace)
    console.log(noSpace.split(` `))
    let addFilter = noSpace.split(`+`)
    let multFilter = noSpace.split(`*`)
    let subFilter = noSpace.split(`-`)
    let divFilter = noSpace.split(`/`)
    console.log(multFilter)
    if(multFilter[0] !== noSpace){
        return multiply(Number(multFilter[0]),Number(multFilter[1]))
    }
    if(divFilter[0] !== noSpace){
        return divide(Number(divFilter[0]),Number(divFilter[1]))
    }
    if(addFilter[0] !== noSpace){
        return add(Number(addFilter[0]),Number(addFilter[1]))
    }
    if(subFilter[0] !== noSpace){
        return subtract(Number(subFilter[0]),Number(subFilter[1]))
    }
} 


function add(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first*second;
}

function divide(first, second) {
    return first/second;
}





















// Graphing Below Line
const graphInput = document.getElementById(`graphInput`);
const graphButton = document.getElementById(`graphButton`)
const xValues = [];
const yValues = [];

const graph = new Chart("graph", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 2,
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = sin(x)",
      fontSize: 16
    }
  }
});

graphButton.addEventListener(`click`, () =>{
    
})

generateData("2 * Math.sin(x^5)", -4, 10, 1);






function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
  }
}