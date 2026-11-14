const goysExpeditions = [
  {
    id: 'INC-045',
    title: 'O corredor que trocava de andar',
    scope: 'interno',
    location: 'BR-67 / anexo desativado de manutenção',
    period: 'Primeira resposta conjunta registrada da MTF-04 com Ferro-Vivo',
    status: 'ENCERRADO / ANEXO INTERDITADO',
    people: [['GOYS / MTF-04', 'mtf-04'], ['Ferro-Vivo / telemetria', 'scp-8080'], ['Resenhinhos / perímetro', 'resenhinhos']],
    summary: 'Uma porta do anexo passou a devolver a equipe de manutenção a andares diferentes. Dois funcionários ficaram presos numa copa entre o segundo e o terceiro pavimento.',
    failure: 'A planta atual mostrava uma escada no fim do corredor. A câmera de serviço mostrava uma copa no mesmo ponto. Na primeira busca, os GOYS ouviram o mesmo pedido de ajuda duas vezes e quase contaram três pessoas.',
    sequence: 'Ferro-Vivo comparou os horários dos cartões de acesso com os ecos recolhidos por Corrente. Os dois pedidos vinham da mesma pessoa, com atraso. Lampião encontrou o contorno de uma escada de serviço numa planta antiga. Rebobina restaurou a porta e Calço manteve o acesso aberto enquanto os dois funcionários desciam. Os Resenhinhos receberam a equipe no térreo.',
    dialogue: [['Ferro-Vivo', 'O sensor diz terceiro andar.'], ['Corrente', 'A moça diz que tá na copa do segundo.'], ['Funcionária pelo rádio', 'Se alguém achar o café, era pra estar no térreo.'], ['Rebobina', 'Pronto. Temos três testemunhas e quatro prédios.']],
    outcome: 'Os dois funcionários foram retirados, um com torção leve no tornozelo após uma queda anterior ao resgate. A equipe interditou o anexo. No debriefing, os GOYS passaram a conferir ecos com um registro independente antes de tratar cada voz como uma pessoa.'
  },
  {
    id: 'INC-046',
    title: 'Entrega no subsolo zero',
    scope: 'externo',
    location: 'Escavação fictícia do Armazém da Várzea / interior de São Paulo',
    period: 'Expedição de reconhecimento e recuperação de artefato',
    status: 'ENCERRADO / ARTEFATO EM ANÁLISE',
    people: [['GOYS / MTF-04', 'mtf-04'], ['Dra. Joana / análise de campo', 'dr-joana'], ['Décimo Batalhão / transporte', 'mtf-10']],
    summary: 'Um elevador de carga desativado começou a devolver ao térreo caixas vazias com recibos do dia seguinte. A MTF-04 desceu para localizar a origem das entregas e recuperar uma peça da máquina para análise.',
    failure: 'O mapa de obra terminava no subsolo um. Durante a descida, o painel passou a indicar zero. A equipe encontrou um depósito sob o nível documentado, com uma bancada, uma campainha e um livro de recebimento aberto.',
    sequence: 'Corrente ouviu a campainha pela parede e localizou o balcão. Lampião revelou a porta lateral de um antigo monta-carga. Joana pediu que a equipe recolhesse apenas o livro e deixasse as caixas onde estavam. Quando o elevador sumiu do corredor, Rebobina restaurou a porta lateral. Calço firmou a passagem e os quatro sincronizaram os cajados para a retirada.',
    rescueStages: [
      ['A retirada', 'Os quatro atravessaram com o livro. A parede exibiu os nomes da equipe e uma quinta linha, “recebido por”. A câmera registrou o balcão vazio. Corrente repetiu a escuta e só encontrou a campainha, com o mesmo intervalo a cada toque.'],
      ['A custódia', 'O Décimo recebeu o livro no perímetro e o transportou para a BR-67. Joana comparou as assinaturas do livro com as do relatório de entrada. As quatro correspondiam. A quinta aparecia apenas nos créditos.']
    ],
    dialogue: [['Dra. Joana', 'Coletem o livro. Deixem as caixas onde estão.'], ['Lampião', 'Tem uma no meu nome.'], ['Dra. Joana', 'Qual a data?'], ['Lampião', 'Amanhã.'], ['Calço', 'Então amanhã você reclama que não recebeu.']],
    outcome: 'Todos voltaram sem ferimentos. O livro permanece em análise e o elevador foi isolado. A quinta linha segue em investigação. A contagem de entrada e saída ficou em quatro, com as imagens e a escuta arquivadas junto ao relatório.'
  },
  {
    id: 'INC-047',
    title: 'A segunda chamada da saideira',
    scope: 'interno',
    location: 'BR-67 / sala de reabertura do SCP-0672',
    period: 'Após a recuperação do Dr. Valença',
    status: 'ENCERRADO / ENSAIO DE RESGATE',
    people: [['GOYS / MTF-04', 'mtf-04'], ['SCP-0672-A e SCP-0672-B', 'scp-0672'], ['Camera Man / operação remota', 'camera-man'], ['Dr. Bovas / coordenação', 'dr-bovas']],
    summary: 'Os GOYS participaram de um ensaio para medir se o cajado de Gelo poderia ganhar tempo para recuperar a plataforma do SCP-0672. A dupla abriu o portal sob supervisão. A plataforma levava um manequim.',
    sequence: 'Todos permaneceram do lado da BR-67. Camera Man conduziu a plataforma até uma marca visível na soleira. Quando o batente começou a oscilar, Calço sustentou a abertura por seis segundos adicionais, medidos na gravação. A plataforma voltou antes de a porta desaparecer. Corrente tentou localizar o bar pelo eco e recebeu o mesmo anúncio três vezes. A equipe registrou o áudio como pista inconclusiva.',
    dialogue: [['Bovas', 'Boneco na plataforma. Alguém ouviu a hora em que vai acabar?'], ['0672-B', 'O DJ falou última música.'], ['Camera Man', 'Ele falou isso na terça passada.'], ['0672-A', 'Então ele tá sendo consistente.']],
    outcome: 'A plataforma e o manequim foram recuperados. Nenhuma pessoa atravessou. Os seis segundos valem para essa abertura, e o efeito sobre uma abertura futura continua incerto. A separação das alas e o resgate remoto seguem como procedimento da unidade.'
  }
];

