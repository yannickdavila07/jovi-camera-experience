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