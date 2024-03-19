document.addEventListener("DOMContentLoaded", function (){
  let productos = [
    {
        "producto": "kolsch",
        "precio": 850,
    },
    {
        "producto": "scotch",
        "precio": 900,
    },
    {
        "producto": "porter",
        "precio": 950,
    },
    {
        "producto": "barley wine",
        "precio": 850,
    },
    {
        "producto": "el centinela",
        "precio": 900,
    },
    {
        "producto": "catalina la grande",
        "precio": 950,
    },
    {
        "producto": "imperial stout",
        "precio": 950
    }
  ];
  
  let carrito = [
    {
      "producto": "porter",
      "cantidad": 1,
      "precio": 950
    },
  ];
  mostrar();
  
  let inputProducto = document.getElementById("select-cervezas");
  let inputPrecio = document.getElementById("precio");
  generarOptions();
  
  // agarro los elementos del dom
  let btnAgregar = document.querySelector("#btn-agregar"); 
  // escucho el click
  // btnAgregar.addEventListener('click', agregar);
  
  let btnAgregar3 = document.querySelector("#btn-agregar3");
  btnAgregar3.addEventListener('click', agregarTres);
  
  let btnEliminar = document.querySelector("#btn-eliminar");
  btnEliminar.addEventListener('click', eliminar);
  
  let btnVaciar = document.querySelector("#btn-vaciar");
  btnVaciar.addEventListener('click', vaciar);
  
  let form=document.getElementById("form-carrito");
  form.addEventListener("submit", agregar);
  
  function agregar(e) {
    e.preventDefault();
    console.log("entro al form");
      // let producto = document.createElement("tr");
      //compras.textContent = inputProducto.value + "" + inputPrecio.value;
      let nombre = inputProducto.value;
      console.log(nombre);
      let precio = getPrecio(nombre);
      
      if(existeEnCarrito(nombre)){
        let i = 0;
        while(i < carrito.length && carrito[i].producto != nombre ){
          i++;
        }
        carrito[i].cantidad++;
      } else {
        // si es nuevo
        let producto = {
          "producto" : nombre,
          "cantidad":1,
          "precio" : precio
        }
        carrito.push(producto);
      }
      mostrar();
  }
  
  function agregarTres(){
  
    let nombre = inputProducto.value;
    console.log(nombre);
    let precio = getPrecio(nombre);
    
    if(existeEnCarrito(nombre)){
      let i = 0;
      while(i < carrito.length && carrito[i].producto != nombre ){
        i++;
      }
      carrito[i].cantidad +=3;
    } else {
      // si es nuevo
      let producto = {
        "producto" : nombre,
        "cantidad":3,
        "precio" : precio
      }
      carrito.push(producto);
    }
    mostrar();
  }
  
  function existeEnCarrito(nombre){
    let i = 0;
    while( i < carrito.length && carrito[i].producto != nombre ){
      i++;
    }
    return i!=carrito.length;
  }
  function getPrecio(nombre){
    let i = 0;
    while(i< productos.length && productos[i].producto != nombre ){
      i++;
    }
    return productos[i].precio;
  }
  function eliminar() {
      // borro la ultima posicion
      carrito.pop();
      mostrar();
  }
  function vaciar(){
      carrito = [];
      mostrar();
  }
  function generarOptions(){
    let select = document.getElementById("select-cervezas");
    select.innerHTML="";
    for (let i = 0; i < productos.length; i++) {
      let producto = productos[i];
      let option = document.createElement("option");
      option.value = producto.producto;
      option.innerHTML= producto.producto;
      select.appendChild(option);
  
    }
  }
  function mostrar() {
      // recorro el arreglo y lo muestro en la lista
      let tabla = document.querySelector("#tabla-carrito");
      tabla.innerHTML = "";
      for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];        
        tabla.innerHTML += `<tr> <td>${producto.producto} </td> <td>${producto.cantidad} </td> <td> $${producto.precio} </td> </tr>`;
      }
      total();
  } 
  function total() {
      let suma = 0;
      for (let i = 0; i < carrito.length; i++) {
          suma += carrito[i].precio * carrito[i].cantidad;
      }
      document.querySelector("#total").innerHTML = suma;
  }
});  
