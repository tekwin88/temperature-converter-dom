function Farenheit2Celcius(farenheit) {
  var celcius = ((5/9 * farenheit) - 32);
  celcius = Math.round(celcius);
  console.log(farenheit + "F is " + celcius + "C.");
  return celcius;
}

function Celcius2Farenheit(celcius) {
  var farenheit = ((9/5 * celcius) + 32);
  farenheit = Math.round(farenheit);
  console.log(celcius + "C is " + farenheit + "F.");
  return farenheit;
}

console.log("hello world!");

function getInput() {
  var input = document.getElementById("input").value;
  return input;
}

function setTempType() {
  var temptype = document.getElementById("temptype").value;
  return temptype;
}

console.log("DOM loaded");
document.getElementById("submit").addEventListener("click", function() {
  console.log("submit button clicked!");

  var userInput = getInput();
  var userTempType = setTempType();

  console.log("input is " + userInput);
  userTempType = getRadioVal();

  if (userTempType === "F") {
    var convertTemp = Farenheit2Celcius(userInput);
    var outMessage = convertTemp+'\xB0C';
    console.log("correct C temp output is " + outMessage);
//    if (convertTemp >= 100) {
//    } else if (convertTemp <= 0) {
//    } else {
//      document.getElementById("output").className="textbox2".innerHTML = outMessage;
//    }
  }

  if (userTempType === "C") {
    var convertTemp = Celcius2Farenheit(userInput);
    var outMessage = convertTemp+'\xB0F';
    console.log("correct F temp output is " + outMessage);
//    document.getElementById("output").innerHTML = outMessage; // &#8457;
  }

  document.getElementById("output").innerHTML = outMessage; // &#8457;
});

document.getElementById("clear").addEventListener("click", function() {
  console.log("clear button clicked!");
  document.getElementById("input").value = "";
  document.getElementById("output").innerHTML = "";
});

function getRadioVal() {
    var val;
    // get list of radio buttons with specified name
    var radios = document.getElementsByName("select");

    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    // console.log(val);
    return val; // return value of checked radio or undefined if none checked
}
