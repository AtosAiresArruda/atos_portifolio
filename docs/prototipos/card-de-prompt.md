# Protótipo escolhido: card de prompt ("Como foi criado")

> Escolhido em 2026-11-18 com `/impeccable generate` (ação `distill`, 3 variantes) no navegador, usando os dados reais dos 3 prompts registrados.
> **Variante 2: "Prévia do prompt"**, com o ajuste "6 linhas".
> Este arquivo guarda só a estrutura e o CSS. A implementação é a tarefa B2 da seção P2.2.1 do [PLANO.md](../../PLANO.md).

## O que muda

- **Topo do card:** continua igual (`#n` e data).
- **Prompt recolhido:** mostra só as **primeiras 6 linhas**, em fonte mono 13,5px sobre fundo `--code-bg` (antes era a fonte do corpo, com o Markdown aparecendo literal).
- **Botão "Mostrar prompt completo":** abre o texto inteiro, e o rótulo vira "Recolher prompt". Usa `<details>/<summary>`: funciona sem JavaScript e é acessível pelo teclado.
- **Abaixo do prompt:** Resultado · Skills · Commit, no mesmo formato de fatos usado em Trabalhos.
- **Prompt sem resultado:** aparece "Resultado ainda não registrado." em itálico e cor secundária. É um texto de interface, não um texto sobre os trabalhos.

As outras duas variantes, descartadas:
- **Resultado em destaque:** o resultado vira o título do card e o prompt fica totalmente recolhido.
- **Linha do tempo compacta:** uma linha por prompt, dentro de um único bloco.

## Estrutura gerada pelo `script.js` (um `<li>` por prompt)

```html
<li class="group prompt" id="prompt-N">
  <header class="group__head"><h3 class="prompt__num">#N</h3><time class="group__when" datetime="AAAA-MM-DD">…</time></header>
  <details class="prompt__more">
    <summary>
      <span class="prompt__preview">{texto do prompt}</span>
      <span class="prompt__toggle"><span class="prompt__show">Mostrar prompt completo / Show full prompt</span><span class="prompt__hide">Recolher prompt / Collapse prompt</span></span>
    </summary>
    <blockquote class="prompt__text" lang="pt">{texto do prompt}</blockquote>
  </details>
  <dl class="facts">Resultado · Skills · Commit</dl>
</li>
```

O `lang="pt"` no `blockquote` vem do achado P2 do audit (idioma dos prompts). Ele precisa escapar da regra que esconde `[lang]` em [styles.css:54–55](../../styles.css): essa regra compara com `"pt-BR"` exato, então `"pt"` não é escondido.

## CSS (substitui `.prompt__text` no bloco "build log" de `styles.css`)

```css
.prompt__more { margin-top: 12px; }
.prompt__more summary { display: block; cursor: pointer; list-style: none; }
.prompt__more summary::-webkit-details-marker { display: none; }
.prompt__preview {
  display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6; overflow: hidden;
  padding: 14px 16px; background: var(--code-bg); border-radius: 8px;
  font: 400 13.5px/1.65 var(--mono); color: var(--ink-2); white-space: pre-wrap; overflow-wrap: anywhere;
}
.prompt__toggle { display: inline-flex; align-items: center; min-height: 32px; margin-top: 6px; color: var(--accent-ink); font-size: 14px; font-weight: 500; }
.prompt__more:not([open]) .prompt__hide,
.prompt__more[open] .prompt__show,
.prompt__more[open] .prompt__preview { display: none; }
.prompt__text {
  margin: 0; padding: 14px 16px; background: var(--code-bg); border-radius: 8px;
  font: 400 13.5px/1.65 var(--mono); color: var(--ink); white-space: pre-wrap; overflow-wrap: anywhere;
}
.prompt__muted { color: var(--ink-3); font-style: italic; }
```

## Pontos a conferir na implementação

- O texto do prompt aparece duas vezes no DOM (na prévia e no texto completo). Para não ser lido duas vezes pelo leitor de tela, a prévia deve levar `aria-hidden="true"`, e o `summary` precisa de um nome acessível claro ("Mostrar prompt completo").
- O foco do teclado no `summary` precisa de contorno visível (`:focus-visible`).
- Altura esperada da página com 3 prompts recolhidos: muito menor que os 6.252px atuais. Medir depois de implementar.
