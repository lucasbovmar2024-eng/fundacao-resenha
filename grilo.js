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
      </div>
      <figure class="portrait"><img src="investigador-grilo.webp" alt="Retrato do Investigador Grilo com brilho verde, óculos, headset e um olho vermelho"><figcaption>FOTO DE CADASTRO / Investigador Grilo durante uma escuta.</figcaption></figure>
    </div>
    <h2>01 / Escuta do passado</h2>
    <p>As antenas de Grilo captam trechos de sons que já ocorreram no lugar em que está. Uma sala pode devolver o toque de uma campainha ou uma frase dita antes de uma reforma. O som costuma chegar em pedaços e fora de ordem. Grilo dita o que escuta, marca os trechos incertos e busca confirmação nas imagens, nos objetos e nos relatos de quem passou por ali.</p>
    <h2>02 / Six Seven</h2>
    <p>Ao fazer o gesto do meme, alternando as duas mãos com as palmas pra cima, Grilo ativa o olho vermelho. A partir do gesto, tem <strong>67 segundos</strong> para conversar com alguém que morreu naquele lugar. Ele pode fazer perguntas. A pessoa pode responder, ficar calada, se enganar ou mentir. O cronômetro segue correndo durante pausas e interrupções.</p>
    <p>A equipe usa cronômetro externo e anota o relato ditado por Grilo. Se a voz cair no meio de uma resposta, o trecho fica incompleto no relatório. Em apuração, o depoimento serve como pista até encontrar confirmação independente.</p>
    <h2>03 / Trabalho de campo</h2>
    <p>O brilho verde fica mais forte conforme a escuta clareia. Grilo costuma entrar quando a área já está isolada, com alguém para acompanhar o tempo e conferir as anotações. Sua ficha de equipamento inclui óculos, headset, bloco com perguntas e um colete que a logística chegou a comprar em preto.</p>
    <blockquote><b>Resenhinhos</b> — Dá pra observar pela fresta?<br><b>Grilo</b> — Dá. Já tô ouvindo.<br><b>Voz do outro lado</b> — Quem instalou uma saída de emergência na porta?</blockquote>
    <h2>04 / Adendo ao INC-046 — O quinto recibo</h2>
    <p>Depois da expedição dos <a href="#mtf-04">GOYS</a>, Grilo acompanhou a <a href="#dr-joana">Dra. Joana</a> num retorno ao balcão do subsolo zero. Na escuta do passado, reconheceu a campainha descrita pela equipe e ouviu uma voz dizer “pode subir o próximo”. A frase não aparece nas gravações da primeira expedição. Ele ativou o Six Seven para tentar localizar uma testemunha.</p>
    <div class="cell-notes">${griloCase.map(([at, speaker, line]) => `<div><h3>${at} / ${speaker}</h3><p>${line}</p></div>`).join('')}</div>
    <p>Joana registrou a hipótese de que a voz pertencia a um antigo funcionário. O depoimento não identifica quem assinou a quinta linha. Grilo anotou no fim do registro que conseguiu uma pista nova e uma reclamação de iluminação.</p>
    <p><a class="file-link" href="#inc-046">RELATÓRIO DA EXPEDIÇÃO ↗</a> · <a class="file-link" href="#cron-046">CRÔNICA O QUINTO RECIBO ↗</a></p>
    <div class="document-end">FIM DA FICHA / <a href="#agentes">VOLTAR AOS AGENTES ↑</a></div>
  </article>`;
}
