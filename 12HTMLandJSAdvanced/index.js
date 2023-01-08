const button = document.getElementById("button");

function alertButtonClick(e) {
  alert(`Button was clicked which id is: ${e.target.id}`);
}

button.addEventListener("click", alertButtonClick);

const addElementButton = document.getElementById("element-add-button");

function addElement(e) {
  const paragraph = document.createElement("p");
  const textNode = document.createTextNode("This is the text.");

  paragraph.appendChild(textNode);

  const body = document.getElementsByTagName("body")[0];

  body.appendChild(paragraph);
}

addElementButton.addEventListener("click", addElement);
