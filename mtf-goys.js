const goysOperators = [
  {
    name: 'Lampião', position: 'À frente', role: 'Reconhecimento de acessos',
    staff: 'Fogo / Última Luz', color: 'Cristal vermelho',
    effect: 'Acende no ar o contorno de uma porta que já existiu no local. A equipe consegue ver até de que lado ficava a maçaneta.',
    limit: 'O contorno dura alguns segundos. Para voltar a abrir, a porta precisa do Volta a Fita.',
    habit: 'Desenha uma seta ao lado de cada porta encontrada. Nas portas falsas, desenha outra seta apontando de volta.'
  },
  {
    name: 'Corrente', position: 'À esquerda', role: 'Busca e escuta',
    staff: 'Vento / Tem Gente Aí', color: 'Cristal âmbar',
    effect: 'Traz ecos de cômodos que sumiram da planta. Também consegue separar um pedido de socorro do ruído ambiente quando o caminho muda de posição.',
    limit: 'O eco aponta para um cômodo, mas pode chegar atrasado. A equipe cruza o sinal com a contagem de pessoas antes de encerrar a busca.',
    habit: 'Pede que a pessoa diga o nome e uma coisa que só ela saberia. Já ouviu como resposta “minha senha do Wi-Fi” e teve que explicar de novo.'
  },
  {
    name: 'Rebobina', position: 'Ao fundo, com óculos na testa', role: 'Leitura de artefatos e rotas',
    staff: 'Raio / Volta a Fita', color: 'Cristal violeta',
    effect: 'Faz uma saída revelada pelo Última Luz voltar ao estado em que ainda abria. Às vezes as luzes e letreiros antigos acendem junto.',
    limit: 'O efeito se restringe ao acesso. Depois que a carga acaba, a passagem volta ao estado em que foi encontrada.',
    habit: 'Guarda catálogos e plantas em papel. Diz que documento oficial é o que ainda dá pra ler depois que o lugar engole o sinal.'
  },
  {
    name: 'Calço', position: 'À direita', role: 'Estabilização e retirada',
    staff: 'Gelo / Segura Aí', color: 'Cristal azul',
    effect: 'Suspende o fechamento de uma passagem anômala pelo tempo necessário para uma travessia curta ou para passar uma maca.',
    limit: 'A passagem volta a fechar quando o gelo se desfaz. O cajado estabiliza um acesso por vez.',
    habit: 'É quem fica junto à saída até a última conferência. No rádio, “só mais um minuto” é seguido de uma contagem em voz alta.'
  }
];

const goysSuitParts = [
  ['Capacete com viseira opaca', 'Cobre rosto e pescoço. A viseira reduz clarões repentinos quando o cenário muda e preserva a identidade da equipe.'],
  ['Colete acolchoado e arnês', 'Distribuem o peso do equipamento e dão à equipe um ponto de apoio para ajudar o operador numa travessia.'],
  ['Sinalizador de retorno', 'Marca a saída pelo lado da equipe. Se a luz sumir da vista, o operador confirma a rota pelo rádio antes de continuar.'],
  ['Luvas reforçadas', 'Protegem as mãos ao manusear cajados, artefatos e ferragens. Cada operador confere o próprio cajado pelo formato da empunhadura.'],
  ['Botas de expedição', 'Dão aderência em escadas, cascalho e pisos que voltam a aparecer molhados.']
];

