let copy = document.getElementById("copy");
let code = document.getElementsByClassName("text")[0];
let result = document.getElementById("result");
let generate = document.getElementById("generate");
const generateURL = (nameValue, adjValue) => {
  code.innerText = "https://neutralme.github.io/Troller/index.html?name=" + btoa(document.getElementById("name").value) + "&adj=" + btoa(document.getElementById("adj").value);
  result.style.display = "block";
}
const copyURL = (copyValue) => {
  notify.style.display = "block";
  code.select();
  code.setSelectionRange(0, 99999)
  document.execCommand("copy");
}
generate.addEventListener("click", generateURL);

copy.addEventListener("click", copyURL);

