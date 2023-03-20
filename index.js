//Création de la zone d'affichage pour les résultats
let result = document.createElement("div");
result.style.padding = "10px";
result.style.fontSize = "24px";
result.style.textAlign = "right";
result.style.backgroundColor = "rgb(198, 237, 255)";
result.style.borderRadius = "5px";
result.style.height = "120px";
result.style.boxShadow = "0px 0px 5px #ccc";
result.textContent = "0";

//Création des boutons de la calculatrice
let buttons = [
  "C", "CE", "/", "*",
  "7", "8", "9", "-",
  "4", "5", "6", "+",
  "1", "2", "3", "=",
  "0", ".", "%"
];

//Création de la zone de boutons pour la calculatrice
let buttonArea = document.createElement("div");
buttonArea.style.display = "grid";
buttonArea.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonArea.style.gridGap = "10px";
buttonArea.style.padding = "10px";
buttonArea.style.backgroundColor = "#eee";
buttonArea.style.width = "300px";
buttonArea.style.margin = "0 auto";
buttonArea.style.borderRadius = "5px";
buttonArea.style.boxShadow = "0px 0px 10px #ccc";

//Ajout des boutons à la zone de boutons
for (let i = 0; i < buttons.length; i++) {
  let button = document.createElement("button");
  button.style.backgroundColor = "#fff";
  button.style.border = "none";
  button.style.fontSize = "24px";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0px 0px 5px #ccc";
  button.textContent = buttons[i];

  //Ajout des événements de clic pour les boutons
  switch (buttons[i]) {
    case "C":
      button.addEventListener("click", () => {
        result.textContent = "0";
      });
      break;
    case "CE":
      button.addEventListener("click", () => {
        let currentResult = result.textContent;
        result.textContent = currentResult.substring(0, currentResult.length - 1);
        if (result.textContent === "") {
          result.textContent = "0";
        }
      });
      break;
    case "=":
      button.addEventListener("click", () => {
        result.textContent = eval(result.textContent);
      });
      break;
    default:
      button.addEventListener("click", () => {
        if (result.textContent === "0") {
          result.textContent = "";
        }
        result.textContent += buttons[i];
      });
      break;
  }

  //Ajout du bouton à la zone de boutons
  buttonArea.appendChild(button);
}

//Ajout de la zone d'affichage et de la zone de boutons à la page
document.body.appendChild(result);
document.body.appendChild(buttonArea);
