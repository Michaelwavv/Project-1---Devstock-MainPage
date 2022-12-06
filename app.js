
const hamburger = document.querySelector(".hamburgerMenuMain");
const buttonhamburger = document.querySelector(".hambuergerMenu");
const navMenu = document.querySelector(".navMenu");


buttonhamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
   hamburger.classList.toggle('no-overflow');

    navMenu.classList.toggle("active");
    console.log("click");
    console.log(hamburger.classList);
    console.log(buttonhamburger.classList);

})



