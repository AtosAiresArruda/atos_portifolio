// Dados da aba "Como esse site foi criado".
// Novos prompts entram no FIM da lista `prompts` (veja CLAUDE.md).
window.COMO_FOI_CRIADO = {
  agente: {
    ferramenta: "Claude Code",
    ambiente: "App desktop do Claude (aba Code), Windows 11",
    modelo: "Claude Opus 5.5 (claude-opus-5-5)",
    modo: "Auto mode, em git worktree isolada",
    inicio: "2026-11-02"
  },

  // { nome, descricao, usadaEm: ["..."] }
  skills: [],

  // { data, prompt (texto integral), skills: [], resultado, commit }
  prompts: [
    {
      data: "2026-11-02",
      prompt: "Adicione um plano de trabalho para ter uma aba no site descrevendo \"Como esse site foi criado\" que descreverá qual agente foi utilizando com quais skills e quais prompts foram utilizados.",
      skills: [],
      resultado: "Criado o plano de trabalho em docs/plano-aba-como-foi-criado.md.",
      commit: "645561d"
    },
    {
      data: "2026-11-02",
      prompt: "Faça o commit das alterações da árvore de trabalho com uma mensagem adequada.",
      skills: [],
      resultado: "Commit do plano de trabalho.",
      commit: "645561d"
    },
    {
      data: "2026-11-02",
      prompt: "Vamos implementar isso antes de realizar o PR. Crie uma aba HTML contendo as seguintes informações:\n\nUm quadro contendo as configurações do agente e skills utilizadas e na sequencia uma sequência de card contendo prompts que eu vou inserir. Adicione no Claude.md que a cada vez que eu inserir um prompt ele deve salvar o todo o conteúdo do prompt e colocar no próximo item dessa sequência de cards",
      skills: [],
      resultado: "Criada a página como-foi-criado.html, o arquivo de dados content/como-foi-criado.js e a regra de registro no CLAUDE.md.",
      commit: null
    },
    {
      data: "2026-11-02",
      prompt: "Faça os commits e o push para o repositório no git hub. Faça um PR após isso",
      skills: [],
      resultado: "Commit da aba, push da branch e abertura do PR.",
      commit: null
    }
  ]
};
