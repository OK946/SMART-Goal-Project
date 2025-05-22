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
      history.scrollTop = history.scrollHeight;
    }
    output.innerHTML = `<div class="answer"><p>${input.value}</p><p>${calculation(input.value)}</p></div>`
  }
});

function calculation(equation) {
  let noSpace = equation.split(` `).join().replace(/,/g, ``);
  console.log(noSpace)
  console.log(noSpace.split(` `))
  let addFilter = noSpace.split(`+`)
  let multFilter = noSpace.split(`*`)
  let subFilter = noSpace.split(`-`)
  let divFilter = noSpace.split(`/`)
  let expFilter = noSpace.split(`^`)
  console.log(multFilter)
  if (subFilter[0] !== noSpace) {
    return subtract(Number(calculation(subFilter[0])), Number(calculation(subFilter[1])))
  } else
    if (addFilter[0] !== noSpace) {
      return add(Number(calculation(addFilter[0])), Number(calculation(addFilter[1])))
    }
  if (divFilter[0] !== noSpace) {
    return divide(Number(calculation(divFilter[0])), Number(calculation(divFilter[1])))
  } else
    if (multFilter[0] !== noSpace) {
      return multiply(Number(calculation(multFilter[0])), Number(calculation(multFilter[1])))
    }
  if (expFilter[0] !== noSpace) {
    return exponate(Number(calculation(expFilter[0])), Number(calculation(expFilter[1])))
  }
  return Number(noSpace);
}


function add(first, second) {
  return first + second;
}

function subtract(first, second) {
  return first - second;
}

function multiply(first, second) {
  return first * second;
}

function divide(first, second) {
  return first / second;
}

function exponate(term, power) {
  return term ** power;
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