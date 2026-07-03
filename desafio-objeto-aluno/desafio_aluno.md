# Desafios de Objetos — Aluno

Para quem **nunca programou**. Este é o **momento 2**: primeiro faça a aula guiada (pasta **objeto-aluno**); aqui você resolve **sozinho** (pré-requisito: a aula de **funções**). A lista sobe em **níveis**, e cada conceito passa por três tipos de tarefa:

- **VEJA E PREVEJA** — o código já está pronto. Antes de rodar, escreva o que você acha que vai aparecer. Depois rode e confira.
- **MODIFIQUE** — mude um pedacinho do código que já existe.
- **CRIE** — escreva você mesmo, do zero.

Tudo no `desafios.js`. Resultado no Console (F12). Cada tarefa traz o **resultado esperado**, para você se autocorrigir.

> Regra de ouro: um objeto **agrupa dados que andam juntos**. Cada dado tem uma etiqueta (a propriedade) e um valor. Para ler: `objeto.propriedade`

---

## Nível 1 — Criar e ler
1. **[Veja e preveja]** Preveja a saída de `pessoa.nome` e `pessoa.idade`.
2. **[Modifique]** Adicione `cidade: "Santo Amaro"` no objeto e mostre.
3. **[Crie]** Crie `meuJogo` com `titulo` e `horas`. Mostre os dois.

## Nível 2 — Alterar e adicionar
4. **[Veja e preveja]** `carro.ano = 2020;` — preveja o que aparece.
5. **[Modifique]** Troque a marca e adicione `carro.cor = "prata"` depois de criado.
6. **[Crie]** Crie `produto` (preco 50) e aplique 10% de desconto → 45.

## Nível 3 — Objeto + função  *— o coração da aula*
7. **[Veja e preveja]** O objeto viaja inteiro para dentro da função: `apresentar(pessoa)`.
8. **[Veja e preveja]** A dúvida-chave: propriedade que **não existe** devolve `undefined` (não dá erro). Preveja as duas linhas.
9. **[Modifique]** Faça `ficha(p)` que **retorna** o texto em vez de mostrar. Guarde e mostre.
10. **[Crie]** Crie `ehMaiorDeIdade(p)` → retorna `p.idade >= 18`. Mostre com `pessoa`.

## Nível 4 — Fábrica de objetos
11. **[Use]** Crie `colega` (João, 17) e reuse `ficha` e `ehMaiorDeIdade`.
12. **[Crie]** Crie `criarProduto(nome, preco)` que **retorna** um objeto pronto. Fabrique 3 produtos.

## Extra (opcional) — Método
13. **[Veja e preveja]** Função dentro de objeto = **método**. `gato.falar();` — e sim, `console.log` é um método!

## Reflexão (fecha a aula)
Responda com suas palavras: o que é um objeto? Quando você usa o ponto? O que aparece ao ler uma propriedade que não existe?

---

## PANORAMA — só para conhecer (não precisa resolver)

Formas mais avançadas de objeto. Você **não** faz agora; só entende que existem. O professor mostra cada uma rodando.

> Se quiser testar no seu `desafios.js`, use nomes **novos** (como abaixo) — declarar de novo um nome que já existe (`pessoa`, `gato`) causa erro.

**Colchetes (outro jeito de ler)**
```javascript
let usuario = { nome: "Lia" };
console.log(usuario["nome"]); // Lia — igual a usuario.nome
```

**Método com `this` (o método usa os dados do próprio objeto)**
```javascript
let cachorro = {
  nome: "Rex",
  falar: function () { console.log(this.nome + " diz: au au!"); }
};
cachorro.falar(); // Rex diz: au au!
```

**Objeto dentro de objeto (aninhado)**
```javascript
let cliente = {
  nome: "Bia",
  endereco: { rua: "Rua A", cidade: "São Paulo" }
};
console.log(cliente.endereco.cidade); // São Paulo
```

**Lista de objetos (o formato mais usado no dia a dia)**
```javascript
let turma = [ { nome: "Ana" }, { nome: "Beto" } ];
turma.forEach(function (aluno) { console.log(aluno.nome); });
```

**Object.keys — lista as etiquetas**
```javascript
console.log(Object.keys({ a: 1, b: 2 })); // ["a", "b"]
```

**JSON — objeto vira texto (é assim que dados viajam pela internet)**
```javascript
console.log(JSON.stringify({ nome: "Maria", idade: 22 }));
// {"nome":"Maria","idade":22}
```

> Não decore isto. O que importa da aula é o **núcleo** (níveis 1 a 4). Este panorama é um mapa do que vem pela frente.
