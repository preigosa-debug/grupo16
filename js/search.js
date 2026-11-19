let lista_categorias = document.querySelector('.lista-categorias')
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get('categoria')

/* ASIDE */
fetch(`https://dummyjson.com/products/${categoria}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for (let i = 0; i < data.length; i ++){
    lista_categorias.innerHTML += `
    <li><a href="./category.html?categoria=${data[i]}">${data[i]}</a></li>`
  }
 
})
.catch(function(error) {
  console.log("Error: " + error);
})