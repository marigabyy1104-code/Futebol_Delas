// Envolve tudo em uma função para não criar variáveis globais.
(function () {
  /* ATALHOS */

  // Atalhos para buscar elementos na página.
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  // Cria um elemento com classe e texto opcionais.
  const el = (tag, classe, texto) => {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto !== undefined) e.textContent = texto;
    return e;
  };

  /* DADOS DO SITE */

  const DATA = {
    // Linha do tempo: [rótulo da aba, título, texto]
    tl: [
      ["Séc. XX", "Início do século XX", "Partidas femininas ganharam atenção em vários lugares do mundo, mas muitas equipes enfrentavam resistência social e institucional."],
      ["1941", "1941 (Brasil)", "O Decreto-Lei nº 3.199 organizou o esporte nacional e seu artigo 54 foi usado para impedir que mulheres praticassem modalidades consideradas incompatíveis com sua natureza. A restrição foi regulamentada em 1965."],
      ["1979", "1979 (Brasil)", "A regulamentação que impedia mulheres de jogar futebol foi revogada. Isso não eliminou o preconceito nem garantiu estrutura para as equipes."],
      ["1988", "1988: torneio experimental", "A FIFA organizou na China um torneio internacional experimental, passo importante para a criação de uma competição mundial oficial."],
      ["1991", "1991: 1ª Copa do Mundo", "A primeira edição oficial da Copa do Mundo Feminina da FIFA foi realizada na China."],
      ["2007", "2007: Brasil na final", "A Seleção Brasileira foi vice-campeã mundial, com Marta como um dos grandes destaques."],
      ["2023", "2023: Copa ampliada", "Na Austrália e na Nova Zelândia, a Copa do Mundo Feminina teve pela primeira vez 32 seleções."],
      ["2027", "2027: Brasil anfitrião", "O Brasil está previsto para sediar a Copa do Mundo Feminina de 2027, um marco para a América do Sul."]
    ],

    // Jogadoras: [nome, país, posição, descrição]
    pl: [
      ["Marta", "Brasil", "Atacante / meia-atacante", "Nascida em Dois Riachos (AL), em 1986, é conhecida como Rainha Marta pela habilidade, velocidade e dribles. É a maior artilheira da história da Copa do Mundo Feminina, com 17 gols, em seis participações."],
      ["Formiga", "Brasil", "Volante / meio-campista", "Miraildes Maciel Mota nasceu em Salvador (BA), em 1978. Atuou em sete Copas do Mundo Feminina, recorde entre as jogadoras, e em sete edições dos Jogos Olímpicos."],
      ["Cristiane", "Brasil", "Atacante", "Nascida em Osasco (SP), em 1985, é uma das principais artilheiras da história da Seleção. Conhecida pela força física e pela finalização, disputou cinco Copas do Mundo."],
      ["Debinha", "Brasil", "Atacante", "Débora Cristiane de Oliveira é reconhecida pela velocidade, movimentação e habilidade no um contra um. Tem carreira no Brasil e no exterior e é presença importante na Seleção."],
      ["Alexia Putellas", "Espanha", "Meio-campista", "Nascida em Mollet del Vallès, em 1994, destacou-se no Barcelona pela visão de jogo e pelos passes. Foi eleita melhor jogadora do mundo pela Bola de Ouro em 2021 e 2022."],
      ["Aitana Bonmatí", "Espanha", "Meio-campista", "Nascida em Sant Pere de Ribes, em 1998, é conhecida pela inteligência tática e pelo controle de bola. Conquistou a Bola de Ouro feminina em 2023, 2024 e 2025."],
      ["Megan Rapinoe", "Estados Unidos", "Atacante / ponta", "Nascida em Redding (Califórnia), em 1985, destacou-se por cruzamentos e bolas paradas. Venceu Copas do Mundo, o prêmio The Best FIFA em 2019 e defendeu a igualdade de gênero."],
      ["Sam Kerr", "Austrália", "Atacante", "Nascida em East Fremantle, em 1993, é capitã e símbolo da seleção australiana, conhecida pela velocidade, impulsão e faro de gol."],
      ["Alex Morgan", "Estados Unidos", "Atacante", "Nascida em San Dimas (Califórnia), em 1989, foi campeã mundial em 2015 e 2019 com os Estados Unidos e participou de campanhas de divulgação do futebol feminino."]
    ],

    // Glossário: [termo, definição]
    gl: [
      ["Impedimento", "Posição irregular de uma atacante que está à frente da penúltima adversária no momento do passe."],
      ["Escanteio", "Cobrança feita do canto do campo quando a bola sai pela linha de fundo tocada por uma defensora."],
      ["Pênalti", "Cobrança direta contra a goleira após falta cometida dentro da grande área."],
      ["Artilheira", "Jogadora que marcou mais gols em uma competição ou na carreira."],
      ["Volante", "Meio-campista que protege a defesa e distribui o jogo."],
      ["Bola de Ouro", "Prêmio dado à melhor jogadora do mundo na temporada."],
      ["Seleção", "Equipe formada por jogadoras de um país para disputar torneios entre nações."],
      ["Base", "Categorias de formação de atletas, como sub-15 e sub-17."],
      ["Profissionalização", "Processo em que a atleta passa a ter contrato, salário e estrutura de trabalho."]
    ],

    // Quiz: [pergunta, alternativas, posição da alternativa correta]
    qz: [
      ["Em que ano foi a primeira Copa do Mundo Feminina da FIFA?", ["1979", "1991", "2007"], 1],
      ["Quantos gols Marta tem em Copas do Mundo Femininas?", ["12", "17", "23"], 1],
      ["Quantas seleções participaram da Copa de 2023?", ["16", "24", "32"], 2],
      ["Em que ano o futebol feminino entrou nos Jogos Olímpicos?", ["1996", "1980", "2004"], 0],
      ["Quantas Copas do Mundo Formiga disputou?", ["Cinco", "Seis", "Sete"], 2]
    ]
  };

  /* TEMA CLARO E ESCURO */

  const root = document.documentElement;

  // Recupera o tema salvo, se o navegador permitir.
  try {
    const salvo = localStorage.getItem("fd-theme");
    if (salvo) root.dataset.theme = salvo;
  } catch (e) {}

  // Alterna entre claro e escuro e salva a escolha.
  $("#th").onclick = () => {
    const novo = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = novo;
    try {
      localStorage.setItem("fd-theme", novo);
    } catch (e) {}
  };

  /* MENU MÓVEL */

  const mb = $("#mb");
  const nav = $("#nav");

  // Abre e fecha o menu e atualiza o atributo de acessibilidade.
  mb.onclick = () => mb.setAttribute("aria-expanded", nav.classList.toggle("open"));

  // Fecha o menu quando um link é clicado.
  nav.querySelectorAll("a").forEach((a) => {
    a.onclick = () => {
      nav.classList.remove("open");
      mb.setAttribute("aria-expanded", "false");
    };
  });

  /* BOLA EM SVG */

  const bl = $("#bl");
  const NS = "http://www.w3.org/2000/svg";

  // Cria uma forma SVG com os atributos recebidos e a adiciona à bola.
  const mk = (nome, atributos) => {
    const e = document.createElementNS(NS, nome);
    for (const k in atributos) e.setAttribute(k, atributos[k]);
    bl.appendChild(e);
    return e;
  };

  // Calcula a posição de um ponto do pentágono a partir do raio e do índice.
  const pt = (raio, i) => {
    const angulo = ((i * 72 - 90) * Math.PI) / 180;
    return [150 + raio * Math.cos(angulo), 150 + raio * Math.sin(angulo)];
  };

  // Contorno da bola.
  mk("circle", { cx: 150, cy: 150, r: 130, fill: "none", stroke: "var(--pk)", "stroke-width": 5 });

  // Pentágono central.
  mk("polygon", {
    points: [0, 1, 2, 3, 4].map((i) => pt(40, i).join(",")).join(" "),
    fill: "var(--pk)"
  });

  // Linhas e círculos que ligam o centro às bordas.
  [0, 1, 2, 3, 4].forEach((i) => {
    const a = pt(40, i);
    const o = pt(120, i);
    mk("line", { x1: a[0], y1: a[1], x2: o[0], y2: o[1], stroke: "var(--pk2)", "stroke-width": 3 });
    mk("circle", { cx: o[0], cy: o[1], r: 9, fill: "var(--pk2)" });
  });

  /* LINHA DO TEMPO */

  const tl = $("#tl");
  const tld = $("#tld");

  // Cria um botão de aba para cada período.
  const tb = DATA.tl.map((t, i) => {
    const b = el("button", "tab", t[0]);
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === 0);
    tl.appendChild(b);
    return b;
  });

  // Mostra o título e o texto do período escolhido.
  const showTl = (i) => tld.replaceChildren(el("strong", 0, DATA.tl[i][1]), el("p", 0, DATA.tl[i][2]));

  // Ao clicar numa aba, marca como selecionada e troca o conteúdo.
  tb.forEach((b, i) => {
    b.onclick = () => {
      tb.forEach((x) => x.setAttribute("aria-selected", x === b));
      showTl(i);
    };
  });
  showTl(0);

  /* JOGADORAS COM FILTRO POR PAÍS */

  const pf = $("#pf");
  const pg = $("#pg");
  const paises = ["Todas", ...new Set(DATA.pl.map((p) => p[1]))];

  // Desenha os cards das jogadoras do país escolhido (ou de todas).
  const drawP = (filtro) =>
    pg.replaceChildren(
      ...DATA.pl
        .filter((p) => filtro === "Todas" || p[1] === filtro)
        .map((p) => {
          const d = el("div", "card");
          d.append(el("h3", 0, p[0]), el("div", "ct", p[1]), el("span", "pos", p[2]), el("p", 0, p[3]));
          return d;
        })
    );

  // Cria um botão de filtro para cada país.
  const pb = paises.map((nome, i) => {
    const b = el("button", "tab", nome);
    b.setAttribute("aria-selected", i === 0);
    pf.appendChild(b);
    return b;
  });

  // Ao clicar num filtro, marca como selecionado e atualiza os cards.
  pb.forEach((b, i) => {
    b.onclick = () => {
      pb.forEach((x) => x.setAttribute("aria-selected", x === b));
      drawP(paises[i]);
    };
  });
  drawP("Todas");

  /* GLOSSÁRIO COM BUSCA */

  const gl = $("#gl");
  const gs = $("#gs");

  // Mostra os termos que combinam com o texto digitado.
  const drawG = (busca) => {
    const resultado = DATA.gl.filter((g) => (g[0] + g[1]).toLowerCase().includes(busca.toLowerCase()));

    gl.replaceChildren(
      ...(resultado.length
        ? resultado.map((g) => {
            const d = el("div", "card");
            d.append(el("h3", 0, g[0]), el("span", 0, g[1]));
            return d;
          })
        : [el("p", 0, "Nenhum termo encontrado. Tente outra palavra.")])
    );
  };

  // Atualiza a lista a cada letra digitada.
  gs.oninput = () => drawG(gs.value);
  drawG("");

  /* QUIZ */

  const qz = $("#qz");
  let qi = 0; // posição da pergunta atual
  let pts = 0; // pontos acumulados

  function quiz() {
    // Fim do quiz: mostra o resultado e o botão para refazer.
    if (qi >= DATA.qz.length) {
      qz.replaceChildren(
        el("h3", 0, `Você acertou ${pts} de ${DATA.qz.length}.`),
        el("p", 0, pts >= 4 ? "Ótimo! Você conhece bem o futebol feminino." : "Releia as seções e tente de novo.")
      );

      const refazer = el("button", "btn", "Refazer quiz");
      refazer.onclick = () => {
        qi = 0;
        pts = 0;
        quiz();
      };
      qz.appendChild(refazer);
      return;
    }

    // Mostra a pergunta atual.
    const q = DATA.qz[qi];
    qz.replaceChildren(el("p", 0, `Pergunta ${qi + 1} de ${DATA.qz.length}`), el("h3", 0, q[0]));

    // Cria um botão para cada alternativa.
    const opts = q[1].map((texto, i) => {
      const b = el("button", "opt", texto);

      b.onclick = () => {
        // Bloqueia as alternativas e destaca a correta.
        opts.forEach((o, j) => {
          o.disabled = true;
          if (j === q[2]) o.classList.add("ok");
        });

        // Soma ponto se acertou; marca em vermelho se errou.
        if (i === q[2]) pts++;
        else b.classList.add("no");

        // Mostra o botão para ir à próxima pergunta.
        const proxima = el("button", "btn", qi + 1 < DATA.qz.length ? "Próxima" : "Ver resultado");
        proxima.onclick = () => {
          qi++;
          quiz();
        };
        qz.appendChild(proxima);
        proxima.focus();
      };

      qz.appendChild(b);
      return b;
    });
  }
  quiz();

  /* ANIMAÇÃO DE ENTRADA */

  // Revela as seções quando aparecem na tela (ou de uma vez, se o navegador não suportar).
  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entradas) =>
            entradas.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
              }
            }),
          { threshold: 0.08 }
        )
      : null;

  $$(".rv").forEach((s) => (io ? io.observe(s) : s.classList.add("in")));

  /* BOTÃO DE VOLTAR AO TOPO E RODAPÉ */

  // Volta ao topo da página com rolagem suave.
  $("#top").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Preenche o ano atual no rodapé.
  $("#yr").textContent = new Date().getFullYear();
})();
