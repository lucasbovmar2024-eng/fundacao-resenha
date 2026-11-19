const motoEscapeLog = [
  ['F-01 / Saída pro almoço', 'Durante a abertura do portão de serviço, os quatro passaram pelo controle, cumprimentaram o guarda e seguiram por uma rua que já havia sido demolida. Voltaram ao anoitecer com pão.'],
  ['F-02 / Portão fechado', 'A moto permaneceu no pátio com o acesso fechado e os quatro presentes. Na gravação, o trajeto termina atrás de uma coluna. A câmera seguinte os registra do lado de fora. A equipe ainda procura o trecho que ligou os dois pontos.'],
  ['F-03 / Só vamos olhar', 'Um agente tentou embarcar para acompanhar uma saída supervisionada. Caiu do banco antes da partida. A moto saiu enquanto ele recolhia a prancheta e voltou com um retrovisor usado.'],
  ['F-04 / Garagem lacrada', 'O fechamento permaneceu intacto, mas a garagem amanheceu vazia. Os quatro retornaram pela mesma entrada na manhã seguinte. O trajeto não foi registrado. Desde então, lacres entram como evidência de inspeção, com vigilância contínua do interior.'],
  ['Registro atual', 'As saídas recorrentes colocaram o conjunto no primeiro lugar do índice interno de frequência de fugas. A maioria termina com retorno espontâneo. O plantão mantém cada saída aberta até conferir a moto e os quatro ocupantes.']
];

function motoCard() {
  return `<a class="file-card" href="#scp-0400"><div class="file-photo"><img src="scp-0400.webp" alt="Moto vermelha com seus quatro ocupantes" loading="lazy"></div>
    <div class="card-body"><div class="card-id">OBJETO Nº SCP-0400</div><h2>Cabe Mais Um</h2><span class="tag red">KETER</span> <span class="tag">PACÍFICOS / FUGAS RECORRENTES</span>
    <p>Quatro ocupantes, uma moto e nenhum lugar para acompanhante. Costumam voltar antes de o plantão terminar o relatório.</p><span class="file-link">ABRIR DOSSIÊ ↗</span></div></a>`;
}

