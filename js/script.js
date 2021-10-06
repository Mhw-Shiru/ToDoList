const container = document.querySelector(".flex-container");
const toDoList = document.querySelector(".toDoList");
const divisorButton = document.getElementById("DivisorButton");



const makeDivisor = ()=>{
	let divisor = document.createElement("DIV");
	divisor.classList.add("divisor");
	toDoList.appendChild(divisor);
}


const makeItemlist = ()=>{
	let task = document.createElement("span");
	task.innerHTML = prompt("¿Cuál es su tarea a realizar?:");
	let item = document.createElement("div");
	item.classList.add("taskItem")
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type","checkbox");
	item.appendChild(checkbox);
	item.appendChild(task);
	task.classList.add("task");
	toDoList.appendChild(item);

}

divisorButton.addEventListener("click", function(){
	makeDivisor();
});

document.querySelector(".TaskAdd").addEventListener("click", ()=>{
	makeItemlist();
});


// taskChecker = document.getElementsByTagName('input')

// if (taskChecker. {}