const navbarBtn = document.querySelector('.navbar__hamberger');
const navSideBar = document.querySelector('.nav-sidebar');  

navbarBtn.addEventListener('click', function() {
    navSideBar.classList.toggle('active')
})