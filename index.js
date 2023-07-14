let str = "";
let rad = true;
let deg = false;

// Radians button.
document.getElementById("rad").onclick = function () {
  rad = true;
  deg = false;
  document.getElementById("result").value = str;
};

//Degrees button.
document.getElementById("deg").onclick = function () {
  rad = false;
  deg = true;
  document.getElementById("result").value = str;
};

// Factorial operator button.
document.getElementById("fact").onclick = function () {
  compute_factorial();
};

// Open parenthesis button.
document.getElementById("open").onclick = function () {
  str += "(";
  document.getElementById("result").value = str;
};

// Close parenthesis button.
document.getElementById("close").onclick = function () {
  str += ")";
  document.getElementById("result").value = str;
};

// Modulo operator button.
document.getElementById("modulo").onclick = function () {
  str += "%";
  document.getElementById("result").value = str;
};

// Clear button.
document.getElementById("clear").onclick = function () {
  str = "";
  document.getElementById("result").value = "";
};

// sin function button.
document.getElementById("sin").onclick = function () {
  compute_sin();
};

// ln function button.
document.getElementById("ln").onclick = function () {
  compute_ln();
};

// Digit seven button.
document.getElementById("seven").onclick = function () {
  str += "7";
  document.getElementById("result").value = str;
};

// Digit eight button.
document.getElementById("eight").onclick = function () {
  str += "8";
  document.getElementById("result").value = str;
};

// Digit nine button.
document.getElementById("nine").onclick = function () {
  str += "9";
  document.getElementById("result").value = str;
};

// Divide operator button.
document.getElementById("divide").onclick = function () {
  str += "÷";
  document.getElementById("result").value = str;
};

// cos function button.
document.getElementById("cos").onclick = function () {
  compute_cos();
};

// log function button.
document.getElementById("log10").onclick = function () {
  compute_log();
};

// Digit four button.
document.getElementById("four").onclick = function () {
  str += "4";
  document.getElementById("result").value = str;
};

// Digit five button.
document.getElementById("five").onclick = function () {
  str += "5";
  document.getElementById("result").value = str;
};

// Digit six button.
document.getElementById("six").onclick = function () {
  str += "6";
  document.getElementById("result").value = str;
};

// Multiplication operator button.
document.getElementById("multiplication").onclick = function () {
  str += "×";
  document.getElementById("result").value = str;
};

// tan function button.
document.getElementById("tan").onclick = function () {
  compute_tan();
};

// sqrt function button.
document.getElementById("sqrt").onclick = function () {
  compute_sqrt();
};

// Digit one button.
document.getElementById("one").onclick = function () {
  str += "1";
  document.getElementById("result").value = str;
};

// Digit two button.
document.getElementById("two").onclick = function () {
  str += "2";
  document.getElementById("result").value = str;
};

// Digit three button.
document.getElementById("three").onclick = function () {
  str += "3";
  document.getElementById("result").value = str;
};

// Subtraction operator button.
document.getElementById("minus").onclick = function () {
  str += "-";
  document.getElementById("result").value = str;
};

// E operator button.
document.getElementById("pow10").onclick = function () {
  str += "E";
  document.getElementById("result").value = str;
};

// Power operator button.
document.getElementById("xpowy").onclick = function () {
  str += "^";
  document.getElementById("result").value = str;
};

// Digit zero button.
document.getElementById("zero").onclick = function () {
  str += "0";
  document.getElementById("result").value = str;
};

// Decimal point button.
document.getElementById("point").onclick = function () {
  str += ".";
  document.getElementById("result").value = str;
};

// Equal button.
document.getElementById("equals").addEventListener("click", compute);

// Addition operator button.
document.getElementById("add").onclick = function () {
  str += "+";
  document.getElementById("result").value = str;
};

// Compute factorial.
function compute_factorial() {
  let factorial = 1;
  for (let i = 1; i <= Number(str); i++) {
    factorial *= i;
  }
  document.getElementById("result").value = factorial;
  str = factorial.toString();
}

// Compute sin.
function compute_sin() {
  if (rad == true) {
    str = Math.sin(Number(str));
    document.getElementById("result").value = str;
    str = str.toString();
  }
  if (deg == true) {
    str = Math.sin(Number(str) * (Math.PI / 180));
    document.getElementById("result").value = str;
    str = str.toString();
  }
}

// Compute ln.
function compute_ln() {
  str = Math.log(Number(str));
  document.getElementById("result").value = str;
  str = str.toString();
}

