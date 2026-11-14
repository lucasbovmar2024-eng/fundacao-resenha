const containment0672Plans = [
  {
    title: 'Plano A — Rotina de alas separadas',
    trigger: 'Rotina, atendimento ou deslocamento programado.',
    owner: 'Equipes das alas A e B e supervisor de plantão.',
    steps: [
      'Cada indivíduo usa o quarto, a área de convivência e a saída da própria ala. O contato entre eles acontece pelo interfone.',
      'Quando houver deslocamento pelo trecho de serviço, o supervisor libera uma ala por vez e recebe confirmação de chegada antes de liberar a outra.',
      'Em evacuações, A segue para o ponto Oeste e B para o ponto Leste. Cada equipe confirma a chegada pelo rádio.'
    ],
    close: 'Localização dos dois confirmada no fim do deslocamento.',
    fallback: 'Se a posição de um deles estiver incerta, suspender o trânsito compartilhado e verificar as alas. Se uma porta anômala surgir, iniciar o Plano B.'
  },
  {
    title: 'Plano B — Abertura imprevista',
    trigger: 'Aparecimento de uma porta anômala na BR-67.',
    owner: 'Contenção local e Central de Monitoramento.',
    steps: [
      'Isolar o corredor do lado da Fundação e conduzir a dupla às alas por percursos distintos.',
      'Conferir a lista de presença e revisar o enquadramento da soleira. Tratar travessia duvidosa como desaparecimento até localizar a pessoa.',
      'Registrar a duração da abertura e preservar a gravação para o plantão seguinte.'
    ],
    close: 'Porta fechada e todas as pessoas localizadas.',
    fallback: 'Se alguém estiver do outro lado, iniciar o Plano C mesmo depois de a porta desaparecer.'
  },
  {
    title: 'Plano C — Reabertura e retirada',
    trigger: 'Travessia confirmada ou pessoa ainda desaparecida após a conferência.',
    owner: 'Coordenação científica, operador remoto e enfermaria.',
    steps: [
      'Esvaziar a sala de reabertura. Preparar câmera, plataforma de resgate, alto-falante e equipe clínica do lado da Fundação.',
      'Autorizar um aperto de mão supervisionado. Localizar a pessoa pela câmera e conduzi-la ao assento com instruções simples.',
      'Retirar a plataforma, conferir a identidade da pessoa e encaminhá-la à enfermaria. A e B regressam por acessos separados.'
    ],
    close: 'Pessoa entregue à enfermaria e dupla de volta às alas.',
    fallback: 'Se a passagem fechar, guardar a última posição registrada e planejar nova abertura supervisionada. A equipe permanece do lado da Fundação.'
  },
  {
    title: 'Plano D — Acompanhamento pós-resgate',
    trigger: 'Retorno de qualquer pessoa que tenha atravessado.',
    owner: 'Enfermaria e equipe de pesquisa.',
    steps: [
      'Registrar o estado físico e a frequência dos pedidos para retornar.',
      'Reavaliar a vontade de voltar em ambiente afastado da sala de reabertura. Fazer entrevistas breves à medida que a pessoa se recupera.',
      'A equipe clínica decide quando liberar o retorno ao trabalho. O INC-043 serve como referência para acompanhamento.'
    ],
    close: 'Alta clínica e registro do desfecho.',
    fallback: 'Se a vontade de voltar persistir, prolongar o acompanhamento e manter o acesso à sala suspenso para a pessoa.'
  }
];

