# Vozes da Missão

Catálogo de vídeos missionários com reprodução em tela dedicada e convite à oração ao final. O site usa HTML, CSS e JavaScript puro e está publicado no GitHub Pages.

## Capas e vídeos

Cada capa JPG é uma imagem fixa extraída do vídeo correspondente. Para escolher outra imagem, coloque um JPG, PNG ou WebP em `assets/covers/` e atualize o caminho `cover` da pessoa no início de `script.js`. Por exemplo:

```js
cover: "assets/covers/endrik.jpg"
```

Para recapturar as capas a partir dos vídeos, execute manualmente a tarefa **Create video cover images** na aba Actions do GitHub. Ela salva um quadro de cada vídeo em `assets/covers/`. Para cadastrar outro missionário, adicione um objeto à lista `missionaries` com `name`, `cover` e `video`, e inclua a extração da capa na tarefa.

Os nove MP4 atuais ficam na raiz do repositório. Mantenha os nomes usados em `script.js` ou atualize o caminho `video` quando trocar um arquivo. O site não exige instalação de dependências.

## Publicação

O GitHub Pages publica a raiz da branch `main`. Os envios novos para `main` atualizam o site automaticamente.
