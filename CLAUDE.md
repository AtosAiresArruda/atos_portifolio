# atos_portifolio

## Registro de prompts (aba "Como esse site foi criado")

A página `como-foi-criado.html` mostra todos os prompts usados para construir este site. Os dados ficam em `content/como-foi-criado.js` e são renderizados pela seção "build log" de `script.js`. O site é bilíngue (PT/EN): textos exibidos, como `resultado`, usam `{ pt, en }`; o `prompt` fica só no original.

**A cada prompt que o usuário enviar**, antes de terminar o turno:

1. Adicione um novo item no **fim** da lista `prompts` em `content/como-foi-criado.js` — ele vira o próximo card da sequência.
2. Salve o **conteúdo integral** do prompt no campo `prompt`, exatamente como o usuário escreveu (sem resumir, corrigir ou traduzir; preserve quebras de linha com `\n` e escape aspas). A única exceção: substitua senhas, chaves de API, tokens ou e-mails por `[removido]`.
3. Preencha também:
   - `data`: data do prompt no formato `AAAA-MM-DD`;
   - `skills`: nomes das skills invocadas para atender o prompt (`[]` se nenhuma);
   - `resultado`: `{ pt, en }` com uma frase sobre o que foi feito;
   - `commit`: hash curto do commit que resultou do prompt, ou `null`. Se o commit for feito depois, atualize o item.
4. Se uma skill for usada pela primeira vez, adicione-a em `skills` (`nome`, `descricao: { pt, en }`). Se a configuração do agente mudar (modelo, ambiente, modo), atualize `agente`.
