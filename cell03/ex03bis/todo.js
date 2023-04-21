$(document).ready(function() {
    // Fonction pour créer une nouvelle tâche
    function createTask() {
        // Demande à l'utilisateur d'entrer le nouveau to do
        let task = prompt("Entrez le nouveau to do:");

        // Si l'utilisateur a cliqué sur Annuler ou que le texte est vide, ne rien faire
        if (task === null || task === "") {
            return;
        }

        // Crée un nouvel élément div pour le to do
        let newTask = $("<li></li>").html(task);

        // Ajoute un gestionnaire d'événement pour la suppression du to do
        newTask.on("click", function() {
            if (confirm("Voulez-vous supprimer ce to do?")) {
                $(this).remove();
                saveTasks();
            }
        });

        // Ajoute le nouveau to do au début de la liste
        $("#ft_list").prepend(newTask);

        // Enregistre la liste de to do
        saveTasks();
    }

    // Fonction qui enregistre la liste de to do dans les cookies
    function saveTasks() {
        let taskList = $("#ft_list");
        let tasks = [];

        // Parcours tous les éléments li de la liste de to do et ajoute leur contenu à la liste de tâches
        taskList.children("li").each(function() {
            tasks.push($(this).html());
        });

        // Enregistre la liste de tâches dans les cookies
        document.cookie = "tasks=" + JSON.stringify(tasks);
    }

    // Fonction qui charge la liste de to do depuis les cookies
    function loadTasks() {
        let taskList = $("#ft_list");

        // Vérifie si le cookie "tasks" existe
        if (document.cookie.indexOf("tasks=") === -1) {
            return;
        }

        // Récupère la liste de tâches depuis le cookie
        let tasks = JSON.parse(document.cookie.split("tasks=")[1]);

        // Ajoute chaque tâche à la liste de to do
        for (let i = 0; i < tasks.length; i++) {
            let task = $("<li></li>").html(tasks[i]);

            task.on("click", function() {
                if (confirm("Voulez-vous supprimer ce to do?")) {
                    $(this).remove();
                    saveTasks();
                }
            });

            taskList.prepend(task);
        }
    }

    // Appelle la fonction pour charger la liste de to do
    loadTasks();

    // Ajoute un gestionnaire d'événement pour le bouton "New"
    $("#new_button").on("click", function() {
        createTask();
    });
});