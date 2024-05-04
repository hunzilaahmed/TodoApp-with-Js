// // Html id store in variable
let getInpValue = document.getElementById("inp");
let listset = document.getElementById("list_item");

function getInp() {
  if (getInpValue.value.trim() == "") {
    alert("Please Add Text ");
    return;
  }
  // Get the input value and create a list item
  let createli = document.createElement("li");
  let divli = document.createElement("div");
  let createtextli = document.createTextNode(getInpValue.value);
  createli.appendChild(createtextli);

  // Create delete button and add the 'deletebtn' class
  let createDltebtn = document.createElement("button");
  createDltebtn.classList.add("deletebtn");
  createDltebtn.textContent = "X";

  createDltebtn.setAttribute("onclick", "deleteItem(this)");

  // Create edit button
  let createEditbtn = document.createElement("button");
  createEditbtn.classList.add("editbtn");
  createEditbtn.textContent = "Edit";

  createEditbtn.onclick = function () {
    editBtn(this);
  };
  divli.appendChild(createEditbtn);
  divli.appendChild(createDltebtn);
  createli.appendChild(divli);
  listset.appendChild(createli);
  // createli.appendChild(createEditbtn);
  // createli.appendChild(createDltebtn);

  createli.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  getInpValue.value = "";
}

function deleteItem(e) {
  console.log(e.parentNode.parentNode, "e");
  e.parentNode.parentNode.remove();
}
function deletell() {
  listset.innerHTML = "";
}

// Function to edit the list item
function editBtn(button) {
  // let currentText = button.parentNode.firstChild.nodeValue;
  let newText = prompt(
    "Enter new text",
    button.parentNode.parentNode.firstChild.nodeValue
  );
  // console.log(button.parentNode.parentNode.firstChild)

  button.parentNode.parentNode.firstChild.nodeValue = newText;
}

// function getInp() {
//   // Input value ko lein aur ek list item banayein
//   let createli = document.createElement("li");
//   let createtextli = document.createTextNode(getInpValue.value);
//   createli.appendChild(createtextli);

//   // Delete button banayein aur 'deletebtn' class add karein
//   let createDltebtn = document.createElement("button");
//   createDltebtn.classList.add("deletebtn");
//   createDltebtn.textContent = "X";
//   createDltebtn.onclick = function () {
//       deleteItem(createli);
//   };

//   // Edit button banayein aur 'editbtn' class add karein
//   let createEditbtn = document.createElement("button");
//   createEditbtn.classList.add("editbtn");
//   createEditbtn.textContent = "Edit";
//   createEditbtn.onclick = function () {
//       editBtn(createli);
//   };

//   // List item ke andar buttons ko attach karein
//   createli.appendChild(createEditbtn);
//   createli.appendChild(createDltebtn);

//   // List item ko list ke ul element mein add karein
//   listset.children[0].appendChild(createli);

//   // Input field ko clear karein
//   getInpValue.value = "";
// }

// function deleteItem(listItem) {
//   listItem.remove();
// }

// function editBtn(listItem) {
//   let currentText = listItem.firstChild.nodeValue;
//   let newText = prompt("Enter new text", currentText);

//   if (newText) {
//     listItem.firstChild.nodeValue = newText;
//   }
// }
