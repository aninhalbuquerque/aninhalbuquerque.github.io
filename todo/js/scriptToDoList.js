function add(){
	var taskName = document.getElementById("add").value;
	if(taskName.length != 0){
		document.getElementById("add").value = "";
		var listItem = document.createElement("li");
		listItem.innerHTML = '<input type="checkbox" onchange="check(this)"/><input type="text" value=' + taskName + ' class="edit"/><button class="del" onclick="deleteTask(this)">Delete</button>';
		
		var list = document.getElementById("to-do");
		list.appendChild(listItem);
	}
}

function check(x){
	var listItem = x.parentNode;
	var secChild = listItem.childNodes[1];
	var taskName = secChild.value;
	deleteTask(x);

	var newListItem = document.createElement("li");
	newListItem.innerHTML = '<input type="checkbox" onchange="uncheck(this)" checked/><input type="text" value=' + taskName + ' class="edit"/><button class="del" onclick="deleteTask(this)">Delete</button>';
	var list = document.getElementById("done");
	list.appendChild(newListItem);
}

function uncheck(x){
	var listItem = x.parentNode;
	var secChild = listItem.childNodes[1];
	var taskName = secChild.value;
	deleteTask(x);

	var newListItem = document.createElement("li");
	newListItem.innerHTML = '<input type="checkbox" onchange="check(this)"/><input type="text" value=' + taskName + ' class="edit"/><button class="del" onclick="deleteTask(this)">Delete</button>';
	var list = document.getElementById("to-do");
	list.appendChild(newListItem);
}

function deleteTask(x){
	var listItem = x.parentNode;
	listItem.remove();
}

function tecla(){
	if(event.keyCode == 13) add();
}

