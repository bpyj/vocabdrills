var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLi = document.getElementsByTagName("li"); //cache all li elements 
var allLiBtn = document.querySelectorAll(".remove"); //cache all liBtn elements
var clearBtn = document.getElementById("clear");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	//make a new delete btn 
	makeNewDeleteBtn(li);
	allLiBtn = document.querySelectorAll(".remove"); //update allLiBtn array again
	//listen for li clicks, and deleteBtn clicks
	clickLi();
	clickDelete();

	//make a new input
	makeUserInputSpace(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress() {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//strikeout when item clicked
function strikeOut(){
	this.classList.toggle("done");
}

//listening to clicks on li
function clickLi(){
	for(var i=0; i<allLi.length; i++){
		allLi[i].addEventListener("click", strikeOut)
	}
}

//add input to every new li
function makeUserInputSpace(li){
	var newInput = document.createElement("input");
		newInput.appendChild(document.createTextNode(""));
		newInput.classList.add("user-answer");
		li.appendChild(newInput);
}

//add delete button to every new li
function makeNewDeleteBtn(li){
	var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));		
		deleteButton.classList.add("remove");
		li.appendChild(deleteButton);
}

//add delete button to existing li on start
function initAll(){
	//add delete button to every list item
	for(var i=0; i<allLi.length; i++){
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		allLi[i].appendChild(deleteButton);		
		deleteButton.classList.add("remove");
	}
	 allLiBtn = document.querySelectorAll(".remove"); //update allLiBtn array
}

//remove li 
function removeLi(){
	this.parentNode.remove();
}

//listening to clicks on delete button
function clickDelete(){
	for(var i=0; i<allLiBtn.length; i++){
		allLiBtn[i].addEventListener("click", removeLi);
	}
}

//clear all li
function clearAllLi(){	
	for(var i=0; i<allLiBtn.length; i++){
		allLiBtn[i].parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
clearBtn.addEventListener("click", clearAllLi);

initAll();
clickLi();
clickDelete();

