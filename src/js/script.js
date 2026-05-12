// JOVI - CAMERA INTELIGENTE




// DECLARACOES DOS ELEMENTOS (DOM)


const loginSection      = document.getElementById('login-section');
const onboardingSection = document.getElementById('onboarding-section');
const modosSection      = document.getElementById('modos-section');
const cameraSection     = document.getElementById('camera-section');


const loginForm    = document.getElementById('loginForm');
const btnVoltar    = document.getElementById('btn-voltar');
const usuarioNome  = document.getElementById('usuario-nome');
const modoAtual    = document.getElementById('modo-atual');


// Slideshow
const dotsContainer  = document.getElementById('dots-container');
const btnNext        = document.getElementById('btn-next');
const btnPrev        = document.getElementById('btn-prev');


// Slide 1
const slideIconeTopo = document.getElementById('slide-icone-topo');
const slideTitulo    = document.getElementById('slide-titulo');
const slideDescricao = document.getElementById('slide-descricao');
const infoCardsGrid  = document.getElementById('info-cards-grid');
const slideDica      = document.getElementById('slide-dica');


// Slide 2
const slideQuando    = document.getElementById('slide-quando');
const slideSituacoes = document.getElementById('slide-situacoes');
const slideAviso     = document.getElementById('slide-aviso');


// Camera antes/depois
const videoAntes    = document.getElementById('video-antes');
const canvasAntes   = document.getElementById('canvas-antes');
const fotoAntes     = document.getElementById('foto-antes');
const btnFotoAntes  = document.getElementById('btn-foto-antes');


const videoDepois   = document.getElementById('video-depois');
const canvasDepois  = document.getElementById('canvas-depois');
const fotoDepois    = document.getElementById('foto-depois');
const btnFotoDepois = document.getElementById('btn-foto-depois');


const feedbackBalao = document.getElementById('feedback-balao');
const feedbackTexto = document.getElementById('feedback-texto');

// Scanner (modo documento)
const slideScanner     = document.getElementById('slide-scanner');
const videoScanner     = document.getElementById('video-scanner');
const canvasScanner    = document.getElementById('canvas-scanner');
const btnEscanear      = document.getElementById('btn-escanear');
const resultadoScanner = document.getElementById('resultado-scanner');

// DADOS DE CADA MODO




