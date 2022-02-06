//defining global variables
const text = document.querySelector(".big-circle span"),
    container  = document.querySelector(".container"),
    totalTime = 7500,
    breathTime = 3000,
    holdTime = 1500
animation();
function animation(){
    text.textContent = "breath in";
    container.classList.add("expand")
    setTimeout(()=>{
        text.textContent = "hold";
        setTimeout(()=>{
            text.textContent = "breath out!"
            container.classList.remove("expand")
            container.classList.add("shrink")
        }, holdTime)
    },breathTime)
}

setInterval(animation, 7500);