"use strict";

document.addEventListener("DOMContentLoaded",()=>{

    let inputAceptar = document.querySelector("#botonCookies");
    let divCookies = document.querySelector("#divCookies");

    let accionClick = event =>{
        divCookies.style.display='none';
    }

    inputAceptar.addEventListener('click',accionClick);
})