function motoContainment() {
  return `<section class="containment-unit" id="cela-0400">
    <div class="eyebrow">UNIDADE G-400 / CONTENÇÃO EM REVISÃO</div><h2>Garagem e área de convivência</h2>
    <p>O conjunto fica na G-400, com espaço para estacionar, assentos, banheiro e acesso ao refeitório em horários acompanhados. A equipe registra a posição dos quatro e da moto antes de abrir o pátio. O percurso entre a garagem e o controle é observado por mais de um ângulo.</p>
    <figure class="cell-interior"><a href="g400-interior.webp" aria-label="Ampliar a vista interna da G-400"><img src="g400-interior.webp" width="1536" height="1024" alt="Garagem G-400 vazia, com vaga de moto, câmeras, mesa, poltronas e banheiro" loading="lazy"></a><figcaption>VISTA INTERNA / Reconstituição arquitetônica da garagem vazia. A foto dos ocupantes está na abertura do dossiê.</figcaption></figure>
    <figure class="cell-plate"><a href="cela-0400.svg" aria-label="Ampliar a planta da G-400"><img src="cela-0400.svg" width="1200" height="800" alt="Planta da G-400 com convivência, apoio, estacionamento, pátio e controle" loading="lazy"></a><figcaption>PLANTA / Os cinco setores da unidade, sem escala.</figcaption></figure>
    <div class="cell-notes"><div><h3>Convivência e apoio</h3><p>A área permite descanso e refeições, com banheiro próprio. A equipe faz entrevistas de retorno à mesa, antes de guardar os objetos trazidos.</p></div><div><h3>Estacionamento e câmeras</h3><p>Dois ângulos cobrem a vaga para diminuir pontos cegos na gravação. O registro ajuda a reconstruir uma fuga depois que a contagem acusa ausência.</p></div><div><h3>Pátio de retorno</h3><p>O espaço livre recebe a moto sem a presença de curiosos junto ao banco. A conferência termina quando os quatro desembarcam ou são identificados no veículo.</p></div><div><h3>Posto de controle</h3><p>Centraliza a lista de presença, os pedidos de saída e os relatórios de retorno. O destino declarado é comparado ao que aparece nas imagens.</p></div></div>
    <details class="containment-plan" open><summary>Plano A — Rotina e conferência</summary><div class="plan-body"><p><b>Responsáveis</b> — Equipe da garagem e plantão de segurança.</p><ol><li>Conferir os quatro ocupantes e a moto ao assumir o turno.</li><li>Confirmar a posição de todos antes de qualquer abertura do pátio.</li><li>Registrar pedidos de saída e o destino informado. A autorização precisa chegar ao controle antes da abertura.</li></ol><p><b>Falha</b> — Posição incerta ou garagem vazia aciona o Plano B.</p></div></details>
    <details class="containment-plan"><summary>Plano B — Ausência e busca</summary><div class="plan-body"><p><b>Gatilho</b> — Saída sem autorização ou desaparecimento do conjunto.</p><ol><li>Preservar as últimas imagens e o áudio do setor.</li><li>Conferir os quatro por imagem quando houver avistamento. Registrar o caminho e a hora do observador.</li><li>Acionar o perímetro e investigar os acessos históricos próximos com pesquisa e, quando necessário, os GOYS.</li></ol><p><b>Encerramento</b> — Moto e quatro ocupantes novamente identificados na G-400.</p></div></details>
    <details class="containment-plan"><summary>Plano C — Retorno e entrevista</summary><div class="plan-body"><ol><li>Receber o conjunto em área livre, conferir as pessoas e registrar objetos trazidos.</li><li>Perguntar destino, paradas e caminho de volta antes de encerrar a ocorrência.</li><li>Comparar o depoimento com imagens, documentos e registros de campo.</li></ol><p><b>Limite</b> — Os ocupantes podem dar referências de lugares desaparecidos. A equipe mantém esses trechos em investigação.</p></div></details>
    <details class="containment-plan"><summary>Plano D — Partida ou comemoração anômala</summary><div class="plan-body"><p><b>Gatilho</b> — Manifestação semelhante à do INC-052.</p><ol><li>Afastar espectadores e isolar a área de impacto.</li><li>Solicitar pausa da atividade e conduzir a conversa para fora do campo.</li><li>Conferir o goleiro, os ocupantes e a moto antes de distribuir o retorno às unidades.</li></ol><p><b>Conclusão</b> — Atividade suspensa, pessoas assistidas e manifestações cessadas. Se persistirem, ampliar o perímetro e acionar pesquisa.</p></div></details>
    <div class="warning">Portão fechado e lacre já falharam em impedir desaparecimentos. A rota usada nessas saídas continua desconhecida. Qualquer pessoa além dos quatro é expelida do banco ao tentar montar.</div>
    <p><a class="file-link" href="#scp-0400">DOSSIÊ DO CONJUNTO ↗</a></p>
  </section>`;
}

