document.addEventListener('DOMContentLoaded', ()=>{
    const userGrid=document.querySelector('.grid-user')
    const computerGrid=document.querySelector('.grid-computer')
    const displayGrid=document.querySelector('.grid-display')

    const airplanes=document.querySelectorAll('.airplane')
    
    const firstAirplaneHead=document.querySelector('.first-airplane-0')
    const firstAirplaneWings=document.querySelector('.first-airplane-1')
    const firstAirplaneCabins=document.querySelector('.first-airplane-2')
    const firstAirplaneTail=document.querySelector('.first-airplane-3')

    const secondAirplaneHead=document.querySelector('.second-airplane-0')
    const secondAirplaneWings=document.querySelector('.second-airplane-1')
    const secondAirplaneCabins=document.querySelector('.second-airplane-2')
    const secondAirplaneTail=document.querySelector('.second-airplane-3')

    const thirdAirplaneHead=document.querySelector('.third-airplane-0')
    const thirdAirplaneWings=document.querySelector('.third-airplane-1')
    const thirdAirplaneCabins=document.querySelector('.third-airplane-2')
    const thirdAirplaneTail=document.querySelector('.third-airplane-3')

    const startButton=document.querySelector('#start-button')
    const rotateButton=document.querySelector('#rotate-button')
    const whoseGo=document.querySelector('#whose-go')
    const info=document.querySelector('#info')

    const userSquares=[]
    const computerSquares=[]
    const width=10
   
    let isHorizontal=true;


    //Create the boards
    function createBoard(grid, squares){
        for(let i=0; i<width*width; i++){
            const square=document.createElement('div')
            square.dataset.id=i
            grid.appendChild(square)
            squares.push(square)
        }
    }    

    createBoard(userGrid, userSquares)
    createBoard(computerGrid, computerSquares)

    //Airplanes
    //rotate the airplanes
    function rotate(){
        if (isHorizontal){

            document.getElementById("airplane-container-0").style.flexDirection="row";

            firstAirplaneHead.classList.replace("head", "head-rotated")
            secondAirplaneHead.classList.replace("head", "head-rotated")
            thirdAirplaneHead.classList.replace("head", "head-rotated")

            firstAirplaneWings.classList.replace("wings", "wings-rotated")
            secondAirplaneWings.classList.replace("wings", "wings-rotated")
            thirdAirplaneWings.classList.replace("wings", "wings-rotated")

            /*firstAirplaneCabins.classList.replace("cabins", "cabins-rotated")
            secondAirplaneCabins.classList.replace("cabins", "cabins-rotated")
            thirdAirplaneCabins.classList.replace("cabins", "cabins-rotated")

            firstAirplaneTail.classList.replace("tail-plane", "tail-plane-rotated")
            secondAirplaneTail.classList.replace("tail-plane", "tail-plane-rotated")
            thirdAirplaneTail.classList.replace("tail-plane", "tail-plane-rotated")
            */
            isHorizontal=false 
        }
        else{
            firstAirplaneHead.classList.replace("head-rotated", "head")
            secondAirplaneHead.classList.replace("head-rotated", "head")
            thirdAirplaneHead.classList.replace("head-rotated", "head")

            firstAirplaneWings.classList.replace("wings-rotated", "wings")
            secondAirplaneWings.classList.replace("wings-rotated", "wings")
            thirdAirplaneWings.classList.replace("wings-rotated", "wings")

            firstAirplaneCabins.classList.replace("cabins-rotated", "cabins")
            secondAirplaneCabins.classList.replace("cabins-rotated", "cabins")
            thirdAirplaneCabins.classList.replace("cabins-rotated", "cabins")

            firstAirplaneTail.classList.replace("tail-plane-rotated", "tail-plane")
            secondAirplaneTail.classList.replace("tail-plane-rotated", "tail-plane")
            thirdAirplaneTail.classList.replace("tail-plane-rotated", "tail-plane")

            isHorizontal=true
        }
    }
    rotateButton.addEventListener('click', rotate)


})