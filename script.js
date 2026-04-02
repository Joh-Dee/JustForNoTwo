// MUSIC CONTROL (FIXED ICON)
const btn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

btn.innerText = "";

btn.onclick = () => {
  if(music.paused){
    music.play();
    btn.innerText = "";
  }else{
    music.pause();
    btn.innerText = "";
  }
};


// HERO TEXT (SLOW)
const heroMsg = "2021, October...\nI found you.";
let hIndex = 0;

function heroType(){
  if(hIndex < heroMsg.length){
    document.getElementById("heroText").innerHTML += heroMsg.charAt(hIndex);
    hIndex++;
    setTimeout(heroType,80);
  }
}
heroType();


// MESSAGE LOOP (SLOW + SMOOTH)
const messages = [
`I still remember that day...

You are still someone
I quietly think about.`,

`There are things
I never said...

Maybe my silence
already did.`,

`I may not be the one
beside you...

But I will always
support you.`
];

let i=0,j=0,isDeleting=false;

function loop(){
  let text = messages[i];
  let el = document.getElementById("typedText");

  if(!isDeleting){
    el.innerHTML = text.substring(0,j++);
  }else{
    el.innerHTML = text.substring(0,j--);
  }

  if(!isDeleting && j===text.length){
    isDeleting=true;
    setTimeout(loop,2000);
    return;
  }

  if(isDeleting && j===0){
    isDeleting=false;
    i=(i+1)%messages.length;
  }

  setTimeout(loop, isDeleting?40:80);
}
loop();


// SECRET MODAL
const modal = document.getElementById("modal");

document.getElementById("secretBtn").onclick = ()=>{
  modal.style.display="flex";
};

modal.onclick = ()=>{
  modal.style.display="none";
};
// SAKURA EFFECT (EMOJI VERSION)
document.querySelectorAll(".gallery img").forEach(img => {
    img.onclick = () => {
        for(let i=0; i<30; i++){
            let petal = document.createElement("div");
            
            // Emoji ထည့်မယ်
            petal.innerText = "❤"; 
            
            // အဝိုင်းပုံမဖြစ်အောင်နဲ့ လှုပ်ရှားဖို့ Style သတ်မှတ်မယ်
            petal.style.position = "fixed";
            petal.style.top = "-20px";
            petal.style.left = Math.random() * window.innerWidth + "px";
            petal.style.fontSize = (Math.random() * 15 + 10) + "px"; // အရွယ်အစား 10px ကနေ 25px ကြား
            petal.style.zIndex = "9999";
            petal.style.pointerEvents = "none"; 
            petal.style.userSelect = "none"; // စာသား Select လုပ်မရအောင်
            
            // Animation အတွက် အချိန်သတ်မှတ်ချက်
            let duration = (3 + Math.random() * 3);
            petal.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;
            
            document.body.appendChild(petal);

            // စက္ကန့်ပိုင်းအတွင်း အောက်ကို ကြွေကျစေမယ်
            setTimeout(() => {
                // အောက်ကိုကျရင်း ဘေးတိုက်ရွေ့အောင်နဲ့ လည်အောင်လုပ်မယ်
                let drift = (Math.random() * 200) - 100; // ဘယ်ညာ ယိမ်းဖို့
                petal.style.transform = `translate(${drift}px, ${window.innerHeight + 50}px) rotate(${Math.random() * 720}deg)`;
                petal.style.opacity = "0";
            }, 100);

            // ပြီးရင် ဖျက်မယ်
            setTimeout(() => petal.remove(), duration * 1000);
        }
    }
});


