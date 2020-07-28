// Button to Add task
var addButton = document.getElementById('taskAdd');

// Function to create New Task Elements
function newTask() {
	// Elements
	var li = document.createElement('li');
	var cbox = document.createElement('input');
	var p = document.createElement('p');
	var buttoN= document.createElement('button');
	
	// EVent Handlers
	buttoN.onclick=deleteTask;
	cbox.onclick = updateStatus;
	// Setting Attributes
	cbox.type='checkbox';
	p.textContent=document.getElementById('Name').value;
	buttoN.textContent='X';
	li.appendChild(cbox);	li.appendChild(p);	li.appendChild(buttoN);
	
	// Adding To List
	var list = document.querySelector('ul');
	list.prepend(li);
}
// Event Handlers
addButton.onclick = newTask;

function deleteTask(event) {
	// Get Clicked Element
	var clicked = event.target;
	clicked.parentNode.parentNode.removeChild(clicked.parentNode);
}


function updateStatus(event) {
	// Check if the Task has been checked to true or not
	var checked = event.target.checked;
	if(checked)
	{
		// Adding class to define new style properties
		event.target.parentNode.classList = 'completeTask';
		// adding child to last
		event.target.parentNode.parentNode.appendChild(event.target.parentNode);
	}
	else
	{
		// Removing class for dedault properties
		event.target.parentNode.classList = '';
		// Adding task back to top
		event.target.parentNode.parentNode.prepend(event.target.parentNode);
	}
}

// Fullscreen API to use To-Do list in full screen
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}

// Key Event Listener
document.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {
    toggleFullScreen();
  }
}, false);


// Method call to load map
function createMap() {
	// getting location using geolocation
	navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
			//adding map functionality
	var map = new google.maps.Map(document.getElementById('mapDiv'), {
       center: pos,
       zoom: 15
       });
});
}