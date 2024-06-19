const perguntas = [
    {
    enunciado: "oque mais gosta?",
    alternativas: [
    "salgado",
    "doce"
    ]
},
    {
    enunciado: "Qual vc prefere?",
    alternativas: [
    "pepsi",
    "Coca cola"
    ]
    },
    {
    enunciado: "onde mora?",
    alternativas: [
    "cidade",
    "campo"
    ]
    },
    {
    enunciado: "Vc prefere:?",
    alternativas: [
    "biscoito",
    "bolacha"
    ]
    
    },
    {
    enunciado: "Sobre animais, escolha um:",
    alternativas: [
    "ave",
    "peixe"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();