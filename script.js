var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
  var typeText = document.querySelector(".typeText");
  var textToBeTyped = "Frontend developer and Technical Writer";
  var index = 0,
    isAdding = true;

  function playAnim() {
    setTimeout(function () {
      typeText.innerText = textToBeTyped.slice(0, index);
      if (isAdding) {
        if (index > textToBeTyped.length) {
          isAdding = false;

          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          index++;
        }
      } else {
        if (index === 0) {
          isAdding = true;
        } else {
          index--;
        }
      }
      playAnim();
    }, 120);
  }
  playAnim();
});
