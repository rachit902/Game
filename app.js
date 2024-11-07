let choices = document.querySelectorAll(".choice");
let panel = document.querySelector(".display-panel");
let user_score = document.getElementById("user");

let comp_score = document.getElementById("comp");


let scorecard1 = 0;
let scorecard2 = 0;


const drawgame = () => {
    panel.innerHTML = `<h1>Game Tie !!</h1>`

}

let gameplay = (userchoice) => {
    const compchoice = computerchoices()

    if (userchoice === compchoice) {
        drawgame()
    }

    else {
        let userwin = true;
        if (userchoice === "Rock") {
            userwin = compchoice === "Paper" ? false : true;
        }

        else if (userchoice === "Paper") {
            userwin = compchoice === "Scissors" ? false : true;
        }

        else {
            userwin = compchoice === "Rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }

}





choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id")
        gameplay(userchoice)
    })
});

let computerchoices = () => {
    const comp_ch = ["Rock", 'Paper', 'Scissors']
    const idx = Math.floor(Math.random() * 3)
    return comp_ch[idx]
}

const showwinner = (data, userch, compuch) => {
    if (data) {
        scorecard1++;
        panel.innerHTML = `<h1>You Win !! ${userch} beat ${compuch}</h1>`
        panel.firstChild.style.backgroundColor = "rgb(36 148 28)";
        user_score.innerText = scorecard1.toString()

    }
    else {
        scorecard2++;
        panel.innerHTML = `<h1>You Lose !! ${compuch} beat ${userch}</h1>`
        panel.firstChild.style.backgroundColor = 'rgb(185 13 0)';

        comp_score.innerText = scorecard2.toString()


    }

}
