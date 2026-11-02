# Plano de trabalho: portfólio Atos Aires Arruda

> Documento vivo. Edite à vontade: marque `[x]` no que estiver feito, risque o que não fizer sentido, reordene prioridades.
> Site: https://atosairesarruda.github.io/atos_portifolio/

## Estado atual (MVP v0.1)

- Página única, estática (HTML/CSS/JS puro), hospedada no GitHub Pages.
- Conceito visual: **"model card"**. O candidato é apresentado como um modelo publicado: tags, destaque do treinamento atual (TCC), tabela de avaliação (projetos), linhagem (experiência), habilidades, "como usar" (contato) e citação.
- Bilíngue PT/EN com botão no topo (lembra a escolha do visitante).
- Navegação: abas fixas no topo, atalhos de teclado `1`–`5`, projetos expansíveis.
- Demo animada "documento digitalizado → JSON" (dados sintéticos, rotulada como ilustrativa).

### Onde editar o conteúdo

| O quê | Arquivo | Observação |
|---|---|---|
| Textos, links, projetos | `index.html` | Cada texto existe em dois `<span>`: `lang="pt-BR"` e `lang="en"`. Edite os dois. |
| Cores, fontes, espaçamentos | `styles.css` | Tokens no topo (`:root`). |
| Idioma, abas, atalhos, demo | `script.js` | Campos da demo em `fields`. |
| Foto | `images/perfil.jpg` | Quadrada, mínimo 400×400 px. |

---

## P0: antes de enviar o link a qualquer recrutador

- [ ] **Trocar a foto de perfil.** A imagem atual é só um placeholder (um still de filme). Usar foto real, fundo neutro, rosto bem iluminado.
- [ ] **Revisar todos os textos em PT e EN.** Conferir se as traduções refletem seu nível e sua voz; ajustar onde soar "traduzido".
- [ ] **Decidir sobre o telefone.** Ficou fora do site (site público = número exposto a spam). Alternativa: só no CV em PDF.
- [ ] **Confirmar o que pode ser dito sobre a empresa parceira** da IC (nome, "em produção", métrica de 10×).
- [ ] **CV em PDF para download** (PT e EN), botão no topo.
- [ ] **Conferir os perfis de destino**: Hugging Face e GitHub precisam ter algo para ver (repos fixados, README de perfil, model card).

## P1: provas (o que mais pesa numa entrevista de LLM)

### TCC: OCR → JSON com gemma-4-E2B-it
- [ ] Página/estudo de caso próprio: problema, dataset (origem, tamanho, anotação), formato do JSON alvo, pipeline de treino.
- [ ] Hiperparâmetros do QLoRA (rank, alpha, lr, épocas, VRAM usada, tempo de treino, GPU).
- [ ] Métricas reais quando existirem: acurácia por campo / F1, CER, taxa de JSON válido, latência e memória **vs.** modelo grande de referência.
- [ ] Curva de loss (gráfico) e exemplos de acertos/erros.
- [ ] Publicar o adaptador no Hugging Face com model card de verdade e linkar.
- [ ] Demo real: Hugging Face Space (Gradio) embutido no site, substituindo a animação sintética.

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

## P2: design e experiência (usar a skill impeccable)

- [ ] `/impeccable critique`: revisão heurística do site com nota.
- [ ] `/impeccable audit`: acessibilidade, performance, responsivo.
- [ ] `/impeccable document`: gerar `DESIGN.md` (sistema visual registrado; etapa final pendente do fluxo da skill).
- [ ] `/impeccable typeset`: avaliar troca da fonte Geist (o detector a marca como muito usada).
- [ ] Modo escuro.
- [ ] Imagem de pré-visualização (Open Graph) para quando o link for colado no LinkedIn/WhatsApp.
- [ ] Mobile: as abas rolam na horizontal; avaliar menu compacto.
- [ ] `/impeccable polish` como passada final antes de cada envio importante.

## P3: técnico

- [ ] Idioma via URL (`?lang=en` ou `/en/`) para mandar o link já em inglês a recrutadores de fora.
- [ ] Domínio próprio (ex.: `atosarruda.dev`), opcional.
- [ ] SEO: dados estruturados `Person` (JSON-LD), sitemap.
- [ ] Analytics sem cookies (GoatCounter ou Plausible) para saber se o link está sendo aberto.
- [ ] GitHub Action que checa links quebrados a cada push.
- [ ] Lighthouse ≥ 95 em todas as categorias.

## Decisões em aberto

| Decisão | Opções | Sua escolha |
|---|---|---|
| Telefone no site | não / sim / só no PDF | |
| Idioma padrão | detectar pelo navegador (atual) / sempre PT | |
| Domínio próprio | não / sim (qual?) | |
| Foto | fundo neutro / ambiente de trabalho | |
| Página separada para o TCC | sim / continuar em página única | |
