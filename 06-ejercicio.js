const dinamiclist = document.querySelector('#dinamiclist');
const texto = document.querySelector('#input');
const boton = document.querySelector('#enviar');
boton.addEventListener('click', () => {
    let contenido = texto.value ;
    let elementoLista = document.createElement('li');
    elementoLista.textContent = contenido;
    dinamiclist.appendChild(elementoLista);
})


//otra solucion
const $btn = document.querySelector ('#btn');
const $list = document.querySelector ('#list');

//agregando evento al boton
$btn.addEventListener('click', () => {
    const listItem = document.createElement('li'); //agregamos un <li></li>
    console.log(listItem);
    listItem.textContent = 'Nuevo elemento'; // llenamos el li <li>nuevo elmento</li<
    $list.appendChild(listItem); // lo agragamos a la lista 
});