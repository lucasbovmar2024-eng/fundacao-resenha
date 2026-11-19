function goalkeeperCard() {
  return `<a class="file-card" href="#scp-0901"><div class="file-photo"><img src="pelada-052.webp" alt="Goleiro canino durante a pelada anômala" loading="lazy"></div><div class="card-body"><div class="card-id">OBJETO Nº SCP-0901</div><h2>Foi Quase</h2><span class="tag">EUCLID</span> <span class="tag">COOPERATIVO / COMPETITIVO</span><p>Volta inteiro depois de cada bolada. Lembra de todas as defesas que quase fez.</p><span class="file-link">ABRIR DOSSIÊ ↗</span></div></a>`;
}

function goalkeeperContainment() {
  return `<section class="containment-unit" id="cela-0901">
    <div class="eyebrow">UNIDADE Q-901 / QUADRA DE TREINO</div><h2>Quadra e alojamento do goleiro</h2>
    <p>A unidade tem dormitório, banheiro, área de descanso e quadra coberta com gol acolchoado. A rotina inclui treino leve acompanhado, alimentação e intervalos. As visitas acontecem na área de convivência.</p>
    <div class="cell-notes"><div><h3>Área de treino</h3><p>Lançamentos leves permitem atividade física e observação da recuperação. O operador encerra a rodada se o goleiro começar a pedir revanche.</p></div><div><h3>Descanso</h3><p>O alojamento fica separado da quadra. A equipe registra queixas e pede ao goleiro que explique o que lembra de cada impacto.</p></div></div>
    <details class="containment-plan" open><summary>Plano A — Treino acompanhado</summary><div class="plan-body"><p><b>Responsável</b> — Equipe da Q-901.</p><ol><li>Conferir quadra e bola antes da sessão.</li><li>Usar lançamentos leves, com um treinador e sem torcida.</li><li>Encerrar a série no horário combinado e acompanhar o descanso.</li></ol><p><b>Conclusão</b> — Goleiro na área de convivência, com observações registradas.</p></div></details>
    <details class="containment-plan"><summary>Plano B — Reclamação de replay</summary><div class="plan-body"><p><b>Gatilho</b> — Repetição espontânea de lance ou surgimento de placar anômalo.</p><ol><li>Afastar espectadores e interromper a partida.</li><li>Pedir ao goleiro que aguarde a avaliação, evitando discutir o resultado.</li><li>Isolar a quadra até cessar a repetição e preservar os registros.</li></ol><p><b>Se persistir</b> — Ampliar o isolamento e solicitar pesquisa. O primeiro replay ocorreu com os três ocupantes de 0400 presentes.</p></div></details>
    <p><a class="file-link" href="#scp-0901">FICHA DO GOLEIRO ↗</a></p>
  </section>`;
}

function goalkeeperDossier() {
  return `${crumb('ANOMALIAS / SCP-0901')}<article>
    <div class="dossier-top"><div><div class="eyebrow">DOSSIÊ / SCP-0901</div><h1>Foi Quase</h1><span class="tag">EUCLID</span><span class="tag">COOPERATIVO / COMPETITIVO</span>
    <p>Humanoide canino inteligente, com fala e uma luva de goleiro. Foi recolhido depois do INC-052 e permanece na Q-901. O apelido veio da primeira entrevista.</p></div><figure class="portrait"><img src="pelada-052.webp" alt="Foi Quase no gol durante o INC-052"><figcaption>INC-052 / Reconstituição ilustrativa fornecida para o arquivo.</figcaption></figure></div>
    <h2>01 / Capacidades e comportamento</h2>
    <p>Após um impacto de bola que o afaste do gol, SCP-0901 reaparece inteiro na área da trave. Preserva a lembrança da jogada e consegue descrevê-la. A recuperação observada se refere às boladas registradas. O alcance fora dessas condições segue sob estudo.</p>
    <p>O goleiro conversa, aceita os cuidados da equipe e pede treino de saída de bola. Tem dificuldade de encerrar uma discussão sobre impedimento. No INC-052, um pedido de revisão foi seguido por uma nova execução do lance, com um placar anômalo exibindo REPLAY. A participação exata de cada entidade nesse efeito conjunto ainda está em apuração.</p>
    <h2>02 / Entrevista 0901-A</h2>
    <blockquote><b>Joana</b> — O senhor sentiu a bolada?<br><b>Foi Quase</b> — Senti que dava pra chegar.<br><b>Joana</b> — E quando voltou pro gol?<br><b>Foi Quase</b> — Pensei que, se eu pulasse antes, pegava.<br><b>Joana</b> — O senhor lembra das outras?<br><b>Foi Quase</b> — Das três. Na segunda eu já tava melhor.<br><b>Joana</b> — Precisa de alguma coisa?<br><b>Foi Quase</b> — Um zagueiro.</blockquote>
    <h2>03 / A pelada saiu do controle</h2><p>O encontro com os três ocupantes de <a href="#scp-0400">SCP-0400</a> transformou uma comemoração em repetição destrutiva de um gol. A equipe interrompeu a partida e recolheu o goleiro depois de evacuar o campo.</p>
    <p><a class="file-link" href="#inc-052">RELATÓRIO INC-052 ↗</a></p>
    <h2>04 / Rotina e contenção</h2>${goalkeeperContainment()}
    <div class="document-end">FIM DO DOSSIÊ / <a href="#arquivo">VOLTAR AO ARQUIVO ↑</a></div>
  </article>`;
}

