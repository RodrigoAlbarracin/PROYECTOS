
const productos = [
  { id: 1, nombre: "Camiseta Roja", precio: 19.99, img: "https://via.placeholder.com/250x150/ff4444/ffffff?text=Camiseta+Roja" },
  { id: 2, nombre: "Pantalón Azul", precio: 29.99, img: "https://via.placeholder.com/250x150/4444ff/ffffff?text=Pantalon+Azul" },
  { id: 3, nombre: "Zapatillas Negras", precio: 49.99, img: "https://via.placeholder.com/250x150/000000/ffffff?text=Zapatillas" },
  { id: 4, nombre: "Chaqueta Verde", precio: 59.99, img: "https://via.placeholder.com/250x150/44ff44/ffffff?text=Chaqueta+Verde" }
];


const contenedorProductos = document.getElementById("productos");

productos.forEach(prod => {
  const carta = `
    <article class="carta">
      <img src="${prod.img}" alt="${prod.nombre}">
      <div class="info">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
      </div>
    </article>
  `;
  contenedorProductos.insertAdjacentHTML("beforeend", carta);
});


const contenedorFiltros = document.getElementById("filtros");

const filtrosHTML = `
  <h2>Filtros</h2>
  <label>
    <input type="checkbox" value="ropa"> Ropa
  </label><br>
  <label>
    <input type="checkbox" value="calzado"> Calzado
  </label><br>
  <label>
    <input type="checkbox" value="ofertas"> Ofertas
  </label>
`;

contenedorFiltros.insertAdjacentHTML("beforeend", filtrosHTML);
