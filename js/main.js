const silla = 65;
const mesa = 150;
const espejo = 25;

const lista = prompt(`Elija el producto: 
                        1. Silla ${silla} €uros
                        2. Mesa ${mesa} €uros
                        3. Espejo ${espejo} €uros
                        0. Volver`);

const noProducts = () => {
    alert("No ha elegido un producto valido");
};

const caculateTotal = (precio, cantidad) => {

    if (precio > 100) {
        alert(`El total de sucompra es ${precio * cantidad - precio * cantidad * 0.05 }`);
    } else {
        alert(`El total de sucompra es ${precio * cantidad} €uros`);
    }

}


const unidades = parseInt(prompt("¿Cuántas unidads necesita?"));

if (lista === "1" || lista === "2" || lista === "3" || lista === "0" ) {
    switch (lista) {
        case "1":
            caculateTotal(silla, unidades) ;
            break;
        case "2":
            caculateTotal(mesa, unidades) ;
            break;
        case "3":
            caculateTotal(espejo, unidades) ;
            break;
        case "":
            noProducts();
            break;
        case "0":
            alert('ha decidido salir de la lista')
            break;

        default:
            noProducts();
            break;
    }




} else {
    noProducts();
}
