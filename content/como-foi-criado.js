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
      data: null,
      prompt: "inserir",
      skills: [],
      resultado: "inserir",
      commit: "inserir"
    }
  ]
};
