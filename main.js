const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener("click", function(){
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});


// aqui esta el js del hero
(function(){
    const sliders = [...document.querySelectorAll(".slider__body")];
    const arrowNext = document.querySelector("#next");
    const arrowBefore = document.querySelector("#before");
    let value;

    arrowNext.addEventListener("click", ()=>changePosition(1));
    arrowBefore.addEventListener("click", ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector(".slider__body--show").dataset.id);
        
        value = currentElement;       
        value += change;
        
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length: 1;
        }
        sliders[currentElement-1].classList.toggle("slider__body--show");
        sliders[value-1].classList.toggle("slider__body--show");
    }

})()

// aqui esatara el js del contact

// const inputs = document.querySelectorAll(".input");
// function focusFunc(){
//     let parent = this.parentNode;
//     parent.classList.add("focus");
// }

// function blurFunc(){
//     let parent = this.parentNode;
//     parent.classList.remove("focus");
// }

// inputs.forEach((input)) => (
//     input.addEventListener("focus", focusFunc);
//     input.addEventListener("blur", blurFunc);
// ))