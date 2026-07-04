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

   REGRA DE OURO desta aula:
   o localStorage só guarda TEXTO. O JSON é o tradutor:
     objeto -> texto :  JSON.stringify(objeto)
     texto -> objeto :  JSON.parse(texto)
   ============================================================ */


/* AJUDANTE (já pronto). Uso: mostrar("saida1", "texto"); */
function mostrar(id, texto) {
  document.getElementById(id).textContent = texto;
  console.log(texto);
}


/* ===== ETAPA 1 — OBJETO VIRA TEXTO (JSON.stringify) =====

   OBJETIVO: criar o objeto 'aluno' (nome e curso), transformar em
             TEXTO com JSON.stringify e mostrar em "saida1".

   DICA: JSON.stringify(objeto) devolve o objeto escrito como texto:
             let aluno = { nome: "Duda", curso: "Programação" };
             let texto = JSON.stringify(aluno);
             mostrar("saida1", texto);

   MODELO (parecido, não igual):
             let jogo = { titulo: "FIFA", horas: 120 };
             mostrar("saidaX", JSON.stringify(jogo));
*/
// >>> SUA VEZ (ETAPA 1) <<<

let aluno = {nome: "Gabriel", curso:"Técnico de TI"};
let texto = JSON.stringify(aluno);
mostrar("saida1", texto);



/* ===== ETAPA 2 — TEXTO VIRA OBJETO (JSON.parse) =====

   OBJETIVO: o texto abaixo chegou "da internet". Transforme de volta
             em OBJETO com JSON.parse e mostre só o nome em "saida2".

   O texto já está pronto: */
let textoRecebido = '{"nome":"Rebeca","curso":"Design"}';
/*
   DICA: JSON.parse(texto) devolve o objeto de volta — aí o ponto
         funciona de novo:
             let obj = JSON.parse(textoRecebido);
             mostrar("saida2", obj.nome);
         (repare: no TEXTO o ponto não funciona; no OBJETO, sim)
*/
// >>> SUA VEZ (ETAPA 2) <<<
 let obj = JSON.parse(textoRecebido);
 mostrar("saida2", obj.nome)


/* ===== ETAPA 3 — GUARDAR NO NAVEGADOR (setItem) =====

   OBJETIVO: guardar o seu nome no navegador e mostrar em "saida3"
             a mensagem:  Guardei: <seu nome>

   DICA: localStorage.setItem("chave", "valor") guarda um texto
         que SOBREVIVE ao F5 (é o pulo do gato desta aula!):
             localStorage.setItem("nome", "seu nome aqui");
             mostrar("saida3", "Guardei: " + localStorage.getItem("nome"));

   TESTE DA MÁGICA: depois de rodar, aperte F5 várias vezes.
   O valor continua lá — ficou salvo NO COMPUTADOR, não na página.
*/
// >>> SUA VEZ (ETAPA 3) <<<
localStorage.setItem("nome", "Gabriel");
mostrar("saida3", "Guardei: " + localStorage.getItem("nome"))



/* ===== ETAPA 4 — LER O QUE GUARDOU (getItem) =====

   OBJETIVO: ler DUAS chaves e mostrar em "saida4" (uma em cada linha):
             a) a chave "nome"       (você guardou na Etapa 3)
             b) a chave "naoExiste"  (nunca foi guardada!)

   DICA: localStorage.getItem("chave") devolve o texto guardado —
         e devolve NULL quando a chave não existe (não dá erro!):
             mostrar("saida4",
               localStorage.getItem("nome") + "\n" +
               localStorage.getItem("naoExiste"));

   Lembra do 'undefined' dos objetos? Aqui a mesma armadilha
   se chama 'null' — chave errada = null silencioso.
*/
// >>> SUA VEZ (ETAPA 4) <<<
mostrar("saida4", localStorage.getItem("nome") + "\n" + localStorage.getItem("naoExiste"));



/* ===== ETAPA 5 — GUARDAR UM OBJETO INTEIRO (o coração) =====

   OBJETIVO: o localStorage só aceita TEXTO — e agora? JSON!
             a) guarde o objeto 'aluno' da Etapa 1:
                localStorage.setItem("aluno", JSON.stringify(aluno));
             b) leia de volta e transforme em objeto:
                let voltou = JSON.parse(localStorage.getItem("aluno"));
             c) mostre em "saida5":  <nome> — <curso>

   DICA: o caminho é sempre o mesmo, decore o par:
             GUARDAR:  setItem  +  JSON.stringify
             LER:      getItem  +  JSON.parse
*/
// >>> SUA VEZ (ETAPA 5) <<<
localStorage.setItem("aluno", JSON.stringify(aluno));
let voltou = JSON.parse(localStorage.getItem("aluno"));
mostrar("saida5", voltou.nome + " - " + voltou.curso);



