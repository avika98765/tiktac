const cell=document.getElementsByClassName("cell")
const winner = document.getElementsByClassName("winner")[0];
const reset = document.getElementById("reset");

var move="X";
const board=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

const check_one_match= function(i,j,k)

{
    console.log("something")
    if( board[i]===board[j]&& board[j]===board[k]){
        return true;
        
    }
    return false;
}
    const check_the_win=()=>{
        if(check_one_match(0,1,2)) {
            win_box=[0,1,2]
            return board[0];
        }
        else if(check_one_match(0,4,8)){
            win_box=[0,4,8]
            return board[0]
        }
        else if(check_one_match(0,3,6)){
            win_box=[0,3,6]
            return board[0]
        }
        else if(check_one_match(1,4,7)){
            win_box=[1,4,7]
            return board[1]
        }
        else if(check_one_match(2,4,6)){
            win_box=[2,4,6]
            return board[2]
        }
        else if(check_one_match(2,5,8)){
            win_box=[2,5,8]
            return board[2]
        }
        
        else if(check_one_match(3,4,5)){
            win_box=[3,4,5]
            return board[3]
        }
        else if(check_one_match(6,7,8)){
            win_box=[6,7,8]
            return board[6]
        }
        else return -1
}
var count_click=0;
 for(let i=0; i<9;i++){
     cell[i].addEventListener("click",() =>
     {
         count_click++;
         cell[i].innerText=move;
         board[i]=move==="X"?1:0;
         console.log(board)
         move=move==="X"?"O":"X";
         cell[i].style.pointerEvents ="none";
         let x=check_the_win();

         if(x===0)
         {
             blocking()
             winning_function();
             winner.innerText="O won the game";
         }
         else if(x===1)
         
         {
            blocking()
             winning_function();
             winner.innerText="X won the game";
         }
         else if(count_click===9)
         {
            blocking()
             winner.innerText="draw"
             for(let i=0;i<9;i++)
             cell[i].style.color="red";
     }});

     const winning_function=()=>{
         for(let i=0;i<3;i++)
         {
             cell[win_box[i]].style.color="red"
         }
     }
    }
    function blocking() {
        for(let i=0;i<9;i++){
            cell[i].style.pointerEvents ="none";
        }
            
        }
        reset.addEventListener("click",()=>{
            
            // board=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
            for(let i=0;i<9;i++){
                cell[i].innerText="";
                cell[i].style.pointerEvents ="cursor";
                board[i]=-1
            }
            winner.innerText="";
            count_click=0;
        })