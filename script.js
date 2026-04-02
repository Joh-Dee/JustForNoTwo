// MUSIC
const btn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

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


//  SAKURA EFFECT ON IMAGE CLICK
document.querySelectorAll(".gallery img").forEach(img=>{
  img.onclick = ()=>{
    for(let i=0;i<20;i++){
      let petal = document.createElement("div");
      petal.className="sakura";
      petal.style.left = Math.random()*window.innerWidth + "px";
      petal.style.animationDuration = (2+Math.random()*3)+"s";
      document.body.appendChild(petal);

      setTimeout(()=>petal.remove(),5000);
    }
  };
});
