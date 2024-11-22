let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let hide = document.querySelector(".hide")
let hideDraw = document.querySelector(".hide-draw")
let newGameBtn = document.querySelector("#new-game-btn")
let msgContainer = document.querySelector(".msg-container")
let drawContainer = document.querySelector(".draw-container")
let msg = document.querySelector("#msg")
let turn0 = true;
let boxClicks = 0;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxClicks++;
        if (turn0) {
            box.textContent = "X"
            turn0 = false
        } else {
            box.textContent = "O"
            turn0 = true;
        }
        box.disabled = true;
        checkWinner()
    });
});

const resetGame = () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false
    });
    turn0 = true
    msgContainer.classList.add("hide")
}

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame)

const showWinner = (player) => {
    msg.innerText = `Congratulations! Winner is ${player} 🎉🎉`
    msgContainer.classList.remove("hide")
}

const showDraw = () => {
    msg.innerText = `Hey! Its a draw!! 🎉🎉`
    msgContainer.classList.remove("hide-draw")
}

const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        let position1Val = boxes[pattern[0]].textContent
        let position2Val = boxes[pattern[1]].textContent
        let position3Val = boxes[pattern[2]].textContent
        if (position1Val === position2Val && position2Val === position3Val && position1Val !== "") {
            disableBoxes();
            console.log(position1Val);
            showWinner(position1Val);
        } else if (boxClicks === 9) {
            disableBoxes;
            showDraw;
        }
    });
}