const modos = {
    automatico: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
        titulo: "Modo Automatico",
        descricao: "A camera analisa a cena em tempo real e ajusta automaticamente iluminacao, foco, balanco de branco e exposicao para entregar a melhor foto possivel.",
        cards: [
            { icon: "🎯", label: "Foco", valor: "Automatico" },
            { icon: "☀️", label: "Luz", valor: "Balanceada" },
            { icon: "⚡", label: "Velocidade", valor: "Instantanea" }
        ],
        dica: "💡 Ideal para quem esta comecando ou nao quer se preocupar com configuracoes tecnicas.",
        quando: "Perfeito para situacoes do dia a dia em que voce precisa de uma foto rapida e boa sem ajustes manuais.",
        situacoes: [
            "Momentos espontaneos e imprevistos",
            "Ambientes com boa iluminacao natural",
            "Fotos casuais com amigos e familia",
            "Quando nao ha tempo para configurar"
        ],
        aviso: "⚠️ Em ambientes com pouca luz, prefira o Modo Noturno para melhores resultados.",
        feedbackDepois: "✨ Modo Automatico ativo! Luz e cores equilibradas automaticamente."
    },
    retrato: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        titulo: "Modo Retrato",
        descricao: "Usa inteligencia artificial para identificar o rosto e aplicar desfoque progressivo no fundo, criando um efeito bokeh profissional.",
        cards: [
            { icon: "👁️", label: "IA facial", valor: "Ativada" },
            { icon: "🌫️", label: "Bokeh", valor: "Simulado" },
            { icon: "✨", label: "Pele", valor: "Suavizada" }
        ],
        dica: "💡 Mantenha entre 50cm e 1,5m de distancia do sujeito para o melhor efeito de desfoque.",
        quando: "Ideal para destacar pessoas, pets ou qualquer objeto que mereca ser o centro das atencoes.",
        situacoes: [
            "Selfies e fotos de perfil",
            "Fotos de pets e animais",
            "Retratos formais e informais",
            "Fotografar objetos com fundo baguncado"
        ],
        aviso: "⚠️ O efeito de desfoque e simulado por software — funciona melhor com fundos distantes.",
        feedbackDepois: "✨ Retrato ativado! Fundo desfocado para destacar o sujeito da foto."
    },
    paisagem: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l4-8 4 5 3-3 4 6H3z"></path><circle cx="18" cy="6" r="2"></circle></svg>',
        titulo: "Modo Paisagem",
        descricao: "Aumenta o campo de profundidade para que toda a cena fique nitida. Realca contraste e saturacao de cores naturais.",
        cards: [
            { icon: "🔭", label: "Profundidade", valor: "Total" },
            { icon: "🎨", label: "Cores", valor: "Vibrantes" },
            { icon: "🏔️", label: "Nitidez", valor: "Maxima" }
        ],
        dica: "💡 Fotografe no horario dourado (1h apos o nascer ou antes do por do sol) para cores incriveis.",
        quando: "Perfeito para capturar cenas amplas onde voce quer que todos os detalhes aparecam com nitidez.",
        situacoes: [
            "Natureza, montanhas e cachoeiras",
            "Cidades e skylines urbanos",
            "Praias, campos e florestas",
            "Fotos de viagem e turismo"
        ],
        aviso: "⚠️ Nao e ideal para sujeitos em movimento — o foco amplo pode nao acompanhar objetos rapidos.",
        feedbackDepois: "✨ Paisagem ativa! Nitidez, contraste e cores vivas em toda a cena."
    },
    noturno: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
        titulo: "Modo Noturno",
        descricao: "Combina multiplas exposicoes e aplica IA para reduzir ruido, clareando a cena sem usar flash e preservando as cores reais da noite.",
        cards: [
            { icon: "📸", label: "Exposicoes", valor: "Multiplas" },
            { icon: "🔕", label: "Flash", valor: "Desligado" },
            { icon: "🌃", label: "Ruido", valor: "Reduzido" }
        ],
        dica: "💡 Apoie o celular em uma superficie ou use as duas maos para evitar tremido durante a captura.",
        quando: "Essencial para fotografar em ambientes com pouca ou nenhuma luz artificial disponivel.",
        situacoes: [
            "Fotos noturnas de ruas e cidades",
            "Ambientes internos com luz baixa",
            "Festas e eventos com iluminacao fraca",
            "Ceu estrelado e paisagens noturnas"
        ],
        aviso: "⚠️ A camera leva alguns segundos para processar — mantenha o celular firme durante a captura.",
        feedbackDepois: "✨ Modo Noturno ativo! Mais luz coletada e ruido reduzido na cena."
    },
    comida: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
        titulo: "Modo Comida",
        descricao: "Ajusta saturacao, temperatura de cor e nitidez de texturas para realcar o apelo visual dos alimentos, tornando as cores mais quentes e vibrantes.",
        cards: [
            { icon: "🎨", label: "Saturacao", valor: "Alta" },
            { icon: "🌡️", label: "Tom", valor: "Quente" },
            { icon: "🔍", label: "Textura", valor: "Realcada" }
        ],
        dica: "💡 Fotografe de cima (vista superior) ou em 45 graus para destacar a apresentacao do prato.",
        quando: "Perfeito para registrar refeicoes bonitas e compartilhar nas redes sociais com impacto visual.",
        situacoes: [
            "Pratos de restaurantes e cafes",
            "Receitas feitas em casa",
            "Bebidas e sobremesas",
            "Conteudo para redes sociais"
        ],
        aviso: "⚠️ Evite usar flash direto — ele deixa a comida com aparencia artificial.",
        feedbackDepois: "✨ Modo Comida ativo! Cores saturadas e quentes, texturas em destaque."
    },
    macro: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>',
        titulo: "Super Perto",
        descricao: "Ativa o modo de foco proximo para capturar detalhes invisiveis a olho nu com nitidez extrema em objetos muito pequenos.",
        cards: [
            { icon: "📏", label: "Distancia", valor: "2 a 10cm" },
            { icon: "🔬", label: "Detalhe", valor: "Extremo" },
            { icon: "💡", label: "Foco", valor: "Manual/Auto" }
        ],
        dica: "💡 Aproxime devagar e espere o foco travar antes de fotografar — pequenos movimentos importam.",
        quando: "Ideal para revelar a beleza e complexidade de coisas pequenas que normalmente passam despercebidas.",
        situacoes: [
            "Flores, folhas e insetos",
            "Texturas de superficies e tecidos",
            "Detalhes de joias e objetos",
            "Fotografia cientifica e educacional"
        ],
        aviso: "⚠️ Profundidade de campo muito rasa — qualquer tremido borra a foto. Use apoio se possivel.",
        feedbackDepois: "✨ Macro ativo! Detalhes minusculos agora nitidos e visiveis na foto."
    },
    acao: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="6" r="2"></circle><path d="M10.5 10.5L8 21"></path><path d="M13.5 10.5l2.5 4-3 2"></path><path d="M7 14h4"></path></svg>',
        titulo: "Modo Acao",
        descricao: "Aumenta a velocidade do obturador ao maximo e ativa rastreamento de movimento para congelar cenas rapidas com nitidez total.",
        cards: [
            { icon: "⚡", label: "Obturador", valor: "Ultrarapido" },
            { icon: "🎯", label: "Rastreamento", valor: "Continuo" },
            { icon: "📷", label: "Rajada", valor: "Disponivel" }
        ],
        dica: "💡 Mantenha o dedo pressionado para ativar o modo rajada e nao perder o momento exato.",
        quando: "Essencial para qualquer situacao em que o sujeito esta se movendo rapidamente.",
        situacoes: [
            "Esportes e competicoes",
            "Criancas e pets brincando",
            "Carros, motos e ciclistas",
            "Danca e movimentos artisticos"
        ],
        aviso: "⚠️ Ambientes muito escuros podem comprometer a velocidade — combine com boa iluminacao.",
        feedbackDepois: "✨ Modo Acao ativo! Movimento congelado sem desfoque na imagem."
    },
    estudante: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
        titulo: "Modo Estudante",
        descricao: "Aumenta contraste e nitidez de textos, corrige perspectiva de paginas e lousas fotografadas em angulo, e remove sombras para leitura facil.",
        cards: [
            { icon: "📝", label: "Contraste", valor: "Reforcado" },
            { icon: "📐", label: "Perspectiva", valor: "Corrigida" },
            { icon: "🌑", label: "Sombras", valor: "Removidas" }
        ],
        dica: "💡 Fotografe o mais paralelo possivel a superficie — a correcao de perspectiva tem limites.",
        quando: "Perfeito para estudar e copiar conteudo sem precisar transcrever tudo a mao.",
        situacoes: [
            "Lousas e quadros brancos em aula",
            "Paginas de livros e apostilas",
            "Slides e projecoes",
            "Anotacoes e resumos de colegas"
        ],
        aviso: "⚠️ Garanta boa iluminacao — reflexos nas superficies podem dificultar a leitura.",
        feedbackDepois: "✨ Modo Estudante ativo! Texto nitido, contraste reforcado, sombras removidas."
    },
    documento: {
        icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
        titulo: "Modo Documento",
        descricao: "Combina captura de alta resolucao com reconhecimento optico de caracteres (OCR) para digitalizar documentos e extrair texto de forma editavel.",
        cards: [
            { icon: "🔍", label: "OCR", valor: "Ativado" },
            { icon: "⬛", label: "Filtro", valor: "P&B Alto" },
            { icon: "📋", label: "Texto", valor: "Extraivel" }
        ],
        dica: "💡 Use o slide Scanner (proximo) para extrair o texto do documento automaticamente.",
        quando: "Essencial para digitalizar documentos fisicos e tornar o conteudo pesquisavel e editavel.",
        situacoes: [
            "Contratos e formularios impressos",
            "Recibos e notas fiscais",
            "Textos de livros para copiar trechos",
            "Documentos de identidade e certidoes"
        ],
        aviso: "⚠️ O OCR funciona melhor com textos impressos nitidos — manuscritos tem precisao menor.",
        feedbackDepois: "✨ Documento ativo! Filtro P&B aplicado para maximo contraste na leitura.",
        temScanner: true
    }
};

