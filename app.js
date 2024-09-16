"use strict";

const btnSpin = document.querySelector('.btn-spin');
const btnReset = document.querySelector('.btn-reset');
const slotMachine = document.querySelector('.slot-machine-display');

// slot config
const slotMachineColumn = ["0", "1", "2"];
const slotMachineColumnIcon = ['flareon', 'eevee','vaporeon','jolteon', 'espeon', 'umbreon', 'glaceon','sylveon'];

// dummy test
const slotMachineColumnIcon2 = [...slotMachineColumnIcon,...slotMachineColumnIcon,...slotMachineColumnIcon,...slotMachineColumnIcon,...slotMachineColumnIcon,...slotMachineColumnIcon,...slotMachineColumnIcon];

// slot settings
const iconWidth = 90, //icon width
    iconHeight = 106, //icon height
    pokemonSlotIcon = 9, //total icons
    pokemonSlotSpeed = 100; //speed

const spin = (column, offset = 0) => {
    const delta = (offset + 2) * pokemonSlotIcon + Math.round(Math.random() * pokemonSlotIcon);
    column.style.transform = `translateY(-${delta * iconHeight}px)`;
}

const spinSlotMachine = () =>{
    const columnList = document.querySelectorAll(".slot-machine-box");
        [...columnList].map((column, i)=>{
        spin(column,i);
    });
}

const renderSlotMachineDisplay = () => {
    let slotColumn = ``;

    slotMachineColumn.forEach((v, k) =>{
        slotColumn += `<div id="slotColumn${k}" class="slot-machine-column">
                <ul id="slotColumnBox${v}" class="slot-machine-box">`
                
                slotMachineColumnIcon2.forEach((v2, k2) => {
                    slotColumn += `<li class="slot-machine-card" data-id="${k2}">
                                    <img src="./img/${v2}.webp" alt="slot-avatar" />
                                </li>`
                });
                
                slotColumn += `</ul>
            </div>`
    });
    document.querySelector(`.slot-machine-display`).innerHTML = slotColumn;
}

const restart = () => {
    const columnList = document.querySelectorAll(".slot-machine-box");
        [...columnList].map((column)=>{
        column.style.transform = `translateY(0px)`;
    });
}

//get dynamic year
document.getElementById('currentYear').innerHTML = new Date().getFullYear();

renderSlotMachineDisplay();
btnSpin.addEventListener("click", spinSlotMachine);
btnReset.addEventListener("click", restart);