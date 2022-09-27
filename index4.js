function calcularMedia (num1, num2, num3, nome){
    const mediaCalculada = (num1 + num2 + num3) / 3;
    alert(`${nome}, sua média é de ${mediaCalculada}`)
    console.log(`Nota 1: ${num1}. Nota 2: ${num2}. Nota 3: ${num3}`)
}

calcularMedia(60, 70, 80, "Eduardo")