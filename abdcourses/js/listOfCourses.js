//list of courses 

let courses = [
  {
    title: "Intro to JavaScript",
    img: "./img/courses/js1.png",
    category: "js",
    price:64
  },
  {
    title: "JavaScript Fundamentals",
    img: "./img/courses/js2.png",
    category: "js",
    price:80
  },
  {
    title: "Intro to css",
    img: "./img/courses/css.jpg",
    category: "css",
    price:54
  },
  {
    title: "Intro to html",
    img: "./img/courses/html1.jpeg",
    category: "html",
    price:34
  },
  {
    title: "Intro to php",
    img: "./img/courses/php2.jpg",
    category: "php",
    price:74
  },
  {
    title: "php oop",
    img: "./img/courses/php.jpg",
    category: "php",
    price:4
  },
  {
    title: "css tricks",
    img: "./img/courses/css2.jpg",
    category: "css",
    price:0
  },
  {
    title: "node js ",
    img: "./img/courses/html1.jpeg",
    category: "js",
    price:44
  },
  {
    title: "laravel",
    img: "./img/courses/laravel.png",
    category: "php",
    price:69
  },
];


// to display courses 

const DisplayCards = (parentElement, content) => {
  let newContent = content.map((element) => {
    const htmlContent = `
    
    <div class="card" style="width: 100%;">
  <img src="${element.img}" class="card-img-top h-75"  alt="course image">
  <div class="card-body">
    <h7 class="  card-title fw-bold text-success">$${element.price}</h7>
    <br>
    <h7 style="font-family: 'Unbounded', cursive" class="card-title">${element.title}</h7>
  </div>
</div>
    
    `;

    return htmlContent;
  });
  newContent = newContent.join("");
  parentElement.innerHTML = newContent;
};


