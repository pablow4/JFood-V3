const addDishForm = document.getElementById('add-dish-form');
const pratos = [];

addDishForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const dishName = document.getElementById('dish-name').value;
  const dishPrice = document.getElementById('dish-price').value;
  const dishImage = document.getElementById('dish-image').value;
  const dishCategory = document.getElementById('dish-category').value;

  if (dishName && dishPrice && dishImage && dishCategory) {
    const novoPrato = {
      nome: dishName,
      preco: dishPrice,
      imagem: dishImage,
      categoria: dishCategory
    };

    pratos.push(novoPrato);

    console.log('Prato adicionado:', novoPrato);

    addDishForm.reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});