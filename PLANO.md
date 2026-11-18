# Plano de trabalho: portfólio Atos Aires Arruda

> Documento vivo. Edite à vontade: marque `[x]` no que estiver feito, risque o que não fizer sentido, reordene prioridades.
> Site: https://atosairesarruda.github.io/atos_portifolio/

## Ordem de execução

1. **P0 ✅**: bloqueadores antes de enviar o link (foto, textos e decisões).
2. **P2: design e experiência** ← *prioridade atual*. Começa por **P2.1 Sessões**, porque muda a estrutura do site; as revisões com a skill (P2.2 em diante) só valem depois que a estrutura nova existir.
3. **P1**: provas. Cada item de P1 vira conteúdo de uma sessão de nível 2 (estudo de caso).
4. **P3**: técnico.

## Estado atual (v0.2: sessões)

- Site estático (HTML/CSS/JS puro), hospedado no GitHub Pages, com **três sessões em páginas separadas**:
  - **Início** (`index.html`): resumo, habilidades em três colunas (hard skills · soft skills · linguagens por nível), destaque do TCC e cartões de outros trabalhos.
  - **Trabalhos** (`trabalhos.html`): todos os trabalhos agrupados por experiência, no formato problema · o que fiz · resultado, com índice lateral que acompanha a rolagem.
  - **Estudo de caso do TCC** (`trabalhos/tcc.html`): demo OCR → JSON, etapas e ficha técnica.