function containment0672(inDossier = false) {
  return `<section class="containment-unit" id="cela-0672">
    <div class="eyebrow">ARQUITETURA DE CONTENÇÃO / SCP-0672</div>
    <h2>Alas separadas e sala de reabertura</h2>
    <p>O protocolo se apoia na separação física. As duas alas têm rotas próprias, e os únicos encontros autorizados acontecem na sala de reabertura, com a equipe posicionada para resgate.</p>
    <figure class="cell-interior"><a href="cela-0672-ocupada.webp" aria-label="Ampliar a vista das alas de SCP-0672"><img src="cela-0672-ocupada.webp" width="1536" height="1024" loading="lazy" alt="0672-A joga cartas em seu quarto, à esquerda. 0672-B lê em outro quarto, à direita."></a><figcaption>VISTA INTERNA / Ala A à esquerda e Ala B à direita, retratadas separadamente. Reconstituição ilustrativa.</figcaption></figure>
    <figure class="cell-plate"><a href="cela-0672.svg" aria-label="Ampliar a planta de contenção"><img src="cela-0672.svg" width="1200" height="800" loading="lazy" alt="Planta da unidade com alas A e B, rotas de evacuação distintas, sala de reabertura e posto remoto."></a><figcaption>PLANTA / Percursos de rotina e espaço reservado ao resgate. Esquema sem escala.</figcaption></figure>
    <div class="cell-notes">
      <div><h3>01 / Ala A</h3><p>Quarto, mesa de cartas, área de convivência e saída Oeste. A equipe atende A sem passar pela ala vizinha.</p></div>
      <div><h3>02 / Ala B</h3><p>Quarto, mesa de leitura, área de convivência e saída Leste. B recebe visitas em seu próprio setor.</p></div>
      <div><h3>03 / Sala de reabertura</h3><p>Usada em resgates supervisionados. A dupla entra por lados diferentes. O equipamento remoto fica pronto antes do encontro.</p></div>
      <div><h3>04 / Posto remoto</h3><p>O operador acompanha a câmera e o alto-falante da plataforma pelo lado da Fundação. A enfermaria recebe o resgatado na saída da sala.</p></div>
    </div>
    <div class="warning"><b>LIMITE DA CONTENÇÃO.</b> A separação evita o gatilho observado. Se a passagem abrir, a duração continua variável. Uma abertura curta pode interromper o resgate.</div>
    <section class="containment-plans"><div class="section-head"><h2>Planos A a D</h2><span>GATILHOS · RESPONSÁVEIS · ETAPAS</span></div>
      ${containment0672Plans.map((plan, index) => `<details class="containment-plan"${index === 0 ? ' open' : ''}><summary>${plan.title}</summary><div class="plan-body"><p><b>Gatilho</b> — ${plan.trigger}</p><p><b>Responsáveis</b> — ${plan.owner}</p><ol>${plan.steps.map(step => `<li>${step}</li>`).join('')}</ol><p><b>Encerramento</b> — ${plan.close}</p><p><b>Se o plano falhar</b> — ${plan.fallback}</p></div></details>`).join('')}
    </section>
    <p><a class="file-link" href="#inc-043">RELATÓRIO DO PRIMEIRO RESGATE ↗</a> · ${inDossier ? '<a class="file-link" href="#contencao">DIRETÓRIO DE CONTENÇÃO ↗</a>' : '<a class="file-link" href="#scp-0672">DOSSIÊ DO SCP-0672 ↗</a>'}</p>
  </section>`;
}

function scp0672Card() {
  return `<a class="file-card" href="#scp-0672"><div class="file-photo"><img src="scp-0672.webp" alt="Os dois personagens de Só Mais Uma apertam as mãos" loading="lazy"></div>
    <div class="card-body"><div class="card-id">OBJETO Nº SCP-0672</div><h2>Só Mais Uma</h2><span class="tag">EUCLID</span> <span class="tag">CORDIAIS</span>
    <p>Um aperto de mão abre a porta de uma balada onde todo mundo quer ficar até a próxima música.</p><span class="file-link">ABRIR DOSSIÊ COMPLETO ↗</span></div></a>`;
}

