document.getElementById('card-btn').addEventListener('click', function () {
   window.location.href = "secondPage.html"
})

let colors = ['red', 'blue', 'yellow', 'orange', 'Moss Green', 'Violet', 'Sky blue', 'green', 'black', 'tomato', 'Platinum'];
let navBtn = document.getElementById('nav-btn').addEventListener('click', function () {
   let randomColor = colors[Math.floor(Math.random() * colors.length)];
   document.body.style.background = randomColor;
})

