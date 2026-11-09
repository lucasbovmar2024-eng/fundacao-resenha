const containmentUnits = {
  "6767": {
    "name": "Kanecomus",
    "title": "Câmara alimentar",
    "risk": "Fome ilimitada e manifestação do Banquete 6767",
    "intro": "Uma cela que depende de abastecimento e acompanhamento. Materiais resistentes ajudam a organizar o espaço, mas não resistem à Mordida Absoluta por tempo garantido. Após INC-024, o salão original está interditado; a rotina ocorre num módulo alimentar de reserva. A vista e a planta ilustram a configuração de referência, não uma liberação para retornar ao setor danificado.",
    "points": [
      [
        "01 / Alimentar antes de negociar",
        "O abastecimento chega por uma área de apoio separada do trajeto dos funcionários. O rodízio contínuo mantém Kanecomus ocupado e reduz a procura por uma saída comestível. Não elimina sua fome."
      ],
      [
        "02 / Reserva para falhas comuns",
        "Duas geladeiras de emergência cobrem interrupções da logística. Os Resenhinhos cuidam da reposição; Argatha mantém o perímetro. Um estoque atrasado é tratado como problema de contenção, não apenas de cozinha."
      ],
      [
        "03 / Uma saída, uma conta absurda",
        "O aviso do protocolo Ô CHEFE, A CONTA fica disponível na saída monitorada. A cobrança serve de distração para a equipe recuperar o controle. Não é paralisia permanente nem garantia contra fuga."
      ],
      [
        "04 / Espaço previsto para o Banquete",
        "A planta marca o perímetro a esvaziar caso a mesa anômala apareça. Isso não é uma sala para invocá-la. Ninguém aceita convite, faz pedidos ou acrescenta cadeiras; Bovas observa à distância e mantém as invocações fora do salão."
      ],
      [
        "05 / Vigilância sem perder a rotina",
        "A equipe mantém alimentação, posto e conferência presencial. Após INC-019, o vídeo de rotina ficou em circuito separado da central: uma tela dizendo “ele já jantou” não basta para cancelar a reposição."
      ]
    ],
    "limit": "A câmara reduz oportunidades de fuga, mas não neutraliza a capacidade de comer materiais ou alterar a realidade durante o Banquete. Interrupção de abastecimento ou manifestação especial exige resposta de Bovas.",
    "plans": [
      {
        "code": "A",
        "name": "Rodízio de plantão",
        "trigger": "Rotina normal, sem Banquete e sem tentativa de saída.",
        "lead": "Bovas define; Argatha mantém o posto; Resenhinhos abastecem.",
        "steps": [
          [
            "Conferir antes do turno",
            "Checar o abastecimento, as duas geladeiras de reserva e a situação presencial da unidade. Uma gravação sozinha não confirma que a entidade foi alimentada."
          ],
          [
            "Manter a reposição",
            "Servir pela área de apoio e repor a comida sem interromper o acompanhamento. Não colocar funcionários nem o carrinho no cardápio, mesmo que Kanecomus insista."
          ],
          [
            "Separar circulação e refeição",
            "Manter o trajeto de abastecimento separado da circulação de pessoal. Qualquer transporte da entidade exige autorização e alimentação prevista durante o deslocamento."
          ],
          [
            "Passar o plantão com registro",
            "Anotar consumo, estoque e comportamento. Fome súbita acompanhada de “a mesa já está reservada” muda a resposta para o Plano C."
          ]
        ],
        "done": "Entidade permanece na câmara, reposição contínua e nenhuma manifestação especial. Isso não significa saciedade.",
        "failure": "Falha de estoque ou avanço para a saída: Plano B. Mesa ou convidados anômalos: Plano C, que tem prioridade sobre os demais."
      },
      {
        "code": "B",
        "name": "Ô chefe, a conta",
        "trigger": "Abastecimento interrompido ou tentativa de romper o perímetro, sem Banquete ativo.",
        "lead": "Argatha coordena o perímetro; Bovas decide o apoio anômalo.",
        "steps": [
          [
            "Avisar e afastar a circulação",
            "Comunicar Bovas e retirar pessoal do trajeto afetado. Argatha mantém o acompanhamento; ninguém tenta segurar Kanecomus oferecendo o próprio braço como aperitivo."
          ],
          [
            "Usar a reserva",
            "Os Resenhinhos restabelecem o serviço com as geladeiras de emergência. Não abandonar o posto de contenção para buscar comida."
          ],
          [
            "Ganhar tempo com a cobrança",
            "Se a entidade insistir na saída, usar a nota fiscal do protocolo Ô CHEFE, A CONTA como distração. A janela é incerta e não substitui a reposição."
          ],
          [
            "Solicitar o reforço adequado",
            "Bovas pode recorrer às invocações já registradas, respeitando o limite de três simultâneas e evitando formas que pareçam comida. Se houver saída para o mundo exterior, solicitar recuperação ao Décimo; não inventar uma captura já realizada."
          ],
          [
            "Retomar e revisar",
            "Depois do retorno autorizado, confirmar a entidade, restabelecer o rodízio e registrar a falha. Só então encerrar a contingência."
          ]
        ],
        "done": "Kanecomus confirmado na unidade e abastecimento estável após a falha.",
        "failure": "Se distração e reposição falharem, manter afastamento e resposta supervisionada de Bovas. O aço não oferece contenção garantida. Surgindo o Banquete, passar ao Plano C."
      },
      {
        "code": "C",
        "name": "Mesa reservada",
        "trigger": "Aparecimento da mesa, dos convidados 6767-A/B ou sinais consistentes de início do Banquete.",
        "lead": "Bovas acompanha a manifestação; Argatha preserva o afastamento.",
        "steps": [
          [
            "Suspender a rotina de aproximação",
            "Retirar funcionários do perímetro marcado e interromper aproximações não essenciais. Não transformar o protocolo alimentar num convite para sentar à mesa."
          ],
          [
            "Não participar",
            "Não aceitar convite, brindar, fazer pedidos ou acrescentar cadeiras. Não interromper a refeição à força. Manter as invocações de Bovas fora do salão."
          ],
          [
            "Observar sem provocar",
            "Registrar mudanças visíveis e comparar os registros de fora da sala. Não repetir as condições do episódio de 03h07 para “ver se funciona”."
          ],
          [
            "Conferir depois do término",
            "Aguardar o fim observado da manifestação antes da reentrada autorizada. Bovas compara portas, objetos e registros, guarda versões divergentes e libera a retomada do Plano A."
          ]
        ],
        "done": "Manifestação encerrada, ambiente conferido e rotina liberada por Bovas. Não equivale a neutralizar o Banquete.",
        "failure": "Se a realidade continuar mudando, manter o perímetro e a investigação. Não há plano comprovado para forçar o término nem para controlar os convidados."
      }
    ]
  },
  "1999": {
    "name": "Senhor Larper",
    "title": "Unidade de verificação",
    "risk": "Persuasão, falsa autoridade e manifestação intermitente 1999-S",
    "intro": "Larper não precisa quebrar a porta se conseguir convencer alguém a abri-la. Por isso, a cela combina separação física, convivência supervisionada e verificação por pessoas diferentes.",
    "points": [
      [
        "01 / Ele não assina a própria saída",
        "Pedidos de acesso passam por duas verificações independentes. O funcionário consulta o registro e o responsável por canal separado. A frase “eu sou o responsável” entra como fala da entidade, não como autorização."
      ],
      [
        "02 / Conversa com começo e fim",
        "Entrevistas têm duração definida e perguntas concretas. A entidade mantém contato recreativo supervisionado; não recebe o controle de reuniões, cursos ou grupos da instalação."
      ],
      [
        "03 / Sem balcão de administrador",
        "A área não oferece terminal administrativo nem equipamento com poder de alterar credenciais. Saber dizer “servidor” não transforma Larper em técnico de informática."
      ],
      [
        "04 / Registros independentes para 1999-S",
        "A sala dispõe de dois dispositivos independentes, mantidos fora da rede geral, e referências físicas preservadas. Se a manifestação surgir, suspender debates de identidade e arquivar versões sem sobrescrever o original. Durante a forma Shalom, cessam os comportamentos habituais de falsa autoridade; observar e preservar o curto episódio sem assumir que a identidade antiga seja real. A variante continua sob estudo."
      ],
      [
        "05 / Olhar uma gravação não é ficar imune",
        "Os observadores comparam os registros e conferem ordens fora do circuito de vídeo. Após INC-019, qualquer aparição de Larper numa imagem é investigada antes de ser atribuída a 1999-S ou ao vírus."
      ]
    ],
    "limit": "Nenhuma pessoa ou câmera foi declarada imune à persuasão da forma comum ou às alterações de imagem de 1999-S. A forma Shalom não exibiu o comportamento manipulador habitual, mas isso não comprova sua origem. Discordância entre registros suspende a autorização; não justifica provocar a manifestação.",
    "plans": [
      {
        "code": "A",
        "name": "Mostra aí então",
        "trigger": "Convivência, entrevista ou pedido de acesso na forma comum.",
        "lead": "Bovas supervisiona; dois funcionários independentes conferem autorizações.",
        "steps": [
          [
            "Definir o contato",
            "Confirmar quem acompanha a conversa, o assunto e o tempo da entrevista. Manter convivência supervisionada sem dar funções administrativas à entidade."
          ],
          [
            "Exigir algo verificável",
            "Diante de alegações de especialidade, pedir exemplo concreto. Se vier “é mais complexo que isso”, interromper o assunto por dez minutos, como no protocolo existente."
          ],
          [
            "Checar fora da conversa",
            "Consultar registro e responsável por canal separado. Nenhuma saída, cargo ou mudança de acesso é validada pelo próprio Larper. Após INC-025, confirmar também que as duas pessoas não receberam a autorização da mesma fonte induzida."
          ],
          [
            "Encerrar e preservar",
            "Registrar o resultado e preservar os originais. Confiança ao falar e uma foto do crachá não dispensam a verificação."
          ]
        ],
        "done": "Contato encerrado sem autorização indevida; Larper permanece na área designada.",
        "failure": "Ordens suspeitas ou infiltração de função: Plano B. Imagens divergentes ou manifestação 1999-S: Plano C."
      },
      {
        "code": "B",
        "name": "Cargo não encontrado",
        "trigger": "Larper se apresenta como chefe, instrutor ou integrante de uma equipe, ou solicita saída não prevista.",
        "lead": "Responsável do setor confirma; Argatha executa a contenção; Bovas avalia.",
        "steps": [
          [
            "Pausar a ordem",
            "Suspender a ação solicitada antes de executá-la. “Eu estava testando vocês” não transforma uma ordem falsa em exercício autorizado."
          ],
          [
            "Conferir com outra fonte",
            "Consultar o registro físico e o responsável por canal independente da entidade e do vídeo suspeito. Não promover Larper enquanto a checagem está em andamento."
          ],
          [
            "Preservar a área",
            "Argatha mantém o perímetro; os Resenhinhos apoiam os acessos e a comunicação. Gravações documentam a tentativa, mas ninguém é presumido imune à persuasão."
          ],
          [
            "Retornar ao procedimento correto",
            "Com a situação esclarecida, encerrar o contato e retomar o Plano A. Se Larper já estiver fora da Fundação, acionar o Décimo para localização e recuperação conforme o protocolo de Bovas."
          ]
        ],
        "done": "Ordem negada ou corrigida, sem novo cargo concedido e com a localização da entidade confirmada.",
        "failure": "Dúvida persistente mantém a autorização suspensa. Surgindo 1999-S, usar o Plano C; não tentar vencer a manifestação discutindo quem “sempre esteve ali”."
      },
      {
        "code": "C",
        "name": "Shalom: poucos segundos de depoimento",
        "trigger": "Manifestação 1999-S observada ou divergência inexplicada entre imagens e testemunhos.",
        "lead": "Bovas conduz a análise; observadores preservam registros independentes.",
        "steps": [
          [
            "Evitar provocar a manifestação",
            "Não discutir com a variante nem reproduzir o episódio da fotografia como teste improvisado. Se Shalom surgir espontaneamente, confirmar a mudança de conduta e iniciar perguntas curtas previamente preparadas, sem pressão."
          ],
          [
            "Preservar palavras e registros",
            "Registrar as frases exatas de Shalom e guardar imagens dos dois dispositivos independentes. Marcar trechos incompletos e interpretações como hipóteses, sem tratar vocabulário antigo como prova de origem histórica."
          ],
          [
            "Separar Shalom de Larper comum",
            "Documentar o fim do episódio e a volta da personalidade manipuladora; não presumir que Larper se lembra ou sabe algo sobre a transformação. Uma imagem diferente não prova fuga, viagem no tempo ou infecção por SCP-0404."
          ],
          [
            "Aguardar avaliação",
            "Bovas registra o fim observado do episódio e compara os materiais antes de liberar a rotina. Se houver sinais de vírus audiovisual, investigar separadamente e aplicar a quarentena de 0404 aos meios suspeitos."
          ]
        ],
        "done": "Episódio encerrado, versões preservadas e retorno à rotina autorizado após conferência.",
        "failure": "Se as divergências continuarem, manter a supervisão e a suspensão de acessos. Não há procedimento comprovado para controlar a duração de 1999-S."
      }
    ]
  },
  "0404": {
    "name": "Camera Man Corrompido",
    "title": "Quarentena audiovisual",
    "risk": "Clonagem por vídeo, falsificação de imagens e sabotagem digital anômala",
    "intro": "A cela é uma câmara de isolamento com um único hospedeiro audiovisual. O clone não possui corpo fora da tela: sua mobilidade depende de conseguir alcançar outro dispositivo de imagem.",
    "points": [
      [
        "01 / Nenhum caminho para a central",
        "O terminal não se conecta às câmeras, aos comunicadores ou à rede da Fundação. A separação de sinal impede que o clone migre pelos meios observados. INC-026 demonstrou que uma ligação de manutenção pode violar essa separação; a instância foi recontida e o circuito afetado permanece isolado para análise. Não é um antivírus milagroso: é manter a anomalia sem um próximo destino."
      ],
      [
        "02 / Grade de Quadros",
        "Um dispositivo anômalo fictício mantém o hospedeiro num ciclo fechado de imagens de uma sala vazia. O ciclo ancora a instância ativa e impede novas capturas no experimento atual. Bovas monitora sua estabilidade; o funcionamento completo permanece desconhecido."
      ],
      [
        "03 / Observar sem oferecer outro rosto",
        "A observação é óptica, através de visor, sem câmera apontada para funcionários e sem caminho eletrônico de retorno. O retrato deste dossiê é uma ilustração estática do personagem, não uma transmissão do hospedeiro."
      ],
      [
        "04 / Manutenção sem plateia",
        "A antessala impede entrada casual com celulares, webcams ou gravações. Argatha controla o perímetro e os Resenhinhos prestam apoio. Alimentação própria mantém o loop; desligar tudo por conta própria pode destruir evidências e não equivale a neutralizar o vírus."
      ],
      [
        "05 / A tela não dá ordens",
        "Observações são anotadas fisicamente e conferidas fora da câmara. Voz, imagem ou texto produzidos pelo clone nunca autorizam abertura. O Camera Man original supervisiona o arquivo limpo, sem conectar sua central ao hospedeiro."
      ]
    ],
    "limit": "Contenção atual confirmada para esta instância e estes meios de propagação. A origem do vírus e a possibilidade de cópias fora dos registros conhecidos continuam em investigação. Não há fuga atual nem cópia externa confirmada.",
    "plans": [
      {
        "code": "A",
        "name": "Tela sem destino",
        "trigger": "Quarentena estável da instância já contida no Q-404.",
        "lead": "Bovas responde pela Grade de Quadros; Argatha pelo perímetro; Camera Man pelos registros limpos.",
        "steps": [
          [
            "Conferir o isolamento",
            "Confirmar o estado do único hospedeiro e a separação em relação à central. A conferência ocorre de fora, sem conectar um equipamento “só para verificar”."
          ],
          [
            "Manter a âncora",
            "Acompanhar a alimentação independente e a estabilidade da Grade de Quadros, o dispositivo anômalo que mantém a instância no loop fechado."
          ],
          [
            "Observar sem fornecer material",
            "Usar o visor óptico e o registro físico. Impedir entrada casual com câmeras ou celulares que possam oferecer novas capturas ao hospedeiro."
          ],
          [
            "Passar o plantão fora da tela",
            "Registrar estado e responsáveis por escrito e confirmar as ordens pelo posto externo. A voz do clone não participa da autorização."
          ]
        ],
        "done": "Instância restrita ao Q-404, isolamento íntegro e loop estável. É o estado atual de contenção.",
        "failure": "Pedido de acesso ou ordem produzida pelo clone: Plano B. Falha da âncora: Plano C. Suspeita de outro hospedeiro: Plano D."
      },
      {
        "code": "B",
        "name": "Administrador negado",
        "trigger": "Tela pede reconexão, exibe autorização ou imita um funcionário para alterar a quarentena.",
        "lead": "Camera Man confronta registros; Bovas confirma decisões; Argatha mantém a câmara.",
        "steps": [
          [
            "Tratar a mensagem como fala da entidade",
            "Preservar a descrição da tentativa. Não abrir a câmara ou aceitar manutenção porque a assinatura na tela parece familiar."
          ],
          [
            "Confirmar fora do circuito",
            "Comparar o pedido com o registro físico e o responsável presente ou por comunicação independente do hospedeiro."
          ],
          [
            "Manter os acessos",
            "Sem autorização externa válida, manter a quarentena como está. Não realizar demonstração de conexão para desmentir o clone."
          ],
          [
            "Registrar e seguir observando",
            "Anotar a tentativa e voltar ao Plano A se o isolamento e a Grade permanecerem estáveis. INC-020 exemplifica esse procedimento."
          ]
        ],
        "done": "Tentativa negada sem reconexão, abertura ou propagação confirmada.",
        "failure": "Se o estado da Grade mudar durante a tentativa, usar o Plano C. Se aparecer sinal compatível fora do Q-404, iniciar o Plano D sem declarar uma nova cópia antes da análise."
      },
      {
        "code": "C",
        "name": "Quadro instável",
        "trigger": "Interrupção da alimentação independente ou alteração anormal do loop/Grade de Quadros.",
        "lead": "Bovas avalia a âncora; Argatha coordena o afastamento.",
        "steps": [
          [
            "Acionar o responsável",
            "Comunicar Bovas e suspender manutenção não essencial. Retirar pessoal não autorizado da antessala."
          ],
          [
            "Preservar a separação",
            "Manter o hospedeiro sem conexão com outros dispositivos, mesmo que a tela ofereça “um conserto automático”. A parede e a rede separada continuam relevantes quando o loop oscila."
          ],
          [
            "Conferir pelo posto externo",
            "Registrar o estado visível e a alimentação disponível, sem acrescentar uma câmera de diagnóstico ao recinto. A equipe autorizada avalia os recursos locais."
          ],
          [
            "Restabelecer sob supervisão",
            "Bovas decide se há condição de recuperar a estabilidade da âncora. Não desligar tudo como se isso comprovasse neutralização, nem transferir a instância a outro aparelho por iniciativa própria."
          ],
          [
            "Validar antes da rotina",
            "Confirmar estabilidade e isolamento antes de encerrar a contingência. Qualquer sinal fora do hospedeiro abre investigação pelo Plano D."
          ]
        ],
        "done": "Âncora e alimentação conferidas, instância restrita ao Q-404 e retomada autorizada por Bovas.",
        "failure": "Se não for possível estabilizar, manter o setor isolado e o acompanhamento externo. A Grade é anômala e não tem reparo garantido; ausência de imagem não prova destruição do vírus."
      },
      {
        "code": "D",
        "name": "Imagem fora de lugar",
        "trigger": "Possível duplicata, replay adulterado ou falsa ordem em outro circuito. É contingência; não há cópia externa confirmada.",
        "lead": "Bovas investiga; Camera Man preserva fontes limpas; forças operacionais cuidam do isolamento.",
        "steps": [
          [
            "Separar suspeita e confirmação",
            "Confrontar a imagem com observação presencial e registros independentes. Não chamar uma gravação atrasada ou 1999-S de vírus sem análise."
          ],
          [
            "Delimitar o circuito suspeito",
            "Restringir seu uso e manter decisões de acesso fora dele. Os Resenhinhos apoiam o isolamento do setor; Argatha mantém a contenção física."
          ],
          [
            "Guardar evidências sem espalhar",
            "Preservar os meios suspeitos separados do arquivo limpo. Não reenviar trechos pela central para perguntar “vocês também estão vendo?”."
          ],
          [
            "Definir a recuperação",
            "Bovas determina o destino de um hospedeiro confirmado. Fora da instalação, o Décimo pode ser acionado para recuperação e transporte; internamente, a equipe de contenção atua conforme autorização."
          ],
          [
            "Conferir o alcance",
            "Registrar equipamentos, fontes comparadas e resultado. Só declarar nova instância ou retorno à normalidade após a investigação."
          ]
        ],
        "done": "Suspeita esclarecida ou hospedeiro confirmado isolado, com os acessos e o arquivo limpo preservados.",
        "failure": "Origem ou alcance desconhecidos mantêm a investigação aberta. Não prometer varredura perfeita nem afirmar que todas as cópias foram encontradas."
      }
    ]
  },
  "666": {
    "name": "Nex — Coração do Pacto",
    "title": "Alojamento Nex / ala de aliados",
    "risk": "Provocação anômala, foco hostil e sobrecarga da couraça",
    "intro": "Residência individual com quarto, sala de estar, banheiro e espaço pessoal. Nex não fica trancado entre missões: entra e sai para as áreas autorizadas pela sua credencial. Os recursos de contenção permanecem inativos na rotina e só são acionados diante de risco concreto.",
    "points": [
      [
        "01 / Quarto e vida cotidiana",
        "Cama, sofá, mesa, objetos pessoais e privacidade. A imagem mostra sua moradia, não uma prisão. Consultas e treinos têm horário; sair para o refeitório não exige liberação médica."
      ],
      [
        "02 / Porta de moradia",
        "Acesso comum por credencial, aberto ao morador na rotina. O bloqueio emergencial é independente e exige uma ocorrência registrada; não é o estado cotidiano da porta."
      ],
      [
        "03 / Painéis de interrupção",
        "No modo emergencial, painéis opacos e redução de comunicação direta ajudam a quebrar o contato que sustenta a marca de afronta. O efeito depende dos limites conhecidos da provocação e não apaga sua natureza anômala."
      ],
      [
        "04 / Artefatos em descanso",
        "Arco e selos ficam guardados por segurança, sem impedir o uso normal do quarto. Retirada para treino ou missão depende de autorização operacional; brincadeira no corredor não é ordem de combate."
      ],
      [
        "05 / Contingência discreta",
        "O anel local permanece desligado no repouso comum. Se houver manifestação perigosa, pode auxiliar a delimitação por tempo curto enquanto a equipe organiza a retirada; não oferece neutralização garantida."
      ]
    ],
    "limit": "Alojamento não é punição por ser SCP. Deboche comum, recusa de conversa ou sofrimento não são rebelião. Medidas restritivas precisam de risco demonstrado, duração registrada e revisão independente; encerrado o risco, a circulação normal é restabelecida.",
    "plans": [
      {
        "code": "A",
        "name": "Morador, não prisioneiro",
        "trigger": "Rotina entre missões, sem ameaça ativa.",
        "lead": "Responsável da ala e Nex; Bovas responde apenas pelo acompanhamento científico.",
        "steps": [
          [
            "Respeitar a credencial",
            "Circulação sem escolta nas áreas comuns e rotas autorizadas; o quarto não é fechado pela guarnição."
          ],
          [
            "Separar emprego e descanso",
            "Poderes não são usados em colegas sem treino consentido. Arco em repouso, consultas agendadas e privacidade preservada."
          ],
          [
            "Liberar a missão pelo cargo",
            "Comando autoriza o emprego operacional; isso não concede acesso à pesquisa, a outras celas ou à direção."
          ]
        ],
        "done": "Moradia normal e acesso coerente com a função.",
        "failure": "Sobrecarga: Plano B. Hostilidade concreta ou violação perigosa de acesso: Plano D."
      },
      {
        "code": "B",
        "name": "Fim do espetáculo",
        "trigger": "Marca involuntária ou sobrecarga, sem hostilidade deliberada.",
        "lead": "Bovas avalia; equipe de apoio presta assistência.",
        "steps": [
          [
            "Pausar a provocação",
            "Encerrar treino ou confronto e pedir a Nex que desfaça a marca."
          ],
          [
            "Reduzir estímulos",
            "Retirar a plateia e interromper o contato com o alvo; oferecer repouso e atendimento. Painéis só se a manifestação continuar perigosa."
          ],
          [
            "Reavaliar",
            "Registrar recuperação e separar restrição temporária de missão da liberdade cotidiana."
          ]
        ],
        "done": "Manifestação cessou e atendimento confirmou estabilidade.",
        "failure": "Persistindo risco, afastar terceiros e delimitar o setor; não presumir rebelião."
      },
      {
        "code": "C",
        "name": "Volta pra casa",
        "trigger": "Retorno ferido ou exausto de uma missão.",
        "lead": "Equipe de saúde e comando do Pacto.",
        "steps": [
          [
            "Receber o aliado",
            "Atender lesões e guardar o artefato com registro."
          ],
          [
            "Revisar a atuação",
            "Conferir alvos marcados, duração e sobrecarga. Não inventar ferimentos novos no relatório."
          ],
          [
            "Garantir recuperação",
            "Suspender nova missão se necessário; manter circulação compatível com as condições clínicas."
          ]
        ],
        "done": "Atendimento, registro e recursos conferidos.",
        "failure": "Sem recuperação, manter afastamento operacional; não converter repouso em encarceramento."
      },
      {
        "code": "D",
        "name": "Deboche acabou, protocolo começou",
        "trigger": "Agressão anômala deliberada, ameaça concreta ou tentativa perigosa de acesso restrito. Discordância ou brincadeira, isoladamente, não bastam.",
        "lead": "Comando de plantão, guarnição e Bovas como assessor técnico.",
        "steps": [
          [
            "Verificar o risco",
            "Confirmar presencialmente o fato e oferecer comunicação e desescalada por meio independente da provocação."
          ],
          [
            "Proteger terceiros",
            "Retirar pessoas do alcance e suspender apenas os acessos necessários à emergência. Interromper contato visual e voz dirigida quando sustentarem a marca."
          ],
          [
            "Conter por tempo limitado",
            "Se estiver no alojamento, ativar painéis e campo avaliado; se estiver fora, delimitar o local e empregar a equipe de resposta, sem supor retorno automático ao quarto."
          ],
          [
            "Encerrar e revisar",
            "Cessada a ameaça, realizar avaliação independente, registrar duração e danos e restituir a circulação. Restrição adicional exige justificativa própria."
          ]
        ],
        "done": "Ameaça cessou, pessoas protegidas e restrições revistas.",
        "failure": "Se as barreiras não bastarem, evacuar o setor e acionar resposta especializada. Não prometer captura infalível."
      }
    ]
  },
  "8080": {
    "name": "Ferro-Vivo",
    "title": "Alojamento Ferro-Vivo / loft técnico",
    "risk": "Chassi pesado, carga finita e interfaces tecnológicas",
    "intro": "Residência adaptada ao porte do ciborgue, com sala de estar reforçada, espaço pessoal e oficina de manutenção separada. Ferro-Vivo não vive exposto atrás de vidro: a saída para os corredores autorizados fica disponível na rotina. Isolamento de interfaces protege a rede sem encarcerar o morador.",
    "points": [
      [
        "01 / Loft habitável",
        "Mobiliário reforçado, iluminação acolhedora, objetos pessoais e área de descanso proporcional ao chassi. A antiga imagem de baia vigiada foi substituída por moradia."
      ],
      [
        "02 / Rotas acessíveis",
        "Circula sem escolta nas rotas aprovadas para seu peso e dimensão. Um corredor incapaz de suportá-lo não vira permitido só porque o destino é o café."
      ],
      [
        "03 / Oficina separada",
        "A carga e as ferramentas ficam em alcova própria, com alimentação independente. Conexão técnica exige autorização; acesso físico ao convívio não libera a rede central."
      ],
      [
        "04 / Pulso em modo seguro",
        "Projetor sem emissão na convivência. Ativação para treino ou missão segue o comando operacional, sem exigir que o aliado passe o dia desligado."
      ],
      [
        "05 / Reserva emergencial",
        "Portas reforçadas, zonas de afastamento e cortes das interfaces de serviço ficam em espera. Acionamento só por risco concreto; cortar a tomada não desliga o núcleo autônomo."
      ]
    ],
    "limit": "A contenção de emergência combina controle de acesso, separação de interfaces e resposta de equipe. Não existe botão universal que desligue Ferro-Vivo. A residência respeita privacidade; supervisão técnica e atendimento não o transformam em equipamento da Fundação.",
    "plans": [
      {
        "code": "A",
        "name": "Casa com oficina",
        "trigger": "Rotina entre missões e manutenção agendada.",
        "lead": "Ferro-Vivo e equipe técnica; comando valida o emprego operacional.",
        "steps": [
          [
            "Manter vida cotidiana",
            "Permitir ida e volta às áreas comuns pelas rotas compatíveis com o chassi, sem escolta permanente."
          ],
          [
            "Agendar manutenção",
            "Conferir temperatura, integridade e carga sem ligar o chassi à central. A oficina não substitui a sala de estar."
          ],
          [
            "Respeitar acessos",
            "Credencial de combatente não autoriza pesquisa, comando, arsenal ou Q-404."
          ]
        ],
        "done": "Morador em rotina estável, com manutenção e acessos corretos.",
        "failure": "Aquecimento: Plano B; suspeita de interface: Plano C; ameaça ativa: Plano D."
      },
      {
        "code": "B",
        "name": "Núcleo quente",
        "trigger": "Aquecimento ou dano após uso intenso.",
        "lead": "Bovas avalia; guarnição mantém o perímetro.",
        "steps": [
          [
            "Suspender emissões",
            "Interromper emprego de Pulso Órfão e esforço adicional."
          ],
          [
            "Aguardar recuperação",
            "Manter espaço e acompanhamento sem inventar resfriamento instantâneo."
          ],
          [
            "Reavaliar a reserva",
            "Não transferir carga às cegas de outro equipamento."
          ]
        ],
        "done": "Estado recuperado e serviço conferido.",
        "failure": "Persistindo instabilidade, afastar terceiros da área de manutenção e prestar suporte; dano ou sofrimento não comprovam rebelião."
      },
      {
        "code": "C",
        "name": "Interface suspeita",
        "trigger": "Dados incompatíveis ou contato com meio não avaliado.",
        "lead": "Camera Man preserva arquivo limpo; Bovas analisa.",
        "steps": [
          [
            "Manter separação",
            "Não conectar à central para verificar se há problema."
          ],
          [
            "Preservar evidências",
            "Manter o meio suspeito separado do arquivo limpo."
          ],
          [
            "Conferir de fora",
            "Estado e autorizações comparados por fontes independentes."
          ]
        ],
        "done": "Suspeita esclarecida e interfaces técnicas liberadas expressamente; circulação física é avaliada separadamente.",
        "failure": "Investigação aberta; nenhuma imunidade a 0404 é presumida."
      },
      {
        "code": "D",
        "name": "Gigante em emergência",
        "trigger": "Agressão, emissão perigosa ou acesso restrito com ameaça confirmada.",
        "lead": "Comando de plantão e resposta militar; Bovas assessora a avaliação.",
        "steps": [
          [
            "Confirmar e dialogar",
            "Verificar a ameaça por observação independente e tentar desescalada. Não presumir culpa a partir de uma imagem isolada."
          ],
          [
            "Separar pessoas e redes",
            "Evacuar a rota atingida e suspender as interfaces de serviço. Não conectar um diagnóstico à central."
          ],
          [
            "Conter no local",
            "Usar as barreiras reforçadas e a equipe de resposta adequadas ao setor. Sem retorno forçado garantido à residência; o núcleo continua autônomo."
          ],
          [
            "Revisar a restrição",
            "Após cessar o risco, atender danos, registrar decisões e reavaliar acessos por responsável independente."
          ]
        ],
        "done": "Ameaça interrompida, atendimento realizado e restrições revistas.",
        "failure": "Se a estrutura não suportar, ampliar o afastamento e acionar reforço. A moradia não é uma jaula indestrutível."
      }
    ]
  }
};