function scp0672Dossier() {
  return `${crumb('ANOMALIAS / SCP-0672')}<article>
    <div class="dossier-top">
      <div><div class="eyebrow">DOSSIÊ DE CONTENÇÃO / SCP-0672</div><h1>Só Mais Uma</h1>
        <span class="tag">EUCLID</span> <span class="tag">CORDIAIS</span>
        <p>Dois indivíduos sob contenção em alas separadas da BR-67. A dupla coopera com a rotina. A classe Euclid reflete o risco de travessias acidentais e a dificuldade de retirar alguém após o fechamento.</p>
        <p><a class="file-link" href="#classificacoes">ENTENDER AS CLASSIFICAÇÕES ↗</a></p>
      </div>
      <figure class="portrait"><img src="scp-0672.webp" alt="0672-A, à esquerda, e 0672-B, à direita, apertam as mãos diante de um muro de pedra"><figcaption>REGISTRO VISUAL / Instantes antes da abertura. A e B estão identificados pela posição na foto.</figcaption></figure>
    </div>
    <p><a class="file-link" href="#cela-0672" data-0672-jump>VISTA DAS ALAS, PLANTA E PROTOCOLOS ↓</a> · <a class="file-link" href="#inc-043">RELATÓRIO INC-043 ↗</a></p>
    <h2>01 / Descrição</h2>
    <p>Quando 0672-A e 0672-B se encontram e apertam as mãos, uma porta aparece nas proximidades. Além da soleira há uma pista de dança, um bar e uma fila que dobra o salão. As comandas trazem um endereço em Israel. A Fundação ainda investiga se existe um estabelecimento correspondente fora do portal.</p>
    <p>Quem atravessa passa a adiar a saída. A porta continua visível enquanto está aberta e a pessoa consegue andar, conversar e atender ao rádio. Mesmo com fome, sede ou cansaço, decide esperar a próxima faixa. A água disponível no bar é irregular e a cozinha permanece “quase abrindo”. Uma permanência prolongada pode ser fatal.</p>
    <h2>02 / Limites observados</h2>
    <ul>
      <li>As equipes que observaram a pista ou ouviram a música do corredor continuaram capazes de se afastar. A compulsão foi registrada após a travessia.</li>
      <li>Depois do fechamento, o espaço continuou acessível por uma reabertura provocada pela dupla. O INC-043 documenta uma retirada nessas condições.</li>
      <li>A plataforma atravessou e voltou sob comando externo. A duração das aberturas e a disponibilidade de água ainda variam entre observações.</li>
      <li>A vontade de voltar persistiu no Dr. Valença após o resgate e cedeu durante o acompanhamento. A equipe mantém observação para novos casos.</li>
    </ul>
    <h2>03 / A dupla</h2>
    <div class="cell-notes">
      <div><h3>0672-A / O das cartas</h3><p>A costuma propor uma partida antes das entrevistas. Quando pergunta quanto tempo falta, está geralmente tentando descobrir se dá para jogar mais uma rodada. Diz que, na balada, o primeiro lugar que procura é uma mesa longe da caixa de som.</p></div>
      <div><h3>0672-B / O das comandas</h3><p>B é quem mais lembra detalhes da casa. Descreveu a fila do bar e o painel da pista antes da revisão das gravações. Insiste em guardar os recibos das visitas, inclusive os que vieram com a mesa em branco.</p></div>
    </div>
    <h2>04 / Testes e observações</h2>
    <ul>
      <li><b>OBS-01 · Do corredor.</b> A equipe viu a pista e ouviu o DJ anunciar a última música. Os observadores conseguiram encerrar o plantão normalmente. O único pedido registrado foi para abaixar o volume.</li>
      <li><b>OBS-02 · Câmera móvel.</b> Durante a busca do INC-043, a câmera entrou e retornou sob comando externo. O painel ainda anunciava a última música. Os horários dos dois registros provam que houve duas aberturas, mas a gravação não basta para medir a passagem do tempo lá dentro.</li>
      <li><b>OBS-03 · A voz na pista.</b> Na retirada, Valença entendeu os pedidos e respondeu ao alto-falante. Concordou em sentar quando ouviu que o assento era reservado para a próxima faixa. A equipe registrou a resposta como cooperação naquele resgate.</li>
    </ul>
    <h2>05 / Entrevista 0672-01 — Fechar a conta</h2>
    <p>Joana falou com A e B pelo interfone depois do INC-043. As duas alas permaneceram em operação.</p>
    <blockquote><p><b>Dra. Joana</b> — Vocês sabem quando a porta vai fechar?</p><p><b>0672-A</b> — Se eu soubesse, tinha avisado o doutor antes de ele pedir mais uma.</p><p><b>0672-B</b> — Ele pediu água. O garçom falou que já vinha.</p><p><b>Dra. Joana</b> — Vocês viram o garçom voltar?</p><p><b>0672-A</b> — Vi ele passar com água. Era de outra mesa.</p><p><b>0672-B</b> — Lá dentro é sempre de outra mesa.</p><p><b>Dra. Joana</b> — E o endereço da comanda?</p><p><b>0672-B</b> — Na minha tem endereço. O número da mesa veio em branco.</p></blockquote>
    <p>As descrições do bar conferem com os vídeos do resgate. A origem do salão, a identidade de quem atende o bar e o motivo da repetição do anúncio continuam em aberto.</p>
    <h2>06 / Procedimentos especiais de contenção</h2>
    ${containment0672(true)}
    <h2>07 / Histórico de ocorrência</h2>
    <p>Na primeira observação, o Dr. Mauro Valença ficou preso por sete dias. Camera Man localizou o pesquisador pela câmera da plataforma e Bovas conseguiu convencê-lo a aceitar o assento. Joana conduziu a entrevista durante a recuperação.</p>
    <p><a class="file-link" href="#inc-043">LER INC-043 / O DOUTOR FICOU PRA SAIDEIRA ↗</a> · <a class="file-link" href="#linha-do-tempo">VER LINHA DO TEMPO ↗</a></p>
  </article>`;
}

