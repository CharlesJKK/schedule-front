    // Função para criar um card de agendamento
    function criarAgendamento(modalidade, hora, data) {
        if (!modalidade || !hora || !data) {
            alert('Por favor, preencha todos os campos antes de adicionar um agendamento.');
            return; // Não cria um agendamento vazio
        }

        const agendamentoCard = document.createElement('div');
        agendamentoCard.className = 'agendamento-card';

        const modalidadeElement = document.createElement('h2');
        modalidadeElement.textContent = `Modalidade: ${modalidade}`;

        const horaElement = document.createElement('p');
        horaElement.textContent = `Hora: ${hora}`;

        const dataElement = document.createElement('p');
        dataElement.textContent = `Data: ${data}`;

        const botaoAgendar = document.createElement('a');
        botaoAgendar.textContent = 'Consultar';
        botaoAgendar.href = 'javascript:void(0)'; // Evita a navegação para outra página
        botaoAgendar.className = 'botao-agendar'; // Aplicando a classe para o botão

        // Adicionando um evento de clique ao botão "Consultar"
        botaoAgendar.addEventListener('click', function () {
            // Exibir um popup de confirmação
            const confirmacao = `Agendamento confirmado para ${hora} em ${data}.`;
            alert(confirmacao);
        });

        agendamentoCard.appendChild(modalidadeElement);
        agendamentoCard.appendChild(horaElement);
        agendamentoCard.appendChild(dataElement);
        agendamentoCard.appendChild(botaoAgendar);

        document.getElementById('cards-container').appendChild(agendamentoCard);
    }

// Função para abrir um formulário ou modal para inserir os detalhes do agendamento
function adicionarAgendamento() {
    const modalidade = prompt('Modalidade de Esporte:');
    const hora = prompt('Hora do Agendamento:');
    const data = prompt('Data do Agendamento:');

    criarAgendamento(modalidade, hora, data);
}

// Evento para adicionar agendamento quando o botão é clicado
document.getElementById('adicionarAgendamento').addEventListener('click', adicionarAgendamento);
