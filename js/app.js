//Información de datos locales
const reviews = [
    {
      id: 1,
      name: 'Jhon Gutierrez',
      job: 'Diseñador web',
      img: 'img/persona2.jpg',
      text: "Hola a todos, deseo y tengan un feliz día.",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Diseñadora web',
      img: 'img/persona3.jpg',
      text: 'Me llamo Anna Johnson y amo mi trabajo.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Practicante',
      img: 'img/persona4.jpg',
      text: 'Esta es una gran reseña.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'Jefe',
      img: 'img/persona5.jpg',
      text: 'Soy el jefe de la compañia.',
    },
  ];

//Seleccionar items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//Establecer item inicial
let currentItem = 0;

//Funcion para dispara el evento una vez que se cargo la estructura de la pagina
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });

//Mostrar persona
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

//Mostrar siguiente persona
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });

//Mostrar persona anterior
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });

//Mostrar persona aleatoria
randomBtn.addEventListener('click', function () {
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });