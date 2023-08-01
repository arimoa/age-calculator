const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
const inputEl = document.querySelector("input");
let age;
btnEl.addEventListener("click", () => {
  if (inputEl.value != "") {
    const birthDateObj = new Date(inputEl.value);
    const currentDateObj = new Date();

    const yearsDiff = currentDateObj.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = currentDateObj.getMonth() - birthDateObj.getMonth();
    const daysDiff = currentDateObj.getDate() - birthDateObj.getDate();
    if (
      yearsDiff < 0 ||
      (yearsDiff == 0 && monthsDiff < 0) ||
      (yearsDiff == 0 && monthsDiff == 0 && daysDiff < 0)
    ) {
      resultEl.innerHTML = "The selected date can not be in the future!";
    } else {
      if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        age = yearsDiff - 1;
      } else {
        age = yearsDiff;
      }
      if (age == 0) {
        resultEl.innerHTML = `You are under one year old!`;
      } else {
        resultEl.innerHTML = `You are ${age} years old`;
      }
    }
  } else {
    resultEl.innerHTML = "Please select your birthday from input section";
  }
  resultEl.style.visibility = "visible";
});
