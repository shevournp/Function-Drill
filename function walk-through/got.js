let jonSnowHealth = 100;

let theWinnerIs = 'jamie is the winner'
let newWinner = theWinnerIs.replace('Jameie', 'Jon')
 
if(newWinner.includes('jon')){
    console.log('jon was inserted in the string 100')
} else{
    console.log('what? jamie is still the winner')

}



let newWinnerLowerCase = newWinner.toLowerCase();
let newWinnerSplitArray = newWinnerLowerCase.split(' ');
let newJoinedStringKebab= newWinnerSplitArray.join(' ')
console.log(newWinnerLowerCase);




function isJonAlive(){
    if (jonSnowHealth > 0){
        console.log('jon is alive');
    }else {
        console.log('RIP JonSnow');
    }
}

function surpriseAttack(attack){
jonSnowHealth -= attack    
isJonAlive() 
}
surpriseAttack(20)
surpriseAttack(12)
surpriseAttack(6)







const greeting = function(person1, person2){
    console.log(`${person1} and ${person2}say hello to each other`)

}
greeting('jon snow', ('ned Stark'))

// let doubleRoll = () => {
//     let roll1 = Math.floor(Math.random() * 6 + 1)
//     let roll2 = Math.floor(Math.random() * 6 + 1)
//     return roll1 + roll2
// }
let doubleRoll = ()=> Math.floor(Math.random()* 6 + 1) + Math.floor(Math.random()* 6 + 1)

console.log(doubleRoll())