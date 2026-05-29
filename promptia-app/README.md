# PROMPTIA - Validador Offline

Este protótipo é uma aplicação offline para apoiar o jogo físico PROMPTIA. Ele não usa IA online, servidor, login, API externa ou banco de dados na nuvem.

## Por que uma página web pode ser offline?

O professor permitiu "Figma, Adobe XD ou Site" como protótipo de alta fidelidade. Neste caso, o site foi construído como app offline:

- Os dados das cartas ficam no arquivo `app.js`.
- A tela funciona abrindo `index.html` no navegador.
- Não há requisições para internet.
- Pode ser copiado por pen drive, Bluetooth ou pasta compartilhada.
- Quando servido por um navegador compatível, pode ser instalado como PWA.

Ou seja, a página é apenas a interface. A lógica e o banco de dados estão locais.

## Como usar sem internet

Opção mais simples:
1. Copiar a pasta `promptia-app` para o computador ou celular.
2. Abrir o arquivo `index.html` no navegador.
3. Digitar um código de carta, por exemplo `S01-P3`.
4. O app revela o gabarito, a resposta esperada e a lição da rodada.

Opção PWA:
1. Abrir a pasta por um servidor local simples ou hospedagem interna da escola.
2. Acessar o app uma vez.
3. Instalar no navegador.
4. Depois disso, abrir mesmo sem internet.

## Funções implementadas

- Tela de gabarito por código de carta.
- Revelação de prompt e resposta lado a lado.
- Lição pedagógica da rodada.
- Ponto ético conectado a LGPD, dados sensíveis e boas práticas.
- Glossário de termos de IA.
- Banco local com 10 situações, 30 prompts e 30 respostas.
- Placar com regra inspirada no Dixit.

## Códigos do protótipo

Cada código segue o padrão:

`Sxx-Py`

Onde:
- `Sxx` é a situação.
- `P1` é prompt vago.
- `P2` é prompt intermediário.
- `P3` é prompt completo.

Exemplos:
- `S01-P1`: resumo acadêmico com prompt vago.
- `S01-P3`: resumo acadêmico com prompt completo.
- `S05-P3`: mensagem de produto atrasado com cuidado ético.

## Observação para a apresentação

Este app simula uma IA porque as respostas já foram pré-computadas e armazenadas localmente. Isso resolve o problema central do desafio: ensinar Engenharia de Prompt sem depender da nuvem.
