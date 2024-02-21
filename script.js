const imagePreview = document.getElementById("image-preview");
const productTitle = document.getElementById("product-title");
const nameColorSelected = document.getElementById("color-name-selected");
const imageOption0 = document.getElementById("0-thumbnail-image");
const imageOption1 = document.getElementById("1-thumbnail-image");
const imageOption2 = document.getElementById("2-thumbnail-image");

const blueWinter = {
    nameColor: "Azul-inverno",
    folder: "blue-winter-images"
};

const cypressGreen = {
    nameColor: "Verde-cipreste",
    folder: "cypress-green-images"
};

const lightPink = {
    nameColor: "Rosa-claro",
    folder: "light-pink-images"
};

const midnight = {
    nameColor: "Meia-noite",
    folder: "midnight-images"
};

const stellar = {
    nameColor: "Estelar",
    folder: "stellar-images"
};

const colorOptions = [cypressGreen, blueWinter, midnight, stellar, lightPink];
const sizeOptions = ["41 mm", "45 mm"];

let imageSelected = 1;
let sizeSelected = 1;
let colorSelected = 1;

function changesColor() {
    //trocar título da página
    const idOptionColorSelected = document.querySelector('[name="color-option"]:checked').id.charAt(0);
    colorSelected = idOptionColorSelected;
    //trocar nome da cor
    nameColorSelected.innerText = `Cor : ${colorOptions[colorSelected].nameColor}`;
        
    //trocar imagem miniatura
    imageOption0.src = `./images/color-options/${colorOptions[colorSelected].folder}/image-0.jpeg`;
    imageOption1.src = `./images/color-options/${colorOptions[colorSelected].folder}/image-1.jpeg`;
    imageOption2.src = `./images/color-options/${colorOptions[colorSelected].folder}/image-2.jpeg`;

    //trocar imagem visalização
    imagePreview.src = `./images/color-options/${colorOptions[colorSelected].folder}/image-${imageSelected}.jpeg`;
    
    //trocar título da pagina
    productTitle.innerText = `Pulseira loop esportiva ${colorOptions[
        colorSelected
    ].nameColor.toLowerCase()} para caixa de ${sizeOptions[sizeSelected]}`; 
}

function changesSize() {
    //atualizar variável de controle de tamanho
    const selectedSizeOptions = document.querySelector('[name="size-option"]:checked').id.charAt(0);
    sizeSelected = selectedSizeOptions;    

    //mudar tamanho da imagem de acordo com a opção
    if (sizeOptions[sizeSelected]=== "41 mm") {
        imagePreview.classList.add('little-box');
      //mudar o título do produto
      productTitle.innerText = `Pulseira loop esportiva ${colorOptions[
        colorSelected
      ].nameColor.toLowerCase()} para caixa de ${sizeOptions[sizeSelected]}`;
      //return;
    } else {
    imagePreview.classList.remove('little-box');
    productTitle.innerText = `Pulseira loop esportiva ${colorOptions[
        colorSelected
      ].nameColor.toLowerCase()} para caixa de ${sizeOptions[sizeSelected]}`;   }
}

function changesImage() {
    const idOptionImageSelected = document.querySelector('[name="image-option"]:checked').id.charAt(0);
    imageSelected = idOptionImageSelected;
    imagePreview.src = `./images/color-options/${colorOptions[colorSelected].folder}/image-${imageSelected}.jpeg`;
}



