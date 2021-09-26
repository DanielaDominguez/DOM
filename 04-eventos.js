// me manda un aviso de que escribimos algo  
/* const $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');

$inpText.addEventListener('keydown', () => {
    console.log('escribiste algo'); 
});

*/
//-----------------

// nos da un registro de lo que escribimos 
/* const $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');
// keydown imprime al instante la tecla oprimida, keyup imprime hasta que dejas de obrimir teclas
$inpText.addEventListener('keyup', (e) => { 
    console.log(e.target.value); 
}); */

//------------------------
// nos da un registro de lo que hacemos al pasar el mouse
const $btn = document.querySelector('#btn');

$btn.addEventListener('mouseover', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');

$inpText.addEventListener('keyup', (e) => { 
    console.log(e.target.value); 
});