- Conceito visual: **"model card"** (Hugging Face). Contato e citação no rodapé de todas as páginas.
- Estética (2026-11-18, PR #10): faixas **azul-marinho `#0b205e` e brancas** alternadas, topo de cada página com borda em onda, destaque em ciano e escala tipográfica com texto corrido em 17px. Detalhes e pendências em **P2.3**.
- Bilíngue PT/EN com botão no topo; a escolha vale para todas as páginas.
- Navegação: abas Início · Trabalhos · Contato, atalhos de teclado `1`–`3`, caminho (breadcrumb) nas páginas internas.

### Onde editar o conteúdo

| O quê | Arquivo | Observação |
|---|---|---|
| Resumo, habilidades, níveis, destaque, cartões | `index.html` | Cada texto existe em dois `<span>`: `lang="pt-BR"` e `lang="en"`. Edite os dois. |
| Trabalhos (problema · o que fiz · resultado) | `trabalhos.html` | Cada trabalho tem um `id` (ex.: `#stitching`) usado nos links da Início. |
| Estudo de caso do TCC | `trabalhos/tcc.html` | Caminhos com `../` (está numa subpasta). |
| Contato e citação | rodapé de **cada** página | Repetido nos três arquivos: altere nos três. |
| Nível de uma linguagem | `index.html`, classe `lvl--3` / `lvl--2` / `lvl--1` | 3 = Alto, 2 = Médio, 1 = Estudando. Troque também o texto. |
| Cores, fontes, espaçamentos | `styles.css` | Tokens no topo (`:root`). Tamanhos de fonte só pelas variáveis `--t-*`. |
| Cores dentro das faixas escuras | `styles.css`, regra `.on-dark` | Redefine os mesmos tokens (texto, destaque, cartões, código) para o fundo azul-marinho. |
| Qual seção é escura | HTML de cada página | Classes `band--dark on-dark` na seção; `band--hero` no topo (ganha a onda). A barra do topo e o rodapé usam só `on-dark`. |
| Idioma, abas, atalhos, índice, demo | `script.js` | Campos da demo em `fields`. |
| Foto | `images/perfil.jpg` | Quadrada, mínimo 400×400 px. |

---

## P0: antes de enviar o link a qualquer recrutador

- [x] **Trocar a foto de perfil.** Foto real no lugar do placeholder.
- [x] **Revisar todos os textos em PT e EN.** Traduções conferidas.
- [x] **Decidir sobre o telefone.** Decisão (2026-11-18): **o telefone não aparece no site**; fica só no currículo. O site já está sem telefone.
- [x] **Confirmar o que pode ser dito sobre a empresa parceira** da IC. Decisão (2026-11-18): no lugar de "empresa parceira", usar **"empresa Varejo 360"**. Aplicado em [trabalhos.html:125 e :138](trabalhos.html), em PT e EN; não há outras menções nas páginas.
- [x] **CV em PDF para download.** Decisão (2026-11-18): **não haverá download do CV nem acesso ao currículo pelo site.** Nenhum botão a criar.
- [x] **Conferir os perfis de destino.** Decisão (2026-11-18): o site ganha **uma aba sobre os modelos publicados no Hugging Face**. O trabalho ficou para depois: ver "Aba Modelos (Hugging Face)" no P1.

## P2: design e experiência (prioridade atual)

### P2.1 Sessões: o detalhe cresce conforme o interesse do entrevistador ✅ (v0.2)

A ideia: o entrevistador escolhe até onde quer descer. Cada sessão responde a uma pergunta diferente e termina com um caminho para a próxima.

| Nível | Sessão | Pergunta que responde | Tempo de leitura |
|---|---|---|---|
| N0 | **Início** (aba principal) | "Quem é e serve para a vaga?" | ~30 s |
| N1 | **Trabalhos realizados** | "O que já fez de verdade?" | 2–3 min |
| N2 | **Estudo de caso** (uma página por trabalho) | "Como fez? Sabe explicar as escolhas?" | 5–10 min |

#### Sessão N0: Início

Ordem do conteúdo, de cima para baixo:

- [x] **Resumo** (2–3 frases): quem sou, o que busco e a prova mais forte. Absorveu o antigo "Uso pretendido".
- [x] **Habilidades em três colunas**: hard skills (com "onde usei") · soft skills · linguagens.
- [x] **Linguagens por nível**: Alto (C) · Médio (Python) · Estudando (Git), com indicador de 3 passos e o texto do nível.
- [x] **Título do TCC logo após as habilidades**, visível sem rolar em telas de notebook (testado em 1440×900 e 1366×768). No celular ele vem depois das colunas, que ficam empilhadas.
- [x] **Módulo "Outros trabalhos realizados"**: 3 cartões (Stitching, Projeto Comando, KnockUp) + link "Ver todos os 7 trabalhos".
- [x] Contato no topo e no rodapé de todas as sessões.
- [ ] Hard skills ainda **sem nível**: decidir se recebem Alto / Médio / Estudando como as linguagens.
- [ ] Soft skills sem evidência (comunicação, visão analítica, autodidata): ligar a um trabalho ou cortar.

#### Sessão N1: Trabalhos realizados

- [x] Projetos e experiência numa página só: cada experiência agrupa os trabalhos dela (TCC; IC → stitching, cascata de filtros, HLA/IoT; Projeto Comando; KnockUp; Zup).
- [x] Formato fixo: problema · o que fiz · resultado · tecnologias (liderança usa "o que fiz · resultado · aprendi") · *Ler estudo de caso →* quando existe.
- [x] Ordem por relevância para IA/LLM; o índice lateral mostra as datas e funciona como linha do tempo.
- [ ] **Revisar os textos "Problema"**: foram escritos a partir do CV e precisam da sua confirmação (principalmente stitching e filtros).
- [ ] Opcional: filtro por área (LLM · Visão · Pesquisa · Liderança/ensino · Jogos).

#### Sessão N2: Estudos de caso

- [x] `trabalhos/tcc.html`: demo OCR → JSON, etapas (agora / próxima / planejada) e ficha técnica. Recebe os itens de P1 do TCC.
- [ ] Revisar o texto das etapas do TCC (descrição do QLoRA e da comparação planejada).
- [ ] `trabalhos/stitching.html` em segundo lugar (imagens antes/depois, gráfico de tempo).
- [ ] Os demais só quando houver material real (imagens, métricas, vídeo). Sem material, o trabalho fica só na N1.

#### Decisões técnicas (aplicadas)

- **Uma página HTML por sessão** (`index.html`, `trabalhos.html`, `trabalhos/tcc.html`) em vez de abas trocadas por JS. Assim cada sessão tem URL própria (dá para mandar ao entrevistador o link direto do TCC), o botão Voltar do navegador funciona e a página abre mesmo sem JS. O custo é repetir o cabeçalho em cada arquivo, aceitável com 3 a 5 páginas e sem build.
- A navegação do topo passa a ter só **Início · Trabalhos · Contato**. Nos estudos de caso, mostrar o caminho: *Início / Trabalhos / TCC*. Com só 3 itens, o problema das abas rolando no mobile desaparece.
- O idioma escolhido continua valendo entre páginas (já fica salvo no navegador).
- Atalhos `1` Início · `2` Trabalhos · `3` Contato; a aba Contato acende quando o rodapé aparece.
- O conceito "model card" se mantém: no Hugging Face, a página de um modelo também tem abas (*Model card · Files and versions · Community*). Início = model card, Trabalhos = arquivos e versões, estudo de caso = Space/demo.

#### Níveis

| Item | Tipo | Nível (Alto / Médio / Estudando) | Onde usei |
|---|---|---|---|
| C | linguagem | **Alto** | Projeto Comando |
| Python | linguagem | **Médio** | IC, TCC |
| Git | ferramenta | **Estudando** | |
| Fine-tuning (QLoRA/LoRA) | hard skill | | TCC |
| Visão computacional (OpenCV) | hard skill | | IC: stitching, filtros |
| Agentes de codificação / SDD | hard skill | | |
| Inglês | idioma | (nível: ex. B2) | |

### P2.2 Revisão com a skill (depois de P2.1)

- [x] `/impeccable critique`: revisão heurística das sessões novas, com nota. Feito em 2026-11-11 (22/32, Aceitável): [docs/relatorio-p2.2-critique.md](docs/relatorio-p2.2-critique.md).
- [x] `/impeccable audit`: acessibilidade, performance, responsivo. Feito em 2026-11-11 (14/20, Bom): [docs/relatorio-p2.2-audit.md](docs/relatorio-p2.2-audit.md).

### P2.2.1 Plano de implementação da revisão ← *próxima etapa*

> Montado em 2026-11-18 a partir dos dois relatórios de P2.2, com as ferramentas do impeccable:
> - **`shape`:** entrevista de direção;
> - **`generate` / `live`:** 3 variantes de cada elemento no navegador, com a escolha registrada em [docs/prototipos/](docs/prototipos/).
>
> **Regra deste plano:** nenhum texto sobre os trabalhos é criado pelo agente. Tudo o que muda conteúdo está no **Bloco C** e espera o texto do Atos. Os Blocos A, B e D só mexem em estrutura, estilo, acessibilidade e código.
>
> **Meta:** rodar `/impeccable critique` e `/impeccable audit` de novo no fim e chegar a **critique ≥ 26/32** e **audit ≥ 17/20**. Hoje: 22/32 e 14/20.

#### Decisões já tomadas (shape, 2026-11-18)

| Tema | Decisão |
|---|---|
| Conceito "model card" | **Reescrever o brief** para o site de 4 páginas. O model card fica só como tom (caminho de repositório no topo, rodapé), sem trilho de metadados nem demo na Início. |
| Aba "Como foi criado" | **Fica nas abas, com os prompts recolhidos.** Card escolhido: variante "Prévia do prompt" (6 linhas). Ver [docs/prototipos/card-de-prompt.md](docs/prototipos/card-de-prompt.md). |
| Atalhos 1–4 | **Disparam só quando nenhum controle está focado.** O `4` passa a mover o foco para o rodapé. |
| Primeira tela da Início | **TCC e produção lado a lado** (variante 1, com o TCC maior). Ver [docs/prototipos/inicio-primeira-tela.md](docs/prototipos/inicio-primeira-tela.md). |

#### Ordem de execução

1. **A1 e A2 ✅:** os dois problemas graves (P1) do audit. São pequenos e isolados.
2. **D1:** brief atualizado, antes de mexer no layout.
3. **B1, B2 e A7/A8:** estrutura da Início, de "Como foi criado" e do TCC no celular. B2, A7 e A8 ✅; falta o B1.
4. **A3–A6, A9, A10 ✅:** acessibilidade e celular.
5. **Bloco C:** conforme você entregar os textos. Pode correr em paralelo.
6. **A11–A18:** junto com o P2.3 (`typeset` e a decisão sobre a Geist). A11 e A17 ✅ e metade do A18 ✅ (PR #10); faltam A12–A16 e as bordas do A18.
7. **Fechamento:** `/impeccable critique` + `/impeccable audit` de novo, e `/impeccable polish` por último.

#### Bloco A · Correções técnicas (sem mudar conteúdo)

| # | Prior. | O quê | Onde | Comando | Pronto quando |
|---|---|---|---|---|---|
| A1 ✅ | P1 | Atalhos 1–4 só com foco na página. O `4` move o foco para o rodapé (`tabindex="-1"` + `.focus()`). `aria-current` acompanha a aba Contato. `<kbd>` com `aria-hidden` (as abas deixam de ser lidas "Início 1"). | [script.js:43–57](script.js), navegação das 4 páginas | `harden` | Com o foco num botão ou link, 1–4 não fazem nada; depois do `4`, o próximo Tab segue no rodapé (WCAG 2.1.4 e 2.4.3). |
| A2 ✅ | P1 | Bug de cascata da demo JSON: `.code .k/.s` sobrescreve `.demo__out .k/.s`. Criar tokens do painel escuro (`--code-dark-*`). | [styles.css:297–298](styles.css) e [:359–360](styles.css) | `colorize` | Chaves e textos da demo com contraste ≥ 4,5:1 (hoje 1,98:1 e 2,6:1). |
| A3 ✅ | P2 | `aria-label` bilíngues via `aria-labelledby` (7 ocorrências "PT / EN"), nome do logo começando pelo texto visível, `lang="pt"` no `blockquote` dos prompts. | 4 páginas, [script.js:182–183](script.js) | `harden` | O leitor de tela em EN não lê rótulos em PT (WCAG 3.1.2 e 2.5.3). |
| A4 ✅ | P2 | "Copiado!" anunciado por `role="status"`; falha da cópia visível, no lugar do `mailto:` silencioso. | [script.js:84–93](script.js) | `harden` | Confirmação anunciada (WCAG 4.1.3). |
| A5 ✅ | P2 | `aria-current` na aba-mãe das subpáginas ("Trabalhos" no estudo de caso). | [trabalhos/tcc.html:53](trabalhos/tcc.html) | `polish` | Aba ativa anunciada em todas as páginas. |
| A6 ✅ | P2 | Anel de foco cortado na linha de abas do celular (`outline-offset: -2px` ou padding vertical). | [styles.css:417](styles.css) | `polish` | Contorno completo visível em 375px. |
| A7 ✅ | P2 | Ordem do trilho lateral igual à ordem visual em ≤960px. No estudo de caso, a demo vem antes da ficha técnica no celular. | [styles.css:387](styles.css), Trabalhos e TCC | `layout` | A ordem de Tab segue a ordem visual; no celular a demo começa antes de y≈1086. |
| A8 ✅ | P2 | Demo JSON: empilhar a partir de ~900px e quebrar linha na saída (`pre-wrap`). | [styles.css:288](styles.css) e [:399](styles.css) | `adapt` | Nenhum texto da demo cortado em 1440, 768, 375 e 320px. |
| A9 ✅ | P2 | Rodapé: BibTeX e snippet quebram linha (o e-mail aparece inteiro no celular), `<pre>` focável com `tabindex="0"` e `aria-label`, Hugging Face logo depois do e-mail. | rodapé das 4 páginas | `polish` | Sem rolagem lateral nos blocos de código em 1440 e 375px. |
| A10 ✅ | P2 | Celular: alvos de 44px em `pointer: coarse` (PT/EN 36×30, contato 36×36, links-CTA de 22px); indicação de rolagem nas abas em 320px ("Contato" cortado); cabeçalho solto em telas baixas (`max-height: 500px`). | [styles.css:87–93](styles.css), [:105](styles.css), [:416–419](styles.css) | `adapt` | Alvos ≥ 44px no toque; "Contato" alcançável em 320px; cabeçalho ≤ 25% da altura com zoom de 400%. |
| A11 ✅ | P2 | Escala tipográfica de px para rem (47 declarações). Junto do P2.3. | [styles.css](styles.css) | `typeset` | Com a fonte do navegador em 200%, todo o texto escala. |
| A12 | P3 | Tirar a legenda "onde usei" do nome acessível dos títulos das colunas de habilidades. | [index.html:143, 153, 164](index.html) | `polish` | Títulos lidos só como "Hard skills" etc. |
| A13 | P3 | `og:image` com URL absoluta; `perfil.jpg` em 208px e 56px (WebP com `srcset`). | `<head>` das 4 páginas, `images/` | `optimize` | Prévia do link funciona no LinkedIn/WhatsApp; a foto carrega ≤ 15 KB. |
| A14 | P3 | Hospedar a Geist no site, com `preload` e `size-adjust` nas fontes de reserva. Depende da decisão do P2.3. | linhas 14–16 das 4 páginas | `optimize` | Sem CSS de terceiros bloqueando a renderização. |
| A15 | P3 | Tokens para as 17 cores fixas (demo, documento digitalizado, `#fff`) e `color-scheme: light`. | [styles.css:296–325](styles.css) | `colorize` | Nenhuma cor fixa fora de `:root`. |
| A16 | P3 | Animação de entrada com estado final visível por padrão (o conteúdo não pode ficar invisível se a animação pausar). | [styles.css](styles.css) (`.js .page > *`) | `polish` | A página aparece inteira mesmo sem animação (capturas de prévia). |
| A17 ✅ | P3 | Largura do resumo de 86ch para ~70ch (ficou em 68ch). | [styles.css](styles.css) (`.intro__lede`) | `typeset` | ≤ 75 caracteres por linha em 1440px. |
| A18 ½ | P3 | Hierarquia h2/h3 em Trabalhos (salto de 1,24, alvo 1,25) ✅ e bordas dos botões secundários (1,49:1; ainda pendente). | [styles.css:240, 247](styles.css), `.btn--ghost` | `typeset` / `polish` | O detector não acusa `flat-type-hierarchy`. |

> **A3–A10 feitos em 2026-11-18**, com quatro agentes em paralelo (um por par de itens) e verificação no navegador. Desvios em relação à tabela:
> - **A8:** a demo empilha por *container query* (quando a própria demo tem < 760px), não por largura de tela; assim também cobre a faixa 961–1165px, em que a página tem duas colunas e a demo ficava apertada.
> - **A9:** os `<pre>` do rodapé ficaram sem `tabindex="0"`. Com a quebra de linha eles não rolam em nenhuma largura, e a parada de Tab seria inútil.
> - **A7:** em Trabalhos e Como foi criado o `<aside>` veio para antes do conteúdo no HTML (no celular ele já aparecia em cima). No TCC ele ficou depois, para a demo aparecer antes da ficha técnica.

#### Bloco B · Estrutura e layout (reorganiza o que existe; nenhum texto novo)

- [ ] **B1 · Primeira tela da Início: TCC e produção lado a lado.**
  - **O quê:** o card do stitching sai de "Outros trabalhos" e vai para a linha do TCC; "Outros trabalhos" fica com 2 cards.
  - **Protótipo:** [docs/prototipos/inicio-primeira-tela.md](docs/prototipos/inicio-primeira-tela.md).
  - **Comando:** `/impeccable layout`.
  - **Pronto quando:** em 1366×768, o card ≈10× e o botão do TCC aparecem na primeira tela.
- [x] **B2 ✅ · Card de prompt com prévia de 6 linhas e "Mostrar prompt completo".**
  - **O quê:** o prompt aparece em fonte mono; Resultado · Skills · Commit abaixo dele; índice dos prompts no trilho lateral, com âncoras `#prompt-N`.
  - **Protótipo:** [docs/prototipos/card-de-prompt.md](docs/prototipos/card-de-prompt.md).
  - **Onde:** `script.js` e `styles.css`.
  - **Comandos:** `/impeccable distill` e depois `/impeccable layout`.
  - **Pronto quando:** a página com 3 prompts fica bem abaixo dos 6.252px atuais (desktop) e dos 11.457px (celular), e cada prompt abre e fecha pelo teclado.
- [ ] **B3 · "Voltar ao topo"** em Trabalhos e Como foi criado, no celular (opcional, P3). Comando: `/impeccable adapt`.

#### Bloco C · Conteúdo: decisões e textos do Atos

O agente **não** escreve nem sugere esses textos. Cada item só aponta o que a revisão encontrou e onde fica. Quando você mandar o texto, o agente aplica nas versões PT e EN.

- [ ] **C1 · Resumo da Início** ([index.html:64](index.html)). A revisão aponta conflito com a voz do PRODUCT.md ("direta, técnica, sem hype") e diz que a prova de produção não aparece na primeira frase. Manter o texto atual ou mandar um novo.
- [ ] **C2 · Chip do card do stitching:** "Mercado" (atual) ou um rótulo que diga que está em produção.
- [ ] **C3 · Status do TCC:** um rótulo só para as 3 páginas. Hoje é "Produzindo" na Início ([index.html:83](index.html)) e "Em treinamento" em [trabalhos.html:85](trabalhos.html) e [trabalhos/tcc.html:69](trabalhos/tcc.html), em PT e EN.
- [ ] **C4 · Título do TCC na Início** ([index.html:80](index.html)): igual ao registrado no prompt #3 ("…para a atividade de OCR → JSON") ou o atual.
- [ ] **C5 · Termo "adaptador AdamW-Fusion"** ([trabalhos/tcc.html:129, 161](trabalhos/tcc.html), [trabalhos.html:88](trabalhos.html), linha de fatos da Início): confirmar o termo (AdamW é um otimizador).
- [ ] **C6 · Ficha técnica do TCC:** links (repositório, Hugging Face, dataset) e "métrica planejada", só se o material existir. Liga-se ao P1.
- [ ] **C7 · Habilidades sem evidência:** "Raciocínio lógico aplicado à programação" não tem link; "C → UTFPR" leva ao LinkedIn da universidade. Manter, trocar a evidência ou tirar.
- [ ] **C8 · Resultado e commit dos prompts #2 e #3** na aba "Como foi criado" (via `/inserir-prompt` ou pedido explícito).
- [ ] **C9 · "LLM’s" no resumo:** manter ou escrever "LLMs".
- [ ] **C10 · `meta description` e `og:*` em EN:** hoje só existem em PT.
- [ ] **C11 · Cards de "Outros trabalhos":** com o B1 sobram Comando e KnockUp. Incluir Filtros ou outro trabalho?
- [ ] **C12 · Descrição da skill Impeccable** na aba "Como foi criado" ("Adquirida em").
- [ ] **C13 · Rodapé:** manter a citação BibTeX e o `from_pretrained("AtosAiresArruda/atos-arruda")`? O namespace não existe no Hugging Face; o perfil real é `AtosArruda`.
- [ ] **C14 · PRODUCT.md:** tirar a nota de que a foto é placeholder (ela foi trocada no commit `0e59632`).

#### Bloco D · Direção e documentação

- [ ] **D1 · Reescrever o brief** `.impeccable/surfaces/index-html.md` para o site de 4 páginas, com o model card só como tom. Comando: `/impeccable shape`.
- [ ] **D2 · Atualizar as seções "Estado atual" e P2.1 deste plano** para o site como ele é hoje: as barras de nível saíram, as habilidades foram para o fim, entrou a aba "Como foi criado" e são 4 atalhos.
- [ ] **D3 · Decisão em aberto:** itens recolhíveis na página Trabalhos (pedido do prompt #1: "lista de itens fechados"). Não entrou nesta rodada.

### P2.3 Visual

- [x] `/impeccable typeset`: feito em 2026-11-18 (PR #10). **Decisão: a Geist fica** (está no brief; trocar seria mudar a identidade). Com isso o A14 (hospedar a Geist) está liberado.
- [x] Nova estética: cor, faixas e tipografia. Feito em 2026-11-18, PR #10 (commit `3b8f24a`, merge `2ecd2a5`); registrado como prompt #7 em "Como foi criado".

#### O que entrou (PR #10)

| Tema | Como ficou | Onde |
|---|---|---|
| Faixas | Seções alternam azul-marinho `#0b205e` e branco. Início: topo · TCC · Outros trabalhos · Habilidades · Contato = escuro · branco · escuro · branco · escuro. Demais páginas: topo · conteúdo · Contato = escuro · branco · escuro. | classes `band--dark`, `on-dark` no HTML |
| Topo | Faixa escura que termina numa onda, seguida de duas linhas cianas. A barra do topo também é escura. | `.band--hero::after` (SVG embutido) |
| Cores | Destaque ciano profundo `#0b7285` no branco e ciano claro `#5fdcea` no escuro; texto no escuro `#fff` / `#cdd7f0` / `#a3b2d9`. Todos os pares ≥ 4,5:1 (mínimo 5,6:1). | tokens em `:root` e `.on-dark` |
| Tipografia | 9 tamanhos em rem: 13 etiqueta · 14 metadado/código · 15 interface · 17 corpo · 19 abertura · 20 h3 · 24–28 h2 · 28–34 destaque · 36–48 h1. Prompts em Geist 17px (não mais mono). Peso 650 virou 700. | variáveis `--t-*` |
| Detalhes | Logo da UTFPR sobre placa branca; favicon e `theme-color` em `#0b205e`; Google Fonts pede a faixa `400..700`. | `<head>` das 4 páginas |

#### Pendências e observações para a próxima rodada

- [ ] **D1 continua aberto:** no brief (`.impeccable/surfaces/index-html.md`) só a linha OWN-WORLD foi atualizada para a nova paleta; o resto ainda descreve o model card antigo.
- [ ] **`/impeccable document` (P2.4) ficou mais urgente:** o sistema visual mudou e não há `DESIGN.md` registrando faixas, tokens `.on-dark` e escala `--t-*`.
- [ ] **A15 cresceu:** cores novas fixas fora de `:root`: `#0b205e` e `#0b7285` dentro do SVG da onda e `#fff` na placa da UTFPR. Se a paleta mudar, mude também ali.
- [ ] **A16 confirmado:** na verificação, o painel do navegador pausava a animação de entrada e o topo ficava meio transparente. O conteúdo precisa aparecer inteiro mesmo sem animação.
- [ ] **Bordas dos botões secundários (A18):** ainda com contraste baixo contra o branco.
- [ ] **Seletor PT/EN:** o detector acusa pouco espaço interno (`cramped-padding`).
- [ ] **Investigar:** na Início, ao saltar a rolagem direto para "Outros trabalhos", a aba "Contato" apareceu ativa. Pode ser só efeito do salto instantâneo do teste.
- [ ] **Avisos que podem ser ignorados:** o detector marca `cramped-padding` nas laterais das faixas escuras e no topo de "Outros trabalhos". É falso positivo da técnica de fundo até a borda da tela (`border-image`); o espaço medido é de 40px.
- [ ] **Skill:** há uma versão nova do Impeccable (v4.9.1). Para atualizar: `npx impeccable update`, numa sessão nova.
- [ ] Modo escuro. Os tokens `.on-dark` já existem e podem servir de base.
- [ ] Imagem de pré-visualização (Open Graph) para quando o link for colado no LinkedIn/WhatsApp. Uma por sessão, se valer a pena.

### P2.4 Fechamento

- [ ] `/impeccable document`: gerar `DESIGN.md` (sistema visual registrado; etapa final pendente do fluxo da skill).
- [ ] `/impeccable polish` como passada final antes de cada envio importante.

## P1: provas (o que mais pesa numa entrevista de LLM)

> Cada bloco abaixo vira o conteúdo de um estudo de caso (sessão N2).

### TCC: OCR → JSON com gemma-4-E2B-it
- [ ] Estudo de caso: problema, dataset (origem, tamanho, anotação), formato do JSON alvo, pipeline de treino.
- [ ] Hiperparâmetros do QLoRA (rank, alpha, lr, épocas, VRAM usada, tempo de treino, GPU).
- [ ] Métricas reais quando existirem: acurácia por campo / F1, CER, taxa de JSON válido, latência e memória **vs.** modelo grande de referência.
- [ ] Curva de loss (gráfico) e exemplos de acertos/erros.
- [ ] Publicar o adaptador no Hugging Face com model card de verdade e linkar.
- [ ] Demo real: Hugging Face Space (Gradio) embutido no estudo de caso, substituindo a animação sintética.

### Iniciação Científica
- [ ] Stitching: imagens antes/depois, diagrama do pipeline, gráfico do tempo (linear vs. com descarte de redundantes).
- [ ] Cascata de filtros: exemplos de imagens barradas, métrica de precisão/recall se houver.
- [ ] HLA/IoT: trecho de XML gerado e exemplo de uso do gerador.
- [ ] Link para código (se puder ser público) ou para o artigo/relatório.

### Outros
- [ ] Projeto Comando: número de aulas/alunos/inscritos (só números reais), 1 aula em destaque.
- [ ] KnockUp: thumbnail do jogo + vídeo embutido.
- [ ] Evidência para "Agentes de codificação / Prompt engineering / SDD" (hoje sem projeto vinculado na tabela de habilidades). Ex.: um repo com specs + agente, ou um post explicando o fluxo.
- [ ] Seção "Notas técnicas" (blog curto): QLoRA na prática, como montar dataset de OCR, etc.

### Aba Modelos (Hugging Face) ← *decidida no P0, trabalhar depois*
- [ ] Nova aba no site para falar dos modelos postados no Hugging Face (perfil `AtosArruda`).
- [ ] Definir o conteúdo de cada modelo (o que faz, base, método de treino, link para o model card) e onde a aba entra na navegação e nos atalhos de teclado.
- [ ] Conferir se cada modelo publicado tem model card de verdade antes de linkar.

## P3: técnico

- [ ] Idioma via URL (`?lang=en` ou `/en/`) para mandar o link já em inglês a recrutadores de fora.
- [ ] Domínio próprio (ex.: `atosarruda.dev`), opcional.
- [ ] SEO: dados estruturados `Person` (JSON-LD), sitemap.
- [ ] Analytics sem cookies (GoatCounter ou Plausible) para saber se o link está sendo aberto e **até qual sessão** o visitante chega.
- [ ] GitHub Action que checa links quebrados a cada push.
- [ ] Lighthouse ≥ 95 em todas as categorias.

## Decisões em aberto

| Decisão | Opções | Sua escolha |
|---|---|---|
| Telefone no site | não / sim / só no PDF | não: só no currículo ✅ |
| Idioma padrão | detectar pelo navegador (atual) / sempre PT | |
| Domínio próprio | não / sim (qual?) | |
| Foto | fundo neutro / ambiente de trabalho | foto trocada ✅ |
| Sessões | páginas HTML separadas / abas na mesma página | páginas separadas ✅ |
| Nomes dos níveis | Alto · Médio · Estudando | ✅ |
| Cartões da Início | TCC em destaque + Stitching · Projeto Comando · KnockUp | ✅ (troque à vontade) |
| Demo OCR → JSON | só no estudo de caso do TCC | ✅ |
| Hard skills com nível | sim / não | |
| CV no site | botão de download / sem acesso | sem acesso ✅ |
| Nome da empresa parceira da IC | "empresa parceira" / nome real | "empresa Varejo 360" ✅ |
| Git como "linguagem" | manter na coluna Linguagens / renomear para "Linguagens e ferramentas" | |
