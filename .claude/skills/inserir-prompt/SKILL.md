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

- `prompt`: o **conteúdo integral**, exatamente como o usuário escreveu, sem resumir, corrigir ou traduzir. Preserve quebras de linha com `\n` e escape aspas. Única exceção: troque senhas, chaves de API, tokens e e-mails por `[removido]`.
- `data`: data em que o prompt foi enviado (`AAAA-MM-DD`).
- `skills`: nomes das skills invocadas para atender o prompt (`[]` se nenhuma). Não conte a própria `inserir-prompt`.
- `resultado`: uma frase em `{ pt, en }` sobre o que foi feito. Se o texto foi só registrado (caso com argumento), use `null`.
- `commit`: hash curto do commit que resultou do prompt, ou `null`. Se o commit for feito depois, atualize o item.

## Depois de inserir

1. Se uma skill aparece pela primeira vez, adicione-a à lista `skills` do arquivo (`nome`, `descricao: { pt, en }` e, se houver, `url`).
2. Se a configuração do agente mudou (provedora, agente de codificação, esforço, ambiente, modo), atualize `agente`.
3. Diga ao usuário o número do card criado (#N = posição na lista).
