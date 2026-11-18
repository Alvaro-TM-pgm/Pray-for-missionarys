# Vozes da Missão

Site estático para apresentar nove vídeos de missionários e conduzir o visitante a um momento de oração. Desenvolvido com HTML, CSS e JavaScript puro, pronto para GitHub Pages.

## 1. Coloque seus vídeos

Adicione os nove arquivos MP4 dentro da pasta `videos`, usando exatamente estes nomes:

- `missionario-01.mp4`
- `missionario-02.mp4`
- `missionario-03.mp4`
- `missionario-04.mp4`
- `missionario-05.mp4`
- `missionario-06.mp4`
- `missionario-07.mp4`
- `missionario-08.mp4`
- `missionario-09.mp4`

Os arquivos de vídeo não estão incluídos neste projeto: substitua os espaços reservados pelos seus próprios vídeos.

**Atenção ao tamanho:** o GitHub recomenda manter os arquivos do repositório pequenos. Para vídeos grandes, hospede os MP4 em um serviço de armazenamento/streaming que permita reprodução direta e troque o caminho `video` de cada missionário em `script.js` pela URL direta do arquivo. Não use uma página de visualização do Drive como se fosse um link MP4 direto.

## 2. Personalize nomes e capas

Abra `script.js`. No início do arquivo há uma lista chamada `missionaries`. Para cada pessoa, altere:

- `name`: nome do missionário;
- `description`: frase curta abaixo do nome;
- `cover`: caminho da imagem de capa;
- `video`: caminho do arquivo MP4.

Exemplo:

```js
{
  name: "Ana Souza",
  description: "Ore pelo trabalho missionário no interior",
  cover: "assets/covers/capa-01.jpg",
  video: "videos/missionario-01.mp4"
}
```

Para trocar uma capa, coloque sua imagem em `assets/covers/` e atualize o campo `cover`. JPG, PNG e WebP são formatos recomendados. As capas SVG que já acompanham o projeto são artes provisórias para mostrar o layout.

## 3. Teste no computador

Abra `index.html` no navegador. Para um teste mais fiel ao GitHub Pages, use a extensão **Live Server** no VS Code e clique em **Go Live**. Isso também ajuda a identificar problemas com caminhos e reprodução de mídia.

## 4. Publique no GitHub Pages

1. Entre em https://github.com e crie um repositório novo, por exemplo `vozes-da-missao`.
2. Extraia o ZIP deste projeto.
3. Envie todos os arquivos e pastas para a raiz do repositório (não envie apenas a pasta externa que contém o projeto).
4. No repositório, abra **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
7. Aguarde a publicação. O endereço ficará parecido com `https://SEU-USUARIO.github.io/vozes-da-missao/`.

Sempre que atualizar os arquivos no GitHub, o Pages publicará a nova versão automaticamente.

## 5. Como funciona a experiência

- O visitante escolhe um dos nove missionários no lobby.
- O vídeo abre em uma tela de reprodução dedicada, com controles.
- Ao terminar, o player é fechado e aparece a mensagem de oração.
- O botão **Voltar ao início** prepara o site para a próxima pessoa.
- O botão **Voltar aos missionários** permite sair antes do fim.

## Observações importantes

- O navegador não permite que uma página force a tela cheia do sistema sem uma ação do visitante. O site abre o player em uma tela dedicada que ocupa a janela; a pessoa também pode usar o controle de tela cheia do próprio vídeo.
- A reprodução automática pode ser bloqueada por algumas configurações do navegador. Nesse caso, basta apertar Play nos controles do vídeo.
- Para vídeos com áudio, use MP4 com vídeo H.264 e áudio AAC, uma combinação amplamente compatível.
- O site não coleta dados, não exige login e não utiliza banco de dados.
- Teste os nove vídeos em celular e computador antes do evento.