function scp0672StaffNote(text) {
  return `<h2>INC-043 / O doutor ficou pra saideira</h2><p>${text}</p><p><a class="file-link" href="#inc-043">ABRIR RELATÓRIO INC-043 ↗</a> · <a class="file-link" href="#scp-0672">DOSSIÊ DO SCP-0672 ↗</a></p>`;
}

document.addEventListener('click', event => {
  const link = event.target.closest('[data-0672-jump]');
  if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const section = document.getElementById('cela-0672');
  if (!section) return;
  event.preventDefault();
  section.scrollIntoView();
  section.setAttribute('tabindex', '-1');
  section.focus({ preventScroll: true });
});

incidentReports.push({
  id: 'INC-043',
  title: 'O doutor ficou pra saideira',
  scope: 'interno',
  location: 'BR-67 / corredor de observação e espaço acessado pelo SCP-0672',
  period: 'Sete dias entre a travessia e o resgate, seguidos de acompanhamento',
  status: 'ENCERRADO / PESQUISADOR RESGATADO',
  people: [
    ['SCP-0672-A e SCP-0672-B', 'scp-0672'],
    ['Dr. Bovas / coordenação científica', 'dr-bovas'],
    ['Dra. Joana / entrevista de acompanhamento', 'dr-joana'],
    ['Camera Man / monitoramento', 'camera-man']
  ],
  summary: 'O Dr. Mauro Valença atravessou o portal do SCP-0672 durante a primeira observação na BR-67. A passagem fechou enquanto ele esperava a próxima faixa. A Fundação o manteve como desaparecido até a retirada, sete dias depois.',
  failure: 'Valença entrou para conferir o endereço impresso numa comanda. Quando recebeu a ordem de voltar, respondeu pelo rádio “já tô indo, só falta a boa” e levantou um dedo para a câmera. Segundos depois a porta desapareceu. Os testes de observação feitos do corredor ainda não tinham revelado a compulsão associada à travessia.',
  sequence: 'A equipe tentou recuperar contato antes de arriscar uma nova travessia. Com a ajuda da dupla, confirmou que a passagem podia ser reaberta e preparou uma retirada remota.',
  rescueStages: [
    ['Dia 1 / Último contato', 'O rádio de Valença perdeu o sinal quando a porta fechou. Camera Man preservou o último trecho de vídeo. Atrás do pesquisador, o painel da pista anunciava a última música da noite.'],
    ['Dias 2 e 3 / Reconhecimento', 'A dupla abriu a passagem sob supervisão. Na primeira tentativa, a câmera no corredor só mostrou a entrada da pista. Na segunda, uma câmera móvel passou da soleira e voltou com imagens do bar e do mesmo painel. Valença estava fora do enquadramento. A gravação registrou o mesmo anúncio.'],
    ['Dias 4 a 6 / Busca e preparação', 'As aberturas terminaram antes que a equipe conseguisse percorrer todo o salão com a câmera. Joana cruzou o depoimento da dupla com os vídeos e identificou um banco ao lado da pista como último ponto provável. A equipe preparou uma plataforma com câmera, alto-falante e assento baixo para alcançar esse trecho na abertura seguinte.'],
    ['Dia 7 / A cadeira reservada', 'Camera Man encontrou Valença sentado ao lado do banco, fraco demais pra se levantar. Quando ouviu que era hora de voltar, ele pediu que esperassem o refrão. Bovas anunciou pelo alto-falante que a cadeira da plataforma era reservada pra quem queria ouvir a próxima faixa. Valença conseguiu se apoiar no assento, e a plataforma o trouxe de volta enquanto a equipe mantinha o corredor livre.']
  ],
  impacts: [
    'Um pesquisador ficou desaparecido por sete dias e retornou com desidratação, desnutrição e fraqueza acentuada.',
    'Nenhuma morte e nenhuma outra pessoa exposta pela travessia durante o resgate.'
  ],
  demonstration: 'A vontade de permanecer superou pedidos de retorno e o desconforto físico. A reabertura deu acesso ao mesmo salão e permitiu retirar o pesquisador por controle remoto.',
  dialogue: [
    ['Dra. Joana', 'Por que o senhor pediu pra voltar na primeira noite na enfermaria?'],
    ['Dr. Mauro Valença', 'Eu tinha certeza de que tinha saído na hora errada.'],
    ['Dra. Joana', 'Quantas músicas tocaram?'],
    ['Dr. Mauro Valença', 'Uma.'],
    ['Dra. Joana', 'Em sete dias?'],
    ['Dr. Mauro Valença', 'É. E toda vez eu achava que a próxima ia ser melhor.']
  ],
  outcome: 'Valença foi atendido na enfermaria. Nos primeiros dias, pediu várias vezes que reabrissem a porta. A vontade de voltar diminuiu durante o acompanhamento e o pesquisador retomou o trabalho. A BR-67 passou a manter a dupla em alas separadas e a preparar qualquer retirada pelo lado da Fundação.'
});

timelineThreads.push({
  title: 'Só Mais Uma e o resgate de Valença',
  people: ['SCP-0672 / Só Mais Uma', 'Dr. Mauro Valença', 'Dr. Bovas', 'Dra. Joana', 'Camera Man'],
  groups: ['Pesquisa da BR-67'],
  events: [
    { when: 'Primeira observação na BR-67', title: 'A porta fecha com Valença dentro', text: 'O pesquisador atravessa para conferir uma comanda e adia a saída até a passagem desaparecer.', links: [['inc-043', 'Relatório INC-043']] },
    { when: 'Sete dias após a travessia', title: 'Retirada por plataforma remota', text: 'A dupla reabre o portal. Camera Man localiza Valença e Bovas o convence a aceitar o assento.', links: [['inc-043', 'Sequência do resgate']] },
    { when: 'Após o resgate', title: 'Acompanhamento e alas separadas', text: 'Valença se recupera, inclusive da vontade de voltar. A contenção passa a separar a dupla na rotina.', links: [['scp-0672', 'Dossiê Só Mais Uma'], ['cela-0672', 'Planos de contenção']] }
  ]
});
