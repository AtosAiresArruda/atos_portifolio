# Plano de trabalho: portfólio Atos Aires Arruda

> Documento vivo. Edite à vontade: marque `[x]` no que estiver feito, risque o que não fizer sentido, reordene prioridades.
> Site: https://atosairesarruda.github.io/atos_portifolio/

## Ordem de execução

1. **P0**: bloqueadores antes de enviar o link (foto, textos).
2. **P2: design e experiência** ← *prioridade atual*. Começa por **P2.1 Sessões**, porque muda a estrutura do site; as revisões com a skill (P2.2 em diante) só valem depois que a estrutura nova existir.
3. **P1**: provas. Cada item de P1 vira conteúdo de uma sessão de nível 2 (estudo de caso).
4. **P3**: técnico.

## Estado atual (v0.2: sessões)

- Site estático (HTML/CSS/JS puro), hospedado no GitHub Pages, com **três sessões em páginas separadas**:
  - **Início** (`index.html`): resumo, habilidades em três colunas (hard skills · soft skills · linguagens por nível), destaque do TCC e cartões de outros trabalhos.
  - **Trabalhos** (`trabalhos.html`): todos os trabalhos agrupados por experiência, no formato problema · o que fiz · resultado, com índice lateral que acompanha a rolagem.
  - **Estudo de caso do TCC** (`trabalhos/tcc.html`): demo OCR → JSON, etapas e ficha técnica.
- Conceito visual: **"model card"** (Hugging Face). Contato e citação no rodapé de todas as páginas.
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
| Cores, fontes, espaçamentos | `styles.css` | Tokens no topo (`:root`). |
| Idioma, abas, atalhos, índice, demo | `script.js` | Campos da demo em `fields`. |
| Foto | `images/perfil.jpg` | Quadrada, mínimo 400×400 px. |

---

## P0: antes de enviar o link a qualquer recrutador

- [ ] **Trocar a foto de perfil.** A imagem atual é só um placeholder (um still de filme). Usar foto real, fundo neutro, rosto bem iluminado.
- [ ] **Revisar todos os textos em PT e EN.** Conferir se as traduções refletem seu nível e sua voz; ajustar onde soar "traduzido".
- [ ] **Decidir sobre o telefone.** Ficou fora do site (site público = número exposto a spam). Alternativa: só no CV em PDF.
- [ ] **Confirmar o que pode ser dito sobre a empresa parceira** da IC (nome, "em produção", métrica de 10×).
- [ ] **CV em PDF para download** (PT e EN), botão no topo.
- [ ] **Conferir os perfis de destino**: Hugging Face e GitHub precisam ter algo para ver (repos fixados, README de perfil, model card).

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

### P2.3 Visual

- [ ] `/impeccable typeset`: avaliar troca da fonte Geist (o detector a marca como muito usada).
- [ ] Modo escuro.
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
| Telefone no site | não / sim / só no PDF | |
| Idioma padrão | detectar pelo navegador (atual) / sempre PT | |
| Domínio próprio | não / sim (qual?) | |
| Foto | fundo neutro / ambiente de trabalho | |
| Sessões | páginas HTML separadas / abas na mesma página | páginas separadas ✅ |
| Nomes dos níveis | Alto · Médio · Estudando | ✅ |
| Cartões da Início | TCC em destaque + Stitching · Projeto Comando · KnockUp | ✅ (troque à vontade) |
| Demo OCR → JSON | só no estudo de caso do TCC | ✅ |
| Hard skills com nível | sim / não | |
| Git como "linguagem" | manter na coluna Linguagens / renomear para "Linguagens e ferramentas" | |
