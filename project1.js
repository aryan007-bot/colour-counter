const squares=document.querySelectorAll('.colorSquare')
let timesclicked={'red':0,'yellow':0,'green':0}
squares.forEach(square =>{
  square.onclick=()=>{
    timesclicked[square.value]+=1
    square.innerText=timesclicked[square.value]
  } 
})
function clearScore(){
  timesclicked.red=0
  timesclicked.yellow=0
  timesclicked.green=0
  squares.forEach(square =>{
    square.innerText=''
  })
}
let clearbtn=document.getElementById('clear-game')
clearbtn.onclick=()=>clearScore()