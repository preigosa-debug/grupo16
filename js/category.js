let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get('categoria')
let titulo = document.querySelector('.titulo-categoria')
let contenedor = document.querySelector('.productos-categoria')
let lista_categorias = document.querySelector('.lista-categorias')

fetch(`https://dummyjson.com/products/category/${categoria}`)

.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
   let productos = data.products;

    titulo.innerText = categoria;

    for (let i = 0; i < productos.length; i++) {
      contenedor.innerHTML +=
  `
    <article class="producto">
        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
        <h3>${productos[i].title}</h3>
        <p class="descripcion">${productos[i].description}</p>
        <p class="precio">${productos[i].price}</p>
        <a href="./product.html?id=${productos[i].id}">Ver detalle</a> 
    </article>
  `
    }
})
.catch(function(error) {
  console.log("Error: " + error);
})

fetch('https://dummyjson.com/products/category-list')
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