function goysSuitIllustration() {
  const callouts = [
    [420, 108, 730, 105],
    [1120, 285, 815, 295],
    [400, 506, 650, 506],
    [1130, 540, 974, 514],
    [420, 890, 655, 904]
  ];
  return `<figure class="cell-plate">
    <div class="goys-traje" data-lightbox-scene>
      <a href="goys-traje.webp" aria-label="Ampliar imagem do traje"><img src="goys-traje.webp" width="1536" height="1024" alt="Traje oliva com ferragens douradas, viseira opaca e sinalizador laranja." loading="lazy"></a>
      <svg viewBox="0 0 1536 1024" aria-hidden="true">
        ${callouts.map(([x, y, endX, endY], index) => {
          const angle = Math.atan2(endY - y, endX - x) * 180 / Math.PI;
          return `<g>
           <path d="M${x} ${y}L${endX} ${endY}" fill="none" stroke="#2a201c" stroke-width="9"/>
           <path d="M${x} ${y}L${endX} ${endY}" fill="none" stroke="#f5d18b" stroke-width="4"/>
           <path d="M-19 -9L0 0L-19 9Z" fill="#f5d18b" transform="translate(${endX} ${endY}) rotate(${angle})"/>
           <circle cx="${x}" cy="${y}" r="28" fill="#211a16" stroke="#f5d18b" stroke-width="4"/>
           <text x="${x}" y="${y}" fill="#fff3d8" text-anchor="middle" dominant-baseline="central" font-family="monospace" font-size="30">${index + 1}</text>
        </g>`; }).join('')}
      </svg>
    </div>
    <figcaption>PRANCHA DO TRAJE / Os números correspondem às peças abaixo.</figcaption>
  </figure>`;
}

function goysEquipment() {
  return `<section>
    <h2 id="goys-traje">02 / Traje de expedição</h2>
    <p>O uniforme é usado nas incursões da MTF-04. A equipe mantém o rosto coberto em serviço e usa a mesma base oliva com ferragens douradas do pôster de cadastro.</p>
    ${goysSuitIllustration()}
    <ol class="goys-pecas">${goysSuitParts.map(([name, effect]) => `<li><b>${name}</b> — ${effect}</li>`).join('')}</ol>
    <h2>03 / Material de apoio</h2>
    <figure class="cell-interior"><a href="goys-apoio.webp" aria-label="Ampliar equipamento de apoio"><img src="goys-apoio.webp" width="1536" height="1024" alt="Carretel de cordão no alto à esquerda, sinalizador laranja à direita, pasta de mapas e maca dobrável abaixo." loading="lazy"></a><figcaption>MATERIAL DE APOIO / Acervo da MTF-04.</figcaption></figure>
    <div class="cell-notes">
      <div><h3>Cordão de levantamento</h3><p>Marca o caminho percorrido. Se reaparecer do lado errado de uma porta, a equipe registra que o lugar mudou.</p></div>
      <div><h3>Sinalizador de retorno</h3><p>Fica no ponto de saída ou preso ao arnês. A luz ajuda o último operador a localizar a passagem.</p></div>
      <div><h3>Pasta de plantas em papel</h3><p>Guarda os desenhos de antes e depois das reformas. Rebobina usa as versões antigas para comparar com os acessos revelados pelo Fogo.</p></div>
      <div><h3>Maca dobrável</h3><p>Serve para transportar quem precisa sair deitado. Calço mantém a passagem firme durante a travessia.</p></div>
    </div>
  </section>`;
}

function goysCard() {
  return `<a class="file-card" href="#mtf-04">
    <div class="file-photo"><img src="mtf-goys.webp" alt="Pôster dos quatro operadores dos GOYS em uma escavação" loading="lazy"></div>
    <div class="card-body"><div class="card-id">FORÇA-TAREFA MÓVEL 04</div><h2>GOYS / Pós-Créditos</h2>
    <span class="tag">EXPEDIÇÕES ANÔMALAS</span><p>Exploram lugares onde o mapa parou de funcionar. Voltam com quem ficou preso, o que conseguiram recuperar e um relatório que costuma ter um nome a mais.</p>
    <span class="file-link">ABRIR FICHA DA EQUIPE ↗</span></div>
  </a>`;
}

