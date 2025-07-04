export const produtos = {
    morango: "strawberry.jpg",
    abacaxi: "abacaxi.png",
    banana: "banana.png",
    kiwi: "kiwi.png",
    'mamão': "mamao.jpg",
    'melão': "melao.png",
    laranja: "orange.png",
    pera: "pera.png",
    uva: "uva.png",
    melancia: "watermelon.jpg",
    brocolis: "brocolis.jpg",
    cenoura: "carrot.png",
    alface: "lettuce.jpg",
    pepino: "pepino.jpg",
    'pimentão': "pimentao.jpg",
    rabanete: "rabanete.png",
    rucula: "rucula.jpg"
  };
  
  export function obterImagemProduto(nomeProduto, categoria) {
    let imgFolder = 'produce';
    
    if (categoria.toLocaleLowerCase().startsWith('f')) {
      imgFolder = 'fruits';
    }
  
    return `../assets/img/${imgFolder}/${produtos[nomeProduto]}`;
  }
  