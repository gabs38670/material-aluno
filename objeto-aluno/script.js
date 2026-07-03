/* ============================================================
   script.js  —  O ÚNICO ARQUIVO QUE VOCÊ VAI EDITAR
   ------------------------------------------------------------
   >> Não precisa mexer no index.html nem no style.css. <<

   Em cada etapa:
     OBJETIVO -> o que fazer
     DICA     -> a regra (quase a resposta — leia com atenção!)
     MODELO   -> um exemplo PARECIDO (molde, não a resposta)
     SUA VEZ  -> o espaço para você escrever

   As etapas sobem de nível. Salve e aperte F5 a cada uma.

   REGRA DE OURO: um objeto agrupa dados que andam juntos.
   Cada dado tem uma ETIQUETA (propriedade) e um VALOR.
   Para ler:  objeto.propriedade
   ============================================================ */


/* AJUDANTE (já pronto). Uso: mostrar("saida1", "texto"); */
function mostrar(id, texto) {
  document.getElementById(id).textContent = texto;
  console.log(texto);
}


/* ===== ETAPA 1 — O QUE É UM OBJETO =====

   OBJETIVO: criar um objeto 'aluno' com nome, curso e unidade,
             e mostrar em "saida1":  <nome> estuda <curso> no Senac <unidade>

   DICA: um objeto nasce assim (repare no : e nas vírgulas):
             let aluno = {
               nome: "seu nome aqui",
               curso: "Programação",
               unidade: "Largo Treze"
             };
         e cada dado se lê com o ponto:  aluno.nome

   MODELO (parecido, não igual):
             let cliente = { nome: "Bia", plano: "mensal" };
             mostrar("saidaX", cliente.nome + " assina o plano " + cliente.plano);
*/
// >>> SUA VEZ (ETAPA 1) <<<
  let aluno = {
    nome: "joão",
    curso: "Programação",
    unidade: "Largo Treze"
  };
  mostrar("saida1", aluno.nome + " estuda " + aluno.curso + " no Senac " + aluno.unidade)


/* ===== ETAPA 2 — ALTERAR E ADICIONAR =====

   OBJETIVO: o celular entrou em promoção na loja do Largo Treze!
             a) crie 'celular' com  modelo: "Galaxy A15"  e  preco: 1200
             b) TROQUE o preço para 999
             c) ADICIONE uma propriedade nova:  cor: "preto"
             d) mostre em "saida2":  <modelo> · R$ <preco> · <cor>

   DICA: trocar um valor  ->  celular.preco = 999;
         criar uma nova   ->  celular.cor = "preto";
         (o : só aparece DENTRO das chaves; fora delas, use = )

   MODELO:
             let tenis = { marca: "Olympikus", preco: 200 };
             tenis.preco = 150;
             tenis.tamanho = 40;
             mostrar("saidaX", tenis.marca + " · R$ " + tenis.preco + " · " + tenis.tamanho);
*/
// >>> SUA VEZ (ETAPA 2) <<<
let celular = {
  modelo: "Galaxy A15", 
  preco: 1200
};
celular.preco = 999;
celular.cor = "preto";
mostrar("saida2", celular.modelo + " R$ " + celular.preco +  " " + celular.cor)



/* ===== ETAPA 3 — OBJETO + FUNÇÃO (o objeto viaja inteiro) =====

   OBJETIVO: criar a função 'apresentar' que recebe o objeto 'aluno'
             INTEIRO (um parâmetro só!) e mostra em "saida3":
             <nome> faz <curso> no Senac <unidade>

   DICA: o parâmetro recebe o objeto todo; dentro, leia com o ponto:
             function apresentar(a) {
               mostrar("saida3", a.nome + " faz " + ...);
             }
             apresentar(aluno);   // manda a ficha inteira!

   MODELO:
             function etiquetar(p) {
               mostrar("saidaX", p.marca + " custa R$ " + p.preco);
             }
             etiquetar(tenis);
*/
// >>> SUA VEZ (ETAPA 3) <<<
function apresentar(labubu) {
  mostrar("saida3", labubu.nome + " faz " + labubu.curso + " no Senac " + labubu.unidade)
}
apresentar(aluno)



/* ===== ETAPA 4 — FUNÇÃO QUE DEVOLVE COM RETURN =====

   OBJETIVO: criar 'fazerCracha' que recebe o objeto e RETORNA o texto
             <nome> — <curso>   (não mostra: DEVOLVE!)
             Depois guarde numa variável e mostre em "saida4".

   DICA: return devolve; quem chamou guarda:
             function fazerCracha(a) {
               return a.nome + " — " + a.curso;
             }
             let cracha = fazerCracha(aluno);
             mostrar("saida4", cracha);
         (é a mesma ideia do return da aula de funções — agora com objeto)

   MODELO:
             function resumo(p) { return p.marca + ": R$ " + p.preco; }
             let texto = resumo(tenis);
*/
// >>> SUA VEZ (ETAPA 4) <<<

function fazerCracha (a) {
  return a.nome + " - " + a.curso;
}
let cracha = fazerCracha(aluno);
mostrar("saida4", cracha)


