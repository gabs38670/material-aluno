/* ============================================================
   script.js  —  O ÚNICO ARQUIVO QUE VOCÊ VAI EDITAR
   ------------------------------------------------------------
   >> Não precisa mexer no index.html nem no style.css. <<

   Em cada etapa:
     OBJETIVO -> o que fazer
     DICA     -> a regra
     MODELO   -> um exemplo PARECIDO (molde, não a resposta)
     SUA VEZ  -> o espaço para você escrever

   As etapas sobem de nível. Salve e aperte F5 a cada uma.
   ============================================================ */


/* AJUDANTE (já pronto). Uso: mostrar("saida1", "texto"); */
function mostrar(id, texto) {
  document.getElementById(id).textContent = texto;
  console.log(texto);
}


/* ===== ETAPA 1 — O QUE É UMA FUNÇÃO (sem entrada) =====
   OBJETIVO: criar 'saudacao' que mostra "Bem-vindo à aula!" na
             "saida1". Depois CHAMAR a função.
   DICA: function nome() { ... }   e para executar:  nome();
   MODELO:
       function avisar() { mostrar("saida1", "Olá, turma!"); }
       avisar();
*/
// >>> ETAPA 1 aqui <<<

function apresentar(){
  mostrar("saida1", "Bem-vindo á aula! Jovem!")
}
apresentar();


/* ===== ETAPA 2 — PARÂMETRO (entrada) =====
   OBJETIVO: criar 'saudar' que recebe 'nome' e mostra
             "Olá, <nome>!" na "saida2". Chamar com um nome.
   DICA: o parâmetro fica nos parênteses: function saudar(nome) { ... }
   MODELO:
       function dobro(n) { mostrar("saida2", "Dobro: " + (n * 2)); }
       dobro(5);
*/
// >>> ETAPA 2 aqui <<<

function saudar(nome) {
  mostrar("saida2", "olá, " + nome + "!")
}
saudar("joão");



/* ===== ETAPA 3 — RETORNO (saída) =====
   OBJETIVO: criar 'somar' que recebe a e b e RETORNA a soma.
             Guardar numa variável e mostrar na "saida3".
   DICA: return devolve o valor:  function somar(a, b) { return a + b; }
   MODELO:
       function multiplicar(a, b) { return a * b; }
       let r = multiplicar(3, 4);
       mostrar("saida3", "Deu " + r);
*/
// >>> ETAPA 3 aqui <<<

function somar( a, b){
  return a +b
}
let resultado3 = somar (3, 4)
mostrar("saida3", "3 + 4 = " + resultado3)


/* ===== ETAPA 4 — REUTILIZAÇÃO =====
   OBJETIVO: usando a 'somar' da etapa 3, montar um texto com TRÊS
             somas diferentes na "saida4".
   DICA: chame a mesma função várias vezes; use "\n" para quebrar linha.
   MODELO:
       let texto = "3+4 = " + somar(3,4) + "\n" + "5+6 = " + somar(5,6);
       mostrar("saida4", texto);
*/
// >>> ETAPA 4 aqui <<<

let texto4 = 
"2 + 3 = " + somar(2, 3) + "\n" +
"10 + 5 = " + somar(10, 5) + "\n" +
"100 + 1 = " + somar(100, 1)
mostrar("saida4", texto4)




/* ===== ETAPA 5 — DECISÃO DENTRO DA FUNÇÃO (nível intermediário) =====
   OBJETIVO: criar 'situacao' que recebe uma 'nota' e RETORNA
             "Aprovado" se nota >= 6, senão "Recuperação".
             Mostrar o resultado para a nota 8 e para a nota 4 na "saida5".
   DICA: use if / else dentro da função:
       function situacao(nota) {
         if (nota >= 6) { return "Aprovado"; }
         else { return "Recuperação"; }
       }
   MODELO:
       function maioridade(idade) {
         if (idade >= 18) { return "maior"; } else { return "menor"; }
       }
       mostrar("saida5", "18: " + maioridade(18));
*/
// >>> ETAPA 5 aqui <<<

