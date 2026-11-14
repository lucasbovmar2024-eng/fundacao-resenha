const mtfOperations = [
  {
    unit: 'resenhinhos',
    team: 'Resenhinhos (MTF-R)',
    incident: {
      id: 'INC-048',
      title: 'Plantão no andar que faltava',
      scope: 'interno',
      location: 'BR-67 / anexo desativado de manutenção',
      period: 'Após a interdição do anexo no INC-045',
      status: 'ENCERRADO / PESSOAL EVACUADO',
      people: [['Resenhinhos / resposta inicial', 'resenhinhos'], ['GOYS / verificação posterior', 'mtf-04']],
      summary: 'O efeito do anexo interditado no INC-045 apareceu no corredor vizinho durante a troca de turno. Dois funcionários da limpeza ficaram retidos num patamar que sempre levava de volta ao mesmo degrau.',
      failure: 'O primeiro pedido pelo interfone indicou o segundo andar. O crachá de uma das funcionárias foi registrado no térreo enquanto ela ainda falava do patamar. A equipe passou a usar confirmação de voz em vez do painel de andares.',
      sequence: 'Os Resenhinhos impediram novas entradas e mantiveram contato com a dupla pelo interfone. Uma funcionária reconheceu a porta da rouparia pela corrente de ar. Ela e a colega permaneceram juntas até que a porta voltasse a dar no corredor ocupado pela equipe. Os Resenhinhos confirmaram as duas vozes, abriram passagem e fizeram a retirada com equipamento convencional.',
      dialogue: [['Funcionária', 'O painel diz que a gente tá no quarto andar.'], ['Resenhinhos', 'A senhora consegue ver a rouparia?'], ['Funcionária', 'Consigo. E tem alguém batendo a porta.'], ['Resenhinhos', 'É a gente. Se aparecer o quinto andar no painel, o quinto andar pode esperar.']],
      outcome: 'As duas funcionárias foram retiradas e avaliadas sem ferimentos. O acesso vizinho também foi interditado. Os GOYS revisaram os registros depois da retirada e identificaram um atraso de eco parecido com o do INC-045. A extensão do fenômeno continua sob investigação.'
    },
    backstage: [['Supervisor', 'O relógio do corredor marcou quatro fins de turno.'], ['Resenhinhos', 'Ótimo. Pode escolher qualquer um pra pagar a hora extra.']],
    story: {
      title: 'O último a bater o ponto',
      cover: 'resenhinhos-plantao-eterno.png',
      summary: 'Na troca de plantão, os Resenhinhos tentam tirar duas funcionárias de uma escada que devolve todo mundo ao mesmo patamar.',
      chapters: [
        { title: 'I — A porta da rouparia', paras: [
          'O painel anunciou que alguém tinha chegado ao quarto andar. A placa do anexo dava três andares ao prédio, contando o térreo. O Resenhinho junto ao interfone pediu que a mulher descrevesse o lugar onde estava. Ela começou pela lixeira e terminou dizendo que o pano molhado escorregava do carrinho toda vez que elas desciam o mesmo degrau.',
          'A colega dela ficou calada até ouvir o supervisor pedir que as duas contassem até dez. Contou até quatro e interrompeu. Tinha sentido ar frio no tornozelo. A rouparia tinha uma porta ruim, que deixava passar vento por baixo. Ela reclamava disso desde antes da interdição.'
        ] },
        { title: 'II — Duas vozes', paras: [
          'Do lado de fora, alguém bateu duas vezes na porta da rouparia. A resposta demorou tanto que o operador chegou a afastar o rosto do interfone. Então vieram duas batidas e, mais baixo, o barulho de um carrinho batendo no batente.',
          'A primeira funcionária saiu de costas, segurando o braço da colega. O operador pediu que ambas dissessem o nome. O painel anunciou outra chegada no quarto andar. As duas falaram ao mesmo tempo. O supervisor escreveu os dois nomes, olhou a hora e deixou a coluna de andar em branco.'
        ] }
      ]
    }
  },
  {
    unit: 'mtf-10',
    team: 'Décimo Batalhão (MTF-10)',
    incident: {
      id: 'INC-049',
      title: 'O vagão que já tinha partido',
      scope: 'externo',
      location: 'Pátio ferroviário fictício de Santa Dobra / interior de São Paulo',
      period: 'Operação externa de retirada e transporte',
      status: 'ENCERRADO / VAGÃO SOB CUSTÓDIA',
      people: [['Décimo Batalhão / retirada e transporte', 'mtf-10'], ['Resenhinhos / apoio ao perímetro', 'resenhinhos']],
      summary: 'Um vagão vazio reaparecia na linha de serviço sempre que o alto-falante da estação anunciava sua partida. O Décimo foi enviado para retirar o vagão antes que a circulação no pátio voltasse ao normal.',
      sequence: 'Os primeiros ensaios mostraram que a carga voltava ao ponto de partida quando o anúncio alcançava o vagão. A operação foi interrompida até que o pátio ficasse vazio. O Décimo preparou um compartimento fechado de custódia e aguardou o próximo reaparecimento. A retirada prosseguiu em silêncio, com o veículo de transporte aguardando do lado de fora e os Resenhinhos mantendo o acesso civil suspenso.',
      dialogue: [['Controle do pátio', 'O vagão consta como embarcado.'], ['Décimo', 'Ele tá na nossa frente.'], ['Controle do pátio', 'A que horas?'], ['Décimo', 'Essa é justamente a parte que ele tá contestando.']],
      outcome: 'O vagão chegou ao depósito isolado da Fundação, sem feridos. Na primeira conferência, a placa de destino estava em branco. A equipe suspendeu anúncios perto do compartimento enquanto pesquisa testa a relação entre áudio e reaparecimento. O pátio foi liberado depois de uma inspeção.'
    },
    backstage: [['Logística', 'Assina aqui como carga recebida.'], ['Décimo', 'Qual chegada?'], ['Logística', 'A que dá pra provar com o vagão ainda na sala.']],
    story: {
      title: 'Chegada sem anúncio',
      cover: 'mtf-10.png',
      summary: 'O Décimo precisa levar um vagão que insiste em voltar à estação antes de o pátio reabrir.',
      chapters: [
        { title: 'I — O vagão vazio', paras: [
          'A estação tinha o tamanho de uma rua e a paciência de um relógio quebrado. Às seis e doze, o alto-falante anunciou uma partida. O vagão apareceu no fim da linha. Do lado de fora, o Décimo esperou o ruído de rodas que nunca chegou.',
          'Na tentativa anterior, o vagão desaparecera no meio da retirada e deixara o compartimento vazio. Dessa vez o oficial de custódia pediu que ninguém cantasse vitória cedo. Uma pessoa perguntou se “vitória” também fazia parte da lista de palavras suspensas. Ele respondeu que, por precaução, passava a fazer.'
        ] },
        { title: 'II — Recebido em silêncio', paras: [
          'Os Resenhinhos confirmaram que o pátio estava vazio. No lugar em que o alto-falante costumava estalar, ficou só o som de uma corrente batendo no vento. O Décimo fechou a custódia com o vagão dentro. No visor, a placa de destino perdeu a última letra e ficou branca.',
          'Já no depósito, o oficial esperou ao lado da porta até ouvir o inspetor confirmar a chegada. A funcionária da logística perguntou se podia fazer o anúncio no sistema. Ele olhou para o vagão, olhou para o papel sobre a mesa e estendeu uma caneta.'
        ] }
      ]
    }
  },
  {
    unit: 'mtf-13',
    team: 'Pacto da Resenha (MTF-13)',
    incident: {
      id: 'INC-050',
      title: 'A sirene que não aceitava silêncio',
      scope: 'externo',
      location: 'Auditório fictício da Estação do Eco / litoral de Pernambuco',
      period: 'Intervenção de precisão da MTF-13',
      status: 'ENCERRADO / FONTE ANÔMALA INATIVA',
      people: [['Pacto da Resenha / MTF-13', 'mtf-13'], ['Nex / SCP-666', 'scp-666'], ['Ferro-Vivo / SCP-8080', 'scp-8080'], ['Décimo Batalhão / custódia', 'mtf-10']],
      summary: 'Uma sirene passou a dar forma a um guardião de eco em um auditório já evacuado. A figura bloqueava o acesso ao aparelho e aparecia em outro ponto a cada toque. O Pacto foi chamado para abrir uma janela de intervenção.',
      sequence: 'Véspera marcou o ponto de origem do eco. Nex atraiu a atenção da figura por alguns segundos e recuou sob cobertura dos colegas. Sino abriu uma janela curta na defesa anômala e Mortalha impediu que o guardião mudasse de lugar naquele intervalo. Ferro-Vivo aplicou o Pulso Órfão ao aparelho. O guardião perdeu forma e a sirene silenciou. O Décimo assumiu a custódia da peça após a retirada do Pacto.',
      dialogue: [['Sino', 'Tem certeza de que ele tá olhando pra você?'], ['Nex', 'Agora tá. Perguntei se tocava alguma coisa além desse refrão.'], ['Mortalha', 'Guarda a crítica musical pra depois da retirada.']],
      outcome: 'A equipe saiu completa. Ferro-Vivo precisou de resfriamento e Nex encerrou a atuação com sinais de desgaste. A sirene foi recolhida, e o local foi isolado para vistoria. O registro não vincula a peça ao Círculo do Apagão.'
    },
    backstage: [['Véspera', 'Da próxima vez, vamos tentar reduzir o ruído.'], ['Nex', 'Finalmente alguém reclamou da sirene.'], ['Sino', 'A reunião é sobre você.']],
    story: {
      title: 'Antes do próximo toque',
      cover: 'pacto-equipe.png',
      summary: 'O Pacto tem até o próximo toque para alcançar a sirene que mantém um guardião no auditório.',
      chapters: [
        { title: 'I — A cadeira vazia', paras: [
          'Em cada toque, a figura aparecia junto a uma cadeira diferente. As cadeiras ficavam vazias depois que ela se movia, mas continuavam rangendo como se alguém tivesse acabado de levantar. Véspera parou de seguir a figura e começou a prestar atenção no primeiro rangido.',
          'Nex aguardou o sinal. Entre um toque e outro, perguntou se a criatura sabia outra música. Ela virou a cabeça primeiro, depois os ombros. A cadeira atrás dele rangeu. Ele já tinha saído do lugar quando Sino recebeu a confirmação de Véspera.'
        ] },
        { title: 'II — O silêncio no ouvido', paras: [
          'Mortalha segurou a janela e sentiu a figura tentar voltar para o palco. Ferro-Vivo descarregou o Pulso Órfão na caixa da sirene. As cadeiras ficaram quietas ao mesmo tempo. Ainda assim, por alguns segundos, todos tiveram a sensação de que o próximo toque já estava começando.',
          'Do lado de fora, o Décimo recebeu a peça em silêncio. Nex sentou no degrau e perguntou se alguém tinha um fone. Véspera apontou para o retorno do rádio. Ele pensou um pouco e disse que preferia ouvir o barulho da rua.'
        ] }
      ]
    }
  }
];