/* ===== ETAPA 5 — DECISÃO COM OS DADOS DO OBJETO =====

   OBJETIVO: no busão do Terminal Santo Amaro, estudante paga meia.
             Crie 'valorPassagem' que recebe uma pessoa e retorna:
             se  pessoa.estudante  for true  -> 2.20
             senão                           -> 4.40
             Teste com os DOIS objetos abaixo e mostre em "saida5".

   DICA: o if olha a propriedade do objeto:
             function valorPassagem(pessoa) {
               if (pessoa.estudante) {
                 return 2.20;
               } else {
                 return 4.40;
               }
             }

  Os passageiros já estão prontos: */
  let passageiro1 = { nome: "Duda", estudante: true };
  let passageiro2 = { nome: "Seu Carlos", estudante: false };

function valorPassagem(pessoa) {
  if (pessoa.estudante) {
    return 2.40;
  } else {
    return 5.40
  }
}


/*
   Para mostrar as duas linhas de uma vez:
             mostrar("saida5",
               passageiro1.nome + " paga R$ " + valorPassagem(passageiro1) + "\n" +
               passageiro2.nome + " paga R$ " + valorPassagem(passageiro2));

   REPARE: vai aparecer "2.2", não "2,20" — o JavaScript corta o zero
   do final e usa ponto no lugar da vírgula. É normal, não é erro seu!
*/
// >>> SUA VEZ (ETAPA 5) <<<
mostrar("saida5", 
  passageiro1.nome + " paga R$ " + valorPassagem(passageiro1) + "\n" +
  passageiro2.nome + " paga R$ " + valorPassagem(passageiro2));




/* ===== ETAPA 6 — FÁBRICA DE OBJETOS =====

   OBJETIVO: a barraca da feira tem muitos produtos — fabrique-os!
             Crie 'criarProduto(nome, preco)' que RETORNA um objeto
             pronto. Fabrique "Pastel de queijo" (8) e "Caldo de cana" (5)
             e mostre os dois em "saida6":  <nome>: R$ <preco>

   DICA: a fábrica é assim (pode copiar — o molde é este mesmo):
             function criarProduto(nome, preco) {
               return { nome: nome, preco: preco };
             }
         estranhou o  nome: nome ?  É  etiqueta: valor-do-parâmetro.

   MODELO de uso:
             let item1 = criarProduto("Pastel de queijo", 8);
             mostrar("saidaX", item1.nome + ": R$ " + item1.preco);
*/
// >>> SUA VEZ (ETAPA 6) <<<
function criarProduto (nome, preco) {
  return {nome: nome, preco: preco};
}
let item1 = criarProduto("pastel de queijo", 8)
mostrar("saida6", item1.nome + ": R$ " + item1.preco) 



/* ===== ETAPA 7 — LISTA DE OBJETOS (nível avançado) =====

   OBJETIVO: somar o pedido da lanchonete. A lista já está pronta;
             percorra com for, some os preços e mostre em "saida7":
             Total do pedido: R$ <total>

   DICA: cada posição da lista é um OBJETO; o preço de cada um é
         pedido[i].preco  — e lembre de começar o total em 0:
             let total = 0;
             for (let i = 0; i < pedido.length; i++) {
               total = total + pedido[i].preco;
             }

   O pedido já está pronto: */
let pedido = [
  { nome: "X-salada", preco: 15 },
  { nome: "Suco de laranja", preco: 6 },
  { nome: "Açaí", preco: 12 }
];
// >>> SUA VEZ (ETAPA 7) <<<   (resultado esperado: Total do pedido: R$ 33)
let total = 0;
for (let i = 0; i < pedido.length; i++) {
  total = total + pedido[i].preco;
}
mostrar("saida7", + total)



/* ===== PROJETO — CRACHÁ DO CURSO =====

   Digite nome e idade na página e clique em "Criar crachá".

   PASSO 1 — crie a fábrica 'criarPessoa(nome, idade)' que retorna
             um objeto { nome: ..., idade: ... }.
             DICA: é igualzinha à criarProduto da Etapa 6.
*/
// >>> PASSO 1 aqui <<<
function criarPessoa(nome, idade){
  return {nome:nome,idade:idade}
}

/* PASSO 2 — complete a função 'gerarCracha' abaixo:
             a) fabrique a pessoa com criarPessoa(nome, idade)
             b) monte o texto do crachá:  <nome>, <idade> anos
             c) decida a linha do transporte com if/else:
                idade < 21  ->  "Paga meia no busão? Provável — leve o bilhete de estudante!"
                senão       ->  "Passagem inteira: R$ 4,40"
             d) mostre tudo em "resultado" (junte as linhas com "\n")
*/
function gerarCracha() {
  let nome = document.getElementById("nome").value;
  let idade = Number(document.getElementById("idade").value);

  // DICA: let pessoa = criarPessoa(nome, idade);
  //       let linha1 = pessoa.nome + ", " + pessoa.idade + " anos";
  //       ...decida a linha2 com if/else olhando pessoa.idade...
  //       mostrar("resultado", linha1 + "\n" + linha2);
  // >>> PASSO 2 aqui <<<
  let pessoa = criarPessoa(nome, idade);
  let linha1 = pessoa.nome + ", " + pessoa.idade + " anos";
  let linha2;
  if (idade < 21) {
    linha2 = "Paga meia no busão? Provável!";
  } else {
    linha2 = "Passagem inhteira: R$ 4,40";
  }
  mostrar("resultado", linha1 + "\n" + linha2);
}

/* PASSO 3 — ligar o botão à função (já pronto). */
document.getElementById("btn-criar").addEventListener("click", gerarCracha);
