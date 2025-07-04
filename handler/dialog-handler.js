import { obterImagemProduto } from '../utils/find-image.js';

document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("produtoDialog");
    const closeBtn = document.getElementById("closeDialog");
    const dialogTitle = document.getElementById("dialogTitle");
    const dialogImage = document.getElementById("dialogImage");
    const productQuantity = document.getElementById("product-quantity");
    const productValue = document.getElementById("product-value");
    const dropdownHeader = document.getElementById("dropdownHeader");
    const dropdownContainer = dropdownHeader.closest(".dropdown-container");
    const dropdownContent = dropdownContainer.querySelector(".dropdown-content");
  
    closeBtn.addEventListener("click", () => {
      dialog.close();
    });
  
    document.querySelectorAll(".card-classic a").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        e.preventDefault();
  
        const card = arrow.closest(".card-classic");
        
        const nome = card.querySelector(".nome-produto").textContent;
        const categoria = card.querySelector(".esphere").textContent;
        let imgFolder = 'produce'

        const imagePath = obterImagemProduto(nome.toLowerCase(), categoria);
        dialogImage.src = imagePath;
  
        dialogTitle.textContent = nome;
        productQuantity.textContent = '10 Un.'
        productValue.textContent = 'R$ 00,00'
      
        dropdownHeader.addEventListener("click", () => {
          // Toggle a classe 'open' para abrir ou fechar o dropdown
          dropdownContainer.classList.toggle("open");
        });
  
        dialog.showModal();
      });
    });
  });
  