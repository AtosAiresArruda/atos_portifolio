# Relatório P2.2 · `/impeccable audit` (acessibilidade, performance e responsividade)

> Data: 2026-11-11 · Versão auditada: `main` em `5980c4f` (a mesma que está no ar).
> Páginas: Início, Trabalhos, Estudo de caso do TCC, Como foi criado e o rodapé (Contato). Medido no navegador embutido em 1440×900, 768×1024, 375×812, 320×640, 320×256 (equivale a zoom de 400%) e com a fonte raiz em 200%.
>
> Este documento só registra o que a skill encontrou. Nada foi alterado no site.

## 1. Nota de saúde técnica

| # | Dimensão | Nota | Principal achado |
|---|---|---|---|
| 1 | Acessibilidade | 2 | Atalhos de uma tecla (1–4) sem como desligar (WCAG 2.1.4, nível A). O texto da demo JSON do TCC tem contraste de 1,98:1 e 2,6:1. |
| 2 | Performance | 3 | Site enxuto: ~100 KB próprios + ~52 KB de fontes. O CSS do Google Fonts bloqueia a renderização, e a foto tem 519px mas aparece com 104px. |
| 3 | Temas (cores e tokens) | 3 | Os tokens são bem usados na interface. Há 17 cores fixas fora dos tokens, na demo e no "documento digitalizado". Não há modo escuro nem `color-scheme`. |
| 4 | Responsividade | 3 | Nenhuma página rola para os lados em nenhuma largura. Em 320px a aba "Contato" fica cortada; o anel de foco das abas é cortado no celular; o texto em px não acompanha a fonte do usuário. |
| 5 | Integridade da implementação | 3 | O sistema visual é próprio do produto. Há um bug de cascata confirmado (`.code .k` sobrescreve `.demo__out .k`). Cabeçalho, rodapé e ícones estão copiados em cada página e já divergem. |
| **Total** | | **14/20** | **Bom**: vale corrigir as dimensões mais fracas |

Faixas: 18–20 Excelente · 14–17 Bom · 10–13 Aceitável · 6–9 Fraco · 0–5 Crítico.

## 2. Veredito de integridade da implementação

**Aprovado, com ressalvas.** A implementação é um sistema coerente e próprio do produto, não um template trocável:
- a metáfora de repositório: `AtosAiresArruda / atos-arruda`, teclas de atalho, citação em BibTeX, contato em `Candidate.from_pretrained`;
- a demo rotulada honestamente como sintética;
- as cores dos chips ligadas a categorias por meio de tokens.

**Detector** (`impeccable detect --json` nas 4 páginas):
- **`overused-font`** (Geist e Geist Mono), 8 ocorrências, 2 por página. A regra dispara corretamente, mas é uma observação de estilo, não um defeito. É uma decisão para o `/impeccable typeset` (já previsto no P2.3).
- **`flat-type-hierarchy`** (aviso), só em Trabalhos. Confirmado: corpo 16px, h3 17px, h2 21px, com salto máximo de 1,24:1 entre níveis. É um problema real, mas pequeno: o h1 de até 41,6px dá a hierarquia de topo.
- **Varredura renderizada:** não rodou. O detector não encontrou Chrome, Chromium, Edge ou Brave instalados para analisar a URL, então só a varredura dos arquivos rodou. As verificações na página renderizada foram feitas à mão.

**Problemas que o detector não pegou, confirmados à mão:**
- **Bug de cascata** que apaga as cores da demo (P1, abaixo). Conferi na fonte: [styles.css:297–298](../styles.css) (`.demo__out .k/.s`) é sobrescrito por [styles.css:359–360](../styles.css) (`.code .k/.s`). A especificidade é igual, então vale a regra que vem depois.
- **Cópias divergindo.** Cabeçalho, navegação, rodapé e o sprite de ícones estão copiados nas 4 páginas e já divergem:
  - a aba "Trabalhos" no estudo de caso não tem `aria-current` ([trabalhos/tcc.html:53](../trabalhos/tcc.html));
  - o sprite muda de página para página;
  - o status do TCC diz "Produzindo" em [index.html:83](../index.html) e "Em treinamento" em [trabalhos.html:85](../trabalhos.html) e [trabalhos/tcc.html:69](../trabalhos/tcc.html).

## 3. Resumo executivo

