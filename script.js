// Aguarda o carregamento completo da página antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o formulário pelo ID
    const form = document.getElementById("formContato");

    // Intercepta o evento de "submit" (envio) do formulário
    form.addEventListener("submit", function(event) {
        // Evita o comportamento padrão do navegador de recarregar a página
        event.preventDefault();

        // Captura os valores digitados e remove os espaços em branco nas pontas (trim)
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // 1. Validação de preenchimento: Verifica se todos os campos estão preenchidos 
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return; // Interrompe a execução se houver campo vazio
        }

        // 2. Validação de E-mail: Certifica que o formato é válido (usuario@dominio.com) 
        // Utiliza uma Expressão Regular (Regex) simples para validar o padrão
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return; // Interrompe a execução se o e-mail for inválido
        }

        // 3. Simulação de envio e Mensagem de Confirmação 
        alert("Mensagem enviada com sucesso!");

        // 4. Limpeza: Limpa os campos do formulário após a simulação ser concluída 
        form.reset();
    });
});