const nota = 55;

if (nota >=80) {
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (nota < 80 && nota >= 60) {
    console.log("Vocês está na nossa lista de espera.");
}
else if (nota < 60 && nota >=0) {
    console.log("Você foi reprovada(o).");
}
else {
    console.log("Nota inválida");
}