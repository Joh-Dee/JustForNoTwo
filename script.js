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
            
            // ၁။ CSS Class အစား Emoji ကို စာသားအဖြစ် ထည့်မယ်
            petal.innerText = "♥"; 
            
            // ၂။ Emoji ဖြစ်တဲ့အတွက် ပုံစံပေါ်လွင်အောင် အခြေခံ Style လေးတွေ ထည့်မယ်
            petal.style.position = "fixed";
            petal.style.top = "-20px"; // အပေါ်ကနေ စကျဖို့
            petal.style.fontSize = (Math.random() * 20 + 10) + "px"; // အရွယ်အစားမျိုးစုံ
            petal.style.left = Math.random() * window.innerWidth + "px";
            petal.style.zIndex = "9999"; // အပေါ်ဆုံးမှာ ပေါ်ဖို့
            petal.style.pointerEvents = "none"; // နှိပ်လို့မရအောင် (ပုံကို ပြန်နှိပ်လို့ရအောင်)
            
            // ၃။ Animation (CSS မလိုဘဲ JS နဲ့ ရိုးရိုးလေး ထည့်တာ)
            let duration = (3 + Math.random() * 3);
            petal.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;
            
            document.body.appendChild(petal);

            // စက္ကန့်ပိုင်းအတွင်း အောက်ကို ကြွေကျသွားအောင် လုပ်မယ်
            setTimeout(() => {
                petal.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`;
                petal.style.opacity = "0";
            }, 100);

            // ပြီးရင် ပြန်ဖျက်မယ်
            setTimeout(() => petal.remove(), duration * 1000);
        }
    }
});

    }
  };
});
