// Punto 1
let list = ['calamari', 'cozze', 'vongole', 'gamberi', 'pomodori', 'spaghetti'];

// Punto 3
const ul = document.querySelector('ul');

// Punto 4
let i = 0;

// Punto 5
while(i<list.length){

    // Punto 6
    const li = document.createElement('li');
    li.innerText = list[i];
    ul.appendChild(li);

    i++;
}