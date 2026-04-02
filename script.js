// Intro typing
const intro = "2021, October...\nI found you.";
let i = 0;
function typeIntro() {
  if (i < intro.length) {
    document.getElementById("introText").innerHTML += intro.charAt(i);
    i++;
    setTimeout(typeIntro, 50);
  }
}
typeIntro();


// Music
const btn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

btn.onclick = () => {
  if (music.paused) {
    music.play();
    btn.innerHTML = "";
  } else {
    music.pause();
    btn.innerHTML = "";
  }
};


// Message typing loop
const messages = [
`I still remember that day...

You are someone I quietly think about.`,

`There are things I never said...

But maybe my silence already did.`,

`I will always be here...

supporting you silently.`
];

let m = 0, c = 0, deleting = false;

function loopText() {
  let current = messages[m];

  if (!deleting) {
    document.getElementById("typedText").innerHTML = current.substring(0, c++);
  } else {
    document.getElementById("typedText").innerHTML = current.substring(0, c--);
  }

  if (!deleting && c === current.length) {
    deleting = true;
    setTimeout(loopText, 1500);
    return;
  }

  if (deleting && c === 0) {
    deleting = false;
    m = (m + 1) % messages.length;
  }

  setTimeout(loopText, deleting ? 30 : 50);
}

loopText();


// Secret modal
const secretBtn = document.getElementById("secretBtn");
const modal = document.getElementById("modal");

secretBtn.onclick = () => {
  modal.style.display = "block";
};

modal.onclick = () => {
  modal.style.display = "none";
};
