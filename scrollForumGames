// ==UserScript==
// @name        uwuScrollForumGames2
// @description This is your new file, start writing code
// @match       https://gazellegames.net/forums.php?*action=viewthread*
// @run-at      document-idle
// ==/UserScript==
function main() {
  
  doLastPage();
  createSubmitListener();
  scrollFocus();
}

function scrollFocus() {  
  document.getElementById("quickpost").focus();
  window.onload = window.scrollTo(0, document.body.scrollHeight);
}

function doLastPage() {
  createLastPageToggle();
  var element = document.querySelector("div.linkbox.linkbox_bottom > a:last-child");
  var lastPageToggle = window.localStorage.getItem("lastPage");
  if (element && lastPageToggle === "true") {
    element.click();
    return;
  }
}

function createSubmitListener() {
  // Make CMD + ENTER listener
  document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter" && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) {
        document.getElementById("quickpostform").submit();
    }
  });
}

function createLastPageToggle() {
  try {
    window.localStorage.getItem("lastPage");
  } catch(err) {
    window.localStorage.setItem("lastPage", "true");
  }
  var zNode       = document.createElement ('div');
  zNode.innerHTML = '<button id="btnLastPageToggle" type="button">'
                + 'Last page toggle: '//</button>'
                + window.localStorage.getItem("lastPage")
                + '</button>'
                ;
  document.getElementById("quickpostform").appendChild(zNode);

  document.getElementById ("btnLastPageToggle").addEventListener (
    "click", ButtonClickAction, false
  );
  
  function ButtonClickAction (zEvent) {
      if(window.localStorage.getItem("lastPage") === "false") {
        window.localStorage.setItem("lastPage", "true");
        document.getElementById("btnLastPageToggle").textContent = "Last Page Enabled: true";
      } else {
        window.localStorage.setItem("lastPage", "false");
        document.getElementById("btnLastPageToggle").textContent = "Last Page Enabled: false";
      }
  }
}

main();
