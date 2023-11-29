// ==UserScript==
// @name        uwuAB Count
// @version     0.5
// @updateURL   https://raw.githubusercontent.com/uwuMocha/scripts/main/uwuABCount.js
// @match       https://animebytes.tv/forums.php?*action=viewthread&threadid=556*
// ==/UserScript==
//TODO:
//add more force scroll to bottom after image load
//maybe change so it scrolls to last post on page instead of the bottom of the page idk
function main() {
//GOTO LAST PAGE
  var element = document.querySelector("a.next-prev.last");
  if (element) {
    element.click();
    return;
  }
//Store posts from last page
  var posts = document.getElementsByClassName('post_block');
//Get current page number
  var pageNum = document.querySelector("span.page-link.nolink").textContent.trim();
//Calculate number to post
  var nextPostCount = 25 * (parseInt(pageNum) - 1) + posts.length + 1;
  //
//USERNAME CHECK STUFF
  //
  var myUserName = document.querySelector("a.username").textContent;
  var prevPostUserName = posts[posts.length - 1].querySelector("span.num_author > a").textContent;  
  if(myUserName === prevPostUserName) {
    //disable posting again
    var form = document.getElementById("quickpostform");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      elements[i].readOnly = true;
      elements[i].disabled = true;
    }
    //check if value posted is correct
    try {
      //this gets fucked up if there are other numbers BEFORE the actual number
      var lastPostContent = posts[posts.length - 1].querySelector("[id^='content']").textContent.trim();
      var lastPostNumber = parseInt(lastPostContent.replace(/\D/g,'').slice(0,6));
    } catch (err) {
    }
    if(nextPostCount - lastPostNumber != 1){
      document.getElementById("quickpost").style.border="3px solid red";
      document.getElementById("quickpost").value = "Edit your post...";
    } else {
      document.getElementById("quickpost").value = "Please wait to post again...";
    }
    return;
  }
  //
  //
// Make CMD + ENTER listener
  document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter" && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) {
        document.getElementById("quickpostform").submit();
    }
  });
//scroll to bottom and autofill
  window.onload = window.scrollTo(0, document.body.scrollHeight);
  document.getElementById("quickpost").value = nextPostCount;
  document.getElementById("quickpost").focus();
}
main();
