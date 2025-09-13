// Event handling using javascript to listen for user actions
// Using mouseover event to change text style
const text1 = document.getElementsByClassName("hoverbutton")[0];
  text1.onmouseover = function () {
    text1.style.color = "red";
    text1.style.fontWeight = "bold";
  };
  text1.onmouseout = function () {
    text1.style.color = "black";
    text1.style.fontWeight = "normal";
  };



// Second button listening action
const button2 = document.getElementById("colorButton");
 button2.onclick = function () {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    button2.innerText = "Background Changed!";
  };

  // Third button listening action
  const button3 = document.getElementById("toggleButton")
  const text2 = document.getElementById("textParagraph")
  button3.onclick = function () {
    if (text2.style.display === "none") {
      text2.style.display = "block";
    } else {
      text2.style.display = "none";
      button3.innerText = "Show Text";
    }
  };
  // Function to calculate multiplication of two numbers
function calculateMul(quantityOrdered, pricePerUnit) {
    return quantityOrdered * pricePerUnit;
  }
  const totalCost = calculateMul(5, 20);
  console.log("Total Cost: $" + totalCost);

  const totalCost2 = calculateMul(3, 15);
  console.log("Total Cost: $" + totalCost2);

  function salutation() {
    let message = "Hello, welcome to our website!";
    console.log(message);
  };
  salutation();