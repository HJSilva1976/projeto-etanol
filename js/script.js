//const resultado = document.querySelector('.resultado');
//console.log('ok');

const btn = document.querySelector('#btn');
const etanol = document.querySelector('#etanol');
const gasolina = document.querySelector('#gasolina');
const percentual = document.querySelector('.percentual');
const abasteca = document.querySelector('.abasteca');

// console.log(btn);
// console.log(etanol);
// console.log(gasolina);
function colorgas(cor){
    abasteca.style.color = cor;
    percentual.style.color = cor;
}

function calculargas() {

    if (etanol.value != '' && gasolina.value != '') {

        let resultado = (etanol.value / gasolina.value)*100;
        console.log(resultado);
        //alert('O percentual é: '+resultado.toFixed(2));

        percentual.innerHTML = resultado.toFixed(2);

        if(resultado < 70){
            //alert('Abasteça com Etanol');
            abasteca.innerHTML = 'Etanol';
            colorgas('yellow');
        }

        else{
            //alert('abasteça com Gasolina')
            abasteca.innerHTML = 'Gasolina';
            colorgas('#E82C03');
        }
    }

    else {
        alert('Preencha todos os campos!')
    }
}

btn.addEventListener('click', calculargas);


