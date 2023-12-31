// ==UserScript==
// @name        refresh  
// @description This is your new file, start writing code
// @match       https://gazellegames.net/forums.php?*action=viewthread*
// ==/UserScript==
document.getElementById("quickpost").value = window.localStorage.getItem("refreshValue");
window.onbeforeunload = function(event)
  {
    var quickPostValue =  document.getElementById("quickpost").value;
    window.localStorage.setItem("refreshValue", quickPostValue);
  };
