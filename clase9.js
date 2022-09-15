let arayProductos = [
    {
        id: 1,
        codigo: "ED01",
        producto: "Electrodo",
        precio: 25,
        cantidad:6
    },
    {
        id: 2,
        codigo: "ED02",
        producto: "Ranger260",
        precio: 2500,
        cantidad:7
    },
    {
        id: 3,
        codigo: "ED03",
        producto: "Torcha",
        precio: 15,
        cantidad:8
    },
];

let codigo;
let producto;
let precio;
let cantidad;
let option;
let id;

function validar (parametro){
    if (parametro == codigo){
        while(codigo == false || codigo == null){
            alert("Por favor ingresar el codigo");
            codigo = prompt("Codigo: ");
        }
    } else if (parametro == producto){
        while(producto == false || producto == null){
            alert("Por favor ingresar el Nombre del Articulo");
            producto = prompt("Nombre del Articulo:");
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


function crearProducto(id, codigo, producto, precio, cantidad){
    this.id = id,
    this.codigo = codigo;
    this.producto = producto;
    this.precio = precio;
    this.cantidad = cantidad;
}



function iniciar() {
    while(option !== 0){
        option = Number(prompt("Ingresar una opcion: \n -1 Agregar producto \n -2 Mostrar Productos \n -3 Buscar Producto \n -0 Salir"));
        switch (option) {
            case 1:
                validar(codigo)
                validar(producto)
                validar(precio)
                validar(cantidad)
                const id = crearID() + 1
                let crear = new crearProducto(id,codigo, producto, precio, cantidad)
                cargarProducto(arayProductos, crear);
                break;
        
            case 2:
                mostrarProductos()
                mostrarProdHTML()
                break;

            case 3:
                let codigob = prompt("Codigo a Buscar")
                buscarPorductos(codigob)
                buscarEnHtml(codigob)
                break;

            default:
        }
    }
    
}

function crearID(){
    return arayProductos.length;
}


function cargarProducto(array, valor){
    const resultado = arayProductos.some((el) => el.codigo === codigo)
    if(resultado === true){
        alert("El codigo ya existe Vuelva a Iniciar")
        //iniciar(option=0)
    }else(
        array.push(valor)
    )
}


function mostrarProductos(){
    arayProductos.forEach((productos) => console.log(productos.id + "-" + productos.codigo + "-" + productos.producto));
}


function buscarPorductos(codigo){
    const artBuscado = arayProductos.filter((el) => el.codigo === codigo).map(((el) => el.producto + " - "+ "Cantidad= " + el.cantidad))
    alert("Producto: " + artBuscado)
}


console.log(arayProductos);


console.log(arayProductos);


const verProductos = document.getElementById("prueba");


function mostrarProdHTML(){
    for (producto of arayProductos){
        let conteiner = document.createElement("div");
        conteiner.innerHTML = `<h3>Codigo: ${producto.codigo} Producto: ${producto.producto}</h3>
                               <p>Cantidad:${producto.cantidad} </p> 
                               <p>Precio: $ ${producto.precio}</p>`;
        verProductos.append(conteiner)
    }

}

function buscarEnHtml(parametro){
    const buscarhtml = parametro
    let oterconteiner = document.createElement("div")
    oterconteiner.innerHTML = `<spam> Producto: ${arayProductos.filter((el)=> el.codigo === parametro).map((el) => el.producto + " - "+ "Cantidad = " + el.cantidad)}</spam>`
    verProductos.append(oterconteiner)
}



const input = document.getElementById("text");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

const filtrar = () => {
    //console.log(input.value)
    resultado.innerHTML = "";
    const texto = input.value.toLowerCase();
    for (producto of arayProductos){
        let nombre = producto.producto.toLowerCase();
        if(nombre.indexOf(texto) !== -1 ){
            resultado.innerHTML += `
            <li> ${producto.producto} - $ ${producto.precio} </li>
            `
        }

        
    }


}

btn.addEventListener("click", filtrar)
//input.addEventListener("keyup", filtrar)

iniciar()
