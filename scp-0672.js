const containment0672Plans = [
  {
    title: 'Plano A / Rotina de alas separadas',
    steps: [
      'Manter 0672-A e 0672-B em alas distintas da BR-67. Cada indivíduo dispõe de quarto, área de convivência e horários próprios de circulação.',
      'Antes de liberar um corredor compartilhado, confirmar a posição dos dois com as equipes das alas. Se uma confirmação faltar, adiar o deslocamento.',
      'Durante evacuações, conduzir A e B a pontos de reunião diferentes. A equipe de cada ala confirma o destino ao plantão.'
    ]
  },
  {
    title: 'Plano B / Abertura imprevista',
    steps: [
      'Interromper o trânsito no corredor e levar a dupla de volta às respectivas alas. Conferir as pessoas presentes com a lista do plantão e as imagens da área.',
      'Registrar a abertura pelo lado da Fundação. Se houver suspeita de travessia, acionar o Plano C, mesmo que a porta já tenha desaparecido.'
    ]
  },
  {
    title: 'Plano C / Localização e retirada',
    steps: [
      'Reservar uma sala vazia para o reencontro e posicionar a equipe, o equipamento remoto e a enfermaria no lado da Fundação antes de autorizar o aperto de mão.',
      'Localizar a pessoa por câmera e oferecer instruções simples pelo alto-falante. Retirá-la com a plataforma remota. Toda a equipe permanece do lado da Fundação.',
      'Confirmar a retirada, devolver A e B a suas alas e registrar a duração e as condições da abertura. A enfermaria acompanha a recuperação física e a vontade de voltar.'
    ]
  }
];

function containment0672() {
  return `<section class="containment-unit" id="cela-0672">
    <div class="eyebrow">ARQUITETURA DE CONTENÇÃO / SCP-0672</div>
    <h2>Alas separadas e sala de reabertura</h2>
    <p>0672-A e 0672-B ficam em setores distintos. A sala de reabertura é reservada para resgates supervisionados. A primeira retirada bem-sucedida está registrada no <a href="#inc-043">INC-043</a>.</p>
    ${containment0672Plans.map(plan => `<h3>${plan.title}</h3><ol>${plan.steps.map(step => `<li>${step}</li>`).join('')}</ol>`).join('')}
    <p><a class="file-link" href="#scp-0672">DOSSIÊ DO SCP-0672 ↗</a></p>
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
    <h2>03 / Procedimentos especiais de contenção</h2>
    <p>A e B ficam em setores distintos, com deslocamentos coordenados. Uma abertura acidental interrompe a circulação no corredor. Se houver alguém do outro lado, a prioridade é localizá-lo e retirar a pessoa sem expor a equipe.</p>
    <p><a class="file-link" href="#cela-0672">ABRIR PLANOS DE ROTINA, ISOLAMENTO E RESGATE ↗</a></p>
    <h2>04 / Histórico de ocorrência</h2>
    <p>Na primeira observação, o Dr. Mauro Valença ficou preso por sete dias. Camera Man localizou o pesquisador pela câmera da plataforma e Bovas conseguiu convencê-lo a aceitar o assento. Joana conduziu a entrevista durante a recuperação.</p>
    <p><a class="file-link" href="#inc-043">LER INC-043 / O DOUTOR FICOU PRA SAIDEIRA ↗</a> · <a class="file-link" href="#linha-do-tempo">VER LINHA DO TEMPO ↗</a></p>
  </article>`;
}

function scp0672StaffNote(text) {
  return `<h2>INC-043 / O doutor ficou pra saideira</h2><p>${text}</p><p><a class="file-link" href="#inc-043">ABRIR RELATÓRIO INC-043 ↗</a> · <a class="file-link" href="#scp-0672">DOSSIÊ DO SCP-0672 ↗</a></p>`;
}

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
