console.log("hola");

const trabajos = [
    {
        nombre: "Pigmento de cúrcuma",
        imagen: "img/proyectocurcuma.png",
        calificacion: "Textil Investigativo"
    },
    {
        nombre: "Chile en palito",
        imagen: "img/chile en palito.png",
        calificacion: "Diseño Gráfico y Branding"
    },
    {
        nombre: "AZIMUT",
        imagen: "img/azimut.png",
        calificacion: "Diseño Editorial y Branding"
    },
    {
        nombre: "Kupsha",
        imagen: "img/Kupsha.png",
        calificacion: "Diseño textil, Gráfico y Branding"
    },
    {
        nombre: "BIOCO",
        imagen: "img/bioestimulante.png",
        calificacion: "Diseño Gráfico, Branding"
    },
    {
        nombre: "Filogénico",
        imagen: "img/cuchillo.png",
        calificacion: "Diseño Industrial"
    },
     {
        nombre: "'Desconocido'",
        imagen: "img/desconocido.png",
        calificacion: "Diseño Editorial"

    },
     {
        nombre: "'Yo recuerdo'",
        imagen: "img/postal.png",
        calificacion: "Diseño Gráfico y Editorial"

      }

];

// Insertar dinámicamente en el HTML
const galleryGrid = document.querySelector(".gallery-grid");

trabajos.forEach(trabajo => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    item.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.nombre}">
        <div class="gallery-overlay">
            <h3>${trabajo.nombre}</h3>
            <p>${trabajo.calificacion}</p>
        </div>
    `;

    galleryGrid.appendChild(item);
});
