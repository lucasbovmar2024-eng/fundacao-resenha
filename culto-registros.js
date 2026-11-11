const cultoResearch = {
  code: 'INV-REC-01',
  belief: 'Segundo os relatos atribuídos aos devotos, as paredes acumulam vestígios das conversas ocorridas ao redor delas. Eles chamam esses vestígios de resenha assentada. Raspar seria recolher histórias; compartilhar a rapa seria participar de uma conversa anterior à própria chegada.',
  traditions: [
    ['A primeira demão', 'Expressão usada para falar de origem, iniciação ou memória. Os testemunhos divergem sobre seu significado.'],
    ['A roda de parede', 'Supostas reuniões em que os participantes contam histórias diante de um acabamento antigo. Há relatos de discussão sobre qual parede merecia receber a reunião.'],
    ['A massa corrida', 'Alguns depoimentos a descrevem como um revestimento que encobre histórias. Outros tratam isso como uma piada interna sobre obras malfeitas. Nenhuma vertente ou autoridade religiosa foi identificada com segurança.']
  ],
  clues: [
    {
      title: 'O desenho sem procedência',
      observation: 'Uma reprodução de desenho recebida pela inteligência mostra uma figura de vestes claras diante de uma parede descascada. Uma anotação a descreve como antiga. O original, a autoria e a data ainda não foram localizados.',
      uncertainty: 'A silhueta lembra Daycaros, mas a reprodução também pode ter sido feita depois da circulação de imagens do padre. A equipe não conseguiu identificar o rosto.'
    },
    {
      title: '“Ele ainda está na primeira demão”',
      observation: 'Um depoente apresentado como possível devoto usou essa frase ao ver uma imagem de Daycaros. Quando solicitado a explicar, encerrou a conversa. Sua identidade e sua ligação efetiva com o culto continuam sem verificação.',
      uncertainty: 'A frase pode ser vocabulário devocional, brincadeira, reconhecimento ou encenação. O depoimento não estabelece que o padre conheça o depoente.'
    },
    {
      title: 'A parede que tinha assunto',
      observation: 'Numa visita posterior ao INC-042, Daycaros deixou de lado um fragmento recente oferecido para observação e preferiu uma área de acabamento antigo da sala comum. Comentou “essa aqui tem assunto”. A equipe registrou a escolha e pediu que preservasse o restante da superfície.',
      uncertainty: 'Textura, cheiro, preferência pessoal e expectativa dos observadores continuam explicações possíveis. Nenhuma voz, lembrança extraída ou transmissão pela parede foi registrada.'
    }
  ]
};

const daycarosCultDialogue = [
  ['Dr. Bovas', 'O senhor aceita conversar sobre o culto que gosta de reboco?'],
  ['Daycaros', 'Aceito conversar. O reboco pode ficar também?'],
  ['Dra. Joana', 'Pode. A parede precisa terminar a entrevista inteira.'],
  ['Daycaros', 'Ela tem mais prática que nós.'],
  ['Dr. Bovas', 'O senhor conhece o Deus Recobo? Alguns relatos dizem Deus Reboco.'],
  ['Daycaros', 'Vocês também chamam a mesma sala de laboratório, setor e “onde deixaram minha caneca”.'],
  ['Dra. Joana', 'Isso quer dizer que os nomes se referem à mesma coisa?'],
  ['Daycaros', 'Quer dizer que a caneca continua sumida.'],
  ['Dr. Bovas', 'As pessoas desse culto conhecem o senhor?'],
  ['Daycaros', 'Tem gente que conhece a resenha e nunca chegou na roda. Tem gente que chega na roda e não conhece ninguém.'],
  ['Dra. Joana', 'O senhor fundou essa roda?'],
  ['Daycaros', 'Quem chega cedo sempre leva a culpa pelas cadeiras.'],
  ['Dr. Bovas', 'O culto diz que as paredes guardam conversas. O senhor come essas conversas?'],
  ['Daycaros', 'Eu como reboco, doutor. O resto vocês estão servindo.'],
  ['Dra. Joana', 'Por que escolheu aquele acabamento antigo?'],
  ['Daycaros', 'Aquele tem assunto. Esse novo ainda está esperando alguém morar.'],
  ['Dr. Bovas', 'Essa parte da instalação tem poucos anos.'],
  ['Daycaros', 'Perguntou a idade da parede ou da tinta?'],
  ['Camera Man', 'A gravação está contínua. Até aqui só temos uma conversa.'],
  ['Dr. Bovas', 'Disseram que o senhor ainda está na primeira demão. O que isso significa?'],
  ['Daycaros', 'Depende de quem está querendo cobrir.'],
  ['Dra. Joana', 'Cobrir o quê?'],
  ['Daycaros', 'Na obra, essa pergunta costuma vir depois do orçamento.'],
  ['Dr. Bovas', 'Recobo é uma pessoa, uma entidade ou uma ideia?'],
  ['Daycaros', 'Na resenha de vocês, o assunto precisa mostrar documento antes de entrar?'],
  ['Dr. Bovas', 'O senhor precisaria. Nunca mostra.'],
  ['Daycaros', 'Então já temos um costume em comum.'],
  ['Dra. Joana', 'O senhor é um seguidor, um mensageiro ou só gosta de rapa de parede?'],
  ['Daycaros', 'A senhora já foi num aniversário só pelo salgado?'],
  ['Dra. Joana', 'Isso não responde à pergunta.'],
  ['Daycaros', 'E, mesmo assim, a senhora pensou num aniversário.'],
  ['Dr. Bovas', 'Última pergunta. Como o senhor entrou na Fundação hoje?'],
  ['Daycaros', 'Vocês estavam conversando sobre mim. Achei educado participar.'],
  ['Camera Man', 'Consta como resposta do entrevistado. O percurso de entrada continua sem registro completo.'],
  ['Dra. Joana', 'Há alguma coisa que devamos perguntar na próxima visita?'],
  ['Daycaros', 'Perguntem antes da próxima demão. Depois todo mundo jura que sempre foi dessa cor.'],
  ['Dr. Bovas', 'Joana, começamos com três hipóteses.'],
  ['Dra. Joana', 'Agora temos sete e um chamado da manutenção.'],
  ['Daycaros', 'Pede pra deixar a quina. A conversa ali ainda não acabou.']
];

