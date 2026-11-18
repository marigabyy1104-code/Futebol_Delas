// ===== DADOS (edite aqui para mudar o conteúdo do site) =====
const historia = [
  {ano:"1921", titulo:"Proibição na Inglaterra", texto:"A federação inglesa proibiu times femininos de usar seus estádios, mesmo depois de partidas lotarem arquibancadas. A proibição durou 50 anos."},
  {ano:"1941", titulo:"Proibição no Brasil", texto:"Um decreto-lei proibiu mulheres de praticar esportes considerados inadequados para elas, incluindo o futebol. A regra só caiu em 1979, e a modalidade foi regulamentada em 1983."},
  {ano:"1991", titulo:"Primeira Copa do Mundo", texto:"A China sediou a primeira Copa do Mundo Feminina da FIFA. O Brasil participou, e os Estados Unidos foram campeões."},
  {ano:"1996", titulo:"Olimpíadas de Atlanta", texto:"O futebol feminino estreou nos Jogos Olímpicos, ganhando visibilidade mundial."},
  {ano:"2007", titulo:"Brasil vice-campeão mundial", texto:"Com Marta como craque do torneio, a seleção chegou à final da Copa do Mundo, na China."},
  {ano:"2013", titulo:"Brasileirão Feminino", texto:"Foi criado o campeonato brasileiro feminino, dando mais estrutura às jogadoras do país."},
  {ano:"2019", titulo:"Marta e o recorde", texto:"Na Copa da França, Marta se tornou a maior artilheira da história dos Mundiais, entre homens e mulheres."},
  {ano:"2023", titulo:"Espanha campeã do mundo", texto:"A Espanha conquistou seu primeiro título mundial, com Aitana Bonmatí eleita a melhor jogadora da Copa."},
  {ano:"2024", titulo:"Prata em Paris e Copa no Brasil", texto:"O Brasil conquistou a prata olímpica em Paris, e a FIFA escolheu o país para sediar a Copa do Mundo Feminina de 2027."}
];

