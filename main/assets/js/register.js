function register() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status ===200) {
            window.location.replace("https://c4ts.me/main");
        } else {
            let errorpopup=document.querySelector('[name="registererror"]');
            let registerbutton=document.querySelector('[name="register"]');
            registerbutton.style.display = "none";
            errorpopup.style.display = "inherit";
        }
    };
    xhr.open("POST", 'https://api.c4ts.me/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        username: document.querySelector('[name="email"]').value,
        password: document.querySelector('[name="password"]').value
    }));
}