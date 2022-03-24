/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select,
 visualizzare solamente le icone corrispondenti.*/



 const structureIcons = document.querySelector('.row');

 createDivIcons(icons);
 
 
 function createDivIcons(icon) {
     structureIcons.innerHTML = '';
 
     for (let i = 0; i < icon.length; i++) {
         const iconDiv = createDiv(icon[i]);
         structureIcons.appendChild(iconDiv);
     }
 }
 
 function createDiv(Element) {
     const iconCreate = document.createElement('div');
     iconCreate.className = "icon-img  col-2 border border-dark rounded mt-3 slide-fwd-center";
     iconCreate.innerHTML = `
     <div class=" text-center fs-1 ">
     <i class='${Element.family} ${Element.prefix}${Element.name} ${Element.color}'></i>
         <h5 class="text-center">${Element.name}</h5>
     </div>
     `
     return iconCreate;
 }

 const changeGroup = document.getElementById('iconsSelection');
 
 changeGroup.addEventListener('change', (event) => {
 
     if (event.target.value === "all") {
 
         createDivIcons(icons);
     } else if (event.target.value === "animal") {
         const animal = icons.filter((icons) => {
             return (icons.type === 'animal');
         })
 
         createDivIcons(animal);
     } else if (event.target.value === "vegetable") {
         const animal = icons.filter((icons) => {
             return (icons.type === 'vegetable');
         })
 
         createDivIcons(animal);
     } else if (event.target.value === "user") {
         const animal = icons.filter((icons) => {
             return (icons.type === 'user');
         })
 
         createDivIcons(animal);
     }
 });