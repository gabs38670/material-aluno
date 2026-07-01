/* ============================================================
   script.js  —  VOCÊ VAI ESCREVER AQUI, JUNTO COM O PROFESSOR
   ------------------------------------------------------------
   Este arquivo começa quase vazio de propósito. A cada etapa,
   apague o "// escreva aqui..." e digite o código com a turma.
   Salve, atualize a página (F5) e veja o resultado na caixa.
   Abra o console com F12 para acompanhar também por lá.
   ============================================================ */


/* ------------------------------------------------------------
   AJUDANTE (já pronto) — escreve um texto numa caixa da página.
   Use assim:  mostrar("saida1", "qualquer texto");
   ------------------------------------------------------------ */
function mostrar(id, texto) {
  document.getElementById(id).textContent = texto;
  console.log(texto);
}


/* ============================================================
   ETAPA 1 — VARIÁVEIS  (caixa com nome)
   Crie uma variável com 'let' e mostre na "saida1".
   ============================================================ */
   let nome = "Matheus";
   let idade = 24;
   mostrar("saida1", nome + " tem " + idade + " anos ");

/* ============================================================
   ETAPA 2 — ARRAYS  (vários valores numa variável)
   Crie um array, acesse itens pelo índice e use .length.
   Lembre: a primeira posição é 0!  Mostre na "saida2".
   ============================================================ */
   let turma = ["Ana", "Bruno", "Carla", "Diego"];

   let turma2 = "turma[0] = " + turma[0] + "   (o primeiro) \n" +
                "turma[2] = " + turma[2] + "   (o terceiro item) \n" + 
                "turma.length = " + turma.length + "   (quantos itens tem)";
                
   mostrar("saida2", turma2);


/* ============================================================
   ETAPA 3 — OPERAÇÕES  (push, troca por índice, pop)
   Mexa num array e mostre o resultado na "saida3".
   ============================================================ */

   let compras = ["arroz", "feijão"]
 
compras.push("café")  // adiciona "café" no FIM
compras[0] = "arroz integral"   // TROCA o item da posição 0
// compras.pop();                 // remove o ULTIMO  item
 
mostrar("saida3", "compras = [" + compras.join(", ") + " ]");
 
 
/* ============================================================
   ETAPA 4 — REPETIÇÃO  (percorrer o array com 'for')
   Visite cada posição e monte um texto na "saida4".
   ============================================================ */
let texto4 = "";
 
for (let i = 0; i < turma.length; i++) {
   texto4 += " Aluno " + (i + 1) + " : " + turma[i] + "\n";
}
 
mostrar("saida4", texto4.trim());
   


/* ============================================================
   ETAPA 5 — PROJETO  (lista de tarefas na tela)
   Dicas dos elementos que existem no HTML:
     - formulário:  id="form-tarefa"
     - campo:       id="campo"
     - lista (ul):  id="lista"
     - contador:    id="contador"
     - botão limpar:id="btn-limpar"
   Passos: 1) array vazio  2) ao enviar o form, push no array
           3) redesenhar a lista com um for  4) usar .length
   ============================================================ */

let tarefas = [];
let formulario = document.getElementById("form-tarefa");
let campo = document.getElementById("campo");
let lista = document.getElementById("lista");
let contador = document.getElementById("contador");


   function desenharLista() {
      lista.innerHTML = "";

      for (let i = 0; i < tarefas.length; i++) {
         let item = document.createElement("li");
         item.innerHTML = "<span class= 'indice'>" + i + "</span>" + tarefas[i];
         lista.appendChild(item);
      }
      if (tarefas.length === 0){
         contador.textContent = "Nenhuma tarefa ainda";
      } else{
         contador.textContent = "Você tem" + tarefas.length + " tarefa(s)";
      }
      console.log("Array atual: " , tarefas);
   }
   formulario.addEventListener("submit", function(evento){
      evento.preventDefault(); // impedir que a página recarregar
      let valor = campo.value.trim();
      if(valor === "") return;
      tarefas.push(valor);
      campo.value = "";
      desenharLista();
   })

 document.getElementById("btn-limpar").addEventListener("click", function() {
   tarefas = []
   desenharLista();
 })
