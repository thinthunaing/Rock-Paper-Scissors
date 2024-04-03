//to get the random number for computer hand

const hand = document.querySelector('.hands');
const content = document.querySelector('.content');
let score=0;
function pickHand(hands){
    let comHand = comPick();
    
    hand.style.display='none';
    
    content.style.display='flex';
    let result = document.getElementById('winner');
    let scoreContainer =document.getElementById('score');
    
    if(hands == 'Rock' && comHand== 'Rock'){
        result.textContent='TIED';
    }else if(hands == 'Rock' && comHand== 'Paper'){
        result.textContent='YOU LOSE';
    }else if(hands == 'Rock' && comHand== 'Scissors'){
        result.textContent='YOU WIN';
        score+=1;
        scoreContainer.textContent=score

    }else if(hands == 'Paper' && comHand== 'Rock'){
        result.textContent='YOU WIN';
        score+=1;
        scoreContainer.textContent=score
    }else if(hands == 'Paper' && comHand== 'Paper'){
        result.textContent='TIED';
    }else if(hands == 'Paper' && comHand== 'Scissors'){
        result.textContent='YOU LOSE';
    }else if(hands == 'Scissors' && comHand== 'Rock'){
        result.textContent='YOU LOSE';
    }else if(hands == 'Scissors' && comHand== 'Scissors'){
        result.textContent='TIED';
    }else if(hands == 'Scissors' && comHand== 'Paper'){
        result.textContent='YOU WIN';
        score+=1;
        scoreContainer.textContent=score
    }else{
        result.textContent = 'INVALID'
    }
    console.log(score)
    
    document.getElementById('userPick').src = `images/${hands}.png`;
    document.getElementById('comPick').src= `images/${comHand}.png`;
}

function comPick(){
    let num = parseInt(Math.random()*3);
    if(num == 0){
        return 'Rock';
    }
    else if(num == 1){
        return 'Paper';
    }
    if(num == 2){
        return 'Scissors';
    }
}



function again(){
    hand.style.display='flex';
    content.style.display='none';
}





