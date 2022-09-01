
 //Mike Anderson Cruz Martínez CM19118
 //José David Del Cid Cruz DC20001

const Indumentario = (ide=undefined, name=undefined, stockk=undefined, price=undefined)=>{
    const id = ide;
    const nombre = name;
    const stock = stockk;
    const precio = price;
    return {id,nombre,stock,precio}
};

const camisa = Indumentario(1,"Camisa Polo", 2, 4.99);
const pantalon = Indumentario(2, "Pantalon Zdor", 2, 9.99);
const zapatos = Indumentario(3, "Zapatos Nike", 2, 14.99);

const Tienda = (()=>{
    //PROPIEDADES DE TIENDA
    const inventario = [
       camisa, 
       pantalon,
       zapatos
    ];
    const carritoDeCompras = [];
    
    //METODOS DE TIENDA
    const agregarProducto = (index)=>{
        console.log("LLEGAMOS AL METODO ADDPRODUCTO" + index)
        if(index === 0){
            if(inventario[0].stock <= 0){
                alert("NO HAY STOCK DE ESE PRODUCTO");
                return false;
            }else{
                actualizarInve(index);
            }
            carritoDeCompras.push(inventario[index]);
            alert("SE HA AGREGADO CAMISA");
        }
        else if(index === 1){
            carritoDeCompras.push(inventario[index]);
            alert("SE HA AGREGADO PANTALON");
        }
        else if(index === 2){
            carritoDeCompras.push(inventario[index]);
            alert("SE HA AGREGADO ZAPATOS");
        }

    };
    const realizarPago = ()=>{

    };
    const actualizarInve = (index)=>{
        if(index === 0){
            inventario[0].stock = inventario[0].stock - 1;
            alert("SI HAY INVENTARIO, CON LA CANTIDAD DE: "+inventario[0].stock)
        }
        else if(index === 1){
            inventario[0].stock = inventario[1].stock - 1;
            alert("SI HAY INVENTARIO, CON LA CANTIDAD DE: "+inventario[1].stock)
        }
        else if(index === 2){
            inventario[0].stock = inventario[2].stock - 1;
            alert("SI HAY INVENTARIO, CON LA CANTIDAD DE: "+inventario[2].stock)
        }
    };

    return {agregarProducto, realizarPago, actualizarInve, inventario, carritoDeCompras};
})();




//MANIPULACION DEL DOM


const addPantalon = document.getElementById("addPan");
const addCamisa = document.getElementById("addCa");
const addZapato = document.getElementById("addZa");

const mostrarCar = document.getElementById("carrito");


const lista = document.getElementById("lista");

addCamisa.addEventListener("click", ()=>{
    let index = 0;
    Tienda.agregarProducto(index);
 });

 addPantalon.addEventListener("click", ()=>{
    let index = 1;
    console.log("LLEGO AL EVENTO")
    Tienda.agregarProducto(index);
 
 });
 
 addZapato.addEventListener("click", ()=>{
    let index = 2;
    Tienda.agregarProducto(index);
 });

 mostrarCar.addEventListener("click", () =>{
    
    //Los articulos cargados en el carrito de ventas se muestran en la consola
    Tienda.carritoDeCompras.forEach(function(v,i,a)
    {
        lista.innerHTML = console.log(v);
    });
    
 });

 

