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
    }
  ]
};
