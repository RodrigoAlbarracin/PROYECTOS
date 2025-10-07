// 3.1 - Crear lista <ul> con países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

// 3.2 - Eliminar el elemento con la clase .fn-remove-me
const elementoAEliminar = document.querySelector('.fn-remove-me');
if (elementoAEliminar) elementoAEliminar.remove();

// 3.3 - Crear lista de coches dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrint = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
divPrint.appendChild(ulCars);

// 3.4 - Crear una serie de divs con título e imagen
const countriesWithImg = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const container = document.createElement('div');
container.classList.add('country-container');

countriesWithImg.forEach((country, index) => {
  const div = document.createElement('div');
  div.classList.add('country');

  const h4 = document.createElement('h4');
  h4.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;
  img.alt = country.title;

  // 3.5 - Crear botón que elimina solo este div
  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Eliminar este';
  btnDelete.addEventListener('click', () => {
    div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(btnDelete);
  container.appendChild(div);
});

document.body.appendChild(container);

// 3.6 - Crear un botón que elimine el último div de la lista
const btnRemoveLast = document.createElement('button');
btnRemoveLast.textContent = 'Eliminar último';
btnRemoveLast.addEventListener('click', () => {
  const allDivs = container.querySelectorAll('.country');
  const lastDiv = allDivs[allDivs.length - 1];
  if (lastDiv) lastDiv.remove();
});

document.body.appendChild(btnRemoveLast);
