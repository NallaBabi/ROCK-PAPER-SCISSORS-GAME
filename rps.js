let choices1 = document.querySelectorAll(".choice");
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let msgbox=document.querySelector(".msg-box");
// user-choice
choices1.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);


    })
})
let draw=()=>{
    // console.log("match was draw"
    msg.innerText = "Game was Draw. Play again.";
}
let playgame = (userchoice) => {
    console.log(`user picked ${userchoice}`)
    let compchoice1=compchoice();
    console.log(`comp picked ${compchoice1}`);
    if(userchoice===compchoice1){
        // res=`match was draw`
        draw();
    }else{
        let res;
        if(userchoice==="rock"){
            res=compchoice1==="paper"?'comp win':'comp lose'
        }else if(userchoice==="paper"){
            res=compchoice1==="rock"?'comp lose':'comp win'
        }else{
            res=compchoice1==="rock"?'comp win':'comp lose'
        }

        showwinner(res,userchoice,compchoice1)
    }

}
let usersc=0;
let compsc=0;
let showwinner=(res,userchoice,compchoice1)=>{
    console.log(res)
    if(res==="comp win"){
        compsc++;
        comp.innerText=compsc;
        msg.innerText=`comp win,${compchoice1} beats your ${userchoice}`;
        // msgbox.style.background-color="red";
        
    }else{
        usersc++;
        user.innerText=usersc;
        msg.innerText=`comp lose,your ${userchoice} beats compchoice ${compchoice1}`;
    }

}

let compchoice = () => {
    let options = ["rock", "paper", "scissors"]
    let rnix = Math.floor(Math.random() * 3);
    return options[rnix];
}