# Plano de trabalho — Aba "Como esse site foi criado"

## Objetivo

Adicionar ao portfólio uma aba/página **"Como esse site foi criado"** que mostre, de forma transparente, como o site foi construído com IA:

- qual **agente** foi utilizado (ferramenta, modelo e modo de uso);
- quais **skills** foram usadas e para quê;
- quais **prompts** foram enviados, em ordem cronológica, com o resultado de cada um.

## Contexto atual

O repositório ainda contém apenas o `README.md` — não há stack de front-end definida. Este plano é independente de framework: a aba deve ser implementada com a mesma tecnologia que for escolhida para o restante do site. Por isso, a **coleta dos dados começa já**, antes da página existir.

## Conteúdo da aba

| Seção | O que mostra | Exemplo |
|---|---|---|
| **Resumo** | Um parágrafo explicando que o site foi criado com apoio de um agente de IA e qual foi o papel humano (decisões, revisão, ajustes). | "Este site foi construído em parceria com o Claude Code…" |
| **Agente** | Nome da ferramenta, modelo, ambiente e período de uso. | Claude Code (app desktop, aba Code) · modelo Claude Opus 5.5 · nov/2026 |
| **Skills** | Lista de skills utilizadas, cada uma com descrição curta e em quais etapas foi usada. | `impeccable` — design e polimento da interface; `code-review` — revisão do código antes do merge |
| **Linha do tempo de prompts** | Cada prompt em um cartão: data, prompt original (texto integral), skill(s) envolvida(s), resumo do que foi feito e link para o commit/PR. | 02/11/2026 — "Adicione um plano de trabalho para ter uma aba…" → criou este documento |
| **Lições aprendidas** (opcional) | O que funcionou bem, o que precisou ser corrigido manualmente. | — |

## Fonte dos dados

Para não precisar editar HTML a cada prompt, os dados ficam em um arquivo versionado no repositório, que a página carrega. É um arquivo `.js` (e não `.json`) para que a página funcione também quando aberta direto do disco, sem servidor:

```
content/como-foi-criado.js
```

Formato (atribuído a `window.COMO_FOI_CRIADO`):

```json
{
  "agente": {
    "nome": "Claude Code",
    "ambiente": "App desktop (aba Code)",
    "modelo": "Claude Opus 5.5",
    "periodo": "2026-11"
  },
  "skills": [
    { "nome": "impeccable", "descricao": "Design, crítica e polimento de interface", "usadaEm": ["layout inicial"] }
  ],
  "prompts": [
    {
      "data": "2026-11-02",
      "prompt": "Adicione um plano de trabalho para ter uma aba no site descrevendo \"Como esse site foi criado\" que descreverá qual agente foi utilizando com quais skills e quais prompts foram utilizados.",
      "skills": [],
      "resultado": "Criado o plano docs/plano-aba-como-foi-criado.md",
      "commit": null
    }
  ]
}
```

## Etapas

1. **Criar o registro de dados** — adicionar `content/como-foi-criado.js` com o agente e o primeiro prompt (o deste plano).
2. **Definir a convenção de registro** — a cada sessão com o agente, adicionar uma entrada em `prompts` (data, texto integral, skills, resultado, commit). Documentar essa regra no `README.md` (ou em um `CLAUDE.md`, para que o próprio agente lembre de registrar).
3. **Recuperar o histórico** — quando a aba for implementada, revisar as sessões anteriores do Claude Code (histórico do app/transcripts) e preencher os prompts que ainda não estiverem no arquivo de dados.
4. **Implementar a página** — na stack escolhida para o site:
   - adicionar o item "Como esse site foi criado" na navegação principal;
   - renderizar as seções a partir do arquivo de dados (resumo, agente, skills, linha do tempo);
   - prompts longos ficam recolhidos com "ver prompt completo".
5. **Design** — usar a skill `impeccable` para alinhar a aba ao visual do site (tipografia, cartões da linha do tempo, responsividade e modo escuro).
6. **Revisão de privacidade** — antes de publicar, remover dos prompts qualquer dado sensível (e-mails, chaves, caminhos locais da máquina).
7. **Revisão e publicação** — rodar `code-review`, testar no navegador (desktop e celular) e publicar.

## Critérios de aceite

- [ ] A aba aparece na navegação e abre em URL própria (ex.: `/como-foi-criado`).
- [ ] Agente, modelo e skills estão identificados corretamente.
- [ ] Todos os prompts usados na construção do site estão listados em ordem cronológica, com o texto original.
- [ ] Cada prompt aponta para o commit/PR correspondente quando houver.
- [ ] Nenhum dado sensível é exibido.
- [ ] A página funciona bem em telas de celular (largura ~375px) e em modo escuro.
- [ ] Adicionar um novo prompt exige apenas editar `content/como-foi-criado.js`.
