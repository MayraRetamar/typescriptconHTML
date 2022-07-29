let btnMenos = document.getElementById("menos");
let btnMas = document.getElementById("mas");
let div = document.getElementById("cantidad");

let contador: number = 0;

function contarClicks() {
  contador++;
  div?.innerHTML = contador;
  console.log(contador + " clicks");
}
function sacarClicks() {
  contador = contador - 1;
  div?.innerHTML = contador;
  console.log(contador + " clicks");
}

btnMas?.addEventListener("click", contarClicks);
btnMenos?.addEventListener("click", sacarClicks);
