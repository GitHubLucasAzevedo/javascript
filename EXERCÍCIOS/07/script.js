/* let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // irá limpar o texto "Ao todo, temos..." quando apertar o finalizar
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // irá fazer o número que será adicionado sumir após clicar em adicionar
    num.focus() // o "foco" continua no quadrante dos números para adicionar
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot  

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
} */

const num = document.querySelector('input#fnum');
const lista = document.querySelector('select#flista');
const res = document.querySelector('div#res');
const valores = [];

const isNumero = n => Number(n) >= 1 && Number(n) <= 100;

const inLista = (n, l) => l.indexOf(Number(n)) !== -1;

const adicionar = () => {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    const item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = '';
  } else {
    alert('Valor inválido ou já encontrado na lista');
  }
  num.value = '';
  num.focus();
};

const finalizar = () => {
  if (valores.length === 0) {
    alert('Adicione valores antes de finalizar!');
  } else {
    const tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (const pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    media = soma / tot;

    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
  }
};

num.addEventListener('keyup', event => {
  if (event.keyCode === 13) { // esse 13 é a Tecla ENTER
    adicionar(); // esse código é para apertar a tecla Enter e o número ir para a lista
  }
});

lista.addEventListener('click', event => {
  if (event.target.tagName === 'OPTION') {
    const pos = valores.indexOf(Number(event.target.value));
    valores.splice(pos, 1);
    lista.removeChild(event.target);
    res.innerHTML = ''; // esse código remove um número da lista ao clicar nele
  }
});

