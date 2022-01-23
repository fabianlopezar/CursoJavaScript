const precioOriginal =100;
const descuento =15;
function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioCondescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioCondescuento)/100;
    
    return precioConDescuento;
}

//console.log(""+precioOriginal);