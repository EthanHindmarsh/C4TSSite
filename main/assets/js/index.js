function newCat() {
    var image = document.getElementById('cat');
    var images = [
        "/old/ed.jpg",
        "/old/cat.jpg",
        "/old/dog.jpg"
    ];
    image.src = "";
    //https://css-tricks.com/snippets/javascript/select-random-item-array/
    image.src = images[Math.floor(Math.random()*images.length)];
}
