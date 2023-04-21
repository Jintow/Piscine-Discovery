function createTask() {
	// Demande à l'utilisateur d'entrer le nouveau to do
	let task = prompt("Entrez le nouveau to do:");

	// Si l'utilisateur a cliqué sur Annuler ou que le texte est vide, ne rien faire
	if (task === null || task === "") {
		return;
	}

	// Crée un nouvel élément div pour le to do
	let newTask = document.createElement("ul");
	newTask.innerHTML = task;

	// Ajoute un gestionnaire d'événement pour la suppression du to do
	newTask.addEventListener("click", function() {
		if (confirm("Voulez-vous supprimer ce to do?")) {
			this.parentNode.removeChild(this);
			saveTasks();
		}
	});

	// Ajoute le nouveau to do au début de la liste
	let taskList = document.getElementById("ft_list");
	taskList.insertBefore(newTask, taskList.firstChild);

	// Enregistre la liste de to do
	saveTasks();
}

// Fonction qui enregistre la liste de to do dans les cookies
function saveTasks() {
	let taskList = document.getElementById("ft_list");
	let tasks = [];

	// Parcours tous les éléments div de la liste de to do et ajoute leur contenu à la liste de tâches
	for (let i = taskList.children.length; i > 0; i--) {
		tasks.push(taskList.children[i - 1].innerHTML);
	}

	// Enregistre la liste de tâches dans les cookies
	document.cookie = "tasks=" + JSON.stringify(tasks);
}

// Fonction qui charge la liste de to do depuis les cookies
function loadTasks() {
	let taskList = document.getElementById("ft_list");

	// Vérifie si le cookie "tasks" existe
	if (document.cookie.indexOf("tasks=") === -1) {
		return;
	}

	// Récupère la liste de tâches depuis le cookie
	let tasks = JSON.parse(document.cookie.split("tasks=")[1]);

	// Ajoute chaque tâche à la liste de to do
	for (let i = 0; i < tasks.length; i++) {
		let task = document.createElement("li");
		task.innerHTML = tasks[i];

		task.addEventListener("click", function() {
			if (confirm("Voulez-vous supprimer ce to do?")) {
				this.parentNode.removeChild(this);
				saveTasks();
			}
		});

		taskList.insertBefore(task, taskList.firstChild);
	}
}