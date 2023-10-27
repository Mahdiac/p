// Données de recettes fictives (vous devrez utiliser une base de données en production)
const recipes = [ ];

// Fonction pour afficher la liste des recettes
function displayRecipes() {
    const list = document.getElementById('recipe-list');
    list.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingrédients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="editRecipe(${index})">Modifier</button>
            <button onclick="deleteRecipe(${index})">Supprimer</button>
        `;
        list.appendChild(recipeDiv);
    });
}

// Fonction pour ajouter ou mettre à jour une recette
function addOrUpdateRecipe() {
    const index = document.getElementById('recipe-index').value;
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if (name && ingredients && instructions) {
        if (index === "") {
            recipes.push({ name, ingredients, instructions });
        } else {
            recipes[index] = { name, ingredients, instructions };
        }
        displayRecipes();
        toggleModal();
    }
}

// Fonction pour afficher/cacher la boîte modale
function toggleModal() {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
    document.getElementById('modal-title').innerText = "Ajouter une Recette";
    document.getElementById('recipe-index').value = "";
    document.getElementById('recipe-name').value = "";
    document.getElementById('ingredients').value = "";
    document.getElementById('instructions').value = "";
}

// Fonction pour éditer une recette
function editRecipe(index) {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
    document.getElementById('modal-title').innerText = "Modifier la Recette";
    document.getElementById('recipe-index').value = index;
    document.getElementById('recipe-name').value = recipes[index].name;
    document.getElementById('ingredients').value = recipes[index].ingredients;
    document.getElementById('instructions').value = recipes[index].instructions;
    
}

// Fonction pour supprimer une recette
function deleteRecipe(index) {
    if (confirm("Voulez-vous vraiment supprimer cette recette?")) {
        recipes.splice(index, 1);
        displayRecipes();
    }
}

// Initialisation de l'affichage des recettes
displayRecipes();