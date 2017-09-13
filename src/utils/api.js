const API_ID = process.env.REACT_APP_API_ID
const APP_KEY = process.env.REACT_APP_APP_KEY

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${'9210dcee'}&app_key=${'d813051a209eaa7adadccf163a87f6a3'}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}