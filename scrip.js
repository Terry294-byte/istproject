// -----------------------hambuger menu-------------
const MenuHandler = () => {
    const menuToggleBtn = document.querySelector("#menu-toggle");
    const respoNav = document.querySelector(".Respo-Nav");
    const menuIcon = document.querySelector("#menu-icon");


    menuToggleBtn.addEventListener("click", ()=>{
        respoNav.classList.toggle("nav-open");
        if (respoNav.classList.contains("nav-open")) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        }
        else{
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    })
}
MenuHandler();



// ----------------------------sliding-text--------------------
const textArray = ["You", "Clients"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Adjust typing speed here
const delayBetweenTexts = 2000; // Delay before typing next text

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        document.getElementById('typing-text').innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => {
            document.getElementById('typing-text').innerHTML = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % textArray.length;
            typeText();
        }, delayBetweenTexts);
    }
}

const txtArray = ["now", "today"];
let txtIndex = 0;
let charIndx = 0;
const typngSpeed = 100; // Adjust typing speed here
const delayBetwnTexts = 2000; // Delay before typing next text

function typeTxt() {
    if (charIndx < txtArray[txtIndex].length) {
        document.getElementById('typng-text').innerHTML += txtArray[txtIndex].charAt(charIndx);
        charIndx++;
        setTimeout(typeTxt, typngSpeed);
    } else {
        setTimeout(() => {
            document.getElementById('typng-text').innerHTML = "";
            charIndx = 0;
            txtIndex = (txtIndex + 1) % txtArray.length;
            typeTxt();
        }, delayBetwnTexts);
    }
}






// Combine both into one window.onload
window.onload = function() {
    typeText();  // Start first typing animation
    typeTxt();   // Start second typing animation
};






// -----------------------------------------scroll-function-------------
document.querySelector('.scroll-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
  