const jogadoras = [
  {id:"marta", nome:"Marta", pais:"Brasil", grupo:"Brasil", resumo:"Seis vezes eleita a melhor do mundo e maior artilheira da história das Copas.",
   bio:"Nascida em Dois Riachos, no interior de Alagoas, Marta saiu de casa ainda adolescente para jogar no Vasco e depois na Suécia. Com dribles e gols decisivos, virou o maior símbolo do futebol feminino brasileiro e um dos maiores nomes do esporte no mundo.",
   conquistas:["Eleita seis vezes a melhor jogadora do mundo pela FIFA (2006 a 2010 e 2018)","Maior artilheira da história das Copas do Mundo, entre homens e mulheres","Vice-campeã mundial em 2007","Medalha de prata olímpica em 2004 e 2008"],
   clubes:["Vasco","Umeå IK (Suécia)","Santos","FC Rosengård (Suécia)","Orlando Pride (EUA)","Seleção Brasileira"]},
  {id:"formiga", nome:"Formiga", pais:"Brasil", grupo:"Brasil", resumo:"Símbolo de dedicação: disputou sete Copas do Mundo e sete Olimpíadas.",
   bio:"Miraildes Maciel Mota, a Formiga, nasceu em Salvador e foi lutando contra o preconceito que construiu a carreira. Meio-campista inteligente, esteve na seleção por mais de duas décadas e inspirou gerações pela longevidade e pela disciplina.",
   conquistas:["Sete Copas do Mundo disputadas (1995 a 2019)","Sete edições dos Jogos Olímpicos","Medalha de prata olímpica em 2004 e 2008"],
   clubes:["São Paulo","Paris Saint-Germain (França)","Seleção Brasileira"]},
  {id:"cristiane", nome:"Cristiane", pais:"Brasil", grupo:"Brasil", resumo:"Atacante veloz e goleadora, referência da seleção por muitos anos.",
   bio:"Cristiane Rozeira nasceu em Osasco e se destacou cedo pela velocidade e pelo faro de gol. Esteve entre as principais atacantes do Brasil nos anos 2000 e 2010 e jogou em clubes de vários países.",
   conquistas:["Medalha de prata olímpica em 2004 e 2008","Vice-campeã mundial em 2007","Gols decisivos pela seleção em Copas e Olimpíadas"],
   clubes:["Santos","Corinthians","Wolfsburg (Alemanha)","Chicago Red Stars (EUA)","Seleção Brasileira"]},
  {id:"alexia", nome:"Alexia Putellas", pais:"Espanha", grupo:"Internacional", resumo:"Capitã do Barcelona e duas vezes ganhadora da Bola de Ouro.",
   bio:"Nascida em Mollet del Vallès, na Catalunha, Alexia é meio-campista criativa e líder do Barcelona. Ajudou o clube a se tornar potência europeia e se transformou em um dos maiores rostos do futebol feminino mundial.",
   conquistas:["Bola de Ouro em 2021 e 2022","Campeã da Liga dos Campeões da UEFA em 2021 e 2023","Campeã mundial com a Espanha em 2023"],
   clubes:["Espanyol","Levante","Barcelona","Seleção Espanhola"]},
  {id:"aitana", nome:"Aitana Bonmatí", pais:"Espanha", grupo:"Internacional", resumo:"Craque da Espanha campeã mundial e vencedora da Bola de Ouro.",
   bio:"Nascida em Sant Pere de Ribes, Aitana cresceu nas categorias de base do Barcelona e se tornou uma das melhores meio-campistas do mundo, conhecida pela visão de jogo e pela intensidade.",
   conquistas:["Bola de Ouro em 2023 e 2024","Campeã mundial com a Espanha em 2023, eleita a melhor jogadora da Copa","Campeã da Liga dos Campeões da UEFA com o Barcelona"],
   clubes:["Barcelona","Seleção Espanhola"]},
  {id:"rapinoe", nome:"Megan Rapinoe", pais:"Estados Unidos", grupo:"Internacional", resumo:"Campeã mundial e voz ativa pela igualdade no esporte.",
   bio:"Megan Rapinoe nasceu em Redding, na Califórnia. Além dos gols e dos passes precisos, ficou conhecida por defender a igualdade salarial e os direitos das mulheres e da comunidade LGBTQIA+. Encerrou a carreira em 2023.",
   conquistas:["Campeã mundial em 2015 e 2019","Medalha de ouro olímpica em 2012","Bola de Ouro e melhor do mundo pela FIFA em 2019"],
   clubes:["Chicago Red Stars","Seattle Reign (OL Reign)","Olympique Lyonnais (França)","Seleção dos EUA"]},
  {id:"hamm", nome:"Mia Hamm", pais:"Estados Unidos", grupo:"Internacional", resumo:"Ícone dos anos 1990 que levou o futebol feminino às multidões.",
   bio:"Mia Hamm nasceu em Selma, no Alabama, e começou a brilhar na Universidade da Carolina do Norte. Nos anos 1990, tornou-se o rosto do futebol feminino nos EUA e inspirou uma geração inteira de meninas.",
   conquistas:["Campeã mundial em 1991 e 1999","Medalha de ouro olímpica em 1996 e 2004","Eleita duas vezes a melhor do mundo pela FIFA (2001 e 2002)"],
   clubes:["Universidade da Carolina do Norte","Washington Freedom","Seleção dos EUA"]}
];

const categorias = [
  {n:"Sub-11", t:"Primeiros passos", d:"Fase de descoberta. O foco é brincar com a bola, aprender fundamentos básicos e criar amor pelo esporte, em escolinhas e festivais."},
  {n:"Sub-13", t:"Aprendizado", d:"As atletas aprendem posicionamento, passe e trabalho em equipe, e começam a participar de torneios organizados."},
  {n:"Sub-15", t:"Formação", d:"Treinos mais estruturados e competições regionais. É quando muitas atletas passam a ser observadas por clubes."},
  {n:"Sub-17", t:"Transição", d:"Campeonatos estaduais e nacionais de base aproximam as meninas do ritmo do futebol profissional."},
  {n:"Sub-20", t:"Preparação para o profissional", d:"Última etapa antes do time principal. Muitas jogadoras de seleção passam por aqui, e o Brasileirão Feminino Sub-20 faz parte dessa vitrine."}
];

