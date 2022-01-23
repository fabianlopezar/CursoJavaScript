//Codigo del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado=5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado);
function perimetroCuadrado(lado)
{
return lado * 4;
}
perimetroCuadrado()
console.log("El perimetro del cuadrado es: "+ perimetroCuadrado+"cm");
function  AreaCuadrado(lado)
{
    return lado * lado;
}
AreaCuadrado()
//console.log("El perimetro del cuadrado es: "+ AreaCuadrado+"cm2");
console.groupEnd();
//Codigo del triangulo

console.group("Triangulos");
// const ladoTriangulo1=6;
// const ladoTriangulo2=6;
// const basetriangulo=4; 
// const alturatriangulo=5.5; 
// console.log("Los lados del triangulo miden:"+ladoTriangulo1+"cm, "+ladoTriangulo2+"cm, "+basetriangulo+"cm.");
// console.log("La altura del triangulo es de: "+alturatriangulo);
function perimetroTriangulo(lado1, lado2, base)
{
return lado1+lado2+base;
}
// console.log("El perimetro del triangulo es de:"+perimetroTriangulo+"cm");
function areatriangulo(base, altura)
{
return (base* altura)/2;
}
//console.log("El area del triangulo es de: "+areatriangulo+"cm2");
console.groupEnd()

// Codigo del circulo
console.group("Circulo");
function radioCirculo(radio)
{
return radio;
} ;
function diametroCirculo(radio)
{
return radio*2;
}
const PI=Math.PI;
function perimetroCirculo(radio)
{
const diametro =diametroCirculo(radio);
return diametro*PI;
}
function areaCirculo(radio)
{
return (radio*radio)*PI;
}
// console.log("El radio del circulo es de: "+radioCirculo+"cm");
// console.log("El diametro del circulo es de: "+ radioCirculo+"cm");
// console.log("El perimetro del circulo es de: "+ perimetroCirculo+"cm");
// console.log("El area del circulo es de: "+ areaCirculo+"cm2");
console.groupEnd();


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado()
{
const input =document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}
function calcularAreaCuadrado()
{
    const input =document.getElementById("InputCuadrado");
    const value =input.value;
    const area=AreaCuadrado(value);
    alert(area);
}
//Triángulo Isósceles
console.group("Calcular la altura de un triángulo isósceles.");
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

console.groupEnd();

