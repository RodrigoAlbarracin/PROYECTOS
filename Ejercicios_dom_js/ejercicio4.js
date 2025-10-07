// 4.1 - Añadir un botón y un evento click
const btn = document.createElement('button');
btn.id = 'btnToClick';
btn.textContent = 'Haz click aquí';
document.body.appendChild(btn);

btn.addEventListener('click', (event) => {
  console.log('Evento click:', event);
});

// 4.2 - Evento 'focus' que muestra el valor del input
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
  console.log('Valor del input (focus):', event.target.value);
});

// 4.3 - Evento 'input' que muestra el valor del input mientras escribes
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
  console.log('Valor actual (input):', event.target.value);
});

// --- Extra: crear lista de albums ---

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Crear lista ul > li dinámicamente
const ul = document.createElement('ul');

albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album;
  ul.appendChild(li);
});

document.body.appendChild(ul);
