let lista_categorias = document.querySelector('.lista-categorias')

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');

let nombre = document.querySelector('.producto-nombre')
let foto = document.querySelector('.producto-foto')
let precio = document.querySelector('.producto-precio')
let marca = document.querySelector('.producto-marca')
let producto_categoria = document.querySelector('.producto-categoria')
let stock = document.querySelector('.producto-stock')
let descripcion = document.querySelector('.producto-descripcion')
let tags = document.querySelector('.producto-tags')
let review = document.querySelector('.producto-review')

fetch(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        nombre.innerText = data.title
        foto.src = data.images[0]
        foto.alt = data.title

        if (data.brand){
          marca.innerText = 'Marca: ' + data.brand;}

        else{
          marca.innerText = 'Marca: sin marca';
        }
        descripcion.innerText = data.description
        precio.innerText = '$' + data.price
        producto_categoria.innerText = 'Categoria: ' + data.category
        stock.innerText = 'Stock: ' + data.stock

        for (let i = 0; i < data.tags.length && i < 3; i ++ ){
            tags.innerHTML += `<li>${data.tags[i]}</li>`;
        }

        for (let i = 0; i < data.reviews.length; i ++){

          review.innerHTML += 
        `
        <article class="producto-review">

            <p class="rating"> Rating: ${data.reviews[i].rating}</p>
            <p class="comentario">Comentario: ${data.reviews[i].comment}</p>
            <p class="usuariox">Usuario: ${data.reviews[i].reviewerName}</p>
            <p class="fecha">Fecha: ${data.reviews[i].date}</p>

        </article> 
        `
        }
      
    })

    .catch(function(error) {
  console.log("Error: " + error);
})
    

      

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

