document.addEventListener('DOMContentLoaded', ()=>{
    const userGrid=document.querySelector('.grid-user')
    const computerGrid=document.querySelector('.grid-computer')
    const displayGrid=document.querySelector('.grid-display')

    const airplanes=document.querySelectorAll('.airplane')
    
    const firstAirplaneHead=document.querySelector('.first-airplane-0')
    const firstAirplaneWings=document.querySelector('.first-airplane-1')
    const firstAirplaneCabins=document.querySelector('.first-airplane-2')
    const firstAirplaneTail=document.querySelector('.first-airplane-3')

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

    const xAxisLetter="x"
     var dotString="."

    function changeFromBasicToRotated(){
        if(document.querySelector('#airplane-container-0')!=null){
            document.getElementById("airplane-container-0").style.width="160px";
            document.getElementById("airplane-container-0").style.height="200px";
            firstAirplaneHead.classList.replace("head", "head-rotated")
            firstAirplaneWings.classList.replace("wings", "wings-rotated")
            firstAirplaneCabins.classList.replace("cabins", "cabins-rotated")
            firstAirplaneTail.classList.replace("tail-plane", "tail-plane-rotated")
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
    }

    function changeFlexDirection(flexDirectionType){
    if(document.querySelector('#airplane-container-0')!=null)
        document.getElementById("airplane-container-0").style.flexDirection=flexDirectionType
    }

    //Airplanes
    //rotate the airplanes
    function rotate(){
        switch (rotationType){
            case 1:
                changeFlexDirection("row")
                changeFromBasicToRotated()
                rotationType=2
                document.getElementById("airplane-container-0").classList.replace("rotated-1", "rotated-2") 
                break; 
            case 2:
                changeFlexDirection("column-reverse")
                changeFromRotatedToBasic()
                rotationType=3
                document.getElementById("airplane-container-0").classList.replace("rotated-2", "rotated-3") 
                break; 
            case 3:
                changeFlexDirection("row-reverse")
                changeFromBasicToRotated()
                rotationType=4
                document.getElementById("airplane-container-0").classList.replace("rotated-3", "rotated-4") 
                break;
            case 4:
                changeFlexDirection("column")
                changeFromRotatedToBasic()
                rotationType=1
                document.getElementById("airplane-container-0").classList.replace("rotated-4", "rotated-1") 
                break;
        }
    }

    var xAxisValue=[]
    var yAxisValue=[]
    var xStringValue=[]
    var yStringValue=[]
    var pixelsString="px"
    var idAirPlanes=-1
    var stringIdAirPlanes=[]

    const grid=document.querySelector('.grid')
    

    function createNewDiv(xStringValue, yStringValue){
        const newElement=document.createElement("div")
        newElement.classList.add('square')
        grid.appendChild(newElement)
        idAirPlanes++  
        stringIdAirPlanes=idAirPlanes.toString()
        newElement.classList.add(stringIdAirPlanes)
        var axisClass=xAxisLetter.concat(xStringValue).concat("y").concat(yStringValue)
        newElement.classList.add(axisClass)
        newElement.style.position="absolute";
        newElement.style.top=yStringValue;
        newElement.style.left=xStringValue;
         
    }

    function convertToString(coordValue){
        var toString=coordValue.toString();
        return toString.concat(pixelsString)
    }

    function createNewElement(xAxisValue, yAxisValue){
        xStringValue=convertToString(xAxisValue)
        yStringValue=convertToString(yAxisValue)
        createNewDiv(xStringValue, yStringValue) 
    }

    function changeCoordinateToFit(coordValue){
        var valueDividedToForty=Math.floor(coordValue/40)
        if(valueDividedToForty == 0){
            coordValue=0
        }
        else{
            coordValue=valueDividedToForty*40
        }
        return coordValue
    }

    function findAirplaneRotationValue(){
        if(document.getElementById("airplane-container-0").classList.contains("rotated-1")){
            return 1
        }
        if(document.getElementById("airplane-container-0").classList.contains("rotated-2")){
            return 2
        }
        if(document.getElementById("airplane-container-0").classList.contains("rotated-3")){
            return 3
        }
        if(document.getElementById("airplane-container-0").classList.contains("rotated-4")){
            return 4
        }
    }

    function createAirplaneRotation1 (xAxisValue, yAxisValue){
        if(xAxisValue>=80 && xAxisValue<=320 && yAxisValue<=240){
            createNewElement(xAxisValue, yAxisValue)
            createNewElement(xAxisValue-80, yAxisValue+40)
            createNewElement(xAxisValue-40, yAxisValue+40)
            createNewElement(xAxisValue, yAxisValue+40)
            createNewElement(xAxisValue+40, yAxisValue+40)
            createNewElement(xAxisValue+80, yAxisValue+40)
            createNewElement(xAxisValue, yAxisValue+80)
            createNewElement(xAxisValue-40, yAxisValue+120)
            createNewElement(xAxisValue, yAxisValue+120)
            createNewElement(xAxisValue+40, yAxisValue+120)
        }
    }

    function createAirplaneRotation2(xAxisValue, yAxisValue){
        if(xAxisValue<=240 && yAxisValue>=80 && yAxisValue<=280){
            createNewElement(xAxisValue, yAxisValue)
            createNewElement(xAxisValue+40, yAxisValue)
            createNewElement(xAxisValue+40, yAxisValue-40)
            createNewElement(xAxisValue+40, yAxisValue-80)
            createNewElement(xAxisValue+40, yAxisValue+80)
            createNewElement(xAxisValue+40, yAxisValue+40)
            createNewElement(xAxisValue+80, yAxisValue)
            createNewElement(xAxisValue+120, yAxisValue)
            createNewElement(xAxisValue+120, yAxisValue-40)
            createNewElement(xAxisValue+120, yAxisValue+40)
        }
    }

    function createAirplaneRotation3(xAxisValue, yAxisValue){
        if(xAxisValue>=80 && xAxisValue<=280 && yAxisValue>=120){
            createNewElement(xAxisValue, yAxisValue)
            createNewElement(xAxisValue, yAxisValue-40)
            createNewElement(xAxisValue-40, yAxisValue-40)
            createNewElement(xAxisValue-80, yAxisValue-40)
            createNewElement(xAxisValue+40, yAxisValue-40)
            createNewElement(xAxisValue+80, yAxisValue-40)
            createNewElement(xAxisValue, yAxisValue-80)
            createNewElement(xAxisValue, yAxisValue-120)
            createNewElement(xAxisValue-40, yAxisValue-120)
            createNewElement(xAxisValue+40, yAxisValue-120)
        }
    }

    function createAirplaneRotation4(xAxisValue, yAxisValue){
        if(xAxisValue>=120 && yAxisValue>=80 && yAxisValue <=280){
            createNewElement(xAxisValue, yAxisValue)
            createNewElement(xAxisValue-40, yAxisValue)
            createNewElement(xAxisValue-40, yAxisValue-80)
            createNewElement(xAxisValue-40, yAxisValue-40)
            createNewElement(xAxisValue-40, yAxisValue+40)
            createNewElement(xAxisValue-40, yAxisValue+80)
            createNewElement(xAxisValue-80, yAxisValue)
            createNewElement(xAxisValue-120, yAxisValue)
            createNewElement(xAxisValue-120, yAxisValue+40)
            createNewElement(xAxisValue-120, yAxisValue-40)
        }
    }

    function createAirplane(xAxisValue, yAxisValue, airplaneRotationValue){ 
        xAxisValue=changeCoordinateToFit(xAxisValue)
        yAxisValue=changeCoordinateToFit(yAxisValue)
        if (airplaneRotationValue==1){
            createAirplaneRotation1(xAxisValue, yAxisValue)
        }
        if(airplaneRotationValue==2){
            createAirplaneRotation2(xAxisValue, yAxisValue)
        }
        if(airplaneRotationValue==3){
            createAirplaneRotation3(xAxisValue, yAxisValue)
        }
        if(airplaneRotationValue==4){
            createAirplaneRotation4(xAxisValue, yAxisValue)
        }

        
    }

    //moving the planes around the user map container
    const draggableElement=document.querySelector('.draggable');
    var airplaneRotationValue;
    var numberOfPlanes=0;
    draggableElement.addEventListener('dragstart', e=>{
        airplaneRotationValue=findAirplaneRotationValue()
    })
    draggableElement.addEventListener('dragend', e=>{
        xAxisValue=e.pageX;
        yAxisValue=e.pageY;
        if(xAxisValue>=68 && yAxisValue>=60 && xAxisValue<=468 && yAxisValue<=460 && numberOfPlanes<3){
            createAirplane(xAxisValue-68, yAxisValue-60, airplaneRotationValue)
            numberOfPlanes++
            console.log(numberOfPlanes)
        }
        else{
            console.log(numberOfPlanes)
            console.log('cant place plane')
        }
    })

    var xMousePosition
    var yMousePosition
    var numberOfTurns=0
    var missOrHit

    function createMissSquare(xMousePosition, yMousePosition){
        const newElement=document.createElement("div")
        newElement.classList.add('miss')
        grid.appendChild(newElement)
        newElement.style.position="absolute";
        newElement.style.top=yMousePosition;
        newElement.style.left=xMousePosition;
    }
    

    function mousePositon(event){
        xMousePosition=event.pageX
        yMousePosition=event.pageY
        if(xMousePosition>=68 && yMousePosition>=60 && xMousePosition<=468 && yMousePosition <=460 && numberOfTurns<30){
            xMousePosition=xMousePosition-68
            yMousePosition=yMousePosition-60

            xMousePosition=changeCoordinateToFit(xMousePosition)
            yMousePosition=changeCoordinateToFit(yMousePosition)
                        
            xMousePosition=convertToString(xMousePosition)
            yMousePosition=convertToString(yMousePosition)

            var axisClass=xAxisLetter.concat(xMousePosition).concat("y").concat(yMousePosition)
            missOrHit=document.getElementsByClassName(axisClass)
            if(missOrHit.length > 0){
               
                var hitPartString=dotString.concat(axisClass)
                var hitPart=document.querySelector(hitPartString)
                hitPart.classList.add("hit")
            }
            else{
                createMissSquare(xMousePosition, yMousePosition)
            }
            numberOfTurns++   
        }
        if(numberOfTurns>=30)
            alert('Ai irosit cele 30 de incercari')
    }

    



    //createBoard(userGrid, userSquares)
    rotateButton.addEventListener('click', rotate)   


})