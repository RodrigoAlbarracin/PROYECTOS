// 2.1 - Inserta dinámicamente un div vacío
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// 2.2 - Inserta un div que contenga una p
const divConP = document.createElement('div');
const pDentro = document.createElement('p');
divConP.appendChild(pDentro);
document.body.appendChild(divConP);

// 2.3 - Inserta un div con 6 p dentro usando un loop
const divCon6P = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo ${i + 1}`;
  divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);

// 2.4 - Inserta una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5 - Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 - Crea una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

for (const app of apps) {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 - Elimina todos los nodos con la clase .fn-remove-me
const elementosAEliminar = document.querySelectorAll('.fn-remove-me');
elementosAEliminar.forEach(el => el.remove());

// 2.8 - Inserta una p con el texto 'Voy en medio!' entre los dos div
const divs = document.querySelectorAll('div');
const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';
document.body.insertBefore(pMedio, divs[1]);

// 2.9 - Inserta una p con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
const divsInsert = document.querySelectorAll('.fn-insert-here');
divsInsert.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});
