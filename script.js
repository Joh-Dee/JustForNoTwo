// MUSIC CONTROL (FIXED ICON)
const btn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

btn.innerText = "🔊";

btn.onclick = () => {
  if(music.paused){
    music.play();
    btn.innerText = "🔇";
  }else{
    music.pause();
    btn.innerText = "🔊";
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
// --- SAKURA EMOJI EFFECT (MODIFIED FOR RANDOM TIMING) ---
document.querySelectorAll(".gallery img").forEach(img => {
  img.onclick = () => {
    
    const TOTAL_PETALS = 100; // စုစုပေါင်း အပွင့် ၁၀၀
    const RANDOM_DURATION_WINDOW = 3000; // ၃ စက္ကန့်အတွင်း (3000ms)

    for (let i = 0; i < TOTAL_PETALS; i++) {
      
      // ပွင့်ဖတ်တစ်ပွင့်ချင်းစီကို Random delay ပေးပြီး ဖန်တီးမယ်
      let randomDelay = Math.random() * RANDOM_DURATION_WINDOW;

      setTimeout(() => {
        const petal = document.createElement("div");
        
        // Emoji ကို တိုက်ရိုက်သုံးခြင်း
        petal.innerText = "❤"; 
        petal.className = "sakura-petal"; // CSS ထဲက class အသစ်ကိုသုံးမယ်

        // Random Style များ
        const startLeft = Math.random() * window.innerWidth;
        const size = (Math.random() * 15 + 15) + "px"; // အရွယ်အစား ၁၅ ကနေ ၃၀ pixel ကြား
        const duration = (3 + Math.random() * 3); // ၃ စက္ကန့် ကနေ ၆ စက္ကန့်ကြား Random ကျစေမယ်

        Object.assign(petal.style, {
          left: `${startLeft}px`,
          fontSize: size,
          top: "-50px", // မျက်နှာပြင်အပေါ်ဆုံးကနေ စကျဖို့
          position: "fixed",
          transition: `transform ${duration}s linear, opacity ${duration}s ease-in`,
          zIndex: "9999",
          pointerEvents: "none",
          userSelect: "none"
        });

        document.body.appendChild(petal);

        // Animation စတင်ခြင်း (CSS keyframes မလိုဘဲ JS နဲ့ အောက်ကိုချခြင်း)
        setTimeout(() => {
          const drift = (Math.random() * 200) - 100; // ဘယ်ညာ ယိမ်းနွဲ့ရန်
          petal.style.transform = `translate(${drift}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;
          petal.style.opacity = "0";
        }, 50);

        // ပွင့်ဖတ်များကို ပြန်ဖျက်ရန်
        setTimeout(() => {
          petal.remove();
        }, duration * 1000);

      }, randomDelay); // ပွင့်ဖတ်တစ်ခုချင်းစီရဲ့ delay အချိန်
    }
  };
});
