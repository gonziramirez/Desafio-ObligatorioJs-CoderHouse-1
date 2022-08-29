let producto = prompt("Ingresa el producto que deseas cargar")
let precio = parseInt(prompt("Ingresa el precio del producto: "))
let cuotas = parseInt(prompt("Ingresa la cantidad de cuotas:\n3 Cuotas sin interes\n6 Cuotas (40% de interes)\n12 Cuotas (77% de interes)"))

const calcularCuotas = () =>{
    switch (cuotas) {
        case 12:
            total12 = precio * 1.77
            cuotas12 = total12 / 12
            alert(producto + " $" + precio + " 12 cuotas de $" + cuotas12 + "\nTotal de: $" + total12)
            break;
        case 6:
            total6 = precio * 1.40
            cuotas6 = total6 / 6
            alert(producto + " $" + precio + " 6 cuotas de $" + cuotas6 + "\nTotal de: $" + total6)
            break;    
        case 3:
            cuotas3 = precio / 3
            alert(producto + " $" + precio + " 3 cuotas sin interes de $" + cuotas3 + "\nTotal de: $" + precio)
            break; 

        default:
            alert("ERROR")
            break;
    }
    
}
    

calcularCuotas()