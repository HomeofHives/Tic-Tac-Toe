const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let winner = null;

cells.forEach(cell => cell.innerText = '');

function cellClicked(index) {
    if (winner) return;
    if (cells[index].innerText === '') {
        cells[index].innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            winner = cells[a].innerText;
            alert(`Player ${winner} wins!`);
            return;
        }
    }

    if ([...cells].every(cell => cell.innerText !== '')) {
        alert('It\'s a tie!');
        return;
    }
}

// jQuery Code
$(document).ready(function () {
    $("#T1").click(function () {
        $("body").css("background", "#a3a3a3");
        $("body").css("border", "solid black 3px");
        $("div.board").css("background", "#a3a3a3");
        $("div.board").css("gap", "5px");
        $("div.cell").css("background", "white");
        $("div.cell").css("color", "#2d2d2d");
        $("div.cell").css("border", "solid black 3px");
        $("button").css("background", "#fff");
        $("button").css("color", "#2d2d2d");
        $("button").css("border", "solid black 3px");

    });
    // #c7ffa0 #6ce717
    $("#T2").click(function () {
        $("body").css("background", "#c7ffa0");
        $("body").css("border", "solid #6ce717 3px");
        $("div.board").css("background", "#c7ffa0");
        $("div.board").css("gap", "5px");
        $("div.cell").css("background", "green");
        $("div.cell").css("color", "white");
        $("div.cell").css("border", "solid #c7ffa0 3px");
        $("div.cell").css("border", "solid brown 3px");
        $("button").css("background", "#00e12b");
        $("button").css("color", "white");
        $("button").css("border", "solid #00971d 3px");
    });

    $("#T3").click(function () {
        $("body").css("background", "#e6a0ff");
        $("body").css("border", "solid #c417e7 3px");
        $("div.board").css("background", "#e6a0ff");
        $("div.board").css("gap", "5px");
        $("div.cell").css("background", "#b500ac");
        $("div.cell").css("color", "#fff");
        $("div.cell").css("border", "solid #e6a0ff 3px");
        $("div.cell").css("border", "solid #2d2d2d 3px");
        $("button").css("background", "#bc239c");
        $("button").css("color", "white");
        $("button").css("border", "solid #2d2d2d 3px");
    });

    $("#T4").click(function () {
        $("body").css("background", "#ff7777");
        $("body").css("border", "solid #ff0000 3px");
        $("div.board").css("background", "#ff7777");
        $("div.board").css("gap", "5px");
        $("div.cell").css("background", "#ff0000");
        $("div.cell").css("color", "#fff");
        $("div.cell").css("border", "solid #fff 3px");
        $("button").css("background", "#fff");
        $("button").css("color", "black");
        $("button").css("border", "solid #ff0000 3px");
    });
});