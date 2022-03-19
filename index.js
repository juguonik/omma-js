// 1
const empresa = "Sistema Omma";
console.log(`Seja bem vindo ao ${empresa}`);

// 2 e 3
const listaDeReceitas = [
  {
    id: 1,
    titulo: "Cachorro Quente",
    dificuldade: "simples",
    ingredientes: ["1 pao de leite", "1 Salsicha", "Maionese"],
    preparo: "jodbvnujd osbvcujsbn jsbfusb",
    link: "youtube.com",
    vegano: false,
  },
];

const listaDeReceitastop = [
  {
    id: 1,
    titulo: "Cachorro Quente top",
    dificuldade: "simples top",
    ingredientes: ["1 pao de leite top", "1 Salsicha top", "Maionese top"],
    preparo: "jodbvnujd osbvcujsbn jsbfusb",
    link: "youtube.com/top",
    vegano: true,
  },
];

// 4
const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };
  listaDeReceitas.push(novaReceita);

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

// function cadastrarReceita(
//   id,
//   titulo,
//   dificuldade,
//   ingredientes,
//   preparo,
//   link,
//   vegano
// ) {
//   const novaReceita = {
//     id,
//     titulo,
//     dificuldade,
//     ingredientes,
//     preparo,
//     link,
//     vegano,
//   };

//   listaDeReceitas.push(novaReceita);

//   console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
// }

// console.log(listaDeReceitas[1].ingredientes);

// function exibirReceitas() {
//   for (let index = 0; index < listaDeReceitas.length; index++) {
//     const receita = listaDeReceitas[index];
//     console.log("--------------------------------");
//     console.log("Titulo = " + receita.titulo);

//     for (let index = 0; index < receita.ingredientes.length; index++) {
//       const ingrediente = receita.ingredientes[index];
//       console.log("ingredientes = " + ingrediente);
//     }

//     console.log("É vegano? " + receita.vegano);
//     console.log("--------------------------------");
//   }
// }


// 5
// dado um parametro (array) mostre as receitas deste parametro

const exibirReceitas = (lista) => {

  lista.forEach(receita => {
    console.log("--------------------------------");
    console.log("Titulo  = " + receita.titulo);

    const recIngredientes = receita.ingredientes;

    recIngredientes.forEach(ingrediente => {
      console.log("ingredientes = " + ingrediente);
    });
   
    console.log("É vegano? " + receita.vegano);
    console.log("--------------------------------");
  });

  // for (let i = 0; i < lista.length; i++) {
  //   const receita = lista[i];
  //   console.log("--------------------------------");
  //   console.log("Titulo  = " + receita.titulo);

  //   for (let index = 0; index < receita.ingredientes.length; index++) {
  //     const ingrediente = receita.ingredientes[index];
  //     console.log("ingredientes = " + ingrediente);
  //   }

  //   console.log("É vegano? " + receita.vegano);
  //   console.log("--------------------------------");
  // }
}

exibirReceitas(listaDeReceitas);
exibirReceitas(listaDeReceitastop);

// 6
const deletarReceita = (lista, id) => {
  for (let index = 0; index < lista.length; index++) {
    const receita = lista[index];

    if (receita.id === id) {
      console.log("Receita deletada com sucesso");
      
      lista.splice(index, 1);

    } else {
      console.log("Receita não encontrada");
    }
  }

}

deletarReceita(listaDeReceitas, 3)
console.log(listaDeReceitas);


// buscar receita

function buscarReceita(termo) {
  const busca = listaDeReceitas.filter((receita) => receita.titulo.toLowerCase().indexOf(termo.toLowerCase()) > -1)
  console.log("o resultado da sua busca é", busca);
}

buscarReceita ("quente");






// const somar = (a, b) => a + b;
// const multiplicacao = (a, b) => a * b;

// const calculadora = (a, b, acao) => {
//   return acao(a, b);
// };

// const condicaoDeReceita = (receita) => (receita.vegano = true);

// // const novoArray = listaDeReceitas.map(condicaoDeReceita);

// // const receitaNormais = listaDeReceitas.filter(
// //   (receita) => receita.vegano == true
// // );

// // const novoArray = [];
// // listaDeReceitas.forEach((receita) => {
// //   receita.vegano = true;

// //   novoArray.push(receita);
// // });

// function forEach(acao) {
//   for (let index = 0; index < array.length; index++) {
//     acao(array[index], index, array);
//   }
// }

// const atualizaReceita = (id, receitaAtualizada) => {
//   let foiAtualizado = false;

//   listaDeReceitas.forEach((receita) => {
//     if (receita.id != id) {
//       return;
//     }

//     if (receitaAtualizada.titulo) {
//       receita.titulo = receitaAtualizada.titulo;
//     }

//     if (receitaAtualizada.ingredientes) {
//       receita.ingredientes = receitaAtualizada.ingredientes;
//     }

//     foiAtualizado = true;
//   });

//   console.log(
//     foiAtualizado
//       ? "Receita atualizada com sucesso!"
//       : "Não foi encontrado o id"
//   );
// };

// "batata frita".indexOf("frita"); // 7
// "batata frita".indexOf("ovo"); // -1

// const buscarReceita = (termoBuscado) => {

//   const resultados = listaDeReceitas.filter(
//     (receita) =>
//       receita.titulo.toLowerCase().indexOf(termoBuscado.toLowerCase()) != -1
//   );

//   // if (resultados.length) {
//   //   console.log(resultados);
//   // } else {
//   //   console.log("Não foi encontrado receitas");
//   // }

//   if (!resultados.length) {
//     console.log("Não foi encontrado receitas");
//   }

//   return console.log(resultados);
// };


// buscarReceita()