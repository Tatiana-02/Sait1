function startMenuCalculete() {
  let allCalculators = document.querySelectorAll(".calculator-wrap");
  hideCalculators(allCalculators);

  let allButtons = document.querySelectorAll(".menu-button");
  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      hideCalculators(allCalculators);
      let currentCalc = button.getAttribute("data-current-calc");
      document.getElementById(currentCalc).style.display = "flex";
    });
  });
}

function hideCalculators(calculators) {
  calculators.forEach((calc) => {
    calc.style.display = "none";
  });
}
