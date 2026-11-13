const timelineThreads = [
  {
    title: 'Larper e o confronto de oito horas',
    people: ['SCP-1999 / Senhor Larper', 'Soldado de Argatha'],
    groups: ['Resenhinhos (MTF-R)'],
    events: [
      {
        when: 'Antes do confronto',
        title: 'Fuga e formação da milícia',
        text: 'Depois de escapar, Larper convence um grupo de ex-militares de que é o comandante deles. O grupo se reúne numa área rural de Minas Gerais.',
        links: [['inc-031', 'Relatório INC-031'], ['scp-1999', 'Ficha de Larper']]
      },
      {
        when: 'Ao longo de oito horas',
        title: 'Os Resenhinhos enfrentam a milícia',
        text: 'A força-tarefa padrão da Fundação enfrenta o grupo armado. A batalha deixa mortos e feridos dos dois lados.',
        links: [['inc-031', 'Balanço do confronto'], ['resenhinhos', 'Ficha dos Resenhinhos']]
      },
      {
        when: 'Nos minutos finais · H+07:52 a H+08:00',
        title: 'Argatha captura Larper',
        text: 'O Soldado de Argatha alcança Larper no fim do confronto. Os Resenhinhos apoiam a custódia após a captura.',
        links: [['cron-031', 'Crônica Oito horas de “eu sou do comando”'], ['soldado-argatha', 'Ficha de Argatha']]
      }
    ]
  },
  {
    title: 'Error e a recuperação de Camera Man',
    people: ['SCP-005 / Error', 'Camera Man', 'Dr. Bovas', 'SCP-8080 / Ferro-Vivo'],
    groups: ['Resenhinhos (MTF-R)'],
    events: [
      {
        when: 'Primeiro contato · INC-034',
        title: 'Uma imagem fora do lugar',
        text: 'Camera Man vê a manifestação de Error e apresenta pixelização e lentidão mental. Os Resenhinhos isolam a área sem olhar para a tela.',
        links: [['inc-034', 'Relatório INC-034'], ['cron-034', 'Crônica O homem que perdeu a resolução'], ['scp-005', 'Ficha de Error']]
      },
      {
        when: 'Durante o acompanhamento',
        title: 'A definição volta primeiro',
        text: 'A pixelização cede antes da lentidão. Camera Man retoma tarefas de áudio e arquivo enquanto ainda está afastado das câmeras ao vivo.',
        links: [['cron-cot-001', 'Crônica O homem que voltou ao monitor']]
      },
      {
        when: 'Após a recuperação gradual',
        title: 'Retorno ao plantão',
        text: 'Camera Man recupera o ritmo habitual e volta ao monitoramento ao vivo. O tempo de recuperação em outras exposições segue em estudo.',
        links: [['camera-man', 'Ficha de Camera Man'], ['cron-cot-001', 'Crônica do retorno']]
      }
    ]
  },
  {
    title: 'Daycaros e o desenho da parede',
    people: ['SCP-7777 / Padre Daycaros', 'Camera Man', 'Dr. Bovas', 'Dra. Joana', 'Soldado de Argatha'],
    groups: ['Culto do Deus Reboco'],
    events: [
      {
        when: 'Após o INC-042 · ENT-7777-B',
        title: 'A parede tem assunto',
        text: 'Bovas e Joana conversam com Daycaros sobre a primeira demão, a resenha assentada e sua preferência pelo reboco antigo. Camera Man grava a entrevista, com Argatha acompanhando o acesso à sala.',
        links: [['scp-7777', 'Ficha de Daycaros e entrevista'], ['goi-003', 'Investigação INV-REC-01']]
      },
      {
        when: 'Depois da entrevista',
        title: 'Uma rachadura nas duas imagens',
        text: 'Camera Man reconhece no desenho a rachadura de uma foto de manutenção. A comparação com o inventário da reforma aponta para uma parede junto à copa.',
        links: [['goi-003', 'Dossiê do Culto do Deus Reboco'], ['cron-mis-001', 'Crônica Por baixo da última demão']]
      },
      {
        when: 'Na visita seguinte',
        title: 'Por baixo da última demão',
        text: 'Daycaros examina a parede e comenta a pintura. A autoria e a data do desenho, bem como a identidade da figura, seguem em aberto.',
        links: [['cron-mis-001', 'Ler a crônica']]
      }
    ]
  }
];

function timelineOptions(field) {
  const names = [...new Set(timelineThreads.flatMap(thread => thread[field]))];
  return names.sort((a, b) => a.localeCompare(b, 'pt-BR')).map(name => `<option>${name}</option>`).join('');
}

function timelinePage() {
  return `${crumb('LINHA DO TEMPO')}<div class="eyebrow">ARQUIVO CRONOLÓGICO / BR-67</div>
    <h1>Linha do tempo da Fundação</h1>
    <p class="intro">Siga os acontecimentos de cada história e abra os registros relacionados. Quando a data exata é desconhecida, a sequência indica o que veio antes ou depois.</p>
    <div class="timeline-filters">
      <label for="timeline-person">Personagem
        <select id="timeline-person"><option value="">Todos os personagens</option>${timelineOptions('people')}</select>
      </label>
      <label for="timeline-group">Grupo
        <select id="timeline-group"><option value="">Todos os grupos</option>${timelineOptions('groups')}</select>
      </label>
    </div>
    <p id="timeline-empty" class="empty" role="status" hidden>Nenhuma história corresponde a esses filtros.</p>
    ${timelineThreads.map((thread, index) => `
      <section class="timeline-thread" data-timeline-thread aria-labelledby="timeline-thread-${index}">
        <h2 id="timeline-thread-${index}">${thread.title}</h2>
        <ol class="timeline-events">${thread.events.map(event => `
          <li>
            <p class="eyebrow">${event.when}</p>
            <h3>${event.title}</h3>
            <p>${event.text}</p>
            <div class="timeline-links">${event.links.map(([route, label]) => `<a class="file-link" href="#${route}">${label} ↗</a>`).join('')}</div>
          </li>`).join('')}
        </ol>
      </section>`).join('')}`;
}

function bindTimeline() {
  const person = document.getElementById('timeline-person');
  const group = document.getElementById('timeline-group');
  const empty = document.getElementById('timeline-empty');
  const sections = [...document.querySelectorAll('[data-timeline-thread]')];

  function update() {
    sections.forEach((section, index) => {
      const thread = timelineThreads[index];
      const matchesPerson = !person.value || thread.people.includes(person.value);
      const matchesGroup = !group.value || thread.groups.includes(group.value);
      section.hidden = !(matchesPerson && matchesGroup);
    });
    empty.hidden = sections.some(section => !section.hidden);
  }

  person.addEventListener('change', update);
  group.addEventListener('change', update);
  update();
}
