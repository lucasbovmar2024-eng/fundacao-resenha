const griloCase = [
  ['00:00', 'Registro', 'Grilo alterna as mãos, com as palmas voltadas para cima, no gesto do Six Seven. O olho acende vermelho e começa a contagem.'],
  ['00:09', 'Grilo', 'Você trabalhava no depósito?'],
  ['00:17', 'Voz', 'Eu recebia as caixas. Se veio buscar a sua, tem que esperar a campainha.'],
  ['00:26', 'Grilo', 'Quem assinou o quinto recibo?'],
  ['00:38', 'Voz', 'Eu assinei quatro. O quinto já tava assinado quando me contrataram.'],
  ['00:48', 'Grilo', 'E quem te contratou?'],
  ['00:58', 'Voz', 'Você tem como apagar essa luz? Tá dando reflexo no vidro.'],
  ['01:07', 'Registro', 'O olho apaga. Uma sílaba incompleta é o último som ouvido por Grilo.']
];

function griloCard() {
  return `<a class="file-card" href="#investigador-grilo">
    <div class="file-photo"><img src="investigador-grilo.webp" alt="Investigador Grilo com headset, antenas verdes e olho vermelho" loading="lazy"></div>
    <div class="card-body"><div class="card-id">PESSOAL DA FUNDAÇÃO / INVESTIGAÇÃO</div>
      <h2>Investigador Grilo</h2><span class="tag">PERÍCIA DE CAMPO</span>
      <p>Ouve o passado e entrevista mortos por 67 segundos. Em serviço, pode ser localizado pelo brilho verde.</p>
      <span class="file-link">ABRIR FICHA ↗</span>
    </div></a>`;
}

function griloCaseLink() {
  return `<p><a class="file-link" href="#investigador-grilo">ADENDO AO INC-046 / A ESCUTA DO INVESTIGADOR GRILO ↗</a></p>`;
}

