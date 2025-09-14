document.addEventListener("DOMContentLoaded", () => {
  let expressionField = document.getElementById("expression");
  let resultField = document.getElementById("result");
  let buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      let value = btn.innerText;

      if (value === "C") {
        expressionField.innerText = "";
        resultField.innerText = "";
      } 
      else if (value === "Back") {
        expressionField.innerText = expressionField.innerText.slice(0, -1);
      } 
      else if (value === "=") {
        try {
          let expression = expressionField.innerText;
          let result = eval(expression);
          resultField.innerText = result;
        } catch {
          alert("Invalid Expression");
        }
      } 
      else {
        expressionField.innerText += value;
      }
    });
  });
});