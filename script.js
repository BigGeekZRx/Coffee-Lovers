
const form = document.getElementById('contato-form');


form.addEventListener('submit', function (event) {
 
  event.preventDefault();


  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;


  console.log('Formulário enviado com os seguintes dados:');
  console.log(`Nome: ${nome}`);
  console.log(`E-mail: ${email}`);
  console.log(`Mensagem: ${mensagem}`);


  form.reset();
});
