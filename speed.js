//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;

let seconds = 30;
const startbtn = document.querySelector("#start-btn")
const input = document.querySelector("#input")
const sentence = document.querySelector("#sentence")
const container = document.querySelector(".container")
const result = document.querySelector("#result")
 const timer = document.querySelector("#timer")
 const retake = document.querySelector("#retry-btn")
 const speed = document.querySelector("#speed")
 const accuracy = document.querySelector("#accuracy")

startbtn.addEventListener("click",()=>{
    input.focus()
    input.disabled = false
    sentence.textContent = sentences;
    startbtn.disabled = true;
    const time = setInterval(() => {
        seconds--;
        timer.textContent = `00:${seconds}`
        if(seconds===0){
            clearInterval(time)
            container.appendChild(result)
        input.disabled = true;
        startbtn.disabled = true;
        speedele();
    }
    }, 1000);
})

retake.addEventListener("click",()=>{
    startbtn.disabled = false;
    result.style.display = "none";
    input.value = ""
    timer.textContent = `00:${seconds}`
})

function speedele(){
    result.style.display = "block";
let speedcount =0
const words = sentences.trim().split(/\s+/);
const userinput = input.value.trim().split(/\s+/);
for( let i = 0; i<userinput.length;i++){
    if(userinput[i]===words[i]){
        speedcount++
       
    }
}
speedcount = (speedcount / 30)*60
speed.textContent = speedcount
result.appendChild(speedcount)


const originalText = sentences.replace(/\s/g, '');
const typedText = input.value.replace(/\s/g, '');
let correctChars = 0;
for (let i = 0; i < typedText.length && i < originalText.length; i++) {
    if (typedText[i] === originalText[i]) {
        correctChars++;
    }
}
const accuracyPercent = ((correctChars / originalText.length) * 100).toFixed(2);
accuracy.textContent = `${accuracyPercent}`;

}


    
        
    