/* ===== ETAPA 6 — E SE NÃO TIVER NADA? (null + padrão) =====

   OBJETIVO: ler a chave "apelido" (que não existe). Se vier null,
             mostrar "Visitante" em "saida6"; senão, mostrar o apelido.

   DICA: guarde o que veio e decida com if:
             let apelido = localStorage.getItem("apelido");
             if (apelido === null) {
               mostrar("saida6", "Visitante");
             } else {
               mostrar("saida6", apelido);
             }
         É assim que os apps decidem entre "Bem-vindo de volta!"
         e "Crie sua conta" — olhando se há algo salvo.
*/
// >>> SUA VEZ (ETAPA 6) <<<
let apelido = localStorage.getItem("apelido");
if (apelido === null) {
   mostrar("saida6", "Visitante");
} else {
   mostrar("saida6", apelido);
}



/* ===== ETAPA 7 — LISTA SALVA (nível avançado) =====

   OBJETIVO: salvar o pedido da lanchonete INTEIRO (uma lista de
             objetos!), ler de volta e mostrar o total em "saida7":
             Total salvo: R$ 33

   A lista já está pronta: */
let pedido = [
  { nome: "X-salada", preco: 15 },
  { nome: "Suco de laranja", preco: 6 },
  { nome: "Açaí", preco: 12 }
];
/*
   DICA: lista também vira texto com JSON.stringify — o caminho
         é o MESMO da Etapa 5:
             localStorage.setItem("pedido", JSON.stringify(pedido));
             let pedidoSalvo = JSON.parse(localStorage.getItem("pedido"));
         e o total é o for da aula de objetos:
             let total = 0;
             for (let i = 0; i < pedidoSalvo.length; i++) {
               total = total + pedidoSalvo[i].preco;
             }
*/
// >>> SUA VEZ (ETAPA 7) <<<
localStorage.setItem("pedido", JSON.stringify(pedido));
let pedidoSalvo = JSON.parse(localStorage.getItem("pedido"));

let total = 0;
for (let i = 0; i < pedidoSalvo.length; i++) {
   total = total + pedidoSalvo[i].preco
}

mostrar("saida7", "Preco: R$ " + total)


/* ===== PROJETO — PERFIL QUE LEMBRA DE VOCÊ =====

   Digite nome e curso, clique em "Salvar perfil" e depois
   aperte F5: a página vai te reconhecer. O botão "Esquecer"
   apaga tudo.

   PASSO 1 — complete a função 'salvarPerfil':
             a) monte o objeto { nome: ..., curso: ... }
             b) guarde:  setItem + JSON.stringify  (Etapa 5!)
             c) chame carregarPerfil() para atualizar a tela
*/
function salvarPerfil() {
  let nome = document.getElementById("nome").value;
  let curso = document.getElementById("curso").value;

  // DICA: let perfil = { nome: nome, curso: curso };
  //       localStorage.setItem("perfil", JSON.stringify(perfil));
  //       carregarPerfil();
  // >>> PASSO 1 aqui <<<
  let perfil = { nome: nome, curso: curso};
  localStorage.setItem("perfil", JSON.stringify(perfil));
}

/* PASSO 2 — complete a função 'carregarPerfil':
             a) leia a chave "perfil" com getItem
             b) se vier null  -> mostre "Ainda não te conheço. Salve seu perfil!"
             c) senão -> JSON.parse e mostre:
                Bem-vindo de volta, <nome>! Bons estudos em <curso>.
             (é a Etapa 6 + a Etapa 5 juntas)
*/
function carregarPerfil() {
  let texto = localStorage.getItem("perfil");

  // DICA: if (texto === null) { mostrar("resultado", "..."); }
  //       else { let perfil = JSON.parse(texto); mostrar("resultado", ...); }
  // >>> PASSO 2 aqui <<<
   if (texto === null) {mostrar("resultado", "..."); }
   else {let perfil = JSON.parse(texto); mostrar("resultado",  "Bem-vindo de volta " + perfil.nome + " Bons estudos em " + perfil.curso);}
}

/* PASSO 3 — 'esquecer' e as ligações dos botões (já prontos). */
function esquecer() {
  localStorage.removeItem("perfil");
  carregarPerfil();
}
document.getElementById("btn-salvar").addEventListener("click", salvarPerfil);
document.getElementById("btn-esquecer").addEventListener("click", esquecer);
carregarPerfil(); // roda ao abrir a página — é isso que "lembra" de você!
