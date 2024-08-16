function setStyleSheet(url) {
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', url);
    localStorage.setItem('theme', url);
    if (url === '../CSS/dark.css' || url === '../CSS/hacker.css') {
       document.getElementById('blur').src='../Resources/covblurdark.png';
    } else {
        document.getElementById('blur').src='../Resources/covblurlight.png';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setStyleSheet(savedTheme);
    }
});