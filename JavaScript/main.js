document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle-nav').addEventListener('click', function () {
        var nav = document.querySelector('nav');
        var body = document.querySelector('body');
        var header = document.querySelector('header');
        var footer = document.querySelector('footer');
        var image = document.getElementById('hamburgerbutton');
        body.classList.toggle('show');
        nav.classList.toggle('show');
        header.classList.toggle('show');
        footer.classList.toggle('show');
        if (nav.classList.contains('show')) {
            image.src = 'Resources/buttonlight.png';
        } else {
            image.src = 'Resources/buttondark.png';
        }
    });
});

function setStyleSheet(url) {
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', url);
    localStorage.setItem('theme', url);
    if (url === 'CSS/dark.css' || url === 'CSS/hacker.css') {
       document.getElementById('blur').src='Resources/covblurdark.png';
    } else {
        document.getElementById('blur').src='Resources/covblurlight.png';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setStyleSheet(savedTheme);
    }
});