let boxes = document.querySelectorAll(".box");
let winMsg=document.querySelector('.msg');
let rstBtn=document.querySelector('.rst');
let turn0 = true;
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const disableBoxes=()=>{
  for (let box of boxes) {
    box.disabled=true;
  }
}

const enableBoxes=()=>{
  turn0=true;
  winMsg.classList.add('hide');
    for (let box of boxes) {
      box.disabled=false;
      box.innerText='';
    }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWin();
  });
});

const showWinner=(winner)=>{
    winMsg.classList.remove('hide');
    winMsg.innerText=`Winner is ${winner}`;
    disableBoxes();

}

const checkWin = () => {
  for (let pattern of winPattern) {
    let box0 = boxes[pattern[0]].innerText;
    let box1 = boxes[pattern[1]].innerText;
    let box2 = boxes[pattern[2]].innerText;

    if (box0 != "" && box1 != "" && box2 != "") {
      if (box0 === box1 && box1===box2) {
        showWinner(box2);  
      }
    }
  }
};

rstBtn.addEventListener('click',enableBoxes);
