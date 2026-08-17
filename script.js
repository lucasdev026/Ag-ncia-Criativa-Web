
// 1. Seleciona o formulário pelo ID
const formulario = document.getElementById('meuFormulario');
//1.2 ao clilcar no botão de "Enviar" muda de cor para cinza confirmando o clique
document.querySelector('button').addEventListener('click', function(e){
    e.target.style.backgroundColor="grey";

})


// 2. Adiciona um ouvinte para o evento de envio 
formulario.addEventListener('submit', function(event) {
//Evita o comportamento padrão de recarregar a página
    event,preventDefault();

// 3. Captura os valores digitados pelo usuário 
const email = document.getElementById('email'). value;
const senha = document.getElementById('senha').value;
const assunto = document.getElementById('assunto'). value;

processarEnvio(email, senha, assunto);

});


//exemplo de função para tratar os dados obtidos 
 function processarEnvio(email, senha, assunto) {
    console.log('Dados capturados com sucesso:');
    console.log('email:', email);
    console.log('senha', senha);
    console.log('assunto:', assunto);

    //Aqui você pode fazer uma validação extra ou enviar para uma API
    alert('Formulario enviado com sucesso!');

 }