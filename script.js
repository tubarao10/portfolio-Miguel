const formulario = document.getElementById('contato-form');
      formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();// Obtém os valores dos campos do formulário e remove espaços em branco

        if (nome === '' || email === '' || mensagem === '') {
          alert('Por favor, preencha todos os campos do formulário.');
          return;
        }// Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor, se necessário.


        const mensagemSucesso = document.getElementById('mensagemSucesso');// Obtém o elemento de mensagem de sucesso

        mensagemSucesso.textContent = 'Mensagem enviada com sucesso! Obrigado por entrar em contato.';
        mensagemSucesso.style.display = 'block';//exibe a mensagem de sucesso

        setTimeout(function() {
          mensagemSucesso.style.display = 'none';
        }, 3000);// Oculta a mensagem de sucesso após 3 segundos

        formulario.reset();// Limpa os campos do formulário

    });
