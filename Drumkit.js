//it detects click press
var noOfDrumBtn = document.querySelectorAll(".drum").length;  //reading the number of button clicked 
for(var i=0; i<noOfDrumBtn; i++){  //loop is intiated to check which button is clicked
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);  //after the desierd button is clicked it cll hadleclick funtion
    function handleClick(){
        var btnInnerHtml = this.innerHTML; //store values of clicked buttions, this keyword is talking about handleclick
        makeSound(btnInnerHtml); //calling makesound function
    }
}

//it deteects keypress
document.addEventListener("keypress", function(event){ //event keyword triggers rhe events of event listner
    makeSound(event.key) //key prop of event
})

//it plays sound
function makeSound(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio('/sounds/tom-1.mp3')
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('/sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('/sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('/sounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j':
            var crash = new Audio('/sounds/crash.mp3')
            crash.play();
            break;
        case 'k':
            var kickBass = new Audio('/sounds/kick-bass.mp3')
            kickBass.play();
            break;
        case 'l':
            var snare = new Audio('/sounds/snare.mp3')
            snare.play();
            break;
        default:
            break;
    }
}