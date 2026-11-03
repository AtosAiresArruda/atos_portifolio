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
  prompts: [
    {
      data: "2026-11-03",
      prompt: "Vamos trabalhar na aba \"Como foi criado\". \n\nAdicione o conteúdo abaixo em cada tópico.\n## Configuração do agente:\nProvedora: Antropic -- Claude\nAgente de codificação: Opus5.5\nEsforço: Alto\n\n## Skills utilizadas\nInpeccable, adiquirida em https://impeccable.style/\n\n## Resumo\nTroque o título \"Resumo\" para \"Nota do programador\"\n\"Aqui está passo a passo de cada prompt para reproduzir esse site\" \n\nInsira em prompts um card ordenado numero com # e número. Exemplo: #1, #2, #3...\n## Prompts\n#1 \"Inserir\"\n#2 \"Inserir\"\n#3 \"inserir\"",
      skills: [],
      resultado: { pt: "Configuração do agente com provedora, agente de codificação e esforço; skill Impeccable listada; \"Resumo\" virou \"Nota do programador\"; cards numerados como #1, #2, #3...", en: "Agent setup now lists provider, coding agent and effort; Impeccable skill listed; \"Summary\" became \"Developer's note\"; cards numbered #1, #2, #3..." },
      commit: "500da68"
    }
  ]
};