function goysDossier() {
  return `${crumb('FORÇAS-TAREFA / MTF-04')}<article>
    <div class="dossier-top"><div><div class="eyebrow">FORÇA-TAREFA MÓVEL / 04</div>
    <h1>GOYS<br>Pós-Créditos</h1>
    <span class="tag red">EXPEDIÇÕES ANÔMALAS</span> <span class="tag">QUATRO OPERADORES</span>
    <p>Enviados a escavações, edifícios e passagens onde ninguém consegue garantir que o caminho de volta ainda esteja lá.</p>
    <p><a class="file-link" href="#inc-044">INC-044 / A SESSÃO JÁ ACABOU ↗</a></p></div>
    <figure class="portrait"><img src="mtf-goys.webp" width="1254" height="1254" alt="Arte em estilo de pôster com quatro GOYS e equipamento dourado numa escavação"><figcaption>PÔSTER DA EQUIPE / Paródia visual de Origins, de Call of Duty Zombies. A equipe entregou o próprio pôster como foto de cadastro.</figcaption></figure></div>
    <h2>01 / Quando chamar os GOYS</h2>
    <p>A MTF-04 explora espaços cuja geometria, passagem do tempo ou meio de acesso mudou. A missão pode ser mapear um novo trecho, recuperar um artefato ou encontrar uma equipe desaparecida. O relatório começa pelo caminho de saída. Se o caminho sumir, os quatro trabalham juntos para recuperar um acesso antigo.</p>
    <p>Os <a href="#resenhinhos">Resenhinhos</a> podem assumir o perímetro e receber os resgatados. O <a href="#mtf-10">Décimo</a> cuida de capturas externas e transporte. O <a href="#mtf-13">Pacto</a> entra em confrontos com ameaças de grande porte. A MTF-04 responde pelo trecho que só existe do outro lado.</p>
    ${goysEquipment()}
    <h2>04 / Operadores e cajados elementais</h2>
    <p>Os quatro cajados têm corpo dourado e cristais de cores diferentes. Cada um cobre uma parte da expedição, da primeira escuta à última travessia.</p>
    <figure class="cell-interior"><a href="goys-cajados.webp" aria-label="Ampliar os quatro cajados"><img src="goys-cajados.webp" width="1536" height="1024" alt="Cajados de latão com cristais vermelho, âmbar, violeta e azul." loading="lazy"></a><figcaption>ARSENAL DA MTF-04 / Da esquerda para a direita, Fogo, Vento, Raio e Gelo.</figcaption></figure>
    <div class="cell-notes">${goysOperators.map(operator => `<div>
      <div class="eyebrow">${operator.position} · ${operator.role}</div>
      <h3>${operator.name} / ${operator.staff}</h3>
      <p><b>${operator.color}</b> — ${operator.effect}</p>
      <p><b>Limite</b> — ${operator.limit}</p>
      <p>${operator.habit}</p>
    </div>`).join('')}</div>
    <h2>05 / Quando sobem os créditos</h2>
    <p>Corrente localiza as pessoas pelo eco. Lampião revela uma passagem antiga, Rebobina restaura a abertura e Calço a mantém firme. Quando os quatro sincronizam os cajados, os créditos começam a correr na parede mais próxima. A saída permanece aberta até a última linha passar.</p>
    <p>Em operação, a equipe confere a lista de entrada, as pessoas que atravessaram e as linhas que apareceram na parede. Uma assinatura sem confirmação vira pendência de busca. A origem dos nomes e a relação entre o tamanho da lista e o tempo de abertura seguem em estudo.</p>
    <blockquote><b>Central</b> — Quatro assinaturas de entrada, quatro de retorno. Pode encerrar.<br><b>Calço</b> — Tem uma quinta no rodapé.<br><b>Central</b> — Qual o nome?<br><b>Calço</b> — Apoio de Cabine. E tá reclamando que ninguém avisou do fim da sessão.</blockquote>
    <h2>06 / Histórico operacional</h2>
    <p>No primeiro chamado documentado, a equipe entrou num cinema desativado cuja sessão recomeçava toda vez que alguém tentava sair pela porta principal. Sete visitantes voltaram à rua. Uma oitava linha nos créditos levou a equipe de volta à cabine.</p>
    <p><a class="file-link" href="#inc-044">LER O RELATÓRIO DA EXPEDIÇÃO ↗</a> · <a class="file-link" href="#linha-do-tempo">LINHA DO TEMPO ↗</a></p>
    ${goysOperationalHistory()}
    ${griloCaseLink()}
    ${mtfOperationsSection("mtf-04")}
    <h2>07 / Registro de convivência</h2>
    <p>Depois do INC-046, Joana encontrou um formulário de devolução no almoxarifado com cinco linhas de assinatura. As quatro primeiras estavam preenchidas pelos GOYS. A quinta tinha sido acrescentada à mão.</p>
    <blockquote><b>Dra. Joana</b> — Quem é o quinto responsável?<br><b>Rebobina</b> — O almoxarife.<br><b>Dra. Joana</b> — E por que na linha dele tá escrito “figurante”?<br><b>Calço</b> — Porque ele ainda não devolveu nossa maca.</blockquote>
    <div class="document-end">FIM DA FICHA / MTF-04 · <a href="#ftms">VOLTAR ÀS FORÇAS-TAREFA ↑</a></div>
  </article>`;
}

