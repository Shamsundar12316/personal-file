hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
 navBar = document.querySelector("nav-bar");
 navBar.classList.toggle("active")
}

var typed = new Typed(".loop",{
    strings: ["Frontend Developer","YouTuber","Backend Developer","Fullstack Developer"],
    typeSpeed: 150,
    BackendSpeed: 150,
    looped: true
})