function motoDossier() {
  return `${crumb('ANOMALIAS / SCP-0400')}<article><div class="dossier-top"><div>
    <div class="eyebrow">DOSSIÊ DE CONJUNTO / QUATRO OCUPANTES E UM VEÍCULO</div><h1>SCP-0400<br>Cabe Mais Um</h1>
    <span class="tag red">KETER</span> <span class="tag">PACÍFICOS</span>
    <p><b>Estado</b> — Presença intermitente na G-400, com fugas e retornos espontâneos.<br><b>Vínculo</b> — Sob acompanhamento e contenção em revisão.</p></div>
    <figure class="portrait"><img src="scp-0400.webp" alt="Quatro ocupantes em uma moto vermelha, com o piloto à frente e o macaco na traseira"><figcaption>REGISTRO VISUAL / Os quatro ocupantes habituais.</figcaption></figure></div>
    <h2>01 / Descrição</h2>
    <p>SCP-0400 designa a moto vermelha e os quatro ocupantes que viajam juntos. O banco acomoda o conjunto durante o movimento. Todo passageiro adicional escorrega e cai ao tentar subir, inclusive com o veículo parado. Segurar no piloto ou no guidão termina com a pessoa novamente fora do banco.</p>
    <p>A moto percorre caminhos ligados a lugares que já desapareceram. Um avistamento pode ocorrer numa rua demolida e terminar numa via atual. A extensão das rotas e sua relação com o passado continuam em estudo. A aparência antiga de um destino exige confirmação por documentos e registros.</p>
    <h2>02 / Os quatro</h2><div class="cell-notes">
      <div><h3>0400-A / O piloto</h3><p>Espera a confirmação dos companheiros antes de partir. Conversa com os guardas e costuma anunciar o destino como “resolver um negócio”.</p></div>
      <div><h3>0400-B / O de olhos brilhantes</h3><p>Aponta saídas que deixam de aparecer no caminho das viaturas. A equipe estuda se ele percebe os acessos antes da moto alcançá-los.</p></div>
      <div><h3>0400-C / O passageiro mais velho</h3><p>Descreve nomes antigos de ruas e estabelecimentos. As referências ajudam a pesquisa a procurar rotas históricas.</p></div>
      <div><h3>0400-D / O macaco</h3><p>Viaja na traseira e observa o movimento dos agentes. Costuma pegar objetos que passageiros extras deixam cair.</p></div>
    </div>
    <h2>03 / Por que Keter?</h2><p>A classe acompanha a frequência de fugas e as falhas dos controles físicos. A postura pacífica foi mantida nos encontros registrados. O risco operacional está no trajeto desconhecido, na exposição pública e na impossibilidade de levar um acompanhante da Fundação.</p>
    <h2>04 / Histórico de fugas</h2>${motoEscapeLog.map(([title, detail]) => `<h3>${title}</h3><p>${detail}</p>`).join('')}
    <h2>05 / Teste de embarque</h2><p>Um operador dos Resenhinhos tentou subir três vezes, por lados diferentes. Na terceira, 0400-D estendeu a mão. O operador caiu e o macaco ficou com a luva, devolvida depois da conferência.</p>
    <blockquote><b>Bovas</b> — Conseguiu embarcar?<br><b>Resenhinho</b> — Parte do equipamento conseguiu.</blockquote>
    <h2>06 / Entrevista de retorno</h2>
    <blockquote><b>Plantão</b> — O portão estava fechado. Por onde saíram?<br><b>0400-C</b> — Pela rua de trás.<br><b>Plantão</b> — A rua de trás acabou numa reforma.<br><b>0400-A</b> — A gente também achou que tava diferente.<br><b>Plantão</b> — O que foram buscar?<br><b>0400-B</b> — Retrovisor. O nosso só tava mostrando onde a gente já foi.<br><b>Plantão</b> — E esse funciona?<br><b>0400-B</b> — Ainda tá mostrando.</blockquote>
    <h2>07 / G-400 e planos de resposta</h2>${motoContainment()}
    <h2>08 / Pelada e manifestação conjunta</h2>
    <p>No INC-052, a comemoração simultânea de A, B e C foi seguida por uma nova execução, mais intensa, de um gol. O macaco permaneceu junto à moto durante o episódio. Após o pedido de revisão do goleiro, o placar exibiu REPLAY e a jogada voltou a ocorrer.</p>
    <p>A equipe passou a suspender partidas coletivas dos três enquanto pesquisa os gatilhos. O registro mantém em aberto quanto do replay depende do conjunto e quanto depende do goleiro.</p>
    <figure class="cell-interior"><a href="pelada-052.webp" aria-label="Ampliar reconstituição do INC-052"><img src="pelada-052.webp" width="1856" height="1056" alt="Três jogadores junto ao goleiro canino e uma trave atingida durante a pelada" loading="lazy"></a><figcaption>INC-052 / Reconstituição ilustrativa da partida fornecida para o arquivo.</figcaption></figure>
    <h2>09 / Entrevista depois do apito</h2>
    <blockquote><b>Joana</b> — Vocês perceberam que a comemoração repetiu o chute?<br><b>0400-A</b> — A gente percebeu o barulho.<br><b>0400-C</b> — Na segunda vez eu já tava saindo da área.<br><b>Joana</b> — E por que teve uma terceira?<br><b>0400-B</b> — O goleiro pediu pra ver de novo.<br><b>Joana</b> — Se ele pedir outra vez?<br><b>0400-A</b> — Agora a gente chama a senhora.</blockquote>
    <h2>10 / Observações de pesquisa</h2>
    <ul><li>As rotas desaparecidas permanecem o principal desafio das fugas. A passagem atrás da coluna e a saída com lacres intactos seguem sem reconstrução completa.</li><li>A queda de passageiros adicionais foi observada com a moto parada. Tentativas de embarque foram suspensas depois do teste registrado.</li><li>A permanência dos ocupantes fora da moto no campo mostrou que o conjunto também produz ocorrências durante atividades a pé.</li><li>O retorno espontâneo facilita a recepção. Cada nova ausência continua sendo registrada como fuga.</li></ul>
    <p><a class="file-link" href="#inc-051">INC-051 / SAÍDA PRO ALMOÇO ↗</a></p>
    <p><a class="file-link" href="#inc-052">INC-052 / A PELADA SAIU DO CONTROLE ↗</a> · <a class="file-link" href="#scp-0901">SCP-0901 / FOI QUASE ↗</a></p>
    <div class="document-end">FIM DO DOSSIÊ / <a href="#arquivo">VOLTAR AO ARQUIVO ↑</a></div></article>`;
}