const curiosidades = [
  "O Brasil é o maior campeão da Copa América Feminina.",
  "Entre 1941 e 1979, o futebol feminino foi proibido por lei no Brasil.",
  "Marta é a maior artilheira da história das Copas do Mundo, somando homens e mulheres.",
  "Em 2022, mais de 91 mil pessoas lotaram o Camp Nou para ver o Barcelona feminino, recorde mundial de público.",
  "A Copa do Mundo Feminina de 2027 será a primeira disputada na América do Sul.",
  "O futebol feminino estreou nas Olimpíadas em 1996, em Atlanta.",
  "Formiga jogou sete Copas do Mundo, algo raríssimo no futebol."
];
const frases = ["Jogar bola é para todas.","Ninguém precisa pedir licença para sonhar.","Cada gol delas abre caminho para outras meninas.","Igualdade no esporte começa no campinho.","Quem joga com coragem já é campeã."];

const perguntas = [
  {p:"Qual jogadora foi eleita seis vezes a melhor do mundo pela FIFA?", o:["Formiga","Marta","Cristiane"], c:1},
  {p:"Por quanto tempo o futebol feminino foi proibido por lei no Brasil?", o:["De 1941 a 1979","De 1900 a 1920","De 1991 a 2007"], c:0},
  {p:"Em que ano o futebol feminino entrou nos Jogos Olímpicos?", o:["1984","1996","2008"], c:1},
  {p:"Qual país sediará a Copa do Mundo Feminina de 2027?", o:["Brasil","Japão","França"], c:0},
  {p:"Quantas Copas do Mundo a Formiga disputou?", o:["Três","Cinco","Sete"], c:2},
  {p:"Quem foi campeã da Copa do Mundo Feminina de 2023?", o:["Espanha","Estados Unidos","Brasil"], c:0},
  {p:"Qual jogadora ficou conhecida pela luta por igualdade salarial e ganhou a Bola de Ouro em 2019?", o:["Mia Hamm","Alexia Putellas","Megan Rapinoe"], c:2},
  {p:"Em que ano foi disputada a primeira Copa do Mundo Feminina?", o:["1991","1999","2007"], c:0}
];

// ===== MENU MOBILE =====
const menu = document.getElementById("menu");
const btnMenu = document.querySelector(".menu-btn");
btnMenu.addEventListener("click", () => btnMenu.setAttribute("aria-expanded", menu.classList.toggle("aberto")));
menu.addEventListener("click", e => { if (e.target.tagName === "A") menu.classList.remove("aberto"); });

// ===== LINHA DO TEMPO =====
const linha = document.getElementById("linha"), evento = document.getElementById("evento");
function mostraEvento(i) {
  const e = historia[i];
  evento.innerHTML = `<h3>${e.ano}: ${e.titulo}</h3><p>${e.texto}</p>`;
  linha.querySelectorAll("button").forEach((b, j) => b.setAttribute("aria-pressed", i === j));
}
historia.forEach((e, i) => {
  const b = document.createElement("button");
  b.textContent = e.ano;
  b.addEventListener("click", () => mostraEvento(i));
  linha.appendChild(b);
});
mostraEvento(0);

// ===== GALERIA DE JOGADORAS =====
const galeria = document.getElementById("galeria"), modal = document.getElementById("modal"), corpo = document.getElementById("m-corpo");
const iniciais = n => n.split(" ").map(p => p[0]).slice(0, 2).join("");
const foto = j => `<div class="foto"><b>${iniciais(j.nome)}</b><img src="imagens/${j.id}.jpg" alt="Foto de ${j.nome}" loading="lazy" onerror="this.remove()"></div>`;
function desenhaGaleria(filtro) {
  galeria.innerHTML = jogadoras.filter(j => filtro === "Todas" || j.grupo === filtro).map(j => `
    <article class="jog">${foto(j)}<div class="txt"><h3>${j.nome}</h3><p class="pais">${j.pais}</p><p>${j.resumo}</p>
    <button class="botao" data-id="${j.id}">Conheça a história</button></div></article>`).join("");
}
function abreModal(id) {
  const j = jogadoras.find(x => x.id === id);
  corpo.innerHTML = `${foto(j)}<div class="m-txt"><h3 id="m-nome">${j.nome}</h3><p class="pais">${j.pais}</p><p>${j.bio}</p>
    <h4>Principais conquistas</h4><ul>${j.conquistas.map(c => `<li>${c}</li>`).join("")}</ul>
    <h4>Clubes e seleções</h4><ul>${j.clubes.map(c => `<li>${c}</li>`).join("")}</ul></div>`;
  modal.showModal();
}
galeria.addEventListener("click", e => { const b = e.target.closest("[data-id]"); if (b) abreModal(b.dataset.id); });
document.getElementById("fechar").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
document.getElementById("filtros").addEventListener("click", e => {
  const b = e.target.closest("button[data-f]");
  if (!b) return;
  document.querySelectorAll("#filtros [data-f]").forEach(x => x.setAttribute("aria-pressed", x === b));
  desenhaGaleria(b.dataset.f);
});
document.getElementById("sorteia").addEventListener("click", () => abreModal(jogadoras[Math.floor(Math.random() * jogadoras.length)].id));
desenhaGaleria("Todas");

