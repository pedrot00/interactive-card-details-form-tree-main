function atualizarDiv(id){

    if (id == 'cardNomeBox'){
        let nome = document.getElementById(id).value;
        let nomeCartao = document.getElementById('cartaoFrenteNome');

        if(nome && /[0-9]/.test(nome)){
            alert("Por favor, insira APENAS letras.");
            return;
        }
        
        nome = nome.replace(/[^a-zA-Z  ]/g, '');
        nomeCartao.innerHTML = nome.toUpperCase();
          
    }

    else if (id == 'cardNumBox'){
        let num = document.getElementById(id).value;
        let numCartao = document.getElementById('cartaoFrenteNumero');

        if(num && /[a-zA-Z]/.test(num)){
            alert("Por favor, insira APENAS números.");
            return;
        }
        
        num = num.replace(/[^0-9]/g, '');
        num = num.replace(/(.{4})/g, '$1 ');   
        numCartao.innerHTML = num;
    }

    else if (id == 'mesBox'){
        let month = document.getElementById(id).value;
        let monthCartao = document.getElementById('cartaoFrenteMes');

        if(month && /[a-zA-Z]/.test(month)){
            alert("Por favor, insira APENAS números.");
            return;
        }
        else if(month > 12 || month <1){
            alert("Por faovr insira um mês válido (1-12)");
        }
        
        month = month.replace(/[^0-9]/g, '');
        monthCartao.innerHTML = month + '\\';

    }
    
    else if (id == 'anoBox'){
        let year = document.getElementById(id).value;
        let yearCartao = document.getElementById('cartaoFrenteAno');

        if(year && /[a-zA-Z]/.test(year)){
            alert("Por favor, insira APENAS números.");
            return;
        }

        year = year.replace(/[^0-9]/g, '');
        yearCartao.innerHTML = year;
    }

    else if (id == 'cvcBox'){
        let cvc = document.getElementById(id).value;
        let cvcCartao = document.getElementById('cartaoCostasNumero');

        if(cvc && /[a-zA-Z]/.test(cvc)){
            alert("Por favor, insira APENAS números.");
            return;
        }
        
        cvc = cvc.replace(/[^0-9]/g, '');
        cvc = cvc.replace(/(.{4})/g, '$1 ');   
        cvcCartao.innerHTML = cvc;

    }
}  

function clickConfirm(){
    let nomeCartao = document.getElementById('cartaoFrenteNome').innerHTML;
    let numCartao = document.getElementById('cartaoFrenteNumero').innerHTML;
    let monthCartao = document.getElementById('cartaoFrenteMes').innerHTML;
    let yearCartao = document.getElementById('cartaoFrenteAno').innerHTML;
    let cvcCartao = document.getElementById('cartaoCostasNumero').innerHTML;

    if(nomeCartao.trim() !== " " && numCartao.trim().length == 19 && monthCartao.trim().length == 3 
    && yearCartao.trim().length == 2 && cvcCartao.trim().length == 3 && nomeCartao.trim() !== "JANE APLESEED" 
    && numCartao !== '0000 0000 0000 0000' && monthCartao !== '00/' && yearCartao !== '00' && cvcCartao !== '001'){

        let confirmPag = './outra_pagina.html';
        window.location.href = confirmPag;
    }
    else{
        window.alert ("Preencha adequadamente todos os campos para poder seguir!");
    }
   
}
let confirmar = document.getElementById('confirmButton').addEventListener('click', clickConfirm);