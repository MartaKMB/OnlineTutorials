//1. Callbacks - when this things is done execute this piece of code
//2. Promises are composable
//3. Promise is not a value, that promise of value

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();
        
        image.onload = function() {
            resolve(image);
        }
        
        image.onerror = function() {
            let message = 'Could not load image at ' + url;
            reject(new Error(msg));
        }
        
        image.src = url;
    });
}

let addImg = (src) => {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    document.body.appendChild(imgElement);
}

Promise.all([
    loadImage('images/ex1.jpg'),
    loadImage('images/ex2.jpg'),
    loadImage('images/ex3.jpg')
]).then((images) => {
    images.forEach(img => addImg(img.src));
}).catch((error) => {
//    handle later
})

loadImage('images/ex1.jpg');

/* import loadImage from './load-image-promised';
let whenCatLoaded = loadImage('images.cat3.jpg');

whenCatLoaded.then((img) => {
        let imgElement = document.createElement('img');
        imgElement.src = img.src;
        document.body.appendChild(imgElement);
})*/

//Callback
/*import loadImageCallbacked from './load-image-callbacked';

loadImageCallbacked('images.cat4.jpg',
                   (error, img) => {
    let imgElement = document.createElement('img');
        imgElement.src = img.src;
        document.body.appendChild(imgElement);
})*/

