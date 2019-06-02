let startTime = 0;
let endTime = 0;
let timeLength = 0;
let myvar ;
let content = document.querySelector('.fullscreen');
let replay = document.querySelector('.replayButton');
// 改變背景顏色
function changeColor(){
  let random = Math.floor(Math.random()*(3000-1000+1))+1000;
  myvar = setTimeout(function(){
  startTime = new Date();
  document.querySelector('.fullscreen').classList.add('newColor') ;
  content.textContent = 'Click ! ! !'
  }, random);
  
}
// 開始計時，觸發改變顏色
const starter = document.querySelector('.fullscreen')
starter.addEventListener('click', count, {once: true})
function count(e){
  changeColor()
  content.textContent ='Wait for change ...'
  e.stopPropagation()  

}
// 停止計時，回應結果
const stop = document.querySelector('body')
stop.addEventListener('click', stopTime ,{once: true})
function stopTime(){
  endTime = new Date();
  timeLength=endTime-startTime;
  if (+endTime == timeLength){
    content.textContent ='Too soon ! :D'
    addButton ();
    clearTimeout(myvar);
    replay = document.querySelector('.replayButton');
    replay.addEventListener('click',function (){window.location.reload();})
  } 
  if(timeLength < +endTime){content.textContent =`Speed: ${timeLength} ms :)`;
  addButton ();
  replay = document.querySelector('.replayButton');
  replay.addEventListener('click',function (){window.location.reload();})}

}
//重玩按鈕
function addButton (){
  var replayButton = document.createElement("button");
  replayButton.classList.add('replayButton')
  replayButton.textContent = 'play again'
  document.querySelector('.fullscreen').appendChild(replayButton)
}

// 監聽重玩事件





