# Desafios de Funções — Aluno

Para quem **nunca programou**. A lista sobe em **níveis**, e cada conceito passa por três tipos de tarefa:

- **VEJA E PREVEJA** — o código já está pronto. Antes de rodar, escreva o que você acha que vai aparecer. Depois rode e confira.
- **MODIFIQUE** — mude um pedacinho do código que já existe.
- **CRIE** — escreva você mesmo, do zero.

Tudo no `desafios.js`. Resultado no Console (F12). Cada tarefa traz o **resultado esperado**, para você se autocorrigir.

> Regra de ouro: **criar** uma função não a executa. Para rodar, **chame**: `nome();`

---

## Nível 1 — Criar e chamar
1. **[Veja e preveja]** Preveja a saída de `apresentar()` e confira.
2. **[Modifique]** Troque a mensagem e chame a função 3 vezes no total.
3. **[Crie]** Crie `meuNome` que escreve o seu nome. Chame.

## Nível 2 — Parâmetro (a entrada)
4. **[Veja e preveja]** Preveja a saída de `saudar("Maria")`.
5. **[Modifique]** Chame `saudar` com o seu nome e o de um colega.
6. **[Crie]** Crie `apresentarPessoa(nome, idade)` → "<nome> tem <idade> anos".

## Nível 3 — Return (a saída)  *— o coração da aula*
7. **[Veja e preveja]** Preveja o valor devolvido por `dobro(5)`.
8. **[Veja e preveja]** A diferença-chave: `console.log` **mostra**, `return` **devolve**. Preveja `a` e `b`.
9. **[Modifique]** Faça um `triplo` (n \* 3), guarde `triplo(10)` e mostre.
10. **[Crie]** Crie `somar(a, b)` com `return`. Mostre `somar(3, 4)`.

## Nível 4 — Reutilização
11. **[Use]** Com `somar`, mostre 1+1, 10+5 e 100+23.
12. **[Crie]** Crie `precoComDesconto(preco)` → `preco * 0.9`. Use para 100, 50, 20.

## Extra (opcional) — Valor padrão
13. **[Veja e preveja]** `saudarPadrao(nome = "visitante")` chamado com e sem argumento.

## Reflexão (fecha a aula)
Responda com suas palavras: o que é uma função? Quando você usa `return`? Qual a diferença entre criar e chamar?

---

## PANORAMA — só para conhecer (não precisa resolver)

Formas mais avançadas de função. Você **não** faz agora; só entende que existem. O professor mostra cada uma rodando.

> Se quiser testar no seu `desafios.js`, use nomes **novos** (como abaixo) — declarar de novo um nome que já existe (`dobro`, `somar`) causa erro.

**Arrow function (formato curto)**
```javascript
const dobroSeta = (n) => n * 2;
console.log(dobroSeta(5)); // 10
```

**Função anônima (sem nome, guardada numa variável)**
```javascript
const somarAnon = function (a, b) { return a + b; };
```

**Função como argumento (callback)**
```javascript
[1, 2, 3].forEach(function (item) { console.log(item); });
```

**Função de ordem superior** — recebe ou devolve outra função (o `forEach` acima é um exemplo).

**Recursão** — a função chama a si mesma:
```javascript
function contar(n) { if (n === 0) return; console.log(n); contar(n - 1); }
contar(3); // 3, 2, 1
```

**Escopo (variável local)** — uma variável criada dentro da função só vive lá dentro:
```javascript
function calcular() { let total = 10; console.log(total); }
calcular();
// console.log(total); // dá erro: 'total' não existe fora da função
```

> Não decore isto. O que importa da aula é o **núcleo** (níveis 1 a 4). Este panorama é um mapa do que vem pela frente.
