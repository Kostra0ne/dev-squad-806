const inputTag = document.getElementById("tagname");
const inputContent = document.getElementById("content");
const btnCreate = document.getElementById("btn-create-content");
const contentTarget = document.getElementById("starting-empty");

function insertContent() {
  const tagName = inputTag.value;
  const tagContent = inputContent.value;
  contentTarget.innerHTML += `<${tagName}>${tagContent}</${tagName}>`;
}

btnCreate.onclick = insertContent;
