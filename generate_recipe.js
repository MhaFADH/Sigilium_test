import recipe from "./recipe.json" with {type: "json"}

const container = document.getElementsByClassName("container")[0];

let mappedRecipe = "<div class='d-flex flex-column text-center'><h2><u>Ingredients</u></h2><div class ='d-flex flex-wrap'>"

recipe.ingredients.forEach((ingredient) => {
  mappedRecipe += `
  <div class="card" style="width:15%">
    <img class="card-img-top" src="pictures/${ingredient.picture}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${ingredient.translated_name[0].fr}</h5>
      <p class="card-text">${ingredient.quantity} ${ingredient.unit}</p>
    </div>
  </div>
  `
  ;
})

mappedRecipe += "</div><h2><u>Temps de préparation</u></h2><div class='d-flex flex-column align-items-center'>"

Object.entries(recipe.timing).forEach(([key,value]) => {
  mappedRecipe += `
  <div class="card" style="width:44%">
    <div class="card-body">
      <h5 class="card-title">${key.toUpperCase()} - ${value.quantity} ${value.unit}</h5>
    </div>
  </div>
  `}
)

mappedRecipe += "</div><h2 ><u>Etapes</u></h2><div class='d-flex flex-column align-items-center'>"
recipe.steps.forEach((step) => {
  mappedRecipe += `
  <div class="card" style="width:44%">
    <div class="card-body">
      <h5 class="card-title">Etape ${step.order}</h5>
      ${step.ingredients.length > 0 ? `<p> ingredients: ${step.ingredients.map(ingredientId => recipe.ingredients.find(ingredient => ingredient.id === ingredientId).translated_name[0].fr).join(", ")} </p>`:""}
      <p class="card-text">${step.description}</p>
    </div>
  </div>
  `
  ;
})

mappedRecipe += "</div></div>"


container.innerHTML = container.innerHTML.replace(
  "REPLACEME",mappedRecipe);