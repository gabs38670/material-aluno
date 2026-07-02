# Lista de Desafios — Arrays

**Como resolver:** escreva o código no `script.js` ou direto no console (F12). Teste sempre rodando. Lembre: **o índice começa no 0** e a última posição é `length - 1`.

---

## Parte A — Ler o array

**1.** Crie um array `filmes` com 5 filmes favoritos. Mostre no console **o primeiro** e **o último** filme (use índice; o último com `length - 1`).

**2.** Usando o mesmo array, mostre a frase: `"Minha lista tem X filmes"`, em que X vem de `.length`.

## Parte B — Modificar o array

**3.** Crie um array `compras` com `"pão"` e `"leite"`. Adicione `"ovos"` e `"café"` no fim (`push`), depois remova o último item (`pop`). Mostre o array final.

**4.** No array `compras`, troque o item da **posição 0** por `"pão integral"`. Mostre o resultado.

## Parte C — Percorrer com `for`

**5.** Crie um array `turma` com 4 nomes. Percorra com `for` e mostre cada aluno assim: `1 - Ana`, `2 - Bruno`... (numerando a partir de **1**).

**6.** Crie um array `precos` com os números `[10, 25, 8, 42]`. Percorra com `for` e mostre a **soma total** de todos os preços.

**7.** Crie um array `palavras` com 5 palavras. Percorra e conte **quantas têm mais de 5 letras**. Mostre o total. *(dica: `palavra.length`)*

## Parte D — Projeto

**8.** Faça uma **lista de convidados**: comece com um array vazio, adicione 3 nomes com `push` e, ao final, mostre `"Total de convidados: X"` usando `.length`.

---

## Desafios extras (para quem terminar antes)

**9. ★** Dado `numeros = [7, 2, 19, 5, 11]`, descubra e mostre **o maior número** percorrendo o array com `for`. *(dica: guarde um "maior até agora" e compare a cada volta)*

**10. ★** Dado `turma = ["Ana", "Bruno", "Carla"]`, mostre os nomes **de trás para frente** (Carla, Bruno, Ana) usando um `for` que começa no fim e diminui.
