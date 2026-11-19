# Vozes da Missão

Catálogo de vídeos missionários com reprodução em tela dedicada e convite à oração ao final. O site usa HTML, CSS e JavaScript puro e está publicado no GitHub Pages.

## Capas e vídeos

As capas mostram automaticamente um quadro dos próprios vídeos. Para substituir uma capa por uma foto específica, coloque a imagem em `assets/covers/` e atualize o caminho `cover` da pessoa no início de `script.js`. Por exemplo:

```js
cover: "assets/covers/endrik.jpg"
```

Use uma imagem horizontal JPG, PNG ou WebP. Os arquivos SVG são exibidos enquanto o vídeo carrega ou se o navegador não conseguir criar a capa. Para cadastrar outro missionário, adicione um objeto à lista `missionaries` com `name`, `cover` e `video`.

Os nove MP4 atuais ficam na raiz do repositório. Mantenha os nomes usados em `script.js` ou atualize o caminho `video` quando trocar um arquivo. O site não exige instalação de dependências.

## Publicação

O GitHub Pages publica a raiz da branch `main`. Os envios novos para `main` atualizam o site automaticamente.
