// odwołanie do elementu z HTMLa
const canvas = document.querySelector('canvas');

// nowy obiekt zawierający wszystkie elementy i właściwości canvas, obiekt canvas
// pobieramy kontekst
const ctx = canvas.getContext('2d');

// parametry gry w zakresach globalnych

// określenie wielkości
canvas.width = 1000;
canvas.height = 500;

// przypisanie zmiennych, bo będziemy sie często odnosić
const cw = canvas.width;
const ch = canvas.height;

// piłka - określamy wielkość, nie podajemy pixeli
const ballSize = 20;

// pozycja początkowa piłki
let ballX = cw/2 - ballSize/2;
let ballY = ch/2 - ballSize/2;

// rakietki
const paddelHeight = 100;
const paddelWidth = 20;

// miejsce początkowe rysowania paletki
const playerX = 70;
const aiX = 910;

// y będą się zmieniały, przyjmujemy wartość początkową
let playerY = 200;
let aiY = 200;

// linia siatki
const lineWidth = 6;
const lineHeight = 16;

// prędkość, zmiana pozycji w x i y
let ballSpeedX = 1;
let ballSpeedY = 1;


// rysowanie aktualnej pozycji rakietki gracza
function player() {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX,playerY,paddelWidth,paddelHeight);
}


// rysowanie aktualnej pozycji rakietki programu
function ai() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX,aiY,paddelWidth,paddelHeight);
}

// rysowanie piłki 
function ball() {
    ctx.fillStyle = '#fff';
    // rysujemy piłkę
    ctx.fillRect(ballX,ballY,ballSize,ballSize);
    
    // ruch
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}

// funkcja rysująca stół
function table() {

    // border określony w css, bo nie obejmuje pola, na którym będziemy rysować
    
    // kolor - domyślnie czarny
    ctx.fillStyle = '#000';
    
    // metoda rysująca prostokąt, wszystko opiera się na osi x i y
    // zaczynamy od punktu 0,0 ; kończymy na x końcowy (wysokości) i y końcowy (szerokości)
    ctx.fillRect(0,0,cw,ch);
    
    // linia na środku - siatka
    for (let linePosition = 20; linePosition < ch; linePosition += 30) {
        
        ctx.fillStyle = "gray";
        ctx.fillRect(cw/2 - lineWidth/2, linePosition, lineWidth, lineHeight);
    }
}

// funkcja wywołująca wszystkie pozostałe
function game() {
    table();
    ball();
    player();
    ai();
}

// automatyzacja ruchu
setInterval(game, 50);
