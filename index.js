let numberOfDrums = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playAudio(this.innerHTML);
    playAnimation(this.innerHTML);
  });
}
document.querySelector("body").addEventListener("keypress", function(event) {
  playAudio(event.key);
  playAnimation(event.key);
});

function playAudio(key) {
  if (key === "w") {
    let audio = new Audio("/sounds/tom-1.mp3");
    audio.play();
  }
  if (key === "a") {
    let audio = new Audio("/sounds/tom-2.mp3");
    audio.play();
  }
  if (key === "s") {
    let audio = new Audio("/sounds/tom-3.mp3");
    audio.play();
  }
  if (key === "d") {
    let audio = new Audio("/sounds/tom-4.mp3");
    audio.play();
  }
  if (key === "k") {
    let audio = new Audio("/sounds/crash.mp3");
    audio.play();
  }
  if (key === "j") {
    let audio = new Audio("/sounds/snare.mp3");
    audio.play();
  }
  if (key === "l") {
    let audio = new Audio("/sounds/kick-bass.mp3");
    audio.play();
  }
}

function playAnimation(key) {
  let currentButton = document.querySelector("." + key);
  currentButton.classList.add("flash");
  setTimeout(function() {
    currentButton.classList.remove("flash");
  }, 100);
}