function daycarosCultInterview(){
  return `<section class="cult-research" aria-label="Entrevista de Daycaros sobre o culto">
    <div class="eyebrow">ENT-7777-B / VISITA VOLUNTÁRIA / POSTERIOR AO INC-042</div>
    <h2>A parede tem assunto</h2>
    <p>Bovas e Joana conversaram com Daycaros numa sala comum durante a visita registrada em ${cultoResearch.code}. Camera Man preservou áudio e imagem. Argatha acompanhou o acesso externo à sala. Daycaros aceitou a conversa e o pedido para preservar o restante do acabamento.</p>
    <p>As menções a vozes, memória e origem pertencem às perguntas e crenças em investigação. A gravação preserva as falas dos presentes, com o padre cordial durante toda a sessão.</p>
    <blockquote class="cult-interview">${daycarosCultDialogue.map(([name,line])=>`<p><b>${name}</b><br>${line}</p>`).join('')}</blockquote>
    <h3>Parecer de Bovas e Joana</h3>
    <p>Bovas considerou que as respostas justificam comparar relatos e documentos do culto com as visitas. Joana destacou que o padre ouviu as hipóteses nas próprias perguntas e podia responder por associação, humor ou evasão. Os dois mantiveram a investigação aberta.</p>
    <p>O trecho sobre a caneca não identifica um objeto desaparecido específico. A gravação não contém voz vinda da parede. A preferência pelo acabamento antigo foi observada, mas o significado atribuído a ela continua em discussão.</p>
    <p><b>Questões pendentes</b> — Daycaros reconheceu o vocabulário do culto ou apenas acompanhou a conversa? “Primeira demão” fala de idade, iniciação ou de alguém tentando encobrir algo? Ele entende as perguntas literalmente? Os depoentes o conheceram ou copiaram sua figura?</p>
    <p>O padre continua Ticonderoga, não contido e cordial. O encontro foi arquivado como entrevista de pesquisa. Sua origem, seu percurso e sua relação com Recobo permanecem desconhecidos.</p>
    <p><a class="file-link" href="#goi-003">Consultar investigação do Culto ↗</a> · <a class="file-link" href="#scp-7777">Consultar ficha de Daycaros ↗</a></p>
  </section>`;
}

function cultoResearchSection(){
  return `<section class="cult-research" aria-label="Investigação do Culto do Deus Recobo">
    <div class="eyebrow">${cultoResearch.code} / PESQUISA EM ABERTO</div>
    <h2>A resenha assentada nas paredes</h2>
    <p>${cultoResearch.belief}</p>
    <p>Recobo e Deus Reboco aparecem como nomes usados nos relatos. A Fundação ainda procura uma fonte independente que permita verificar a história, os integrantes e as práticas do grupo. O material disponível inclui versões incompatíveis e depoimentos de procedência incompleta.</p>
    <h3>Vocabulário e costumes atribuídos aos devotos</h3>
    <dl class="cult-traditions">${cultoResearch.traditions.map(([title,text])=>`<div><dt>${title}</dt><dd>${text}</dd></div>`).join('')}</dl>
    <h3>Três pistas sob análise</h3>
    ${cultoResearch.clues.map(clue=>`<section class="cult-clue"><h4>${clue.title}</h4><p>${clue.observation}</p><p><b>O que falta esclarecer</b><br>${clue.uncertainty}</p></section>`).join('')}
    <h3>Por que os relatos discordam sobre o padre?</h3>
    <p>Uma versão o apresenta como peregrino que chega onde já existe conversa. Outra o trata como sinal do alegado Recobo. Um terceiro depoimento resume a questão como “o homem gosta de reboco e vocês gostam de inventar cargo”. A equipe não conseguiu estabelecer se essas versões representam grupos diferentes, uma tradição comum ou improvisos individuais.</p>
    <p>A semelhança entre os hábitos de Daycaros e os relatos motivou a entrevista abaixo. O material recolhido ainda não estabelece filiação, origem comum, capacidade de ler paredes ou existência da divindade.</p>
    ${daycarosCultInterview()}
  </section>`;
}
