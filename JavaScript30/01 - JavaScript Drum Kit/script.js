function removeTransition(e) {
  console.log(e);
  // if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  // console.log(e.type);
  let keyBox;
  let audio;
  if (e.type === "keydown") {
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    keyBox = document.getElementById(`${e.keyCode}`);
  } else if (e.type === "click") {
    // console.log(e.target.nodeName);
    if (e.target.nodeName === "DIV") {
      keyBox = e.target;
      audio = document.querySelector(`audio[data-key="${e.target.id}"]`);
      // console.log(e);
    } else {
      keyBox = e.target.parentElement;
      audio = document.querySelector(
        `audio[data-key="${e.target.parentElement.id}"]`
      );
      // console.log(keyBox);
    }
  }

  if (!audio) return;
  console.log(keyBox);

  keyBox.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

document.addEventListener("DOMContentLoaded", function () {
  const keys = Array.from(document.querySelectorAll(".instrument-box"));
  keys.forEach((key) => {
    key.addEventListener("transitionend", (e) => removeTransition(e));
    key.addEventListener("click", (e) => playSound(e));
  });
});

window.addEventListener("keydown", playSound);
