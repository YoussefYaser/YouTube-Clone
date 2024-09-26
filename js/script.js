var navBar = document.getElementById('nav-bar');
var sideBar = document.getElementById('sidebar');
var main = document.querySelector('.page main');
var links = document.querySelector('.page nav .links');
var text = document.querySelectorAll('.page aside .text');
let overlay = document.querySelector('.overlay');

console.log(overlay);


navBar.addEventListener('click', function(){
    
        sideBar.classList.toggle('collapsed');
        main.classList.toggle('collapsed');
        links.classList.toggle('collapsed');
        if(sideBar.classList.contains('collapsed')){
            text.forEach(function(span, i){
                span.classList.replace('d-none', 'd-block');
            });

            sideBar.children[0].children[0].classList.replace('border-1', 'border-0');  // .sidebar .container-fluid ul
            sideBar.children[0].children[0].classList.add('pb-0');  // .sidebar .container-fluid ul
            sideBar.children[0].children[1].classList.remove('mt-3'); // .sidebar .container-fluid .you
            sideBar.children[0].children[1].children[0].classList.replace('d-flex', 'd-none'); // .sidebar .container-fluid .you > div
            sideBar.children[0].children[1].children[1].classList.replace('d-none', 'd-block'); // .sidebar .container-fluid .you > span
            sideBar.children[0].children[2].classList.replace('d-block', 'd-none'); // .sidebar .container-fluid .you > span
            overlay.style.removeProperty('display', 'block');
            overlay.style.setProperty('display', 'none');
        }
        else{
            text.forEach(function(span, i){
                span.classList.replace('d-block', 'd-none');
            });

            sideBar.children[0].children[0].classList.replace('border-0', 'border-1'); // .sidebar .container-fluid ul
            sideBar.children[0].children[0].classList.remove('pb-0'); // .sidebar .container-fluid ul
            sideBar.children[0].children[1].classList.add('mt-3'); // .sidebar .container-fluid .you
            sideBar.children[0].children[1].children[0].classList.replace('d-none', 'd-flex'); // .sidebar .container-fluid .you > div
            sideBar.children[0].children[1].children[1].classList.replace('d-block', 'd-none'); // .sidebar .container-fluid .you > span
            sideBar.children[0].children[2].classList.replace('d-none', 'd-block'); // .sidebar .container-fluid .you > span
            overlay.style.removeProperty('display', 'd-none');
            overlay.style.setProperty('display', 'd-block');


        }
    
})