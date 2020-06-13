const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  for (let i = 0; i < bakeryA.length; i++){
    bakeryAIngredients = bakeryA[i];

    for (let j = 0; j < bakeryB.length; j++){
      bakeryBIngredients = bakeryB[j];

      for (let k = 0; k < recipes[k].ingredients.length; k++){
        if (recipes[k].ingredients === bakeryAIngredients && recipes[k].ingredients === bakeryBIngredients){
          console.log(recipes[k].name)
        }
      }
    }
  }
  return recipes[k].name
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

// bakeryA = ['potatoes', 'bay leaf', 'raisins'];
// bakeryB = ['red bean', 'dijon mustard', 'apples'];
// recipes = [
//     {
//         name: 'Potato Ganache',
//         ingredients: ['potatoes', 'chocolate']
//     },
//     {
//         name: 'Sweet Fish',
//         ingredients: ['anchovies', 'honey']
//     },
//     {
//         name: "Nima's Famous Dijon Raisins",
//         ingredients: ['dijon mustard', 'raisins']
//     }
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));