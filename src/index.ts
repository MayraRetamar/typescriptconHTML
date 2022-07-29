let btnMenos = document.getElementById("menos");
let btnMas = document.getElementById("mas");

let contador: number = 0;

function contarClicks() {
  contador++;
  console.log(contador + " clicks");
}

btnMas?.addEventListener("click", contarClicks);

function sacarClicks() {
  contador = contador - 1;
  console.log(contador + " clicks");
}
btnMenos?.addEventListener("click", sacarClicks);
