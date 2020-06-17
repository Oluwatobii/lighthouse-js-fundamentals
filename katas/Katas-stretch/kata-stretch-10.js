const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  const recpA = ingredientCheck(bakeryA, recipes);
  const recpB = ingredientCheck(bakeryB, recipes);
  newBakery = recpA.concat(recpB);
  // console.log(newBakery);

  for (let i=0; i< recipes.length; i++){
    if (newBakery.includes(recipes[i].ingredients[0]) && newBakery.includes(recipes[i].ingredients[1])){
      return recipes[i].name;
    }
  }
}
const ingredientCheck = function (newBakery, recipes){
  var answer = [];
  for (let i = 0; i< newBakery.length; i++){
    for (let j = 0; j < recipes.length; j++){
      if (newBakery[i] === recipes[j].ingredients[0] || newBakery[i] === recipes[j].ingredients[1]){
        answer.push(newBakery[i]);
      }
    }
  }
  return answer; // contains an array of all the receipe in bakeryA or bakeryB found in recipes
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////               OR              //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipeChosen = '';
  for (i = 0; i < recipes.length; i++){ 
    let ingredientCheck = recipes[i].ingredients;
      
    let hasIngredientA = (bakeryA.includes(ingredientCheck[0]) || bakeryB.includes(ingredientCheck[0]));
    let hasIngredientB = (bakeryA.includes(ingredientCheck[1]) || bakeryB.includes(ingredientCheck[1]));
      
    if (hasIngredientA && hasIngredientB) {
      recipeChosen = recipes[i].name;
    }
  }
  return recipeChosen;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
