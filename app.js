document.addEventListener('DOMContentLoaded', ()=>{
    
    //element and variables are initialized

    const firstAirplaneHead=document.querySelector('.first-airplane-0') 
    //the head of the plane is made by the divs that contain class "first-airplane-0"

    const firstAirplaneWings=document.querySelector('.first-airplane-1')
    //the wings of the plane are made by the divs that contain class "first-airplane-1"
    
    const firstAirplaneCabins=document.querySelector('.first-airplane-2')
    //the cabins of the plane are made by the divs that contain class "first-airplane-2"

    const firstAirplaneTail=document.querySelector('.first-airplane-3')
    //the tail-plane of the plane is made by the divs that contain class "first-airplane-3"

    const rotateButton=document.querySelector('#rotate-button')
    //the element used to activate the rotation of the plane

    const showPlanesButton=document.querySelector('#show-planes-button')
    //the element used to activate the hide/unhide function

    

    var shownInfo=document.getElementById("info") 
    //the element used to show info about turns: if a plane was hit or not 

    var flexDirectionType=[] //variabile used to show the direction of the plane
   
    var rotationType=1; //variable used to rotate the plane. value is between 1 and 4 and for each value the airplane is rotated in another
    //direction

    const xAxisLetter="x" //used to concatenate strings and to create classes
    var dotString="." //used to concatenate strings abd to create classes

    var show=true //variable used to hide or unhide the airplanes

    var playerNumberTurn=1 //this means that its the turn of the first player. When the value of the variabile is 2, it means its the turn of the second player

    
    //function hides or unhides airplanes. associated with "Show planes" button
    function unhide(){
        var squareBlock=document.getElementsByClassName("square") //we are searching for all the elements that contain the class "square"
        if(show){ //the variable show is true by default, because the airplanes are showed by default
            show=false //if the value was true, now the airplanes will be hidden and the variable has to be false because the airplanes are not shown
            for(var countIndex=0; countIndex<squareBlock.length; countIndex++){  //we are modifying each of them
                squareBlock[countIndex].classList.add("hidden-square") //we are adding the class "hidden-square" to make them transparent
            }            
        }
        else{
            show=true //if the planes were hidden we are going to make them appear back, so the value of "show" has to be true
            for(var countIndex=0; countIndex<squareBlock.length; countIndex++){ //we are modifying each of them
                squareBlock[countIndex].classList.remove("hidden-square") //we are removing the class "hidden-square" to make them appear back
            }
        }
    }
    //by pressing the "Show planes" button show variable changes its value from true to false or from false to true
    //if the value of show is true, then the airplanes will be shown, and if the value of show is false, then the airplanes
    //won't be shown 

    //function triggers when the airplane is vertical and makes it horizontally-oriented
    function changeFromBasicToRotated(){
        if(document.querySelector('#airplane-container-0')){ //if there is an element with that id 
            document.getElementById("airplane-container-0").style.width="160px"; //the function changes attributes like width
            document.getElementById("airplane-container-0").style.height="200px"; //height
            firstAirplaneHead.classList.replace("head", "head-rotated") //and replaces certain classes 
            firstAirplaneWings.classList.replace("wings", "wings-rotated") 
            firstAirplaneCabins.classList.replace("cabins", "cabins-rotated")
            firstAirplaneTail.classList.replace("tail-plane", "tail-plane-rotated")
            //in order to make the plane horizontally-oriented
        }
    }
    
    //function triggers when the airplane is horizontal and makes it vertically-oriented
    function changeFromRotatedToBasic(){
        if(document.querySelector('#airplane-container-0')!=null){ //if there is an element with that id 
            document.getElementById("airplane-container-0").style.width="200px"; //the function changes attributes like width
            document.getElementById("airplane-container-0").style.height="160px";  //height

            firstAirplaneHead.classList.replace("head-rotated", "head") //and replaces certain classes 
            firstAirplaneWings.classList.replace("wings-rotated", "wings")
            firstAirplaneCabins.classList.replace("cabins-rotated", "cabins")
            firstAirplaneTail.classList.replace("tail-plane-rotated", "tail-plane")
            //in order to make the plane vertically-oriented
        }
    }

    //function change the orientation of the airplane
    function changeFlexDirection(flexDirectionType){ //flexDirectionType is a string used to describe the orientation the user wants
    if(document.querySelector('#airplane-container-0')!=null) //if there is an airplane with that id
        document.getElementById("airplane-container-0").style.flexDirection=flexDirectionType //that airplane takes the flexDirectinType
        //the user wanted it to have
    }


    //the function rotates the airplanes. associated with "Rotate" button
    function rotate(){ //
        switch (rotationType){
            case 1: //if the rotationType variable has value 1
                changeFlexDirection("row") // the new direction of the airplane will be towards left-side
                changeFromBasicToRotated() //we change the orientation to have a horizontal plane
                rotationType=2 //rotationType will become 2 because the plane now has the 2nd type of rotation
                document.getElementById("airplane-container-0").classList.replace("rotated-1", "rotated-2")
                //the class of the airplane container will now be rotated-2 in order to show the new direction of the airplane
                break; 
            case 2:
                changeFlexDirection("column-reverse") // the new direction of the airplane will be towards down-side
                changeFromRotatedToBasic() //we change the orientation to have a vertical plane
                rotationType=3  //rotationType will become 2 because the plane now has the 3rd type of rotation
                document.getElementById("airplane-container-0").classList.replace("rotated-2", "rotated-3") 
                //the class of the airplane container will now be rotated-3 in order to show the new direction of the airplane
                break; 
            case 3:
                changeFlexDirection("row-reverse") // the new direction of the airplane will be towards right-side
                changeFromBasicToRotated() //we change the orientation to have a horizontal plane
                rotationType=4 //rotationType will become 4 because the plane now has the 4th type of rotation
                document.getElementById("airplane-container-0").classList.replace("rotated-3", "rotated-4") 
                //the class of the airplane container will now be rotated-4 in order to show the new direction of the airplane
                break;
            case 4:
                changeFlexDirection("column") // the new direction of the airplane will be towards up-side
                changeFromRotatedToBasic() //we change the orientation to have a vertical plane
                rotationType=1 //rotationType will become 1 because the plane now has the default type of rotation
                document.getElementById("airplane-container-0").classList.replace("rotated-4", "rotated-1") 
                //the class of the airplane container will now be rotated-4 in order to show the new direction of the airplane
                break;
        }
    }

    //this variables are used to create the planes on the game-board
    var xAxisValue=[] //will retain the value of the mouse X axis position
    var yAxisValue=[] //will retain the value of the mouse Y axis position
    var xStringValue=[] //will be a string that contains the value of xAxisValue 
    var yStringValue=[] //will be a string that contains the value of yAxisValue
    var pixelsString="px" //will be used to concatenate strings and to create classes
    var idAirPlanes=-1 //will go up to 30 and it counts the number of elements of the airplanes
    var stringIdAirPlanes=[] //will be a string that contains the value of idAirplanes
    

    const grid=document.querySelector('.grid') //the element is used to create the game-board
    
    //this function creates a new div element and styles is properly 
    function createNewDiv(xStringValue, yStringValue){ 
        const newElement=document.createElement("div") //create div
        newElement.classList.add('square') //adds the square class to give height, width and color
        grid.appendChild(newElement) //the game board appends the div
        idAirPlanes++ //the id of the airplanes goes 1 up because an airplane component has been created
        stringIdAirPlanes=idAirPlanes.toString() //transform idAirPlanes intro a string
        var idString="id".concat(stringIdAirPlanes) //get an "id" to so we can use it to create a class
        newElement.classList.add(idString) //adds id followed by the number of the airplane component 
        newElement.classList.add("notHit") //adds class notHit because the part of the airplane isn't hit 
        var axisClass=xAxisLetter.concat(xStringValue).concat("y").concat(yStringValue) //created another class  that contains info about
                                                                                        //the coordinates of the airplane component
        newElement.classList.add(axisClass) //adds the class to the component div
        newElement.style.position="absolute"; //adds position absolute to the element
        newElement.style.top=yStringValue; //adds the y coordinate
        newElement.style.left=xStringValue; //adds the x coordinate
    }
    
    //the function converts the numeric value to a string
    function convertToString(coordValue){ 
        var toString=coordValue.toString(); //takes the parameter given and creates a string
        return toString.concat(pixelsString) //returns the string value and adds "px" at the end 
    }

    //the function creates new airplane component
    function createNewElement(xAxisValue, yAxisValue){ 
        xStringValue=convertToString(xAxisValue) //converts the x axis value to a string 
        yStringValue=convertToString(yAxisValue) //converts the y axis value to a string
        createNewDiv(xStringValue, yStringValue)  //creates the div with the specific x and y coordinates
    }

    //the function changes the coordinates that were given as input from the mouse
    function changeCoordinateToFit(coordValue){ //coordValue is the value of the coordinate that was given as a parameter
        var valueDividedToForty=Math.floor(coordValue/40) //divides the value by 40 because each square on the blackboard in 40x40
                                                        //and floors it
        coordValue=valueDividedToForty*40 //multiplies the floored value by 40 
        return coordValue //return that value multiplied by 40
    }

    //the function finds the rotation id in order to create an airplane with the same rotation
    function findAirplaneRotationValue(){ 
        if(document.getElementById("airplane-container-0").classList.contains("rotated-1")){ //if there is a rotation-1 class
          return 1 //it returns 1 because the rotationType is 1
        }
        if(document.getElementById("airplane-container-0").classList.contains("rotated-2")){ //if there is a rotation-2 class
            return 2 //it returns 2 because the rotationType is 2
        }
        if(document.getElementById("airplane-container-0").classList.contains("rotated-3")){ //if there is a rotation-3 class
            return 3 //it returns 3 because the rotationType is 3
        }
        if(document.getElementById("airplane-container-0").classList.contains("rotated-4")){ //if there is a rotation-4 class
            return 4 //it return 4 because the rotationType is 4
        }
    }

    //the next function create the airplane depending on the rotation type
    //if the rotation type is 1: 
    function createAirplaneRotation1 (xAxisValue, yAxisValue){
        if(xAxisValue>=80 && xAxisValue<=320 && yAxisValue<=240){ //the head has to be between these coordinates
            createNewElement(xAxisValue, yAxisValue) //the head element 
            createNewElement(xAxisValue-80, yAxisValue+40) //the wings 
            createNewElement(xAxisValue-40, yAxisValue+40)
            createNewElement(xAxisValue, yAxisValue+40)
            createNewElement(xAxisValue+40, yAxisValue+40)
            createNewElement(xAxisValue+80, yAxisValue+40)
            createNewElement(xAxisValue, yAxisValue+80) //the cabins
            createNewElement(xAxisValue-40, yAxisValue+120) //the tail-plane
            createNewElement(xAxisValue, yAxisValue+120)
            createNewElement(xAxisValue+40, yAxisValue+120)
        }
    }

    //if the rotation type is 2:
    function createAirplaneRotation2(xAxisValue, yAxisValue){ 
        if(xAxisValue<=240 && yAxisValue>=80 && yAxisValue<=280){ //the head has to be between these coordinates
            createNewElement(xAxisValue, yAxisValue)  //the head element
            createNewElement(xAxisValue+40, yAxisValue) //the wings 
            createNewElement(xAxisValue+40, yAxisValue-40)
            createNewElement(xAxisValue+40, yAxisValue-80)
            createNewElement(xAxisValue+40, yAxisValue+80)
            createNewElement(xAxisValue+40, yAxisValue+40)
            createNewElement(xAxisValue+80, yAxisValue) //the cabins
            createNewElement(xAxisValue+120, yAxisValue)  //the tail-plane
            createNewElement(xAxisValue+120, yAxisValue-40)
            createNewElement(xAxisValue+120, yAxisValue+40)
        }
    }

    //if the rotation type is 3:
    function createAirplaneRotation3(xAxisValue, yAxisValue){
        if(xAxisValue>=80 && xAxisValue<=280 && yAxisValue>=120){ //the head has to be between these coordinates
            createNewElement(xAxisValue, yAxisValue) //the head element
            createNewElement(xAxisValue, yAxisValue-40) //the wings 
            createNewElement(xAxisValue-40, yAxisValue-40)
            createNewElement(xAxisValue-80, yAxisValue-40)
            createNewElement(xAxisValue+40, yAxisValue-40)
            createNewElement(xAxisValue+80, yAxisValue-40)
            createNewElement(xAxisValue, yAxisValue-80) //the cabins
            createNewElement(xAxisValue, yAxisValue-120) //the tail-plane
            createNewElement(xAxisValue-40, yAxisValue-120)
            createNewElement(xAxisValue+40, yAxisValue-120)
        }
    }

    //if the rotation type is 4:
    function createAirplaneRotation4(xAxisValue, yAxisValue){
        if(xAxisValue>=120 && yAxisValue>=80 && yAxisValue <=280){ //the head has to be between these coordinates
            createNewElement(xAxisValue, yAxisValue) //the head element
            createNewElement(xAxisValue-40, yAxisValue)  //the wings 
            createNewElement(xAxisValue-40, yAxisValue-80)
            createNewElement(xAxisValue-40, yAxisValue-40)
            createNewElement(xAxisValue-40, yAxisValue+40)
            createNewElement(xAxisValue-40, yAxisValue+80)
            createNewElement(xAxisValue-80, yAxisValue) //the cabins
            createNewElement(xAxisValue-120, yAxisValue) //the tail-plane
            createNewElement(xAxisValue-120, yAxisValue+40)
            createNewElement(xAxisValue-120, yAxisValue-40)
        }
    }

    //the function creates the airplane with the rotation the user wanted
    function createAirplane(xAxisValue, yAxisValue, airplaneRotationValue, numberOfPlanes){ 
        xAxisValue=changeCoordinateToFit(xAxisValue) //rounds the value of the x coordinate
        yAxisValue=changeCoordinateToFit(yAxisValue) //rounds the value of the y coordinate
        if (airplaneRotationValue==1){ //if the rotation of the airplane is 1 
            createAirplaneRotation1(xAxisValue, yAxisValue) //the airplane creates the airplane with the rotationType 1
        }
        if(airplaneRotationValue==2){ //if the rotation of the airplane is 2
            createAirplaneRotation2(xAxisValue, yAxisValue) //the airplane creates the airplane with the rotationType 1
        }
        if(airplaneRotationValue==3){ //if the rotation of the airplane is 3 
            createAirplaneRotation3(xAxisValue, yAxisValue) //the airplane creates the airplane with the rotationType 1
        }
        if(airplaneRotationValue==4){ //if the rotation of the airplane is 4 
            createAirplaneRotation4(xAxisValue, yAxisValue) //the airplane creates the airplane with the rotationType 1
        } 
    }

    
    const draggableElement=document.querySelector('.draggable'); //selects the element that contains the "draggable" class
    var airplaneRotationValue; //the variable is used to find the rotationType value
    var numberOfPlanes=0; //the variable is used to count the planes number


    draggableElement.addEventListener('dragstart', e=>{ //when the drag event starts
        airplaneRotationValue=findAirplaneRotationValue() //we take the rotationType value of the dragged airplane
    })
    draggableElement.addEventListener('dragend', e=>{ //when the drag events stops
        xAxisValue=e.pageX; //x axis value takes the x axis value of the mouse
        yAxisValue=e.pageY; //y axis value takes the y axis value of the mouse
        if(xAxisValue>=200 && yAxisValue>=140 && xAxisValue<=600 && yAxisValue<=540 && numberOfPlanes<3){ //if the drag ends 
                                                                                            //on the game-board
            createAirplane(xAxisValue-200, yAxisValue-140, airplaneRotationValue, numberOfPlanes) //create the airplane 
            //the parameters are xAxisValue-68 and yAxisValue-60 because we want to eliminate the margin of the board game, so the first
            //element on the board will have the coordinates [0][0] and the last element will have the coordinates [400][400]
            numberOfPlanes++ //after each plane is created the number of planes goes up by 1
        }
        else{
            alert('cant place plane') //if 3 planes were already used, the message is shown and no more airplanes can be place
        }
    })

    var xMousePosition //the x axis coordinate of the click
    var yMousePosition //the y axis coordinate of the click
    var numberOfTurns=0 //this counts every click the user makes so the user wont be able to make more than 30 moves
    var missOrHit //if the block div is miss or hit
    //the next 2 string constants are used to show message to user
    const partOfInfoMessage="You have " 
    const secondPartOfInfoMessag=" more turns left"

    //the function adapts the coordonate value and it will be used to create the "hit" or "miss" div
    function adaptCoord(oneAxisCoordinate){ //oneAxisCoordinate is either the x or y value of where the click was made
        oneAxisCoordinate=changeCoordinateToFit(oneAxisCoordinate) //uses changeCoordinateToFit to floor it down
        oneAxisCoordinate=convertToString(oneAxisCoordinate) //uses the convertToString function to get a string value

        return oneAxisCoordinate //return the value of the coordinate as a string
    }

    //the function creates a miss-square when user misses an airplane component
    function createMissSquare(xMousePosition, yMousePosition){
        const newElement=document.createElement("div") //creates the element
        newElement.classList.add('miss') //adds the class miss to the element
        grid.appendChild(newElement) //the game board appends the new element 
        newElement.style.position="absolute"; //the position is set to absolute
 
        xMousePosition=adaptCoord(xMousePosition) //xMousePosition has a flored-down value as a string
        yMousePosition=adaptCoord(yMousePosition) //yMousePosition has a flored-down value as a string

        newElement.style.top=yMousePosition; //the yMousePosition is used as a y-axiscoordinate of where the miss element will be
        newElement.style.left=xMousePosition; //the xMousePosition is used as a x-axis coordinate of where the miss element will be
    }

    //function creates axisClass. this will be used to see if the user's click has hit a plane component
    function createAxisClass(xMousePosition, yMousePosition){ //it takes the x and y value of the click made by the user
        
        xMousePosition=adaptCoord(xMousePosition) //the x coordinate is processed
        yMousePosition=adaptCoord(yMousePosition) //the y coordinate is processed

        return xAxisLetter.concat(xMousePosition).concat("y").concat(yMousePosition) //concatenates the coordinates and return the value
        //for example, if the x axis value is 40 and the y axis value is 120, the return value will be "x40pxy120px"
    }

    //function changes the status of the element to "hit" if it was hit
    function changeStatusFromNotHitToHit(id){ //uses the id of the hit element
        var auxID=id //creates a copy of it
        auxID=auxID.toString() //makes the id a string
        auxID=".id".concat(auxID) //ads "id" in front of it so it matches the class name pattern
        document.querySelector(auxID).classList.replace("notHit","hit") //searches for the class of the element with that id and replaces
                                                                        //the "notHit" default class with "hit" class
        document.querySelector(auxID).classList.remove("hidden-square") //if the airplane was hit we remove the class "hidden-square"
    }

    //the function checks if the head of the airplane was hit
    function checkIfHeadIsHit(axisClass){  //it receives the axisClass name as a parameter
        var hitHead0=axisClass.concat(" id0")  //the head of the first airplane always has id 0
        var hitHead1=axisClass.concat(" id10") //the head of the second airplane always has id 10
        var hitHead2=axisClass.concat(" id20") //the head of the third airplane always has id 20
        
        var checkIfHeadIsHit0=document.getElementsByClassName(hitHead0) //if the "hitHead0" class is found it means that the first
                                                                        //airplane was hit in the head
        var checkIfHeadIsHit1=document.getElementsByClassName(hitHead1) //if the "hitHead0" class is found it means that the second
                                                                        //airplane was hit in the head
        var checkIfHeadIsHit2=document.getElementsByClassName(hitHead2) //if the "hitHead0" class is found it means that the third
                                                                         //airplane was hit in the head

        if(checkIfHeadIsHit0.length>0){ //if we found the class "hitHead0"
            for(id=0;id<=9;id++){
                changeStatusFromNotHitToHit(id) //it changes the status of all airplane components to hit
            }
            shownInfo.innerHTML="An airplane was hit in the head"
        }
        else if(checkIfHeadIsHit1.length>0){ //if we found the class "hitHead1"
            for(id=10;id<=19;id++){
                changeStatusFromNotHitToHit(id) //it changes the status of all airplane components to hit
            }
            shownInfo.innerHTML="An airplane was hit in the head"
        }
        else if(checkIfHeadIsHit2.length>0){ //if we found the class "hitHead2"
            for(id=20;id<=29;id++){
                changeStatusFromNotHitToHit(id) //it changes the status of all airplane components to hit
            }
            shownInfo.innerHTML="The head was hit!"
        }
        
    }

    //function checks if the game should end because every airplane was taken down 
    function checkIfAllPlanesAreHit(){
        var notHitParts=document.getElementsByClassName("notHit") //we check for elements that contain the class "notHit"
        if(notHitParts.length>0){ //if there are element with that class it means that there are still componennts that were not hit

            return false
        }
        else{ //if there are no elements with that class it means that there are no more airplanes left 
            alert("You destroyed the airplanes. Congratulations!") //message
            return true
        }
    }

    //function is used to take the mouse coordinates when user tries to hit the airplanes
    function mousePositon(event){ 
        xMousePosition=event.pageX //the x axis coordinate
        yMousePosition=event.pageY //the y axis coordinate

        if(xMousePosition>=200 && yMousePosition>=140 && xMousePosition<=600 && yMousePosition <=540 && numberOfTurns<30){ 
            //if the click was made inside the gameboard
            
            var axisClass=createAxisClass(xMousePosition-200, yMousePosition-140) //creates the axisClass variable
            
            missOrHit=document.getElementsByClassName(axisClass)  //searches if there are element that have that axisClass variable name
            if(missOrHit.length > 0){ //if there are element with that class it means the user hit a plane

                shownInfo.innerHTML="An airplane was hit"
                checkIfHeadIsHit(axisClass) //checks if the head was hit and calls the functions  
                var hitPartString=dotString.concat(axisClass) // the hit element is created and the axisClass class is assigned
                var hitPart=document.querySelector(hitPartString) //we search for the hit element
                hitPart.classList.replace("notHit","hit") //and the "notHit" class is changed with "hit"
                hitPart.classList.remove("hidden-square") //here the class hidden-square is removed so that the user can see the component he hit
            }
            else{ //if there are no elements with that class it means that it was a miss
                createMissSquare(xMousePosition-200, yMousePosition-140) //we create a red square at those coordinates
                shownInfo.innerHTML="You missed"
            }
            numberOfTurns++ // the number of turns goes up by one
            
            if(checkIfAllPlanesAreHit()){ //if every plane was hit it means the game is over
                resetGame() //gameover
            }
            
        }
        if(numberOfTurns>=30){ //if there were more than 30 tries and the planes have components that have not been hit
            alert("You don't have left bullets. Your score is 0.") //message
            resetGame() //gameover
            return
        }
        else{
            var turnsLeft=30-numberOfTurns //the var turnsLeft counts how many moves can the user make from this point forward
            document.getElementById("turnsLeft").innerHTML="Turns left: ".concat(turnsLeft) //the variable turnsLeft is used to show a message that tells the user 
                                                                                            //how many moves can he make from this point forward
        }
    }

    //the function reinitialises the variables so that the second player can place his airplanes 
    function secondPlayerTurn(){ 
        grid.innerHTML=""; //every div within the grid is deleted
        playerNumberTurn=2; //variable playerNumberTurn is 2 because now its the second player's turn
        numberOfTurns=0; //the bullets the second player used is 0
        numberOfPlanes=0; //the number of planes the second player used is 0
        idAirPlanes=-1; //there are no airplane components so the ids will start from -1 
        show=true; //the show variable resets to default
        shownInfo.innerHTML="" //the info section is reinitialised, this time for the second player
    }

    //the function ends the game by deactivating every eventListener
    function gameOver(){
        document.removeEventListener("click", mousePositon) 
        rotateButton.removeEventListener("click", rotate)
        showPlanesButton.removeEventListener("click", unhide)
    }


    //the function resets the game if it was player 1's turn and ends the game if it was player 2's turn
    function resetGame(){
        if(playerNumberTurn==1){ //if it was player 1's turn
            var turnsLeft=30-numberOfTurns //the turnsLeft is the score of the first player
            document.getElementById("first-player-score").innerHTML="First Player: ".concat(turnsLeft) //the html is updated to show the first player's turn
            secondPlayerTurn() //secondPlayer starts his turn
            return
        }
        if(playerNumberTurn==2){ //if it was player 2's turn
            var turnsLeft=30-numberOfTurns //the turnsLeft is the score of the second player
            document.getElementById("second-player-score").innerHTML="Second Player: ".concat(turnsLeft) //the html is updated to show the second player's turn
            gameOver()
            return
        }
    }

    //associates function with click    
    document.addEventListener("click", mousePositon)

    //associates function with rotate button
    rotateButton.addEventListener('click', rotate)   

    //associates function with show planes button
    showPlanesButton.addEventListener("click", unhide)

})