- **Nota:** 14/20 (Bom).
- **Problemas encontrados:** P0: 0 · P1: 2 · P2: 9 · P3: 5.
- **Principais problemas:**
  1. As teclas 1–4 são atalhos globais de uma tecla, sem como desligar. Disparam até com um botão em foco: apertar "2" com o botão EN focado trocou de página.
  2. As chaves e textos da demo JSON do TCC têm contraste de 1,98:1 e 2,6:1 no painel escuro, em todas as larguras.
  3. Os nomes acessíveis não acompanham o idioma. Os `aria-label` misturam "PT / EN" ou estão só em PT, e os prompts (em português) não têm `lang`; no modo EN, o leitor de tela os lê com voz em inglês.
  4. A confirmação "Copiado!" não é anunciada ao leitor de tela.
  5. No celular, o anel de foco das abas é cortado; em 320px, a aba "Contato" fica cortada sem indicação de rolagem.

## 4. Achados por severidade

### P1 · Grave

**[P1] Atalhos de uma tecla não podem ser desligados nem remapeados**
- **Onde:** [script.js:43–57](../script.js), que escuta as teclas 1–4 em todas as páginas. As dicas vêm dos `<kbd>` da navegação de cada página.
- **Categoria:** Acessibilidade.
- **Impacto:**
  - A proteção só ignora `input`, `textarea` e `contenteditable`; não ignora botões, links nem `select`.
  - Medido: com foco no botão EN, apertar "4" rolou até o rodapé e o foco ficou no topo; apertar "2" em seguida trocou de página.
  - Quem usa entrada por voz, ou leitor de tela em modo de formulário, pode navegar sem querer.
  - O "4" move a tela mas não o foco, então o próximo Tab volta ao topo.
- **Norma:** WCAG 2.1.4 (A); 2.4.3 para o comportamento do "4".
- **Recomendação:**
  - exigir um modificador (Alt+número), disparar só quando o foco está no `body`, ou oferecer um botão para desligar;
  - nos alvos da própria página, mover o foco (`tabindex="-1"` + `.focus()`);
  - tirar o `<kbd>` do nome acessível, já que hoje as abas são lidas como "Início 1", "Trabalhos 2".
- **Comando:** `/impeccable harden`.