incidentReports.push(...goysExpeditions);

function goysOperationalHistory() {
  return `<div class="cell-notes">${goysExpeditions.map(expedition => `<div>
    <div class="eyebrow">${expedition.id}</div><h3>${expedition.title}</h3>
    <p>${expedition.summary}</p>
    <p><a class="file-link" href="#${expedition.id.toLowerCase()}">ABRIR RELATÓRIO ↗</a></p>
  </div>`).join('')}</div>
  <p><a class="file-link" href="#cron-046">LER A CRÔNICA O QUINTO RECIBO ↗</a></p>`;
}

function goysRelatedReports(route) {
  const reports = goysExpeditions.filter(expedition => expedition.people.some(([, participant]) => participant === route));
  if (!reports.length) return '';
  return `<section class="entity-conduct"><h2>Operações com os GOYS</h2><ul>${reports.map(report => `<li><a class="file-link" href="#${report.id.toLowerCase()}">${report.id} / ${report.title} ↗</a></li>`).join('')}</ul></section>`;
}

timelineThreads.push({
  title: 'As primeiras expedições dos GOYS',
  people: ['Ferro-Vivo', 'Dra. Joana', 'Camera Man', 'Dr. Bovas', 'SCP-0672 / Só Mais Uma'],
  groups: ['GOYS (MTF-04)', 'Resenhinhos (MTF-R)', 'Décimo Batalhão (MTF-10)'],
  events: goysExpeditions.map((expedition, index) => ({
    when: ['Depois da expedição ao cinema', 'Na expedição seguinte', 'Depois da recuperação de Valença'][index],
    title: expedition.title,
    text: expedition.summary,
    links: [[expedition.id.toLowerCase(), 'Relatório ' + expedition.id]]
  }))
});