// VARIAVEIS DE ESTADO
let slideAtual = 0;
let modoSelecionado = "";
let streamAntes = null;
let streamDepois = null;
let streamScanner = null;
let nomeUsuario = "";


// LOGIN




loginForm.addEventListener('submit', function(e) {
    e.preventDefault();


    const nome = document.getElementById('username').value;
    const rm   = document.getElementById('rm').value;


    if (nome.trim().length < 3) {
        alert("Por favor, insira um nome valido (minimo 3 caracteres).");
        return;
    }
    if (rm.length < 5) {
        alert("O RM deve ter pelo menos 5 digitos.");
        return;
    }


    nomeUsuario = nome.trim();
    alert("Bem-vindo, " + nomeUsuario + "! Vamos configurar sua experiencia.");


    mostrarSecao(onboardingSection);
    iniciarOnboarding();
});




// ONBOARDING




function iniciarOnboarding() {
    const frequencia = prompt("Com que frequencia voce usa a camera por dia? (Pouco / Medio / Muito)");


    if (frequencia) {
        alert("Entendido! Agora selecione seu principal uso da camera abaixo.");
    }


    const botoesOpcao = document.querySelectorAll('.opt-btn');
    botoesOpcao.forEach(function(botao) {
        botao.addEventListener('click', function() {
            alert("Perfil configurado! Explore todos os modos da Jovi.");
            mostrarSecao(modosSection);
            usuarioNome.innerText = "Ola, " + nomeUsuario + "!";
        });
    });
}