"use strict";

const modal = document.querySelector('#modal');
const card = document.querySelector('#card');

modal.addEventListener("click", function() {
    console.log("Click!");
    card.classList.toggle('dn');
});