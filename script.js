/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select,
 visualizzare solamente le icone corrispondenti.*/



const containerCard=document.querySelector('.row');

function creoBox(icona){

    let box = document.createElement('div');
    box.className ="col-2 text-center m-4 bg-white p-3 rounded-2"
    box.innerHTML =`
    <div><i class="${icona.family} ${icona.prefix}${icona.name} ${icona.color} "></i>
        <h2>${icona.name} </h2> 
    </div>
    `
    containerCard.appendChild(box);
}

function start(){
    for(let i=0; i <icons.length; i++ ){
        const element = icons[i];
        creoBox(element);
    }
}

start();