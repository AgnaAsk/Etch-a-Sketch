document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');


    const knopke = document.getElementById('knopke');
    knopke.addEventListener('click', function() {
        const number= prompt('enter a number')

      
        if (checkNr(number)) { 
            const container = document.getElementById('container');
            container.remove()
            // <div id="container" class="container">
            //<div id="container" class="container"></div>
            //</div>
            //// <div ></div>
            const newContainer = document.createElement('div')
            newContainer.classList.add('container');
            newContainer.id='container';
            const body = document.body
            body.appendChild(newContainer);
            modifyGrid(number)

        }
       



    })

     



    
    for (let i = 0; i < 16*16; i++) {
        const square = document.createElement('div');
        const gapDydis = (16-1) * 5
        const answer = ((960 -gapDydis) / 16) + "px"
        square.style.width= answer
        square.style.height= answer
        square.classList.add('square');
        //<div class ="square", class = "squarehoover"></div>
        square.addEventListener("mouseover", function(){
            square.classList.add('squarehoover') 
        })
        container.appendChild(square);
    }
}) ;


function modifyGrid (number){
    const container = document.getElementById('container');
    const variable = number
    for (let i = 0; i < variable*variable; i++) {
        const square = document.createElement('div');
        const gapDydis = (variable-1) * 5
        const answer = ((960 -gapDydis) / variable) + "px"
        square.style.width= answer
        square.style.height= answer
        square.classList.add('square');
        //<div class ="square", class = "squarehoover"></div>
        square.addEventListener("mouseover", function(){
            square.classList.add('squarehoover') 
        })
        container.appendChild(square);
    }
};




function checkNr (number){
    if (number < 100)
     return true;
    else if (number > 0)
    return true;
    else if (number > 100)
    return false;
    else if (number < 0)
    return false;
}
//width: calc((960px - (3 * 5px)) / 4);
//height: calc((960px - (3 * 5px)) / 4);


// kintamasis = number, prompt entered nr = number