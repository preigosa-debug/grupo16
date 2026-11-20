let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get('search');

let resultados = document.querySelector('.resultadossearch');
let titulo = document.querySelector('.resultadosearchx');



if (busqueda !=null && busqueda != ""){
  
  titulo.innerText = busqueda;
  
  fetch('https://dummyjson.com/products/search?q=' + busqueda)
  .then(function(response){
    return response.json()
  })

  .then(function(data){
    console.log(data);

    if(data.products.length>0){
      for (let i=0; i <data.products.length; i++) {
        resultados.innerHTML += `
          <article class="producto">
            <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
            <h3>${data.products[i].title}</h3>
            <p class="descripcion">${data.products[i].description}</p>
            <p class="precio">${data.products[i].price}</p>
            <a href="./product.html?id=${data.products[i].id}">Ver detalle</a>
             

        
      
          </article>`;
        } 
      }

    else{ resultados.innerHTML = "No hay resultados para su busqueda: " + busqueda;
     }
  })


  .catch(function(error){
    console.log("El Error es: " + error);
  })

  }

/* ASIDE */

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






