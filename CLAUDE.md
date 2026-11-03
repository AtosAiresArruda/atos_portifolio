# atos_portifolio

## Registro de prompts (aba "Como esse site foi criado")

A página `como-foi-criado.html` mostra, em cards numerados (#1, #2, #3...), os prompts escolhidos para reproduzir este site. Os dados ficam em `content/como-foi-criado.js` e são renderizados pela seção "build log" de `script.js`. O site é bilíngue (PT/EN): textos exibidos, como `resultado`, usam `{ pt, en }`; o `prompt` fica só no original.

**Um prompt só entra na lista em dois casos:**

1. O usuário chama a skill `/inserir-prompt` (`.claude/skills/inserir-prompt/SKILL.md`).
2. O próprio prompt pede claramente para ser inserido/registrado na aba "Como foi criado". Nesse caso, siga as mesmas instruções da skill `/inserir-prompt`.

Fora desses casos, **não** adicione nem altere itens da lista `prompts`. A exceção é preencher o `commit` de um item já registrado, quando o commit correspondente for feito depois.
