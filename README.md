# Vozes da Missão

Catálogo de vídeos missionários com reprodução em tela dedicada e convite à oração ao final. O site usa HTML, CSS e JavaScript puro e está publicado no GitHub Pages.

## Adicionar ou trocar uma foto de capa

As capas em `assets/covers/` são espaços reservados. Coloque a foto na pasta e, no início de `script.js`, altere o caminho `cover` da pessoa. Por exemplo:

```js
cover: "assets/covers/endrik.jpg"
```

Use uma imagem horizontal JPG, PNG ou WebP. Para cadastrar outro missionário, adicione um objeto à lista `missionaries` com `name`, `description`, `cover` e `video`.

## Vídeos

Os sete MP4 atuais ficam na raiz do repositório. Mantenha os nomes usados em `script.js` ou atualize o caminho `video` quando trocar um arquivo. O site não exige instalação de dependências.

## Publicação

O GitHub Pages publica a raiz da branch `main`. Os envios novos para `main` atualizam o site automaticamente.