chronicleRecords.push({
  id: '046',
  title: 'O quinto recibo',
  subtitle: 'Quatro operadores descem atrás de um livro. O depósito já deixou uma entrega no nome de um deles.',
  kind: 'reconstrucao',
  topic: 'operacoes',
  incident: 'INC-046',
  group: 'externo',
  category: 'Operações',
  cover: 'mtf-goys.webp',
  coverAlt: 'Pôster dos quatro operadores dos GOYS',
  coverCaption: 'Pôster de cadastro da MTF-04.',
  reading: '3 min de leitura',
  summary: 'Numa escavação fechada, os GOYS encontram um depósito fora da planta. A Dra. Joana quer o livro de recebimento. O depósito parece querer uma assinatura.',
  notice: 'Reconstrução literária do INC-046, a partir das gravações e dos depoimentos da equipe.',
  chapters: [
    {
      title: 'I — Subsolo zero',
      paras: [
        'O elevador tinha dois botões e três andares. Rebobina constatou isso quando o mostrador passou pelo subsolo um e, em vez de parar, acendeu um zero na altura dos joelhos. Calço anotou o número na planta. Embaixo dele, escreveu “favor confirmar”.',
        'Joana pediu pelo rádio que descrevessem o que viam. Lampião começou pelas caixas. Eram sete, empilhadas atrás de um balcão com uma campainha. Na de cima, seu indicativo vinha digitado em tinta azul. Estava com data de amanhã. Ele leu de novo, agora em voz baixa. O rádio ouviu mesmo assim.'
      ]
    },
    {
      title: 'II — O livro',
      paras: [
        'Corrente ergueu o cajado. A campainha tilintou do outro lado da parede, depois veio um eco curto do balcão à frente. Ele pediu que os outros esperassem pelo segundo toque. Veio igual ao primeiro, com o mesmo arranhado no fim. Sobre o balcão havia um livro aberto. A coluna de destinatário estava preenchida. A de assinatura ainda estava em branco.',
        '— Posso pelo menos ver o que tem na caixa? — perguntou Lampião. Joana repetiu a ordem com a calma que reservava para as perguntas que já tinham resposta. Coletassem o livro. Deixassem as caixas. Quando Lampião voltou para o corredor, havia uma parede no lugar em que o elevador deveria estar.',
        'Calço dobrou a planta no vinco do subsolo um. Atrás dele, o fogo do cajado desenhou um retângulo baixo na parede. A marca iluminou uma dobradiça que a tinta atual escondia. Rebobina reconheceu a porta do antigo monta-carga pelo desenho amarelado, abaixo do dedo de Calço.'
      ]
    },
    {
      title: 'III — Recebido por',
      paras: [
        'O letreiro de saída acendeu primeiro. Depois a maçaneta voltou a girar. O gelo de Calço segurou a passagem enquanto os quatro cajados entravam no mesmo compasso. Do lado da rua, o Décimo esperava junto à porta de serviço. Lampião saiu com o livro abraçado ao peito. Calço veio por último.',
        'Os nomes correram pela parede, um por operador. Quando a quarta linha passou, Corrente já estava baixando o cajado. Uma quinta subiu devagar. Dizia “recebido por” e deixava espaço para o resto. Ele prestou atenção até o fim. Lá de dentro veio só o mesmo toque curto da campainha.',
        'O oficial do Décimo recebeu o livro e estendeu o formulário de custódia. Lampião olhou para o campo “recebido por”. Depois olhou de volta para a porta que já não abria. Pediu que Joana assinasse primeiro.'
      ]
    }
  ]
});
chronicleByIncident['INC-046'] = chronicleRecords.at(-1);
