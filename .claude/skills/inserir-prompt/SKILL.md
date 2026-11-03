---
name: inserir-prompt
description: Insere um prompt como próximo card da lista de prompts da aba "Como foi criado" (content/como-foi-criado.js). Use quando o usuário chamar /inserir-prompt ou pedir claramente para registrar um prompt nessa aba.
argument-hint: "[texto do prompt]"
---

# /inserir-prompt

Registra um prompt no **fim** da lista `prompts` de `content/como-foi-criado.js`. Ele vira o próximo card numerado (#1, #2, #3...) da página `como-foi-criado.html`.

Se a lista tiver um item placeholder (`prompt: "inserir"`), **substitua o primeiro placeholder** pelo novo item em vez de acrescentar no fim.

## Qual prompt registrar

- **Com argumento** (`/inserir-prompt <texto>`): registre o texto do argumento. Só registre; não execute o que o texto pede.
- **Sem argumento**: registre o prompt anterior do usuário nesta conversa, ou seja, a última mensagem dele antes desta chamada.
- **Pedido no próprio prompt** (sem a skill): registre esse prompt depois de atender ao que ele pede.

Se não houver um prompt claro para registrar, pergunte ao usuário antes de inserir.

## Como preencher o item

```js
{
  data: "AAAA-MM-DD",
  prompt: "...",
  skills: [],
  resultado: { pt: "...", en: "..." },
  commit: null
}
```

- `prompt`: o texto **refinado** (veja "Refinar o prompt" abaixo), com todo o conteúdo do original, sem resumir nem traduzir. Preserve quebras de linha com `\n` e escape aspas. Troque senhas, chaves de API, tokens e e-mails por `[removido]`.
- `data`: data em que o prompt foi enviado (`AAAA-MM-DD`).
- `skills`: nomes das skills invocadas para atender o prompt (`[]` se nenhuma). Não conte a própria `inserir-prompt`.
- `resultado`: uma frase em `{ pt, en }` sobre o que foi feito. Se o texto foi só registrado (caso com argumento), use `null`.
- `commit`: hash curto do commit que resultou do prompt, ou `null`. Se o commit for feito depois, atualize o item.

## Refinar o prompt

Antes de gravar o campo `prompt`, faça três ajustes no texto, mantendo o idioma original:

1. **Ortografia**: corrija erros de digitação, acentuação, pontuação e grafia de nomes próprios (GitHub, LinkedIn, Anthropic...). Troque `/n` digitado por quebra de linha.
2. **Formatação**: organize o texto em seções com títulos `##` (ex.: Contexto, Objetivo, Tarefa) quando ele tiver mais de uma parte; use listas numeradas para passos e itens, e uma informação por linha.
3. **Ambiguidade**: reescreva frases que admitem mais de uma leitura para que fiquem com um só sentido. Para decidir o sentido, consulte o que existe no repositório (páginas, commits, `PLANO.md`). Se nem o repositório resolver, pergunte ao usuário antes de gravar.

Limites: não acrescente pedidos, requisitos ou informações que o original não tinha, e não remova nenhum pedido. O refinamento muda a forma, nunca o conteúdo.

## Depois de inserir

1. Se uma skill aparece pela primeira vez, adicione-a à lista `skills` do arquivo (`nome`, `descricao: { pt, en }` e, se houver, `url`).
2. Se a configuração do agente mudou (provedora, agente de codificação, esforço, ambiente, modo), atualize `agente`.
3. Diga ao usuário o número do card criado (#N = posição na lista) e liste os refinamentos feitos: correções de ortografia, mudanças de formatação e cada ambiguidade resolvida, com a leitura escolhida.