for (const { team, incident, story } of mtfOperations) {
  incidentReports.push(incident);
  const id = incident.id.slice(4);
  const chronicle = {
    ...story, id, subtitle: incident.title, kind: 'reconstrucao', topic: 'operacoes',
    incident: incident.id, group: incident.scope, category: 'Operações',
    coverAlt: 'Imagem de cadastro da unidade ' + team,
    coverCaption: 'Imagem de cadastro da equipe.',
    reading: '2 min de leitura',
    notice: 'Reconstrução literária do ' + incident.id + '.'
  };
  chronicleRecords.push(chronicle);
  chronicleByIncident[incident.id] = chronicle;
}

timelineThreads.push(
  {
    title: 'Resenhinhos no anexo de manutenção',
    groups: ['Resenhinhos (MTF-R)', 'GOYS (MTF-04)'],
    people: [],
    events: [mtfTimelineEvent(mtfOperations[0].incident)]
  },
  {
    title: 'O Décimo e a custódia do vagão',
    groups: ['Décimo Batalhão (MTF-10)', 'Resenhinhos (MTF-R)'],
    people: [],
    events: [mtfTimelineEvent(mtfOperations[1].incident)]
  },
  {
    title: 'O Pacto na Estação do Eco',
    groups: ['Pacto da Resenha (MTF-13)', 'Décimo Batalhão (MTF-10)'],
    people: ['SCP-666 / Nex', 'SCP-8080 / Ferro-Vivo'],
    events: [mtfTimelineEvent(mtfOperations[2].incident)]
  }
);