incidentReports.push({
  id: 'INC-044',
  title: 'A sessão já acabou',
  scope: 'externo',
  location: 'Cinema Santa Fita, estabelecimento fictício no interior de Minas Gerais',
  period: 'Primeira expedição documentada da MTF-04',
  status: 'ENCERRADO / LOCAL INTERDITADO PARA INVESTIGAÇÃO',
  people: [['GOYS / MTF-04', 'mtf-04'], ['Resenhinhos / perímetro', 'resenhinhos'], ['Camera Man / arquivo de imagens', 'camera-man']],
  summary: 'Sete visitantes desapareceram num cinema fechado. A porta principal levava de volta à plateia toda vez que o filme recomeçava. A MTF-04 entrou para localizar o grupo e testar se ainda restava uma saída de serviço.',
  sequence: 'Corrente ouviu os visitantes atrás de uma parede que correspondia à plateia numa planta antiga. Lampião revelou a saída de serviço, emparedada durante uma reforma, e Rebobina restaurou a porta. Calço firmou a passagem e os quatro sincronizaram os cajados para manter a saída aberta. Depois que o sétimo visitante chegou aos Resenhinhos, a equipe conferiu os créditos. A oitava linha dizia “Projecionista”.',
  rescueStages: [
    ['Retorno à cabine', 'A equipe voltou pelo corredor lateral. Na cabine, uma pessoa rebobinava uma fita e dizia que só podia sair depois do último quadro. Rebobina segurou o carretel enquanto o projecionista fechava a lata. Os dois chegaram à rua juntos.'],
    ['Conferência do registro', 'Camera Man comparou a contagem com as imagens do corredor. O projecionista atravessou com a lata. Na revisão posterior do vídeo, a cabine estava vazia mesmo quando o filme recomeçou.']
  ],
  dialogue: [
    ['Central', 'Sete visitantes do lado de fora. Qual é a pendência?'],
    ['Corrente', 'O senhor da cabine diz que precisa rebobinar.'],
    ['Calço', 'Fala que a multa por atraso já prescreveu.'],
    ['Rebobina', 'Tarde. Já me entregou a manivela.']
  ],
  outcome: 'Os sete visitantes e o projecionista chegaram ao lado de fora, sem feridos registrados. A identidade do projecionista e a origem da fita ficaram em investigação. O cinema foi interditado. A equipe guardou a gravação da oitava linha como parte do relatório.'
});

timelineThreads.push({
  title: 'GOYS e a sessão que recomeçava',
  people: ['Camera Man'],
  groups: ['GOYS (MTF-04)', 'Resenhinhos (MTF-R)'],
  events: [
    { when: 'Primeira expedição documentada', title: 'Sete visitantes presos na sessão', text: 'A MTF-04 localiza a plateia e recupera uma antiga saída de serviço.', links: [['inc-044', 'Relatório INC-044']] },
    { when: 'Durante a conferência da saída', title: 'O oitavo nome', text: 'Os créditos listam o projecionista. A equipe volta à cabine e o acompanha até a rua.', links: [['mtf-04', 'Ficha da MTF-04'], ['inc-044', 'Registro do resgate']] }
  ]
});
