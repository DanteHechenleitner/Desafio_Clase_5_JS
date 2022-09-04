
let opcion;

const productos =[
    {
        id: 1,
        codigo: "ED01",
        nombreArticulo: "Maquina",
        precio: 5,
        cantidad:5,
    }
]
  

while(opcion !== 0){
    opcion = Number(prompt("Ingresar una opcion: \n -1 Agregar producto \n -2 Mostrar Productos \n -0 Salir"));
    switch (opcion) {
        case 1:
            let codigo = prompt("Codigo: ");
            let nombreArticulo = prompt("Nombre del Articulo:");
            let precio = Number(prompt("Costo del producto:"));
            let cantidad = Number(prompt("Cantidad:"));
            const id = crearID() + 1;
            function validar (parametro){
                if (parametro == codigo){
                    while(codigo == false || codigo == null){
                        alert("Por favor ingresar el codigo");
                        codigo = prompt("Codigo: ");
                    }
                } else if (parametro == nombreArticulo){
                    while(nombreArticulo == false || nombreArticulo == null){
                        alert("Por favor ingresar el Nombre del Articulo");
                        nombreArticulo = prompt("Nombre del Articulo:");
                    }
                } else if (parametro == precio){
                    while(precio == false || precio == null || isNaN(precio)){
                        alert("Por favor ingresar el Precio del producto");
                        precio = prompt("Costo del producto: ");
                    }
                } else if (parametro == cantidad){
                    while(cantidad == false || cantidad == null || isNaN(cantidad)){
                        alert("Por favor ingresar cantidades ");
                        cantidad = Number(prompt("Cantidad: "));
                    }
                }
            }
            validar(codigo);
            validar(nombreArticulo);
            validar(precio);
            validar(cantidad);
            crearProducto(id, codigo, nombreArticulo, precio, cantidad);
            break;
    
        case 2 :
            mostrarProductos()
            break;
        case 0 :
            alert("Si quiere cargar un producto, reiniciar la pagina")
            break;
       
    }
}



function crearProducto(id, codigo, nombreArticulo, precio, cantidad){
  productos.push({
    id,
    codigo,
    nombreArticulo,
    precio,
    cantidad,
  })
  console.log(productos)
}
  



function mostrarProductos(){
    productos.forEach((productos) => console.log(productos.id + "-" + productos.codigo + "-" + productos.nombreArticulo));
}

function crearID(){
    return productos.length;
}
