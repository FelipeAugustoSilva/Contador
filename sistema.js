let numeroDeAlunos = 10;
// exemplo for
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    // console.log(contador)

if(contador == 0){
    console.log("o numero atual e zero")
}else if(contador % 2 == 0){
    console.log("o numero" + contador + "e par")
}else{
    console.log(`o nome ${nome} e impar`)
}
}

// exemplo de while
let contador = 0;

while(contador <= numeroDeAlunos) {

if(contador == 0){
    console.log("o numero atual e zero")
}else if(contador % 2 == 0){
    console.log("o numero" + contador + "e par")
}else{
    console.log(`o nome ${contador} e impar`)
}
contador++;
}

// exemplo for of
let nomeDeAluno = ["Marcel","Rita","Lucas","Maria"]

for (let nome of nomeDeAluno)
console.log(`Esta pessoa se chama ${nome}`)