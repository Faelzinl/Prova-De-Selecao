var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('.menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

    menuBar.addEventListener('click',function(){
        menu.classList.toggle('active');
    });

      /*Tabela*/
    function cadPessoa(nome, email, nascimento, telefone) {

        var tb = document.getElementById("tbPessoas");
        var qtdLinhas = tb.rows.length;
        var linha = tb.insertRow(qtdLinhas);
    
        var cellCodigo = linha.insertCell(0);
        var cellNome = linha.insertCell(1);
        var cellEmail = linha.insertCell(2);
        var cellNascimento = linha.insertCell(3);
        var cellTelefone = linha.insertCell(4);
        
    
        cellCodigo.innerHTML = qtdLinhas;
        cellNome.innerHTML = nome;
        cellEmail.innerHTML = email;
        cellNascimento.innerHTML = nascimento;
        cellTelefone.innerHTML = telefone;
       
    } 