function mtfTimelineEvent(incident) {
  return {
    when: incident.period + ' · ' + incident.id,
    title: incident.title,
    text: incident.summary,
    links: [[incident.id.toLowerCase(), 'Relatório ' + incident.id], ['cron-' + incident.id.slice(4), 'Ler a crônica']]
  };
}

function mtfOperationsSection(route) {
  const participating = mtfOperations.filter(({ incident }) => incident.people.some(([, link]) => link === route));
  if (!participating.length) return '';
  const feature = participating.find(operation => operation.unit === route);
  return `<section class="entity-conduct">
    <h2>Operações e registros de plantão</h2>
    <div class="cell-notes">${participating.map(({ incident, story }) => `<div>
      <div class="eyebrow">${incident.id}</div><h3>${incident.title}</h3><p>${incident.summary}</p>
      <p><a class="file-link" href="#${incident.id.toLowerCase()}">LER O RELATÓRIO ↗</a> · <a class="file-link" href="#cron-${incident.id.slice(4)}">${story.title} ↗</a></p>
    </div>`).join('')}</div>
    ${feature ? `<h3>Depois do plantão</h3><blockquote>${feature.backstage.map(([speaker, line]) => `<b>${speaker}</b> — ${line}`).join('<br>')}</blockquote>` : ''}
  </section>`;
}
