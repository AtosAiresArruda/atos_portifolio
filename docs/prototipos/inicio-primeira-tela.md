# Protótipo escolhido: primeira tela da Início

> Escolhido em 2026-11-18 com `/impeccable generate` (ação `layout`, 3 variantes) no navegador.
> **Variante 1: "TCC e produção lado a lado"**, com o ajuste "TCC maior".
> Este arquivo guarda só a estrutura e o CSS. A implementação é a tarefa B1 da seção P2.2.1 do [PLANO.md](../../PLANO.md).

## O que muda

- O card do stitching ("≈10× mais rápido que a versão linear") sai de "Outros trabalhos realizados" e sobe para **a mesma linha do TCC**, à direita, logo abaixo da intro.
- "Outros trabalhos realizados" fica com os 2 cards restantes, em 2 colunas.
- **Nenhum texto muda.** Só a posição e o destaque do card: a métrica fica maior e o card ganha uma borda verde suave e sombra.
- Abaixo de 960px, a linha empilha: TCC primeiro, depois o card de produção.

As outras duas variantes, descartadas: o card de produção ao lado do resumo (intro em 2 colunas) e uma faixa compacta de prova logo abaixo da linha da UTFPR.

## Estrutura (ordem dentro de `<main>`)

```html
<section class="intro">…(igual)…</section>

<div class="proof-row">
  <section class="block feature" id="tcc">…(igual)…</section>
  <a class="card card--proof" href="trabalhos.html#stitching">…(o mesmo conteúdo do card atual do stitching)…</a>
</div>

<section class="more">…(cabeçalho igual; .cards só com Projeto Comando e KnockUp)…</section>
<section class="stack">…(igual)…</section>
```

## CSS (para `styles.css`, bloco "home")

```css
.proof-row { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: 16px; margin-top: 16px; align-items: stretch; }
.proof-row .feature { margin-top: 0; }
.card--proof { padding: 28px 26px; gap: 10px; border-color: color-mix(in srgb, var(--prod-fg) 30%, var(--rule)); box-shadow: var(--shadow); }
.card--proof h3 { font-size: 1.125rem; }
.card--proof .card__metric { font-size: 1.375rem; font-weight: 650; line-height: 1.25; letter-spacing: -0.02em; color: var(--ink); }
.more .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
@media (max-width: 960px) {
  .proof-row, .more .cards { grid-template-columns: minmax(0, 1fr); }
}
```

## Pontos a conferir na implementação

- A linha de fatos do TCC (`.facts-row`, 3 colunas) fica mais estreita na coluna de 1,7fr. Conferir em 1366px e, se apertar, passar para 2 colunas.
- A meta "botão do TCC visível na primeira tela em 1366×768" precisa continuar valendo.