**[P1] As chaves e textos da demo JSON do TCC quase não aparecem no painel escuro**
- **Onde:** [styles.css:297–298](../styles.css) é sobrescrito por [styles.css:359–360](../styles.css). Aparece em [trabalhos/tcc.html:101](../trabalhos/tcc.html).
- **Categoria:** Acessibilidade / Integridade.
- **Impacto:**
  - As chaves ficam azul-escuras (#2433c2) e os textos verde-escuros (#0b6656) sobre o painel #0f1729.
  - Contraste: **1,98:1** nas chaves e **2,6:1** nos textos, em fonte de 13px.
  - Só os números e a pontuação saem como planejado.
  - É o visual principal do projeto mais importante do site.
- **Norma:** WCAG 1.4.3 (AA).
- **Recomendação:** aumentar a especificidade (`.code.demo__out .k`) ou mover as regras da demo para depois de `.code`. O ideal é criar tokens para o painel de código escuro (`--code-dark-bg`, `--code-dark-k`, …), para o problema não voltar.
- **Comando:** `/impeccable colorize`.

### P2 · Moderado

**[P2] Nomes acessíveis e textos originais ignoram a troca de idioma**
- **Onde:**
  - `aria-label` misturados: "Idioma / Language" e "Sessões / Sections" (todas as páginas), "Caminho / Breadcrumb", "Nesta página / On this page", "Ficha técnica / Spec", "Navegação entre trabalhos / Project navigation", "Nota do programador / Developer's note";
  - o link do logo tem `aria-label="Atos Aires Arruda: início"`, só em PT;
  - o `<blockquote>` dos prompts ([script.js:182–183](../script.js)) não tem `lang`;
  - a `meta description` e as tags `og:*` estão só em PT.
- **Categoria:** Acessibilidade.
- **Impacto:**
  - O leitor de tela lê os dois idiomas com a mesma voz, ou com a voz errada.
  - O nome do logo não contém o texto visível ("AtosAiresArruda/atos-arruda"), o que atrapalha quem navega por voz.
- **Norma:** WCAG 3.1.2 (AA) e 2.5.3 (A, no limite).
- **Recomendação:**
  - trocar os rótulos por `aria-labelledby` apontando para spans PT e EN escondidos, que o mecanismo de idioma atual já controla;
  - pôr `lang="pt"` no `blockquote` dos prompts;
  - tirar o `aria-label` do logo ou fazê-lo começar pelo texto visível.
- **Comando:** `/impeccable harden`.

**[P2] A confirmação "Copiado!" não é anunciada**
- **Onde:** [script.js:84–93](../script.js); botão do rodapé em todas as páginas.
- **Impacto:** o texto troca sem uma região "live", então quem usa leitor de tela não recebe confirmação. Se a cópia falha, a página abre o `mailto:` sem avisar.
- **Norma:** WCAG 4.1.3 (AA).
- **Recomendação:** um elemento escondido com `role="status"` que recebe a mensagem, e um estado visível de falha no lugar do `mailto:` silencioso.
- **Comando:** `/impeccable harden`.

**[P2] O anel de foco é cortado na linha de abas do celular**
- **Onde:** [styles.css:417](../styles.css) (`.tabs__row { overflow-x: auto }` em ≤560px), somado a [styles.css:46](../styles.css) (`outline-offset: 2px`).
- **Impacto:** em 375px, a aba focada ocupa a linha inteira. Como `overflow-x: auto` força `overflow-y: auto`, o contorno perde o topo e a base e só aparecem as laterais (confirmado em captura).
- **Norma:** WCAG 2.4.7 (AA, degradado).
- **Recomendação:** `outline-offset: -2px` dentro de `.tabs__row`, ou padding vertical na linha.
- **Comando:** `/impeccable polish`.

**[P2] Em 320px, a aba "Contato" fica cortada sem indicação de rolagem**
- **Onde:** [styles.css:416–419](../styles.css).
- **Impacto:**
  - Em 320px a linha tem 342px de conteúdo para 320 de largura, e a aba aparece como "Contat".
  - A barra de rolagem está escondida e não há esmaecimento nem seta.
  - Em EN cabe (313px), e em PT cabe a partir de 375px.
- **Recomendação:** esmaecer a borda quando há rolagem, encurtar "Como foi criado" no celular, ou reduzir o padding das abas abaixo de 360px.
- **Comando:** `/impeccable adapt`.

**[P2] Ordem visual e ordem do código divergem em ≤960px**
- **Onde:** [styles.css:387](../styles.css) (`.rail { order: -1 }`). Afeta Trabalhos (índice) e o estudo de caso (ficha técnica).
- **Impacto:** em tablet e celular, o índice e a ficha técnica aparecem acima do conteúdo, mas vêm depois dele na ordem de Tab e de leitura. Confirmado em 768px no estudo de caso.
- **Norma:** WCAG 2.4.3 e 1.3.2.
- **Recomendação:** pôr o `<aside>` antes do conteúdo no HTML e posicionar pela grade no desktop, ou tirar o `order: -1`.
- **Comando:** `/impeccable layout`.

**[P2] O texto em px ignora o tamanho de fonte escolhido no navegador**
- **Onde:** [styles.css:38](../styles.css) (`font: 400 16px/1.6`). São 47 declarações de fonte em px contra 12 em rem.
- **Impacto:** com a fonte raiz em 200%, o resumo e os títulos dobraram, mas os parágrafos (16px), as abas (14px), os cards e a lista de habilidades (14,5px) não mudaram. O zoom da página funciona, então não falha o 1.4.4.
- **Recomendação:** passar a escala tipográfica para rem (`body { font-size: 1rem }`, 14px → `.875rem`).
- **Comando:** `/impeccable typeset`.

**[P2] Com zoom de 400%, o cabeçalho fixo ocupa 41% da tela**
- **Onde:** [styles.css:87–93](../styles.css) (`.topbar` fixo: 104px no celular, 108px no desktop).
- **Impacto:** em 320×256, 104 dos 256px ficam presos no topo e sobram ~150px para ler.
- **Norma:** WCAG 1.4.10 (AA, usabilidade).
- **Recomendação:** soltar o cabeçalho em telas baixas (`@media (max-height: 500px) { .topbar { position: static } }`).
- **Comando:** `/impeccable adapt`.

**[P2] Alvos de toque abaixo dos 44px recomendados**
- **Medido em 375px:**
  - PT/EN: 36×30;
  - botão de contato só com ícone: 36×36;
  - `.btn`: 36px de altura;
  - "Repetir": 91×30;
  - links-CTA de 22px de altura ("Ver todos os 7 trabalhos", "Canal no YouTube", paginação);
  - logo da UTFPR: 63×20.
- **Impacto:** todos passam no WCAG 2.5.8, por tamanho (≥24px) ou por espaçamento. Mas ficam abaixo dos 44px recomendados no celular, que recrutadores às vezes usam.
- **Recomendação:** em `@media (pointer: coarse)`, altura mínima de 44px ou área de toque estendida com padding ou pseudo-elemento.
- **Comando:** `/impeccable adapt`.

**[P2] O painel JSON da demo fica apertado no tablet**
- **Onde:** [styles.css:288](../styles.css) (grade de 3 colunas) e [styles.css:399](../styles.css) (só empilha em ≤720px).
- **Impacto:** a largura do conteúdo passa da largura visível em todas as telas: 364 vs 358px em 1440, 292 em 768, 269 em 375 e 214 em 320. Em 768, os textos ficam escondidos atrás de uma barra de rolagem.
- **Recomendação:** empilhar a partir de ~900px, ou quebrar linha na saída (`white-space: pre-wrap`).
- **Comando:** `/impeccable adapt`.

### P3 · Acabamento

**[P3] As fontes carregam por uma cadeia de terceiros que bloqueia a renderização**
- **Onde:** linhas 14–16 de cada página.
- **Impacto:**
  - Cadeia: HTML → CSS do fonts.googleapis.com (bloqueante) → woff2 do gstatic (29,4 KB Geist + 23,1 KB Geist Mono).
  - `display=swap` sem ajuste das fontes de reserva pode causar um salto de layout na troca.
  - O CLS a frio não pôde ser medido, porque as fontes estavam em cache.
- **Recomendação:** hospedar as duas fontes no próprio site com `<link rel="preload">` e `size-adjust` nas fontes de reserva.
- **Comando:** `/impeccable optimize`.

**[P3] A foto de perfil é maior do que precisa**
- **Onde:** `images/perfil.jpg` (519×519, 39 KB), exibida a 104×104 e 28×28.
- **Impacto:** em 2×, bastaria uma versão de 208px. Além disso, o `og:image` usa URL relativa, que muitos sites de prévia ignoram.
- **Recomendação:** exportar versões de 208px e 56px (WebP ou AVIF, com `srcset`) e usar URL absoluta no `og:image`.
- **Comando:** `/impeccable optimize`.

**[P3] Cores fixas fora dos tokens e sem `color-scheme`**
- **Onde:**
  - [styles.css:296–325](../styles.css), 17 cores fixas na demo e no documento digitalizado;
  - `#fff` 4 vezes ([styles.css:45, 57, 76, 108](../styles.css));
  - `theme-color` repetido em cada HTML.
- **Impacto:**
  - Esses dois componentes não acompanham uma mudança de tema.
  - Não há modo escuro (o PRODUCT.md não exige; o P2.3 lista como item).
- **Recomendação:** tokens como `--on-accent`, `--code-dark-*` e `--paper-*`, e declarar `color-scheme: light` ou criar o tema escuro.
- **Comando:** `/impeccable colorize`.

**[P3] O nome acessível dos títulos das colunas de habilidades inclui a legenda**
- **Onde:** [index.html:143, 153, 164](../index.html).
- **Impacto:** o `<small>` "onde usei" faz parte do título, que é lido como "Hard skills onde usei".
- **Recomendação:** tirar a legenda de dentro do `<h3>`.
- **Comando:** `/impeccable polish`.

**[P3] Marcação copiada já está divergindo**
- **Onde:** cabeçalho, rodapé e sprite copiados nas 4 páginas. Falta `aria-current` em [trabalhos/tcc.html:53](../trabalhos/tcc.html), e os chips de status do TCC divergem.
- **Recomendação:** um rótulo único de status para o TCC e `aria-current` na aba-mãe das subpáginas. Considerar uma fonte única para as partes compartilhadas.
- **Comando:** `/impeccable polish`.

## 5. Padrões sistêmicos

- **O bilinguismo é só visual.** `[lang]` + `display:none` ([styles.css:54–55](../styles.css)) funciona bem para o texto visível. Tudo o que fica fora disso não recebe tratamento de idioma: atributos (`aria-label`), textos originais (os prompts) e metadados. O padrão de `aria-label` "PT / EN" aparece 7 vezes nas 4 páginas.
- **A escala tipográfica está em px**, com 47 declarações em px contra 12 em rem. Por isso a fonte não escala de forma uniforme quando o usuário muda o tamanho no navegador.
- **Os tamanhos de toque foram pensados para mouse.** Os controles de 30–36px e os links de 22px nunca crescem em `pointer: coarse`.
- **As partes compartilhadas são copiadas à mão nas 4 páginas** e começaram a divergir (`aria-current`, sprite, texto do status).
- **Os componentes ilustrativos fogem dos tokens**, e foi exatamente aí que o bug de cascata apareceu.

## 6. O que está bom

- **Contraste forte na interface principal.**
  - O par mais baixo fora do bug da demo é 5,46:1 (kbd de 11px sobre #f6f7f9).
  - O texto secundário fica em 5,82–5,85:1, e os chips em 5,92–7,33:1.
  - Links têm 8,1–9,0:1, o código do rodapé 6,2–8,1:1, e o branco sobre o azul de destaque 7,22:1.
- **Semântica sólida.**
  - Um h1 por página, sem pular níveis.
  - Regiões banner, nav, main, aside e contentinfo, e o skip link funciona.
  - `aria-current` nas abas e no breadcrumb, `aria-pressed` no botão de idioma.
  - `alt=""` no avatar decorativo, e `alt` descritivo na foto e no logo.
- **O idioma escondido sai mesmo da árvore de acessibilidade.** O botão de contato só com ícone mantém o nome no idioma ativo. O script no `<head>` define o idioma antes da primeira pintura, então não há troca visível.
- **Foco consistente.** O contorno de 2px em `:focus-visible` aparece em todo lugar, e `scroll-padding-top: 116px` evita que o alvo focado fique escondido sob o cabeçalho fixo.
- **Movimento reduzido tratado com cuidado.** A animação de entrada só roda em `no-preference`, a rolagem suave desliga com `reduce`, e a demo mostra o estado final em vez de digitar.
- **Páginas leves.**
  - HTML de 10–24 KB, CSS de 23 KB e JS de 11 KB no fim do `body`, sem framework.
  - As imagens têm largura e altura definidas (CLS a quente: 0).
  - DCL em 23ms e load em 36ms localmente.
  - Nenhuma imagem com carregamento lazy, o que está certo, porque todas aparecem na primeira tela.
- **Nenhuma página rola para os lados** em 1440, 768, 375 ou 320. Os blocos de código rolam dentro da própria caixa.

## 7. Ações recomendadas (ordem de prioridade)

1. **[P1] `/impeccable harden`:** limitar ou tirar os atalhos 1–4 (modificador, só com foco no `body`, ou botão para desligar), mover o foco no "4" e tirar o `<kbd>` do nome das abas.
2. **[P1] `/impeccable colorize`:** corrigir a cascata `.code` × `.demo__out` e criar tokens para o painel de código escuro. Aproveitar para pôr em tokens as cores do documento digitalizado e os `#fff`.
3. **[P2] `/impeccable harden`:** `aria-label` bilíngues via `aria-labelledby`, `lang="pt"` nos prompts, nome do logo começando pelo texto visível, e `role="status"` para o "Copiado!".
4. **[P2] `/impeccable adapt`:** alvos de 44px em `pointer: coarse`, indicação de rolagem nas abas em 320px, cabeçalho solto em telas baixas e empilhamento mais cedo da demo.
5. **[P2] `/impeccable layout`:** ordem do código do trilho lateral igual à ordem visual em ≤960px.
6. **[P2] `/impeccable typeset`:** escala tipográfica de px para rem (junto com a decisão sobre a Geist, do P2.3).
7. **[P3] `/impeccable optimize`:** hospedar e pré-carregar a Geist, ajustar as fontes de reserva, reduzir `perfil.jpg` e usar URL absoluta no `og:image`.
8. **[P3] `/impeccable polish`:** anel de foco das abas no celular, legendas dos títulos de habilidades, `aria-current` nas subpáginas e rótulo único de status do TCC. Por último.

## 8. O que não foi possível testar

- **Varredura renderizada do detector:** não há navegador baseado em Chromium instalado para o detector, então só a varredura dos arquivos rodou.
- **Métricas a frio** (salto de layout na troca de fontes, LCP, tamanhos reais transferidos): o navegador estava com tudo em cache. Os tamanhos das fontes foram medidos com `curl`.
- **Caminho de execução com `prefers-reduced-motion: reduce`:** o navegador usado não emula essa preferência, então foi verificado só pelo código.
- **Leitor de tela real e toque real:** só a árvore de acessibilidade e teclas sintetizadas. As larguras foram emuladas no Chromium, não testadas em aparelho físico.
- **Modo EN:** verificado definindo o idioma de cada página direto, sem clicar no botão EN, para não interferir nas outras avaliações que rodavam ao mesmo tempo.
