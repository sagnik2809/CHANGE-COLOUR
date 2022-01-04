let button = document.querySelector("button");
let body = document.querySelector("body");
let color=['red','blue','green','yellow','pink','orange'];

body.style.backgroundColor='violet';

button.addEventListener('click',changeBG);

function changeBG()
{
    let colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex]; 
   
}

