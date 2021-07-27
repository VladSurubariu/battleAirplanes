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

    var flexDirectionType=[]
    var currentStyle=[]
    var changedStyle=[]
   
    var rotationType=1;

    //Create the boards
    /*function createBoard(grid, squares){
        for(let i=0; i<width*width; i++){
            const square=document.createElement('div')
            square.dataset.id=i
            grid.appendChild(square)
            squares.push(square)
        }
    }*/

    function changeFromBasicToRotated(){
        if(document.querySelector('#airplane-container-0')!=null){
            document.getElementById("airplane-container-0").style.width="160px";
            document.getElementById("airplane-container-0").style.height="200px";

            firstAirplaneHead.classList.replace("head", "head-rotated")
            firstAirplaneWings.classList.replace("wings", "wings-rotated")
            firstAirplaneCabins.classList.replace("cabins", "cabins-rotated")
            firstAirplaneTail.classList.replace("tail-plane", "tail-plane-rotated")
        }
        if(document.querySelector('#airplane-container-1')!=null){
            document.getElementById("airplane-container-1").style.width="160px";
            document.getElementById("airplane-container-1").style.height="200px";

            secondAirplaneHead.classList.replace("head", "head-rotated")
            secondAirplaneWings.classList.replace("wings", "wings-rotated")
            secondAirplaneCabins.classList.replace("cabins", "cabins-rotated")
            secondAirplaneTail.classList.replace("tail-plane", "tail-plane-rotated")
        }
        if(document.querySelector('#airplane-container-2')!=null){
            document.getElementById("airplane-container-2").style.width="160px";
            document.getElementById("airplane-container-2").style.height="200px";

            thirdAirplaneHead.classList.replace("head", "head-rotated")
            thirdAirplaneWings.classList.replace("wings", "wings-rotated")
            thirdAirplaneCabins.classList.replace("cabins", "cabins-rotated")
            thirdAirplaneTail.classList.replace("tail-plane", "tail-plane-rotated")
        }
    }

    function changeFromRotatedToBasic(){
        if(document.querySelector('#airplane-container-0')!=null){
            document.getElementById("airplane-container-0").style.width="200px";
            document.getElementById("airplane-container-0").style.height="160px";

            firstAirplaneHead.classList.replace("head-rotated", "head")
            firstAirplaneWings.classList.replace("wings-rotated", "wings")
            firstAirplaneCabins.classList.replace("cabins-rotated", "cabins")
            firstAirplaneTail.classList.replace("tail-plane-rotated", "tail-plane")
        }
        if(document.querySelector('#airplane-container-1')!=null){
            document.getElementById("airplane-container-1").style.width="200px";
            document.getElementById("airplane-container-1").style.height="160px";

            secondAirplaneHead.classList.replace("head-rotated", "head")
            secondAirplaneWings.classList.replace("wings-rotated", "wings")
            secondAirplaneCabins.classList.replace("cabins-rotated", "cabins")
            secondAirplaneTail.classList.replace("tail-plane-rotated", "tail-plane")
        }
        if(document.querySelector('#airplane-container-2')!=null){
            document.getElementById("airplane-container-2").style.width="200px";
            document.getElementById("airplane-container-2").style.height="160px";

            thirdAirplaneHead.classList.replace("head-rotated", "head")
            thirdAirplaneWings.classList.replace("wings-rotated", "wings")
            thirdAirplaneCabins.classList.replace("cabins-rotated", "cabins")
            thirdAirplaneTail.classList.replace("tail-plane-rotated", "tail-plane")
        }
    }

    function changeFlexDirection(flexDirectionType){
    if(document.querySelector('#airplane-container-0')!=null)
        document.getElementById("airplane-container-0").style.flexDirection=flexDirectionType
    if(document.querySelector('#airplane-container-1')!=null)
        document.getElementById("airplane-container-1").style.flexDirection=flexDirectionType
    if(document.querySelector('#airplane-container-2')!=null)
        document.getElementById("airplane-container-2").style.flexDirection=flexDirectionType
    }

    //Airplanes
    //rotate the airplanes
    function rotate(){
        switch (rotationType){
            case 1:
                changeFlexDirection("row")
                changeFromBasicToRotated()
                rotationType=2 
                break; 
            case 2:
                changeFlexDirection("column-reverse")
                changeFromRotatedToBasic()
                rotationType=3
                break; 
            case 3:
                changeFlexDirection("row-reverse")
                changeFromBasicToRotated()
                rotationType=4
                break;
            case 4:
                changeFlexDirection("column")
                changeFromRotatedToBasic()
                rotationType=1
                break;
        }
    }

    //moving the planes around the user map container

    const draggables=document.querySelectorAll('.draggable')
    const containers=document.querySelectorAll('.container')

    draggables.forEach(draggable =>{
        draggable.addEventListener('dragstart',()=>{
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend',()=>{
            draggable.classList.remove('dragging')
        })
    })

    containers.forEach(container =>{
        container.addEventListener('dragover', e=>{
            e.preventDefault()
            const draggable=document.querySelector('.dragging')
            container.appendChild(draggable)
            draggable.removeAttribute('id')
        })
    })

    window.addEventListener('mousemove', function(e){
        console.log(e);
    })




    //createBoard(userGrid, userSquares)
    //createBoard(computerGrid, computerSquares)
    rotateButton.addEventListener('click', rotate)


})