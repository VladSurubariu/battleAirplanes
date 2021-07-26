document.addEventListener('DOMContentLoaded', ()=>{
    const userGrid=document.querySelector('.grid-user')
    const computerGrid=document.querySelector('.grid-computer')
    const displayGrid=document.querySelector('.grid-display')

    const airplanes=document.querySelectorAll('.airplane')
    const firstAirplane=document.querySelector('.first-airplane')
    const secondAirplane=document.querySelector('.second-airplane')
    const thirdAirplane=document.querySelector('.third-airplane')

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
            firstAirplane.classList.replace("head")
            firstAirplane.classList.toggle('head-vertical')
            isHorizontal=false
        }
    }
    rotateButton.addEventListener('click', rotate)


})