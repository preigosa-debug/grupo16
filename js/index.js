let aleatorios = document.querySelector('.aleatorios');
let masvendidos = document.querySelector('.masvendidos')
let asidenav = document.querySelector('.asidenav')

fetch('https://dummyjson.com/products/category/smartphones')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let productos = data.products;
        for (let i = 0; i < productos.length; i++){
            aleatorios.innerHTML += `
            <article class="producto">
                <img src="${productos[i].images[0]}" alt="${productos[i].title}">
                <h3>${productos[i].title}</h3>
                <p class="descripcion">${productos[i].description}</p>
                <p class="precio">$${productos[i].price}</p>
                <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
            </article>
            `;
        }
    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });

fetch('https://dummyjson.com/products/category/vehicle')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let productos = data.products;
        for (let i = 0; i < productos.length; i++){
            masvendidos.innerHTML += `
            <article class="producto">
                <img src="${productos[i].images[0]}" alt="${productos[i].title}">
                <h3>${productos[i].title}</h3>
                <p class="descripcion">${productos[i].description}</p>
                <p class="precio">$${productos[i].price}</p>
                <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
            </article>
            `;
        }
    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });


    