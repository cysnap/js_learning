var user = prompt("What's your name?").toUpperCase();
switch(user) {
    case 'YONG':
        console.log("Welcom Back!");
        var numberYONG = prompt("Choose a Number!");
        if(isNaN(numberYONG)){
            console.log("I asked you to Choose a NUMBER!");
        }else if ((numberYONG >= 100) && (numberYONG <= 999)){
            console.log("Okay ,Recording Number: " + numberYONG +" (" + numberYONG.length + ")");
        }else{
            console.log("Seems you've fogotten how big the number should be!");
        }
        break;
    case 'JIMMY':
        console.log("Why do you still here ?");
        var numberJIMMY = prompt("DO YOU WANT TO BEAT YONG? YES OR NO?").toUpperCase();
        if(isNaN(numberJIMMY)){
            switch(numberJIMMY){
                case 'YES':
                    console.log("YOU ARE NOT ALLOWED TO SAY YES!");
                    break;
                case 'NO':
                    console.log("Back to your Mummy!");
                    break;
                default:
                    console.log("You never know what I am saying ,right?");
                    break;
            }
        }else if((numberJIMMY < 100)||(numberJIMMY > 999)){
            console.log("You will never know what YONG input!")
        }else{
            console.log("You know the number ! YONG will kill you in a minute!");
        }
        break;
    case 'LEE':
        console.log("We are waitting for you!");
        break;
    default:
        console.log("Who are you? go away!");
        break;
}