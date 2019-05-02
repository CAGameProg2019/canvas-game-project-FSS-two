let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

const FOOD_COUNT = 100;

let foods = [];
let player;

let colors = [
    '#00f788',
    'blue',
    'red',
    'purple',
    'teal',
    'grey'
];

let pos = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateFood(){
    let index = Math.floor(Math.random() * pos.length);
    let x = pos[index] * 30;
    let y = pos[index] * 30;
    let color = randomColor();
    foods.push(new Food(x, y, color));
}

function init() {
    let name = prompt("Enter a name!");
    let color = randomColor();
    player = new Player(0,0,color,name,0,0);

    for(var i = 0; i < FOOD_COUNT; i++){
        generateFood();
    }
    update();
}

function update() {

    requestAnimationFrame(update);
}

window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
