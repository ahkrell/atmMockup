function checkKey(evt){
    switch(loopCounter){
        case 0:
            screenText.innerText = "Would you like to make a withdrawl?";
            break;
        case 1:
            if(evt.target.id != "keyYes"){
                screenText.innerText = "Would you like to make a deposit?";
                break;
            } else{
                loopCounter = 2;
            }
        case 2:
            if(evt.target.id != "keyYes"){
                loopCounter = -1;
            } else{
                screenText.innerText = "Please enter the amount: $";
            }
            break;
        case 3:
            amount = "";
        case 4:
        case 5:
        case 6:
            if(evt.target.id != "keyYes" && evt.target.id != "keyNo" && evt.target.id != "keypad"){
                amount = amount + evt.target.innerText;
                screenText.innerText = "Please enter the amount: $" + amount;
            }
            break;
        case 7:
            screenText.innerText = "Is this amount right? $" + amount;
            break;
        case 8:
            if(evt.target.id == "keyYes"){
                screenText.innerText = "Your transaction was completed";
            } else if(evt.target.id == "keyNo"){
                screenText.innerText = "Your transaction was cancelled";
            } else{
                loopCounter = 7;
            }
            break;
        default:
            screenText.innerText = "Press any key to begin";
            loopCounter = -1;
    }
    loopCounter++;
}

document.getElementById("keypad").addEventListener("click", checkKey);

let loopCounter = 0;
let amount;
const screenText = document.getElementById("screenText");

// let numPad = document.querySelector('.numOnly')
// let screen = document.querySelector('.calScreen')

// const addToScreen = (info) => {
//     screen.append(info)
// }
// const clearScreen = () => {
//     screen.innerHTML = " "
// }

// const findMyVal = (evt) =>{
//     addToScreen(evt.target.textContent)
// }

// const grabFormula = () => {
//     let mathProblem  = screen.textContent
//     console.log(mathProblem)
//     return mathProblem
// }
// const solveProblem = (formula)=>{
//     if(formula.includes("+")){
//         let choppedProblem = formula.split("+")
//         console.log(choppedProblem," <-- problem broken down")
//         // now lets get busy..
//         let term1 = Number(choppedProblem[0])
//         let term2 = Number(choppedProblem[1])
//         let addedSolution = term1 += term2
//         console.log("Added Solution:" , addedSolution)
// clearScreen()
//         addToScreen(addedSolution)
//     }else if(formula.includes("-")){
//         let choppedProblem = formula.split("-")
//         console.log(choppedProblem," <-- problem broken down")
//         // now lets get busy..
//         let term1 = Number(choppedProblem[0])
//         let term2 = Number(choppedProblem[1])
//         let addedSolution = term1 - term2
//         console.log("Added Solution:" , addedSolution)
//         clearScreen()
//         addToScreen(addedSolution)
//     }else if(formula.includes("x")){
//         let choppedProblem = formula.split("x")
//         console.log(choppedProblem," <-- problem broken down")
//         // now lets get busy..
//         let term1 = Number(choppedProblem[0])
//         let term2 = Number(choppedProblem[1])
//         let addedSolution = term1 * term2
//         console.log("Added Solution:" , addedSolution)
//         clearScreen()
//         addToScreen(addedSolution)
//     }else if(formula.includes("/")){
//         let choppedProblem = formula.split("/")
//         console.log(choppedProblem," <-- problem broken down")
//         // now lets get busy..
//         let term1 = Number(choppedProblem[0])
//         let term2 = Number(choppedProblem[1])
//         let addedSolution = term1 / term2
//         console.log("Division Broken?",addedSolution)
//         console.log("Added Solution:" , addedSolution)
//         clearScreen()
//         addToScreen(addedSolution)
//     }
//     // Split formula by operator  
// }
// const findSolution= () =>{
//     solveProblem(grabFormula())
// }