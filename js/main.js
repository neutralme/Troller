let nameField = document.getElementById("name");
let adjField = document.getElementById("adj");
let name = atob(new URL(location.href).searchParams.get("name"));
let adj = atob(new URL(location.href).searchParams.get("adj"));

nameField.innerText = name !== "ée" || name === "" ? name : "_____";
adjField.innerText = adj !== "ée" || name === "" ? adj : "_____";

