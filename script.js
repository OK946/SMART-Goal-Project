const calculate = document.getElementById(`calculateButton`);
const input = document.getElementById(`calculatorInput`);
const output = document.getElementById(`equation`);
const history = document.getElementById(`history`);
const changer = document.getElementById(`switch`);
const catalan = 0.915965594177219015054603514932384110774;

document.addEventListener(`keyup`, (event) =>{
  if(event.key === `l`){
    if(document.getElementById(`calculatorArea`).style.display == `none`){
      document.getElementById(`graphArea`).style.display = `none`;
      document.getElementById(`calculatorArea`).style.display = `contents`;
      input.focus();
    }else {
      document.getElementById(`graphArea`).style.display = `flex`;
      document.getElementById(`calculatorArea`).style.display = `none`;
    }
  } else if(event.key === `Enter`){
    if (input.value.length !== 0) {
      if (output.innerHtml !== `<p>Type to Begin</p>`) {
        historyList += `<div class="answer"><p>${input.value} =</p><p>${calculation(input.value)}</p></div>`
        history.innerHTML = historyList;
        history.scrollTop = history.scrollHeight;
      }
      output.innerHTML = `<div class="answer"><p>${input.value} </p><p>${calculation(input.value)}</p></div>`
    }
  }
  console.log(`key`)
});

changer.addEventListener(`click`, () => {
  if(document.getElementById(`calculatorArea`).style.display == `none`){
    document.getElementById(`graphArea`).style.display = `none`;
    document.getElementById(`calculatorArea`).style.display = `contents`;
    input.focus();
  }else {
    document.getElementById(`graphArea`).style.display = `flex`;
    document.getElementById(`calculatorArea`).style.display = `none`;
  }
})

let historyList = ``;
input.focus();
calculate.addEventListener(`click`, () => {
  if (input.value.length !== 0) {
    if (output.innerHtml !== `<p>Type to Begin</p>`) {
      historyList += `<div class="answer"><p>${input.value} =</p><p>${calculation(input.value)}</p></div>`
      history.innerHTML = historyList;
      history.scrollTop = history.scrollHeight;
    }
    output.innerHTML = `<div class="answer"><p>${input.value} </p><p>${calculation(input.value)}</p></div>`
  }
});

function calculation(equation) {
  let e = equation.replace(`e`, Math.E).replace(`E`, Math.E);
  let pi = e.replace(`pi`, Math.PI).replace(`Pi`,Math.PI).replace(`PI`,Math.PI).replace(`pI`,Math.PI);
  let G = pi.replace(`g`, catalan).replace(`G`,catalan);
  let noSpace = G.split(` `).join().replace(/,/g, ``);
  console.log(noSpace);
  console.log(noSpace.split(` `));
  let parenthesisLocation = noSpace.indexOf(`(`);
  let addFilter = noSpace.split(`+`);
  let multFilter = noSpace.split(`*`);
  let subFilter = noSpace.split(`-`);
  let divFilter = noSpace.split(`/`);
  let expFilter = noSpace.split(`^`);
  console.log(multFilter)
  if (subFilter[0] !== noSpace) {
    let eParts = [];
    for(let i = 0; i < subFilter.length; i++){
      eParts.push(calculation(subFilter[i]));
    }
    return subtract(...eParts);
  } else
    if (addFilter[0] !== noSpace) {
      let eParts = [];
      for(let i = 0; i < addFilter.length; i++){
        eParts.push(calculation(addFilter[i]));
      }
      return add(...eParts);
    }
  if (divFilter[0] !== noSpace) {
    let eParts = [];
    for(let i = 0; i < divFilter.length; i++){
      eParts.push(calculation(divFilter[i]));
    }
    return divide(...eParts);
  } else
    if (multFilter[0] !== noSpace) {
      let eParts = [];
      for(let i = 0; i < multFilter.length; i++){
        eParts.push(calculation(multFilter[i]));
      }
      return multiply(...eParts);
    }
  if (expFilter[0] !== noSpace) {
    let eParts = [];
    for(let i = 0; i < expFilter.length; i++){
      eParts.push(calculation(expFilter[i]));
    }
    return exponate(...eParts);
  }
  return Number(noSpace);
}