function containmentPlate(id){const u=containmentUnits[id];const place=id==='199'?"recinto":isAlliedSCP(id)?"alojamento":"cela";const phrase=place==="cela"?"da cela":`do ${place}`;return `<figure class="cell-plate"><a href="cela-${id}.svg" target="_blank" rel="noopener" aria-label="Ampliar desenho ${phrase} do SCP-${id}"><img src="cela-${id}.svg" width="1200" height="800" alt="Desenho ${phrase} do SCP-${id}, com cinco componentes numerados e setas; explicações completas abaixo" loading="lazy"></a><figcaption>PLANTA ${id} / Esquema conceitual fictício, sem escala. Toque no desenho para ampliar.</figcaption></figure>`}
function containmentSection(id){const u=containmentUnits[id];return `<section class="containment-unit" id="cela-${id}"><div class="eyebrow">${isAlliedSCP(id)?"MORADIA E CONTINGÊNCIAS":"ARQUITETURA DE CONTENÇÃO"} / SCP-${id}</div><h2>${u.title}</h2><p>${u.intro}</p>${isAlliedSCP(id)?alliedAccessPolicy(id):""}${containmentInterior(id)}${containmentPlate(id)}<div class="cell-notes">${u.points.map(p=>`<div><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('')}</div><div class="warning"><b>LIMITE DA CONTENÇÃO:</b> ${u.limit}</div>${containmentPlans(id)}<p><a class="file-link" href="#scp-${id}">DOSSIÊ DO SCP-${id} ↗</a> · <a class="file-link" href="#contencao">VER UNIDADES E ALOJAMENTOS ↗</a></p></section>`}
function containmentDirectory(){return `${crumb('UNIDADES DE CONTENÇÃO')}<div class="eyebrow">ENGENHARIA / PROTOCOLOS / BR-67</div><h1>Contenção para o risco.<br>Moradia para os aliados.</h1><p class="intro">Nove arquivos SCP, onze indivíduos e sete unidades adaptadas (E-005 em fase experimental). SCP-7777 permanece não contido, sem cela eficaz. SCP-0842 permanece não contido por decisão estratégica de monitoramento e não possui cela atribuída. SCP-199 reúne três instâncias Safe num recinto confortável com saídas controladas por sigilo. Nex e Ferro-Vivo vivem na ala de aliados e circulam conforme a função. Barreiras emergenciais ficam em espera; não trancam moradores na rotina.</p><div class="cell-index">${['6767','1999','0404','005','666','8080','199'].map(id=>{const u=containmentUnits[id];return `<a class="cell-index-card" href="#cela-${id}"><span class="eyebrow">SCP-${id}</span><h2>${u?.name||'Error'}</h2><p>${u?.risk||'Manifestação visual, pixelização e lentidão mental'}</p><span class="file-link">${isAlliedSCP(id)?"VER ALOJAMENTO E ACESSOS":id==='005'?"VER ISOLAMENTO EXPERIMENTAL":"VER CELA E PROTOCOLO"} ↗</span></a>`}).join('')}</div><div class="warning"><a href="#scp-7777">SCP-7777 / Padre Daycaros</a> está não contido e não recebeu uma cela funcional. <a href="#scp-0842">SCP-0842 / Homem da Salsicha</a> também está não contido, mas por decisão de proporcionalidade e por não existir método duradouro comprovado; não possui cela na BR-67. A classe Ticonderoga e o risco potencial severo não mudam seu comportamento cordial. Camera Man original, funcionários, forças-tarefa e lendas não receberam celas de SCP. Os convidados do Banquete e 1999-S são tratados dentro dos protocolos das entidades às quais estão associados.</div>${['6767','1999','0404'].map(containmentSection).join('')+errorContainmentSection()+['666','8080','199'].map(containmentSection).join('')}<div class="document-end">FIM DO MAPA / INSTALAÇÃO BR-67 · <a href="#arquivo">VOLTAR AO ARQUIVO ↑</a></div>`}

function containmentInterior(id){const u=containmentUnits[id];const place=id==='199'?"recinto":isAlliedSCP(id)?"alojamento":"cela";const phrase=place==="cela"?"da cela":`do ${place}`;const file=id==="8080"?"alojamento-8080.png":`cela-${id}-ocupada.png`;return `<figure class="cell-interior"><a href="${file}" target="_blank" rel="noopener" aria-label="Ampliar imagem do interior ${phrase} do SCP-${id}"><img src="${file}" width="1536" height="1024" alt="${id==='0404'?'Camera Man Corrompido reconhecível no monitor isolado da quarentena':u.name+(id==='199'?' no recinto confortável compartilhado':isAlliedSCP(id)?' em seu alojamento de residente aliado':' dentro de sua cela de contenção')}" loading="lazy"></a><figcaption>VISTA INTERNA / SCP-${id} — ${id==='199'?'A, B e C aparecem juntos, com os retratos originais como referência.':id==='0404'?'O clone aparece apenas na tela, com o visual da ficha do SCP-0404.':u.name+' aparece na unidade, usando seu retrato como referência.'} Cena ilustrativa. O diagrama e os planos continuam abaixo.</figcaption></figure>`}
function containmentPlans(id){const u=containmentUnits[id];return `<section class="containment-plans" aria-labelledby="plans-${id}"><div class="section-head"><h2 id="plans-${id}">${isAlliedSCP(id)?"Rotina e contingências do alojamento":"Planos de contenção"} / SCP-${id}</h2><span>${u.plans.length} PLANOS · ETAPAS E CONTINGÊNCIAS</span></div><p>Comece pelo gatilho de cada plano. O Plano A cobre a rotina; os demais entram conforme a falha ou manifestação observada. Cada procedimento tem uma condição de encerramento e uma resposta se não funcionar.</p>${u.plans.map((p,i)=>`<details class="containment-plan" ${i===0?'open':''}><summary><span class="plan-code">PLANO ${p.code}</span><span class="plan-name">${p.name}</span><span class="plan-count">${p.steps.length} etapas</span></summary><div class="plan-body"><dl class="plan-meta"><div><dt>QUANDO ATIVAR</dt><dd>${p.trigger}</dd></div><div><dt>QUEM RESPONDE</dt><dd>${p.lead}</dd></div></dl><ol class="plan-steps">${p.steps.map(st=>`<li><h3>${st[0]}</h3><p>${st[1]}</p></li>`).join('')}</ol><div class="plan-result"><b>ENCERRAR QUANDO</b><p>${p.done}</p></div><div class="plan-failure"><b>SE NÃO FUNCIONAR</b><p>${p.failure}</p></div></div></details>`).join('')}</section>`}

function isAlliedSCP(id){return id==='666'||id==='8080'}
function alliedAccessPolicy(id){return `<section class="allied-access" aria-label="Circulação e acesso do residente SCP-${id}"><div class="eyebrow">RESIDENTE ALIADO / CREDENCIAL OPERACIONAL MTF-13</div><h3>Aqui é casa. O crachá ainda vale.</h3><p>Sem escolta permanente e sem confinamento de rotina. Ser SCP não retira a condição de aliado; ser aliado não concede cargo de pesquisador, comando ou acesso geral.</p><div class="unit-comparison"><table><thead><tr><th>Regime</th><th>Áreas e regras</th></tr></thead><tbody><tr><td>Livre na rotina</td><td>Alojamento, convivência, refeitório, academia e corredores comuns liberados. Para Ferro-Vivo, apenas rotas compatíveis com peso e porte.</td></tr><tr><td>Autorização específica</td><td>Treino anômalo agendado, oficina, arsenal e laboratório de missão: só pelo trabalho designado, com responsável e acompanhamento quando exigido.</td></tr><tr><td>Restrito pelo cargo</td><td>Centro de comando, arquivos sigilosos, pesquisa fora da designação, outras celas e Q-404. Nex não provoca a catraca; Ferro-Vivo não pede acesso à tomada.</td></tr><tr><td>Saída da instalação</td><td>Missão ou autorização de saída registrada. Circular dentro da Fundação não equivale a licença de operação externa.</td></tr><tr><td>Emergência</td><td>Risco concreto pode suspender acessos de forma temporária. Medida registrada, proporcional e revisada; divergência, piada ou atendimento médico não são rebelião.</td></tr></tbody></table></div><p><b>Privacidade:</b> sem vigilância em banheiro ou quarto de descanso. Monitoramento operacional fica nas áreas comuns e nos espaços técnicos, conforme a rotina do setor. As regras são parte da ficção deste arquivo.</p></section>`}


const entityConductProfiles={
 '199':{name:'J.J.J. — Jeferson Jegue Jr.',classification:'Safe',stance:'Neutro / amigável',agency:'A, B e C convivem sem hostilidade deliberada. Suas capacidades podem ajudar a Fundação ou causar um acidente se usadas fora da rotina; isso não os torna maliciosos.',reason:'Rotina previsível e recinto adequado permitem contenção estável. Permanecem recolhidos para preservar o sigilo, com conforto e saídas autorizadas.'},
 '1999':{name:'Senhor Larper',classification:'Keter',stance:'Hostil / deliberado',agency:'Larper sabe que inventa cargos e ordens e usa a persuasão conscientemente para obter acesso, escapar e colocar outras pessoas a serviço dos próprios objetivos. Pode agir de modo simpático enquanto manipula; conversa cordial não equivale a cooperação.',reason:'Fugas repetidas, infiltração de funções e capacidade de comprometer a confiança entre funcionários tornam a contenção difícil de sustentar. Keter se refere a essa dificuldade. A manifestação 1999-S continua intermitente e sem controle completo demonstrado; a hostilidade deliberada não lhe concede domínio novo sobre a variante.'},
 '0404':{name:'Camera Man Corrompido',classification:'Euclid',stance:'Hostil / deliberado',agency:'O vírus e sua instância clonada falsificam registros, imitam funcionários e tentam obter acesso de forma consciente. A sabotagem serve a um objetivo próprio; não é fome, confusão inocente ou a vontade do Camera Man original.',reason:'A instância conhecida permanece restrita ao Q-404 por isolamento e pela Grade de Quadros, com acompanhamento contínuo. A origem e o alcance completo ainda são incertos, e falhas de conexão podem romper o isolamento. Euclid não significa bondade nem ausência de perigo.'},
 '6767':{name:'Kanecomus / Kaneka',classification:'Keter',stance:'Pacífico / hostil conforme a fome',agency:'Quando o abastecimento o mantém saciado ou temporariamente tranquilo, pode conversar e conviver de forma pacífica. Quando a fome domina, consome o que encontra pela frente e pode causar danos extremos. O impulso alimentar faz parte de sua natureza; a agressividade não é tratada como um projeto consciente de fazer o mal.',reason:'A fome recorrente, a capacidade de consumir barreiras e as fugas tornam a contenção difícil de manter. A leitura do Banquete e das duas anomalias desconhecidas continua separada: não foi demonstrado controle pleno de todos os efeitos nem intenção maligna por trás de cada consequência.'}
};
Object.assign(entityConductProfiles['199'],{relationship:'Contenção de sigilo / apoio eventual',state:'Residentes do R-199'});
Object.assign(entityConductProfiles['1999'],{relationship:'Sob contenção restritiva',state:'Contido após recuperação'});
Object.assign(entityConductProfiles['0404'],{relationship:'Quarentena de entidade hostil',state:'Recontido no Q-404'});
Object.assign(entityConductProfiles['6767'],{relationship:'Contenção alimentar',state:'Contido no módulo alimentar de reserva'});
entityConductProfiles['666']={name:'Nex / SCP-666',classification:'Thaumiel',stance:'Aliado / cooperativo',relationship:'Aliado operacional / MTF-13',state:'Residente autorizado',agency:'Integra o Pacto da Resenha e coopera em operações autorizadas. O Deboche Infernal é empregado em campo ou em treino consentido; a condição anômala não o torna automaticamente um prisioneiro.',reason:'Thaumiel registra seu emprego como recurso anômalo na captura e contenção de outros SCPs: atração do foco, proteção breve e abertura de espaço para a equipe de recuperação, dentro dos limites conhecidos do Deboche Infernal. Vive em alojamento e circula por credencial. A classe não garante obediência ou neutralização de qualquer alvo.'};
entityConductProfiles['8080']={name:'Ferro-Vivo / SCP-8080',classification:'Thaumiel',stance:'Aliado / cooperativo',relationship:'Aliado operacional / MTF-13',state:'Residente autorizado',agency:'Combatente cooperante do Pacto da Resenha, com decisões próprias e emprego autorizado. O chassi, a interface tecnológica e a manutenção não o reduzem a equipamento guardado na instalação.',reason:'Thaumiel registra seu emprego como recurso anômalo de apoio à captura e contenção de outros SCPs, com proteção pesada e interação com sistemas compatíveis. Carga, aquecimento e interfaces continuam limitados. Mora no loft técnico e usa rotas adequadas ao porte; contingências ficam separadas da moradia.'};
function conductNote(id){const p=entityConductProfiles[id];return `<section class="entity-conduct" aria-label="Classe e comportamento do SCP-${id}"><div class="eyebrow">CLASSE / COMPORTAMENTO / VÍNCULO</div><h3>${p.classification} · ${p.stance}</h3>${p.risk?`<p><b>Risco potencial:</b> ${p.risk}</p>`:''}<p><b>Vínculo:</b> ${p.relationship}<br><b>Estado atual:</b> ${p.state}</p><p><b>Comportamento e intenção:</b> ${p.agency}</p><p><b>Por que esta classe:</b> ${p.reason}</p><a class="file-link" href="#classificacoes">Entender classes, posturas e vínculos ↗</a></section>`}
function conductOverview(){return `<section class="conduct-overview"><div class="section-head"><h2>Classe e comportamento</h2><span>CONTER / COMPREENDER</span></div><p>Safe, Euclid e Keter descrevem requisitos e dificuldade de contenção. Thaumiel identifica anomalias empregadas para ajudar a conter outras anomalias. Ticonderoga registra uma anomalia fora do alcance de contenção conhecido e sem necessidade atual de encarceramento. A postura registra comportamento e intenção. O vínculo distingue residentes aliados, entidades contidas por sigilo e ameaças sob contenção restritiva. Apoio eventual não equivale a cargo operacional.</p><p><a class="file-link" href="#classificacoes">Ler o guia de classificações e risco ↗</a></p><div class="unit-comparison"><table><thead><tr><th>Entidade</th><th>Classe</th><th>Postura</th><th>Vínculo / estado</th></tr></thead><tbody>${['199','1999','0404','6767','005','666','8080','7777','0842'].map(id=>{const p=entityConductProfiles[id];return `<tr><td><a class="file-link" href="#scp-${id}">${p.name} ↗</a></td><td>${p.classification}</td><td>${p.stance}</td><td>${p.relationship}<br><small>${p.state}</small></td></tr>`}).join('')}</tbody></table></div></section>`}

entityConductProfiles['005']={name:'Error / SCP-005',classification:'Keter',stance:'Nocivo por natureza / sem malícia confirmada',relationship:'Contenção audiovisual experimental',state:'Terminal E-005 / estabilidade não confirmada',agency:'Compreende linguagem humana e tenta responder por gestos e pixels incompletos, sem fala ou sinais plenamente confiáveis. A pixelização do observador parece um efeito natural da manifestação, não um ataque intencional comprovado.',reason:'Não há prova de que a separação das redes impeça a entidade de aparecer em outras telas. O risco de fuga por meios visuais e o mecanismo desconhecido tornam a contenção difícil. Nenhuma manifestação externa foi confirmada após INC-034.'};

entityConductProfiles['0842']={name:'O Homem da Salsicha',classification:'Keter',stance:'Neutro / defensivo',relationship:'Acompanhamento externo / sem captura coercitiva',state:'Não contido / localização intermitente',risk:'Potencial local / reação defensiva a agressões',agency:'Ministra explicações voluntárias sobre fabricação de salsichas, sem hostilidade espontânea confirmada. Diante de agressão ou imobilização coercitiva, transforma matéria inanimada nas proximidades e busca sair. Não persegue pessoas após cessar a ameaça.',reason:'O mecanismo de evasão é desconhecido, câmeras podem repetir 08:42 e nenhuma contenção duradoura foi demonstrada. Bovas, Joana e forças especializadas poderiam, em tese, desenvolver uma operação com boa chance de êxito, mas não comprovaram. A captura foi adiada pelo custo, risco de escalada e comportamento neutro. Keter não indica maldade nem poder absoluto.'};