// ===== CATEGORIAS DE BASE =====
const cats = document.getElementById("cats"), catInfo = document.getElementById("cat-info");
function mostraCat(i) {
  const c = categorias[i];
  catInfo.innerHTML = `<h3>${c.n}: ${c.t}</h3><p>${c.d}</p>`;
  cats.querySelectorAll("button").forEach((b, k) => b.setAttribute("aria-pressed", i === k));
}
categorias.forEach((c, i) => {
  const b = document.createElement("button");
  b.textContent = c.n;
  b.addEventListener("click", () => mostraCat(i));
  cats.appendChild(b);
});
mostraCat(0);

// ===== VOCÊ SABIA? / FRASES =====
function sorteiaSem(lista, atual) {
  let t;
  do { t = lista[Math.floor(Math.random() * lista.length)]; } while (t === atual && lista.length > 1);
  return t;
}
const curioTxt = document.getElementById("curio-txt"), fraseTxt = document.getElementById("frase");
document.getElementById("curio-btn").addEventListener("click", () => { curioTxt.textContent = sorteiaSem(curiosidades, curioTxt.textContent); });
document.getElementById("frase-btn").addEventListener("click", () => { fraseTxt.textContent = sorteiaSem(frases, fraseTxt.textContent); });

// ===== QUIZ =====
const box = document.getElementById("quiz-box");
let atual = 0, pontos = 0;
function mostraPergunta() {
  if (atual >= perguntas.length) {
    const msg = pontos >= 7 ? "Você é craque em futebol feminino!" : pontos >= 4 ? "Muito bem! Explore o site e tente de novo." : "Boa tentativa! Releia o site e jogue outra vez.";
    box.innerHTML = `<p class="placar">${pontos}/${perguntas.length}</p><p class="retorno">${msg}</p><button class="botao" id="refaz">Jogar de novo</button>`;
    document.getElementById("refaz").addEventListener("click", () => { atual = 0; pontos = 0; mostraPergunta(); });
    return;
  }
  const q = perguntas[atual];
  box.innerHTML = `<p>Pergunta ${atual + 1} de ${perguntas.length}</p><h3>${q.p}</h3><div class="opcoes">${q.o.map((t, i) => `<button data-i="${i}">${t}</button>`).join("")}</div><p class="retorno" id="retorno"></p>`;
  box.querySelectorAll(".opcoes button").forEach(b => b.addEventListener("click", () => responde(Number(b.dataset.i))));
}
function responde(i) {
  const q = perguntas[atual], botoes = box.querySelectorAll(".opcoes button");
  botoes.forEach(b => b.disabled = true);
  botoes[q.c].classList.add("certa");
  if (i === q.c) { pontos++; document.getElementById("retorno").textContent = "Acertou!"; }
  else { botoes[i].classList.add("errada"); document.getElementById("retorno").textContent = "Não foi dessa vez."; }
  const prox = document.createElement("button");
  prox.className = "botao";
  prox.textContent = atual === perguntas.length - 1 ? "Ver resultado" : "Próxima";
  prox.addEventListener("click", () => { atual++; mostraPergunta(); });
  box.appendChild(prox);
}
mostraPergunta();
