function configurarApp() {
    const userType = document.getElementById('user-type').value;
    const condition = document.getElementById('condition').value;
    const body = document.body;
    
    // 1. Esconder questionário e mostrar conteúdo
    document.getElementById('setup-container').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    // 2. Lógica de Personalização
    if (userType === 'idoso' || condition === 'baixa-visao') {
        body.classList.add('high-contrast');
        body.classList.add('big-text');
        document.getElementById('welcome-msg').innerText = "Olá! Suas letras agora estão maiores.";
    }

    if (condition === 'autismo') {
        body.classList.add('soft-mode');
        document.getElementById('welcome-msg').innerText = "Olá! Organizamos tudo de forma simples para você.";
        document.getElementById('routine-desc').innerText = "Horários com fotos e ícones ativados.";
    }

    if (condition === 'ansiedade') {
        body.classList.add('soft-mode');
        // Adicionaria um botão de respiração extra aqui
    }

    console.log(`Perfil configurado: ${userType} com condição ${condition}`);
}
