const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});

const links = document.getElementsByClassName('nav__item');

for(let i=0;i<links.length;i++){
    let element = links[i];
    element.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    });
}