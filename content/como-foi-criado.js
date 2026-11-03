// Dados da aba "Como esse site foi criado" (como-foi-criado.html).
// Novos prompts entram no FIM da lista `prompts` (veja CLAUDE.md).
// Textos exibidos aceitam uma string ou { pt, en }.
window.COMO_FOI_CRIADO = {
  agente: {
    ferramenta: "Claude Code",
    ambiente: { pt: "App desktop do Claude (aba Code), Linux", en: "Claude desktop app (Code tab), Linux" },
    modelo: "Claude Opus 5.5 (claude-opus-5-5)",
    modo: { pt: "Auto mode, em git worktree isolada", en: "Auto mode, in an isolated git worktree" },
    inicio: "2026-11-02"
  },

  // { nome, descricao: { pt, en } }
  skills: [
    {
      nome: "impeccable",
      descricao: {
        pt: "Skill de design de interface (impeccable.style): critique, audit, polish e outros comandos de revisão e refino.",
        en: "Interface design skill (impeccable.style): critique, audit, polish and other review and refinement commands."
      },
      url: "https://impeccable.style/"
    },
    {
      nome: "built-in-browser",
      descricao: {
        pt: "Navegador embutido do app do Claude, usado para abrir o site local e conferir o resultado em várias larguras de tela.",
        en: "The Claude app's built-in browser, used to open the local site and check the result at several screen widths."
      }
    }
  ],

  // { data, prompt (texto integral), skills: [], resultado: { pt, en }, commit }
  prompts: [
    {
      data: "2026-11-02",
      prompt: "Adicione um plano de trabalho para ter uma aba no site descrevendo \"Como esse site foi criado\" que descreverá qual agente foi utilizando com quais skills e quais prompts foram utilizados.",
      skills: [],
      resultado: { pt: "Criado o plano de trabalho da aba.", en: "Wrote the work plan for this tab." },
      commit: "645561d"
    },
    {
      data: "2026-11-02",
      prompt: "Faça o commit das alterações da árvore de trabalho com uma mensagem adequada.",
      skills: [],
      resultado: { pt: "Commit do plano de trabalho.", en: "Committed the work plan." },
      commit: "645561d"
    },
    {
      data: "2026-11-02",
      prompt: "Vamos implementar isso antes de realizar o PR. Crie uma aba HTML contendo as seguintes informações:\n\nUm quadro contendo as configurações do agente e skills utilizadas e na sequencia uma sequência de card contendo prompts que eu vou inserir. Adicione no Claude.md que a cada vez que eu inserir um prompt ele deve salvar o todo o conteúdo do prompt e colocar no próximo item dessa sequência de cards",
      skills: [],
      resultado: { pt: "Criada a primeira versão da aba, o arquivo de dados e a regra de registro no CLAUDE.md.", en: "Built the first version of this tab, its data file and the logging rule in CLAUDE.md." },
      commit: "bfeed9d"
    },
    {
      data: "2026-11-02",
      prompt: "Faça os commits e o push para o repositório no git hub. Faça um PR após isso",
      skills: [],
      resultado: { pt: "Push da branch para o GitHub. O PR não pôde ser aberto pelo agente (GitHub CLI ausente).", en: "Pushed the branch to GitHub. The agent could not open the PR (no GitHub CLI)." },
      commit: "324b7c1"
    },
    {
      data: "2026-11-02",
      prompt: "Sim, integrar",
      skills: [],
      resultado: { pt: "Aba integrada ao site: mesmo cabeçalho, menu, rodapé e estilos, com item novo no menu de todas as páginas.", en: "Tab merged into the site: same header, menu, footer and styles, with a new menu item on every page." },
      commit: "7e6e370"
    },
    {
      data: "2026-11-02",
      prompt: "Não faça o PR. Verifique se tudo está em núvem no repositório git hub",
      skills: [],
      resultado: { pt: "Conferido que a branch no GitHub tem todos os commits locais; PR não aberto, a pedido.", en: "Checked that the GitHub branch has every local commit; no PR opened, as requested." },
      commit: null
    },
    {
      data: "2026-11-03",
      prompt: "Vamos trabalhar na aba \"início\". Baixe a skill inpeccable da fonte https://impeccable.style/. Utilize a skill critique do inpeccable para criticar a aba Início. Vamos revisar as criticas e comparar ao plano de implementação P2.",
      skills: ["impeccable"],
      resultado: { pt: "Skill impeccable instalada; crítica da aba Início (nota 21/32) comparada ao plano P2, com decisão de pôr o TCC antes das habilidades e tirar as barras de nível.", en: "Installed the impeccable skill; critiqued the Home tab (21/32) against the P2 plan and decided to put the thesis before the skills and drop the level bars." },
      commit: "fcdb032"
    },
    {
      data: "2026-11-03",
      prompt: "realize 1. 2. 3. e 4. em sequencia",
      skills: ["impeccable", "built-in-browser"],
      resultado: { pt: "Início reordenada (TCC antes das habilidades), habilidades enxutas sem barras de nível e botão de contato do celular com nome acessível.", en: "Reordered Home (thesis before skills), trimmed the skills without level bars and gave the mobile contact button an accessible name." },
      commit: "fcdb032"
    },
    {
      data: "2026-11-03",
      prompt: "Sim, commitar",
      skills: [],
      resultado: { pt: "Commit da crítica e das mudanças na aba Início.", en: "Committed the critique and the Home tab changes." },
      commit: "fcdb032"
    },
    {
      data: "2026-11-03",
      prompt: "Sim, fazer push",
      skills: [],
      resultado: { pt: "Push da branch da aba Início para o GitHub.", en: "Pushed the Home tab branch to GitHub." },
      commit: null
    }
  ]
};
