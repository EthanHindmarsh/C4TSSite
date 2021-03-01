function newCat() {
    var image = document.getElementById('cat');
    var images = [
        "/old/ed.jpg",
        "/old/cat.jpg",
        "/old/dog.jpg"
    ];
    //https://css-tricks.com/snippets/javascript/select-random-item-array/
    
    // add https:// to ensure no mixed content is loaded
    // see https://web.dev/what-is-mixed-content/
    image.src = 'https://c4ts.me'+ images[Math.floor(Math.random()*images.length)];
}