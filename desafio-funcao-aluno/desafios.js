/* ============================================================
   desafios.js  —  FUNÇÕES  ·  para quem NUNCA programou
   ------------------------------------------------------------
   A aula sobe em NÍVEIS. Em cada nível você faz 3 tipos de tarefa:

     [VEJA E PREVEJA]  o código já está pronto. ANTES de rodar,
                       escreva sua previsão. Depois rode (F5) e confira.
     [MODIFIQUE]       mude um pedacinho do código que já existe.
     [CRIE]            escreva você mesmo, do zero.

   COMO RODAR: abra desafios.html, aperte F12, veja a aba "Console".
   Salve e aperte F5 a cada mudança.

   REGRA DE OURO: criar uma função NÃO a executa.
   Para rodar, você precisa CHAMAR:  nome();
   ============================================================ */


/* ================= NÍVEL 1 — CRIAR E CHAMAR ================= */

/* TAREFA 1  [VEJA E PREVEJA]
   O código abaixo já funciona. Antes de rodar, complete a previsão. */
function apresentar() {
  console.log("Oi, eu sou uma função!");
}
apresentar();
// PREVEJA (o que vai aparecer no console?):  _______________________
// Agora rode e confira. Resultado esperado: Oi, eu sou uma função!



/* TAREFA 2  [MODIFIQUE]
   a) Troque a mensagem da função 'apresentar' por outra à sua escolha.
   b) Logo abaixo, adicione mais DUAS chamadas: apresentar();
   Resultado esperado: sua mensagem aparece 3 vezes no total. */
// >>> adicione as duas chamadas aqui <<<
function apresentar() {
   console.log("Hello World!");
}
apresentar();
apresentar();


/* TAREFA 3  [CRIE]
   Crie uma função chamada 'meuNome' que escreve o SEU nome no console.
   Depois CHAME ela.
   Resultado esperado: seu nome aparece uma vez. */
// >>> sua resposta da TAREFA 3 <<<
function meuNome() {
   console.log("Gabriel")
}
meuNome()



/* ================= NÍVEL 2 — PARÂMETRO (a entrada) ================= */

/* TAREFA 4  [VEJA E PREVEJA]
   'nome' é a ENTRADA da função (o parâmetro). */
function saudar(nome) {
  console.log("Olá, " + nome + "!");
}
saudar("Maria");
// PREVEJA:  _______________________
// Resultado esperado: Olá, Maria!


/* TAREFA 5  [MODIFIQUE]
   Chame 'saudar' com o SEU nome e depois com o de um colega (2 chamadas).
   Resultado esperado: duas linhas "Olá, ...". */
// >>> suas duas chamadas aqui <<<
saudar("gabriel");
saudar("ivanildo");

/* TAREFA 6  [CRIE]
   Crie 'apresentarPessoa' que recebe DOIS parâmetros: 'nome' e 'idade'.
   Ela escreve:  <nome> tem <idade> anos.  Chame com dados de alguém.
   MODELO parecido (não copie igual):
       function soma2(a, b) { console.log(a + b); }
       soma2(2, 3);
   Resultado esperado (exemplo): Ana tem 22 anos */
// >>> sua resposta da TAREFA 6 <<<
   function apresentacao (nome, idade) {
      console.log(`${nome} tem ${idade} anos`)
   }
   apresentacao("gabriel", 25)

/* ================= NÍVEL 3 — RETURN (a saída) =================
   Aqui é o coração da aula. Vá devagar. */

/* TAREFA 7  [VEJA E PREVEJA]
   'return' DEVOLVE um valor para quem chamou. Guardamos em 'r'. */
function dobro(n) {
  return n * 2;
}
let r = dobro(5);
console.log(r);
// PREVEJA o valor de r:  10_______________________
// Resultado esperado: 10


/* TAREFA 8  [VEJA E PREVEJA] — a diferença que mais confunde
   Uma função MOSTRA (console.log) — a outra DEVOLVE (return).
   Antes de rodar, tente prever 'a' e 'b'. */
function soMostra(n) { console.log("mostrando: " + (n * 2)); }
function devolve(n) { return n * 2; }
let a = soMostra(5);   // essa função tem return? PREVEJA a:  undefined______
let b = devolve(5);    // essa tem return.        PREVEJA b: 10______
console.log("a =", a, "| b =", b);
// Resultado esperado: mostrando: 10  /  a = undefined | b = 10
// LIÇÃO: só quem tem 'return' devolve um valor que dá para guardar e reusar.


/* TAREFA 9  [MODIFIQUE]
   Crie logo abaixo uma cópia de 'dobro' chamada 'triplo' que retorna n*3.
   Guarde triplo(10) numa variável e mostre.
   Resultado esperado: 30 */
// >>> sua resposta da TAREFA 9 <<<
function triplo(n) {
   return n *3
}
let guardar = triplo(10);
console.log(`Resultado: ${guardar}`)


/* TAREFA 10  [CRIE]
   Crie 'somar' que recebe a e b e RETORNA a soma. Mostre somar(3, 4).
   Resultado esperado: 7 */
// >>> sua resposta da TAREFA 10 <<<
function somar (a, b) {
   return a + b
}
console.log("Soma: " + somar(3, 4))



/* ================= NÍVEL 4 — REUTILIZAÇÃO ================= */

/* TAREFA 11  [USE]
   Usando a sua função 'somar' da tarefa 10, mostre TRÊS contas:
   1+1, 10+5 e 100+23.
   Resultado esperado: 2, depois 15, depois 123 */
// >>> sua resposta da TAREFA 11 <<<
console.log("Soma: " + somar(1, 1))
console.log("Soma: " + somar(10, 5))
console.log("Soma: " + somar(100, 23))

/* TAREFA 12  [CRIE]
   Crie 'precoComDesconto' que recebe um preço e RETORNA o preço com
   10% de desconto (preco * 0.9). Use para 3 produtos: 100, 50 e 20.
   Resultado esperado: 90, 45, 18 */
// >>> sua resposta da TAREFA 12 <<<
function precoComDesconto (preco) {
   return preco * 0.9
}
console.log(precoComDesconto(100))
console.log(precoComDesconto(50))
console.log(precoComDesconto(20))



/* ================= EXTRA (opcional) — VALOR PADRÃO ================= */

/* TAREFA 13  [VEJA E PREVEJA]
   Um parâmetro pode ter um valor padrão, usado quando você não passa nada. */
function saudarPadrao(nome = "visitante") {
  console.log("Bem-vindo, " + nome);
}
saudarPadrao();          // PREVEJA: visitante
saudarPadrao("Carla");   // PREVEJA: Carla
// Resultado esperado: Bem-vindo, visitante  /  Bem-vindo, Carla



/* ================= REFLEXÃO (feche a aula assim) =================
   Responda nos comentários abaixo, com suas próprias palavras:

   1) O que é uma função?  (uma frase sua)
      R: função é um bloco de código que tem parâmetros e pode ser acionada chamando a função.

   2) Complete: "Eu uso 'return' quando eu quero para fazer conta o interromper o código.."

   3) Qual a diferença entre CRIAR e CHAMAR uma função?
      R: Criar a função é somente o código e os parâmetros quando eu chamo a função estou
      executando ela e posso chamar mais de uma vez.

   Terminou tudo? Abra o desafio_aluno.md e leia o "PANORAMA":
   formas mais avançadas de função, só para conhecer.
   ============================================================ */