function situacao(nota) {
  if (nota >= 6) {
    return "Aprovado"
  } else {
    return "Recuperação"
  }
}
let texto5 = 
"nota 8 ->" + situacao(8) + "\n" +
"nota 4 ->" + situacao(4);
mostrar("saida5", texto5)



/* ===== ETAPA 6 — UMA FUNÇÃO QUE USA OUTRA (composição) =====
   OBJETIVO: criar 'comDesconto(preco)' que retorna preco * 0.9,
             e 'comFrete(preco)' que retorna preco + 10. Depois criar
             'precoFinal(preco)' que USA as duas e retorna o total.
             Mostrar precoFinal(100) na "saida6".
   DICA: uma função pode chamar outra dentro dela:
       function precoFinal(preco) { return comFrete(comDesconto(preco)); }
   MODELO:
       function metade(n) { return n / 2; }
       function maisUm(n) { return n + 1; }
       function combo(n) { return maisUm(metade(n)); }
       mostrar("saida6", "combo(10) = " + combo(10));
*/
// >>> ETAPA 6 aqui <<<

function comDesconto(preco) {
  return preco * 0.9;
}
function comFrete(preco) {
  return preco + 10;
}
function comFinal(preco) {
  return comFrete(comDesconto(preco))
}
mostrar("saida6", "preço 100 -> paga " + comFinal(100));



/* ===== ETAPA 7 — FUNÇÃO QUE PROCESSA UMA LISTA (nível avançado) =====
   OBJETIVO: criar 'somarLista' que recebe um ARRAY de números,
             percorre com for e RETORNA a soma de todos.
             Testar com [7, 9, 6, 10] e mostrar na "saida7".
   DICA: crie um total = 0 antes do for e vá somando numeros[i]:
       function somarLista(numeros) {
         let total = 0;
         for (let i = 0; i < numeros.length; i++) { total = total + numeros[i]; }
         return total;
       }
   MODELO:
       function contarItens(lista) { return lista.length; }
       mostrar("saida7", "Itens: " + contarItens([1, 2, 3]));
*/
// >>> ETAPA 7 aqui <<<

function somarLista(numeros) {
  let total = 0;
  for( let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
}
let notas = [7, 9, 6, 10]
mostrar ("saida7", "Soma da lista [7, 9, 6, 10] = " + somarLista(notas));



/* ===== PROJETO — CALCULADORA COM TRÊS FUNÇÕES =====
   OBJETIVO: cada botão chama uma função diferente. Ao clicar,
             ler num1 e num2, calcular e mostrar em "resultado".

   Elementos no HTML: num1, num2, resultado, btn-somar,
   btn-subtrair, btn-multiplicar.
   ============================================================ */

// PASSO 1 — crie 'subtrair(a, b)' e 'multiplicar(a, b)' com return.
//           (a 'somar' você já criou na etapa 3.)
// >>> escreva aqui <<<

function subtrair (a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}


// PASSO 2 — complete a função 'calcular' abaixo.
function calcular(operacao) {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let r;
  if (operacao === "somar") {
    r = somar(a, b);
  } else if (operacao === "subtrair") {
    r = subtrair(a, b);
  } else if (operacao === "multiplicar") {
    r = multiplicar(a, b);
  } else {
    r = "Operação inválida";
  }
  mostrar("resultado", a + " " + operacao + " " + b + " = " + r);
  // DICA: escolha a conta conforme 'operacao' com if / else if / else,
  //       guarde em 'r' e mostre em "resultado".
  // >>> escreva aqui: decidir a conta e chamar mostrar("resultado", ...) <<<
}

// PASSO 3 — ligue cada botão à função (já pronto).
document.getElementById("btn-somar").addEventListener("click", function () { calcular("somar"); });
document.getElementById("btn-subtrair").addEventListener("click", function () { calcular("subtrair"); });
document.getElementById("btn-multiplicar").addEventListener("click", function () { calcular("multiplicar"); });