function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += Number(arguments[i]);
  }
  return sum;
}

function subtract() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result -= Number(arguments[i]);
  }
  return result;
}

function multiply() {
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    product *= Number(arguments[i]);
  }
  return product;
}

function divide() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (Number(arguments[i]) === 0) {
      return undefined;
    }
    result /= Number(arguments[i]);
  }
  return result;
}

function exponate(...numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = result ** numbers[i];
  }
  return result;

}



















// Graphing Below Line
const graphInput1 = document.getElementById(`graphInput1`);
const graphInput2 = document.getElementById(`graphInput2`);
const graphInput3 = document.getElementById(`graphInput3`);
const graphInput4 = document.getElementById(`graphInput4`);
const graphInput5 = document.getElementById(`graphInput5`);
const graphButton = document.getElementById(`graphButton`);
const minX = document.getElementById(`minX`);
const maxX = document.getElementById(`maxX`);
const xValues1 = [];
const yValues1 = [];
const xValues2 = [];
const yValues2 = [];
const xValues3 = [];
const yValues3 = [];
const xValues4 = [];
const yValues4 = [];
const xValues5 = [];
const yValues5 = [];
const graph = new Chart("graph", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{
      fill: false,
      pointRadius: 3,
      borderColor: "rgba(0,0,0,0.5)",
      data: yValues1
    }, {
      fill: false,
      pointRadius: 3,
      borderColor: "rgba(0,255,0,0.5)",
      data: yValues2
    }, {
      fill: false,
      pointRadius: 3,
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues3
    }, {
      fill: false,
      pointRadius: 3,
      borderColor: "rgba(255,0,0,0.5)",
      data: yValues4
    }, {
      fill: false,
      pointRadius: 3,
      borderColor: "rgba(255,0,255,0.5)",
      data: yValues5
    }]
  },
  options: {
    legend: {
      display: false,
      // text: "Hi",
    },
    title: {
      display: false,
      text: "y = sin(x)",
      fontSize: 16
    }
  }
});

generateData("0", 0, 10, 1);

graphButton.addEventListener(`click`, () => {
  if (graphInput1.value.length !== 0) {
    generateData(graphInput1.value, Number(minX.value), Number(maxX.value), 1);
  }
  if (graphInput2.value.length !== 0) {
    generateData(graphInput2.value, Number(minX.value), Number(maxX.value), 1);
  }
  if (graphInput3.value.length !== 0) {
    generateData(graphInput3.value, Number(minX.value), Number(maxX.value), 1);
  }
  if (graphInput4.value.length !== 0) {
    generateData(graphInput4.value, Number(minX.value), Number(maxX.value), 1);
  }
  if (graphInput5.value.length !== 0) {
    generateData(graphInput5.value, Number(minX.value), Number(maxX.value), 1);
  }
});



function generateData(value, i1 = 0, i2 = 10, step = 1) {
  if (value == graphInput1.value) {
    xValues1.splice(0);
    yValues1.splice(0);
  }
  if (value == graphInput2.value) {
    yValues2.splice(0);
  }
  if (value == graphInput3.value) {
    yValues3.splice(0);
  }
  if (value == graphInput4.value) {
    yValues4.splice(0);
  }
  if (value == graphInput5.value) {
    yValues5.splice(0);
  }
  for (let x = i1; x <= i2; x += step) {
    if (value == graphInput1.value) {
      yValues1.push(eval(value));
      xValues1.push(x);
    } else
      if (value == graphInput2.value) {
        yValues2.push(eval(value));
      } else
        if (value == graphInput3.value) {
          yValues3.push(eval(value));
        } else
          if (value == graphInput4.value) {
            yValues4.push(eval(value));
          } else
            if (value == graphInput5.value) {
              yValues5.push(eval(value));
            }
  };
  graph.update();
}
