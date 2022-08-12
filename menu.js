const buttonOpen = document.getElementById('open');
const nav = document.querySelector('.navigation');

nav.style.width = '0px';
const menuOpen = () => {
    if(nav.style.width === '0px') {
        nav.style.width = '230px';
    } else {
        menuClosed();
    }
}
const menuClosed = () => {
    nav.style.width = '0px';
}