incidentReports.push({
  id:'INC-051', title:'Saída pro almoço', scope:'interno',
  location:'BR-67 / G-400 e pátio de serviço', period:'Registro consolidado das primeiras fugas do SCP-0400',
  status:'ENCERRADO / CONJUNTO RETORNOU',
  people:[['SCP-0400 / Cabe Mais Um','scp-0400'],['Resenhinhos / controle de acesso','resenhinhos'],['Camera Man / revisão de imagens','camera-man']],
  summary:'As saídas repetidas do conjunto exigiram revisão da garagem. Uma passagem pelo portão aberto foi seguida por desaparecimentos com o acesso fechado e, depois, lacrado.',
  sequence:'Os Resenhinhos conferiram o pátio e o controle. Camera Man comparou os enquadramentos. A última posição visível terminava junto a uma coluna. Na saída seguinte, os lacres permaneceram intactos. A equipe passou a acompanhar o interior da garagem, além das entradas.',
  dialogue:[['Guarda','Perguntei aonde iam.'],['Central','E responderam?'],['Guarda','Resolver um negócio.'],['Central','Registra fuga.'],['Guarda','Eles pediram pra registrar saída pro almoço.']],
  outcome:'A moto e os quatro voltaram espontaneamente. O registro foi encerrado após a conferência. A classe Keter acompanha as falhas de contenção, e o comportamento observado segue pacífico.'
});

timelineThreads.push({
  title:'SCP-0400 e as saídas da G-400', people:['SCP-0400 / Cabe Mais Um','Camera Man'], groups:['Resenhinhos (MTF-R)'],
  events:[{when:'Após os primeiros retornos',title:'Portão fechado, garagem vazia',text:'A equipe revê a contenção depois de fugas com o acesso fechado e lacrado.',links:[['inc-051','Relatório INC-051'],['scp-0400','Dossiê Cabe Mais Um']]}]
});
