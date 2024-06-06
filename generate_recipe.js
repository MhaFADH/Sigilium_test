import recipe from "./recipe.json" with {type: "json"}

const container = document.getElementsByClassName("container")[0];

let mappedRecipe = "<div>"

mappedRecipe += "<h2>Ingredients</h2><div>"
recipe.ingredients.forEach((ingredient) => {
  mappedRecipe += `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="pictures/${ingredient.picture}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${ingredient.translated_name[0].fr}</h5>
      <p class="card-text">${ingredient.quantity} ${ingredient.unit}</p>
    </div>
  </div>
  `
  ;
})
mappedRecipe += "</div>"

mappedRecipe += "<h2>Temps de préparation</h2><div>"

Object.entries(recipe.timing).forEach(([key,value]) => {
  mappedRecipe += `
  <div class="card" style="width:18rem;">
    <div class="card-body">
      <h5 class="card-title">${key.toUpperCase()} - ${value.quantity} ${value.unit}</h5>
    </div>
  </div>
  `}
)

mappedRecipe += "</div></div>"


container.innerHTML = container.innerHTML.replace(
  "REPLACEME",mappedRecipe);