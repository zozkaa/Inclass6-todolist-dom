/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/
window.addEventListener('load', function(e){

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;
let dn = "\u21e9"; 
let up = "\u21e7";

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	
	var div,
	checkbox,
	label,
	labelText,
	todoText;
	
	todoText = evt.target.elements['todo-item'].value;
	
	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}
	
	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);
	span = document.createElement('span');
	spanText = document.createTextNode(dn);
	span1 = document.createElement('span');
	span1Text = document.createTextNode(up);
	
	
	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');
	span.setAttribute('class', 'arrow dn');
	span1.setAttribute('class', 'arrow up');
	
	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	div.appendChild(span);
	span.appendChild(spanText);
	div.appendChild(span1);
	span1.appendChild(span1Text);
	
	
	// add the document fragment to the document for rendering
	todos.appendChild(div);
	
	// clear the form
	evt.target.reset();
	
	evt.preventDefault();
});

	// add click event for moving todo list items
	document.querySelector('.todo-list').addEventListener('click', function (evt) { 
		// check for click on an arrow 
		let targetTodo = evt.target.parentNode; 
		let todoList = targetTodo.parentNode; 
		let siblingTodo; 
		if (evt.target.classList.contains('arrow')) { 
			// identify the type of arrow (i.e. down or up) 
			if (evt.target.classList.contains('dn')) { 
				siblingTodo = targetTodo.nextElementSibling; 
				// insert the sibling before the target 
				todoList.insertBefore(siblingTodo, targetTodo); 
			} else if (evt.target.classList.contains('up')) { 
				siblingTodo = targetTodo.previousElementSibling; 
				// insert the sibling before the target 
				todoList.insertBefore(targetTodo, siblingTodo); 
			} 
		} });

})