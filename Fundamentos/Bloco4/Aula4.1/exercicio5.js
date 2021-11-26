const anguloA = 60;
const anguloB = 60;
const anguloC = 60;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0){
    console.log('Um angulo tem o valor inválido');
} else if (anguloA + anguloB + anguloC == 180) {
    console.log(true);
} else {
    console.log(false);
}