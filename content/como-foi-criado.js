// Dados da aba "Como esse site foi criado" (como-foi-criado.html).
// Novos prompts entram no FIM da lista `prompts`, via skill /inserir-prompt (veja CLAUDE.md).
// Textos exibidos aceitam uma string ou { pt, en }.
window.COMO_FOI_CRIADO = {
  agente: {
    provedora: "Anthropic — Claude",
    agenteCodificacao: "Opus 5.5",
    esforco: { pt: "Alto", en: "High" },
    ferramenta: "Claude Code",
    ambiente: { pt: "App desktop do Claude (aba Code), Linux", en: "Claude desktop app (Code tab), Linux" },
    modo: { pt: "Auto mode, em git worktree isolada", en: "Auto mode, in an isolated git worktree" },
    inicio: "2026-11-02"
  },

  // { nome, descricao: { pt, en }, url (opcional) }
  skills: [
    {
      nome: "Impeccable",
      descricao: { pt: "Adquirida em", en: "Acquired from" },
      url: "https://impeccable.style/"
    }
  ],

  // { data, prompt (texto integral), skills: [], resultado: { pt, en }, commit }
  // Item com prompt "inserir" é placeholder: a skill /inserir-prompt o substitui.
  prompts: [
    {
      data: "2026-11-02",
      prompt: "## Contexto\nVamos criar um site de portfólio para apresentar meu perfil, minhas habilidades e os trabalhos que realizei. Ele será hospedado gratuitamente no GitHub Pages, a partir do repositório do GitHub já configurado neste diretório.\n\n## Objetivo\nO site deve ser fácil de ler e de navegar para entrevistadores. Cada página mostra primeiro um resumo; os detalhes ficam em abas e listas expansíveis, para que o entrevistador aprofunde apenas o que quiser.\n\n## Abas\nO site terá 4 abas:\n\n1. **Início**: resumo do meu currículo, com:\n   - o principal trabalho que realizei;\n   - meu objetivo profissional;\n   - três listas: soft skills, hard skills e linguagens de programação (com o meu nível em cada uma).\n2. **Trabalhos**: cada trabalho realizado, em detalhe. Os trabalhos aparecem como uma lista de itens fechados; ao abrir um item, aparece o que foi feito nele.\n3. **Como foi criado**: a engenharia de prompt usada para criar o site, com a sequência dos prompts. Crie a skill `/inserir-prompt <texto>`: quando eu a chamar, o texto deve ser adicionado como o próximo item da lista de prompts desta aba.\n4. **Contato**: não é uma página; em qualquer aba, ela leva até o rodapé.\n\n## Rodapé\nPresente em todas as abas, com contato e outros portfólios:\n- E-mail: [removido]\n- LinkedIn: https://www.linkedin.com/in/atos-arruda-6b903422a\n- GitHub: https://github.com/AtosAiresArruda\n- Hugging Face: https://huggingface.co/AtosArruda\n\n## Tarefa\n1. Crie o site de portfólio descrito acima.\n2. Escreva um plano de implementação para eu revisar e editar. Esse plano servirá para atualizar e melhorar o site no futuro.",
      skills: ["Impeccable"],
      resultado: { pt: "Criada a primeira versão do site (PT/EN), em uma página única com seções, e o plano de melhorias em PLANO.md.", en: "Built the first version of the site (PT/EN) as a single page with sections, plus the improvement plan in PLANO.md." },
      commit: "7442ba7"
    },
    {
      data: "2026-11-03",
      prompt: "## Objetivo\nVamos atualizar as abas \"Início\" e \"Trabalhos\" com base na seção \"Texto\" abaixo.\n\n## Tarefa\n1. **Aba Início**: atualize as listas Hard skills, Soft skills e Linguagens com base na seção \"Texto\". As Linguagens são as citadas nas hard skills.\n2. **Aba Início**: nessas três listas, mostre apenas palavras-chave. Cada palavra-chave deve ter um link para o item correspondente na aba \"Trabalhos\".\n3. **Aba Trabalhos**: monte uma lista de itens expansíveis (fechados por padrão), um para cada experiência, na mesma ordem em que aparecem na seção \"Experiências\" do texto. As três Iniciações Científicas ficam como subitens do item \"Iniciações Científicas\".\n4. **Aba Trabalhos**: coloque todas as informações de cada experiência no seu item, de forma detalhada, para o entrevistador ler.\n\n## Texto\n\n### Atos Aires Arruda\n- Telefone: [removido]\n- LinkedIn: linkedin.com/in/atos-arruda-6b903422a\n- Hugging Face: https://huggingface.co/AtosArruda\n- E-mail: [removido]\n- GitHub: github.com/AtosAiresArruda\n\n### Objetivo\nIngressar em um estágio com foco em IA e automação para desenvolver meu conhecimento técnico na tecnologia que irá dominar o mercado, os LLMs, para produzir, adaptar e melhorar modelos de IA especializados.\n\n### Formação\nBacharelado em Ciência da Computação | UTFPR | cursando o 6º período | 2024 – 2028\n\n### Hard skills\n1. Domínio técnico da estrutura e do funcionamento de LLMs;\n2. QLoRA, LoRA e API Unsloth;\n3. Python: algoritmos de visão computacional com OpenCV;\n4. Infraestrutura em nuvem e on-premise (básico);\n5. Agentes de codificação: prompt engineering e SDD;\n6. Domínio de conceitos e aplicação da linguagem C;\n7. Raciocínio lógico avançado aplicado à programação.\n\n### Soft skills\n1. Liderança;\n2. Comunicação e trabalho em equipe;\n3. Gestão de prazos e recursos técnicos;\n4. Visão analítica e solução de problemas;\n5. Aprendizagem autodidata.\n\n### Experiências\n\n#### 1. Iniciações Científicas – UTFPR (2025 – set/2026)\n\n**1.1. Desenvolvimento: Reconstrução de Documentos**\nNesta pesquisa, desenvolvi um algoritmo de stitching em Python e criei um algoritmo auxiliar de descarte de imagens redundantes, que reduziu o tempo de execução para 1/10 do tempo da versão linear desse algoritmo. Atualmente, os dois algoritmos que produzi estão em produção na empresa parceira deste projeto.\n\n**1.2. Serviços Adicionais: Cascata de Filtros**\nImplementei também dois filtros classificatórios em Python. Os dois filtros têm o propósito de impedir que imagens ruins sejam enviadas para a infraestrutura processar. O primeiro filtro detecta se a imagem está borrada, e o segundo detecta se há um documento na imagem. Ambos foram implementados em Python.\n\n**1.3. Biblioteca HLA em IoT**\nNesta pesquisa, produzi uma interface em Python para a biblioteca HLA em IoT. A biblioteca depende de arquivos XML que descrevem os simuladores embutidos. Desenvolvi um gerador desses arquivos XML que facilita o uso da biblioteca.\n\n#### 2. Treinamento de Modelos de LLM – TCC (2026 – 2027)\nEstou produzindo um modelo com módulo de visão aplicado à leitura de documentos digitalizados. A pesquisa envolve o treinamento de um modelo para executar a tarefa de OCR. A tese é consumir menos processamento e obter o mesmo resultado que os grandes modelos comerciais e open-source. Estou aplicando fine-tuning no gemma-4-E2B-it para fazer OCR de documentos digitalizados com saída em JSON. Atualmente, como prova de conceito, estou treinando com QLoRA. Após a prova de conceito, o projeto pretende usar LoRA com o adaptador AdamW-Fusion.\n\n#### 3. Fundador e Presidente – Projeto Extensionista Projeto Comando (nov/2025 – atual)\nSou o fundador e idealizador e assumi a responsabilidade de estruturar e organizar um projeto que produz aulas aprofundadas da linguagem C, com o viés da Ciência da Computação. Construí uma estrutura empresarial para dar aos alunos da minha universidade a oportunidade de encontrar um ambiente onde são incentivados a se profissionalizar. Como líder, sempre tive o objetivo de incentivar meus colaboradores a irem além. Aprendi a lidar com problemas de gestão e a organizar projetos. Estou encerrando meu trabalho deixando para a universidade uma estrutura de desenvolvimento profissional.\nCanal: www.youtube.com/@CursoComando\n\n#### 4. Game Designer – KnockUp Game Studio (mai/2025 – mar/2026)\nLiderei uma equipe de desenvolvimento como Game Designer, na qual desenvolvemos um jogo beat 'em up. Na KnockUp, aprendi a controlar o escopo de projetos, analisando a viabilidade técnica das ideias em função do tempo de execução do projeto. Como experiência, trago a visão analítica de engenharia de software e a habilidade de reconhecer as ideias que valem o esforço aplicado.\nCanal de portfólio: https://youtu.be/GO1i7AmktE0?si=RlZmFYKJtsXteXQM\n\n#### 5. Menor Aprendiz – Zup Innovation (nov/2021 – fev/2023)\nTive minha primeira experiência no mercado de trabalho como menor aprendiz na área de desenvolvimento. Estive imerso na infraestrutura do Itaú como desenvolvedor aprendiz.",
      skills: [],
      resultado: null,
      commit: null
    }
  ]
};