function griloDossier() {
  return `${crumb('PESSOAL / INVESTIGAÇÃO / GRILO')}<article>
    <div class="dossier-top">
      <div><div class="eyebrow">FICHA DE FUNCIONÁRIO / BR-67</div><h1>Investigador Grilo</h1>
        <span class="tag">INVESTIGAÇÃO DE CAMPO</span> <span class="tag">CAPACIDADES ANÔMALAS</span>
        <p>Reconstrói ocorrências a partir de vestígios sonoros, entrevista testemunhas e confere o que ouviu com as gravações e os horários do local.</p>
        <div class="detail-list"><b>Lotação</b> — Investigação e reconstituição de ocorrências<br><b>Indicativo</b> — Grilo<br><b>Atuação</b> — Campo e análise de depoimentos<br><b>Contato de campo</b> — Dra. Joana<br><b>Recurso de entrevista</b> — Six Seven / 67 segundos</div>
      </div>
      <figure class="portrait"><img src="investigador-grilo.webp" alt="Retrato do Investigador Grilo com brilho verde, óculos, headset e um olho vermelho"><figcaption>FOTO DE CADASTRO / Investigador Grilo durante uma escuta.</figcaption></figure>
    </div>
    <h2>Perfil / O investigador que ilumina o problema</h2>
    <p>Grilo gosta de ouvir a primeira versão de uma testemunha antes de consultar o resto do arquivo. Deixa a pessoa terminar, volta aos pontos que não entendeu e escreve as palavras do jeito que foram ditas. No bloco, costuma desenhar um círculo em torno de nomes que chegaram acompanhados de “acho que”.</p>
    <p>Seu humor aparece quando a entrevista emperra. Tem o hábito de pedir que alguém “volte ao começo”, inclusive aos mortos. Joana mantém uma segunda folha com as perguntas que precisam ser respondidas primeiro. Grilo insiste que o brilho ajuda a encontrar o bloco quando a luz cai.</p>
    <h2>01 / Escuta do passado</h2>
    <p>As antenas de Grilo captam trechos de sons que já ocorreram no lugar em que está. Uma sala pode devolver o toque de uma campainha ou uma frase dita antes de uma reforma. O som costuma chegar em pedaços e fora de ordem. Grilo dita o que escuta, marca os trechos incertos e busca confirmação nas imagens, nos objetos e nos relatos de quem passou por ali.</p>
    <div class="cell-notes">
      <div><h3>O que ele procura</h3><p>Uma frase interrompida, uma porta batendo, passos ou sons de trabalho. Um trecho curto pode apontar para outro cômodo ou dar uma pergunta melhor para a testemunha viva.</p></div>
      <div><h3>Como situa o trecho</h3><p>A equipe compara nomes, anúncios, ruídos de equipamento e versões da planta. Uma voz pedindo para abrir a porta pode pertencer a outra época de uso da sala.</p></div>
      <div><h3>O que fica pendente</h3><p>As escutas do subsolo zero ainda deixam em aberto a idade exata dos trechos. A precisão para escolher uma data e o alcance em locais reformados seguem sob avaliação.</p></div>
      <div><h3>Registro da fonte</h3><p>O relatório identifica o que Grilo ouviu, o que ele deduziu e quais documentos sustentam a leitura. Camera Man guarda a gravação contemporânea da sessão para comparação.</p></div>
    </div>
    <h2>02 / Six Seven</h2>
    <p>Ao fazer o gesto do meme, alternando as duas mãos com as palmas pra cima, Grilo ativa o olho vermelho. A partir do gesto, tem <strong>67 segundos</strong> para conversar com alguém que morreu naquele lugar. Ele pode fazer perguntas. A pessoa pode responder, ficar calada, se enganar ou mentir. O cronômetro segue correndo durante pausas e interrupções.</p>
    <p>A equipe usa cronômetro externo e anota o relato ditado por Grilo. Se a voz cair no meio de uma resposta, o trecho fica incompleto no relatório. Em apuração, o depoimento serve como pista até encontrar confirmação independente.</p>
    <h3>Os 67 segundos na prática</h3>
    <p>Antes do gesto, Grilo escolhe com o acompanhante uma pergunta principal. A identificação da voz vem primeiro, seguida do fato que ela presenciou. O acompanhante avisa quando faltam poucos segundos. Grilo pode aproveitar o fim para pedir um nome, endereço ou outro detalhe curto que a equipe consiga procurar depois.</p>
    <p>A investigação também depende da disposição da testemunha. Quem morreu pode continuar guardando um segredo, confundir uma lembrança ou gastar metade do tempo reclamando da visita. Repetir a mesma pergunta numa futura sessão entra no planejamento como nova tentativa. A equipe ainda não estabeleceu em quais condições consegue reencontrar a mesma voz.</p>
    <h2>03 / Trabalho de campo</h2>
    <p>O brilho verde fica mais forte conforme a escuta clareia. Grilo costuma entrar quando a área já está isolada, com alguém para acompanhar o tempo e conferir as anotações. Sua ficha de equipamento inclui óculos, headset, bloco com perguntas e um colete que a logística chegou a comprar em preto.</p>
    <blockquote><b>Resenhinhos</b> — Dá pra observar pela fresta?<br><b>Grilo</b> — Dá. Já tô ouvindo.<br><b>Voz do outro lado</b> — Quem instalou uma saída de emergência na porta?</blockquote>
    <h3>Roteiro de investigação</h3>
    <ol>
      <li><b>Chegada.</b> Conferir a liberação da área, a planta disponível e quem acompanhou a ocorrência. Marcar o ponto onde cada escuta acontece.</li>
      <li><b>Escuta inicial.</b> Ditar os fragmentos, inclusive palavras incertas e pausas. O acompanhante registra a ordem em que chegaram.</li>
      <li><b>Conferência.</b> Comparar o áudio relatado com as câmeras, o rádio e os depoimentos. Separar perguntas respondidas das que ainda precisam de fonte.</li>
      <li><b>Entrevista.</b> Preparar a pergunta principal, iniciar o cronômetro com o gesto e anotar as falas durante os 67 segundos.</li>
      <li><b>Fechamento.</b> Listar pistas verificáveis e encaminhar as pendências à pesquisa. O relatório segue com a transcrição e as observações do acompanhante.</li>
    </ol>
    <h3>Material que vai na mochila</h3>
    <p>Headset, bloco de campo, plantas impressas e cronômetro externo acompanham a inspeção. O bloco tem espaço para o horário atual e para a época atribuída ao som. As duas colunas evitam que uma frase de décadas atrás vire um alerta de rádio do plantão de hoje.</p>
    <h2>04 / Adendo ao INC-046 — O quinto recibo</h2>
    <p>Depois da expedição dos <a href="#mtf-04">GOYS</a>, Grilo acompanhou a <a href="#dr-joana">Dra. Joana</a> num retorno ao balcão do subsolo zero. Na escuta do passado, reconheceu a campainha descrita pela equipe e ouviu uma voz dizer “pode subir o próximo”. A frase não aparece nas gravações da primeira expedição. Ele ativou o Six Seven para tentar localizar uma testemunha.</p>
    <div class="cell-notes">${griloCase.map(([at, speaker, line]) => `<div><h3>${at} / ${speaker}</h3><p>${line}</p></div>`).join('')}</div>
    <p>Joana registrou a hipótese de que a voz pertencia a um antigo funcionário. O depoimento não identifica quem assinou a quinta linha. Grilo anotou no fim do registro que conseguiu uma pista nova e uma reclamação de iluminação.</p>
    <p><a class="file-link" href="#inc-046">RELATÓRIO DA EXPEDIÇÃO ↗</a> · <a class="file-link" href="#cron-046">CRÔNICA O QUINTO RECIBO ↗</a></p>
    <h2>05 / Revisão da escuta com Joana</h2>
    <p>Na revisão do adendo, os dois voltaram à frase “o quinto já tava assinado”. A palavra foi mantida na transcrição mesmo com a divergência entre a fala e a quinta linha vista nos créditos pelos GOYS.</p>
    <blockquote><b>Joana</b> — Ele falou de um recibo. O que os GOYS viram foi uma linha nos créditos.<br><b>Grilo</b> — Eu perguntei pelo recibo.<br><b>Joana</b> — Então na próxima começamos perguntando o que ele recebia.<br><b>Grilo</b> — E quem contratou ele?<br><b>Joana</b> — Essa fica na segunda linha. A reclamação da luz já gastou a primeira tentativa.</blockquote>
    <p>A investigação mantém como pendências a identidade da voz, a época em que trabalhou ali e a referência exata à quinta assinatura. O relato motivou a busca por documentos de contratação e de recebimento do depósito.</p>
    <h2>06 / Entrevista de apresentação</h2>
    <blockquote><b>Joana</b> — Quando você percebe que entendeu uma voz errado?<br><b>Grilo</b> — Quando acho o sujeito no arquivo e ele era de outro turno. Às vezes de outro século.<br><b>Joana</b> — E quando o morto mente?<br><b>Grilo</b> — Eu anoto. Ele teve uma vida inteira pra aprender, deve mentir melhor que eu.<br><b>Joana</b> — Alguma coisa que facilitaria seu trabalho?<br><b>Grilo</b> — O pessoal parar de fazer o gesto atrás de mim enquanto eu tento ouvir.<br><b>Joana</b> — Isso acontece muito?<br><b>Grilo</b> — O cronômetro do laboratório tá com o nome Six Seven no inventário.</blockquote>
    <h2>07 / Com quem ele trabalha</h2>
    <ul>
      <li><a href="#dr-joana">Joana</a> ajuda a preparar perguntas e cruza as respostas com o arquivo da ocorrência. No subsolo zero, acompanhou a escuta e registrou a identificação da testemunha como hipótese.</li>
      <li><a href="#camera-man">Camera Man</a> cuida das imagens e dos horários que Grilo usa nas comparações. O relato de uma escuta passa a ser arquivado junto ao registro da sessão atual.</li>
      <li><a href="#mtf-04">GOYS</a> localizam acessos e produzem as plantas de campo que orientaram o retorno ao balcão. Grilo lê os registros da expedição antes de preparar a visita.</li>
      <li><a href="#resenhinhos">Resenhinhos</a> acompanham perímetros e circulação durante inspeções. O brilho de Grilo entra no planejamento da visita assim que a equipe confirma o local.</li>
    </ul>
    <h2>08 / Nota de avaliação</h2>
    <p>O valor da escuta no subsolo zero está nas perguntas que ela abriu. A Fundação agora procura uma contratação, uma pessoa que recebia caixas e a procedência da fala sobre a quinta assinatura. O nome do contratante continua interrompido no último segundo da sessão.</p>
    <div class="document-end">FIM DA FICHA / <a href="#agentes">VOLTAR AOS AGENTES ↑</a></div>
  </article>`;
}