function peladaRelatedNote() {
  return `<h2>INC-052 / A pelada saiu do controle</h2><p>A ocorrência reuniu os três ocupantes humanos de 0400 e o goleiro Foi Quase. A revisão do lance exigiu interromper o jogo e afastar a torcida.</p><p><a class="file-link" href="#inc-052">LER RELATÓRIO ↗</a> · <a class="file-link" href="#scp-0901">FICHA DO GOLEIRO ↗</a></p>`;
}

incidentReports.push({
  id:'INC-052', title:'A pelada saiu do controle', scope:'externo',
  location:'Campo fictício da Vila do Apito / interior de São Paulo',
  period:'Após o retorno do SCP-0400 registrado no INC-051',
  status:'ENCERRADO / PARTIDA INTERROMPIDA',
  people:[['SCP-0400 / ocupantes A, B e C','scp-0400'],['SCP-0901 / Foi Quase','scp-0901'],['Resenhinhos / evacuação','resenhinhos'],['Camera Man / registros','camera-man'],['Dra. Joana / entrevista','dr-joana']],
  summary:'Durante uma nova saída do SCP-0400, os três ocupantes humanos participaram de uma pelada. O macaco ficou fora do campo junto à moto. Um gol seguido pela comemoração dos três foi executado novamente com intensidade destrutiva. O goleiro canino reapareceu inteiro junto à trave após cada impacto.',
  sequence:'A comemoração conjunta foi seguida pelo primeiro estrondo. O goleiro voltou à área e reclamou do lance. Um placar exibiu REPLAY, e a jogada se repetiu. Depois de três impactos, os Resenhinhos evacuaram os espectadores e pediram que a partida fosse suspensa. Camera Man preservou as imagens. Os ocupantes concordaram em parar, e o goleiro aceitou sair do campo para conversar com Joana.',
  rescueStages:[
    ['Isolamento do campo','Os Resenhinhos retiraram o público do entorno das traves e mantiveram a área livre enquanto a equipe falava com os jogadores.'],
    ['Encerramento da rodada','A equipe pediu que todos aguardassem uma avaliação do campo. A conversa foi levada para fora da área do gol. O placar apagou e nenhum novo replay foi observado.'],
    ['Retorno e acolhimento','A moto e seus quatro ocupantes voltaram à G-400. O goleiro foi encaminhado a uma unidade de treino e convivência, onde recebeu a designação SCP-0901.']
  ],
  impacts:['Duas pessoas da torcida sofreram ferimentos leves por detritos e foram atendidas.','A estrutura de uma trave e o placar ficaram danificados. Nenhuma morte foi registrada.'],
  demonstration:'A comemoração dos três ampliou a força de uma jogada já realizada. A contestação do goleiro precedeu uma repetição. A equipe investiga a dependência entre os dois gatilhos.',
  dialogue:[['Resenhinho','Central, evacua a arquibancada.'],['Central','Por quê?'],['Resenhinho','O cachorro pediu revisão do lance.'],['0400-A','A gente pode ir embora?'],['Foi Quase','Só depois que admitir que tava impedido.'],['Joana','A partida está suspensa. Vamos conversar do lado de fora.']],
  outcome:'A partida terminou com evacuação completa. Os dois feridos foram atendidos. O conjunto 0400 retornou e recebeu restrições de partidas e comemorações conjuntas. Foi Quase passou à rotina da Q-901. O efeito de replay continua documentado como manifestação conjunta do INC-052.'
});

timelineThreads.push({
  title:'SCP-0400 e a pelada da Vila do Apito',
  people:['SCP-0400 / Cabe Mais Um','SCP-0901 / Foi Quase','Camera Man','Dra. Joana'], groups:['Resenhinhos (MTF-R)'],
  events:[{when:'Depois do INC-051',title:'A revisão que repetiu o estrondo',text:'Uma comemoração conjunta e o pedido de replay transformam uma partida em ocorrência de contenção.',links:[['inc-052','Relatório INC-052'],['scp-0901','Ficha de Foi Quase']]}]
});