// Compute cos.
function compute_cos() {
  if (rad == true) {
    str = Math.cos(Number(str));
    document.getElementById("result").value = str;
    str = str.toString();
  }
  if (deg == true) {
    str = Math.cos(Number(str) * (Math.PI / 180));
    document.getElementById("result").value = str;
    str = str.toString();
  }
}

// Compute log.
function compute_log() {
  str = Math.log10(Number(str));
  document.getElementById("result").value = str;
  str = str.toString();
}

// Compute tan.
function compute_tan() {
  if (rad == true) {
    str = Math.tan(Number(str));
    document.getElementById("result").value = str;
    str = str.toString();
  }
  if (deg == true) {
    str = Math.tan(Number(str) * (Math.PI / 180));
    document.getElementById("result").value = str;
    str = str.toString();
  }
}

// Compute square root.
function compute_sqrt() {
  let num = Math.sqrt(Number(str));
  document.getElementById("result").value = num;
  str = num.toString();
}

// Compute E(exponent of 10).
function compute_pow10() {
  let temp = str.replace("E", ",");
  let arr = temp.split(",");
  str = (arr[0] * Math.pow(10, Number(arr[1]))).toString();
  document.getElementById("result").value = str;
}

// Simple compute.
function compute() {
  str = str.replace("×", "*");
  str = str.replace("÷", "/");
  str = str.replace("^", "**");

  const pattern = /[0-9]\(/;
  index = str.search(pattern);
  while (index != -1) {
    str = str.slice(0, index + 1) + "*" + str.slice(index + 1);
    index = str.search(pattern);
  }

  document.getElementById("result").value = Function(
    `'use strict'; return (${str})`
  )();
  str = document.getElementById("result").value;
  document.getElementById("answer").innerHTML = "Ans = " + str;

  if (document.getElementById("result").value == "undefined") {
    str = "";
    document.getElementById("result").value = "";
    document.getElementById("answer").style.color = "#ff0000";
  }
}

// Change Rad to Deg and Deg to Rad button.
const degbtn = document.getElementById("deg");
const radbtn = document.getElementById("rad");
const info = document.getElementById("info");

degbtn.addEventListener("click", function onclick(event) {
  radbtn.style.color = "#808080";
  degbtn.style.color = "#202124";
  info.innerHTML = "Degrees";
});

radbtn.addEventListener("click", function onclick(event) {
  degbtn.style.color = "#808080";
  radbtn.style.color = "#202124";
  info.innerHTML = "Radians";
});

// Identify user keyboard input.
document.addEventListener("keydown", (event) => {
  switch (String(event.key)) {
    case "0":
      str += 0;
      document.getElementById("result").value = str;
      break;
    case "1":
      str += 1;
      document.getElementById("result").value = str;
      break;
    case "2":
      str += 2;
      document.getElementById("result").value = str;
      break;
    case "3":
      str += 3;
      document.getElementById("result").value = str;
      break;
    case "4":
      str += 4;
      document.getElementById("result").value = str;
      break;
    case "5":
      str += 5;
      document.getElementById("result").value = str;
      break;
    case "6":
      str += 6;
      document.getElementById("result").value = str;
      break;
    case "7":
      str += 7;
      document.getElementById("result").value = str;
      break;
    case "8":
      str += 8;
      document.getElementById("result").value = str;
      break;
    case "9":
      str += 9;
      document.getElementById("result").value = str;
      break;
    case ".":
      str += ".";
      document.getElementById("result").value = str;
      break;
    case "=":
      document.getElementById("equals").focus();
      compute();
      break;
    case "*":
      str += "×";
      document.getElementById("result").value = str;
      break;
    case "/":
      str += "÷";
      document.getElementById("result").value = str;
      break;
    case "-":
      str += "-";
      document.getElementById("result").value = str;
      break;
    case "+":
      str += "+";
      document.getElementById("result").value = str;
      break;
    case "(":
      str += "(";
      document.getElementById("result").value = str;
      break;
    case ")":
      str += ")";
      document.getElementById("result").value = str;
      break;
    case "%":
      str += "%";
      document.getElementById("result").value = str;
      break;
    case "s":
      compute_sin();
      break;
    case "c":
      compute_cos();
      break;
    case "t":
      compute_tan();
      break;
    case "e":
      str += "E";
      document.getElementById("result").value = str;
      break;
    case "!":
      str += "!";
      document.getElementById("result").value = str;
      compute_factorial();
      break;
    case "l":
      compute_ln();
      break;
    case "g":
      compute_log();
      break;
    case "^":
      str += "^";
      document.getElementById("result").value = str;
      break;
    case "Backspace":
      str = str.slice(0, -1);
      document.getElementById("result").value = str;
      break;
    case "Enter":
      document.getElementById("equals").focus();
      compute();
      break;
  }
});
